import { NextFunction, Response } from 'express';
import { HttpException } from '@exceptions/HttpException';
import { RequestWithGB } from '@interfaces/auth.interface';
import { getGBInstance } from '@/utils/featureFlag';
import { Attributes } from '@growthbook/growthbook';

//TODO: use mixpanel as a data source for analytics
const requestGBMiddleware = async (req: RequestWithGB, res: Response, next: NextFunction) => {
  try {
    const attributes: Attributes = {
      // deviceId: req.user.id ?? '',
      country: req.header('country'),
      os: req.header('os'),
    };
    req.gb = await getGBInstance(attributes);
    next();
  } catch (error) {
    next(new HttpException(500, error));
  }
};

export default requestGBMiddleware;
