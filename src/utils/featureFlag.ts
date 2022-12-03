import { GB_FEATURES_API } from '@/config';
import { Attributes, GrowthBook, FeatureDefinition } from '@growthbook/growthbook';
import axios from 'axios';
import mixpanel from 'mixpanel';

type Features = Record<string, FeatureDefinition>;
type GBSDKFeaturesResponse = { status: number; features: Features };

const fetchFeatures = async (): Promise<Features> => {
  const { data } = await axios.get<GBSDKFeaturesResponse>(GB_FEATURES_API);
  return data.features;
};
// Create a GrowthBook instance
export async function getGBInstance(attributes: Attributes) {
  const features: Features = await fetchFeatures();
  console.log(features[Object.keys(features)[0]].rules);
  const growthbook = new GrowthBook({
    enableDevMode: true,
    attributes: attributes,
    features: features,
    trackingCallback: (experiment, result) => {
      mixpanel.track('$experiment_started', {
        'Experiment name': experiment.key,
        'Variant name': result.variationId,
        $source: 'growthbook',
      });
      console.log(experiment);
      console.log(result);
    },
    onFeatureUsage: (featureKey, result) => {
      console.log('feature', featureKey, 'has value', result.value);
    },
  });

  return growthbook;
}
