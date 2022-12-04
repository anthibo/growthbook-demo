import { NextFunction, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { RequestWithGB } from '@interfaces/auth.interface';
import { createGB } from '@/utils/featureFlag';
import { Attributes } from '@growthbook/growthbook';
import mixpanel from '@/utils/mixpanel';
import { MP_TOKEN } from '@/config';

const handleFeaturesAnalyticsMiddleware = async (req: RequestWithGB, res: Response, next: NextFunction) => {
  try {
    const attributes: Attributes = {
      deviceId: req.header('deviceId'),
      country: req.header('country'),
      os: req.header('os'),
    };
    const gb = await createGB(attributes);

    req.gb = gb;
    next();
  } catch (error) {
    next(new HttpException(500, error));
  }
};

export default handleFeaturesAnalyticsMiddleware;
