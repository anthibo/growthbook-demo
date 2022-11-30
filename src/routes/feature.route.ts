import { Router } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import FeatureController from '@/controllers/feature.controller';
import requestGBMiddleware from '@/middlewares/analytic.middleware';

class FeatureRoute implements Routes {
  public path = '/features';
  public router = Router();
  public featureController = new FeatureController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/1`, requestGBMiddleware, this.featureController.feature1);
    this.router.get(`${this.path}/2`, requestGBMiddleware, this.featureController.feature2);
    this.router.get(`${this.path}/3`, requestGBMiddleware, this.featureController.feature3);
  }
}

export default FeatureRoute;
