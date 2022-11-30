import userModel from '@models/users.model';

class FeatureService {
  public users = userModel;

  public async doFeature1() {
    return 'feature1';
  }

  public async doFeature2() {
    return 'feature2';
  }

  public async doFeature3() {
    return 'feature3';
  }
}

export default FeatureService;
