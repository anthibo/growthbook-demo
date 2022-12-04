import { GB_FEATURES_API, MP_TOKEN } from '@/config';
import { Attributes, GrowthBook, FeatureDefinition } from '@growthbook/growthbook';
import axios from 'axios';
import mixpanel from './mixpanel';

type Features = Record<string, FeatureDefinition>;
type GBSDKFeaturesResponse = { status: number; features: Features };

const fetchFeatures = async (): Promise<Features> => {
  const { data } = await axios.get<GBSDKFeaturesResponse>(GB_FEATURES_API);
  return data.features;
};
// Create a GrowthBook instance
export async function createGB(attributes: Attributes) {
  const features: Features = await fetchFeatures();
  const growthbook = new GrowthBook({
    enableDevMode: true,
    attributes: attributes,
    features: features,
    trackingCallback: (experiment, result) => {
      mixpanel.track('$experiment_started', {
        'Experiment name': experiment.key,
        'Variant name': result.variationId,
        distinct_id: attributes.deviceId,
        $source: 'growthbook',
      });
    },
  });

  return growthbook;
}
