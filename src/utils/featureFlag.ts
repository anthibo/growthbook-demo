import { Attributes, GrowthBook, FeatureDefinition } from '@growthbook/growthbook';

type Features = Record<string, FeatureDefinition>;

const FEATURES_FLAG: Features = {
  'feature-1': {
    defaultValue: true,
    rules: [
    //   { force: true, coverage: 0.5, hashAttribute: 'os' },
      { variations: [true, false], coverage: 0.5, weights: [0.5, 0.5], key: 'feature-1', hashAttribute: 'deviceId' },
    //   { condition: { country: 'IL' }, force: false },
    ],
  },
};
// Create a GrowthBook instance
export function getGBInstance(attributes: Attributes) {
  const growthbook = new GrowthBook({
    // enableDevMode: true allows you to use the Chrome DevTools Extension to test/debug.
    enableDevMode: true,
    attributes: attributes,
    features: FEATURES_FLAG,
    trackingCallback: (experiment, result) => {
      console.log({
        experimentId: experiment.key,
        variationId: result.variationId,
      });
    },
    onFeatureUsage: (featureKey, result) => {
      console.log('feature', featureKey, 'has value', result.value);
    },
  });

  return growthbook;
}
