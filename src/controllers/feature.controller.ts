import { NextFunction, Response } from 'express';
import FeatureService from '@/services/feature.service';
import { RequestWithGB } from '@/interfaces/auth.interface';

class FeatureController {
  public featureService = new FeatureService();

  public feature1 = async (req: RequestWithGB, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { gb } = req;
      if (gb.isOn('feature-1')) {
        res.status(200).json({ data: 'feature-1 is enabled', message: 'feature1' });
        return;
      }

      res.status(200).json({ data: 'feature-1 not enabled', message: 'feature1' });
    } catch (error) {
      next(error);
    }
  };

  public feature2 = async (req: RequestWithGB, res: Response, next: NextFunction): Promise<void> => {
    try {
      const { gb } = req;

      const featureData = gb.evalFeature('feature-2');
      const experiment = gb.run({
        key: featureData.experiment.key,
        variations: featureData.experiment.variations,
        weights: featureData.experiment.weights,
        hashAttribute: featureData.experiment.hashAttribute,
      });
      res.status(200).json({ data: experiment.value, message: 'feature2' });
    } catch (error) {
      next(error);
    }
  };

  public feature3 = async (req: RequestWithGB, res: Response, next: NextFunction): Promise<void> => {
    try {
      const result = await this.featureService.doFeature3();

      res.status(200).json({ data: result, message: 'feature3' });
    } catch (error) {
      next(error);
    }
  };
}

export default FeatureController;
