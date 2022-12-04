import * as Mixpanel from 'mixpanel';

import { MP_TOKEN } from '@/config';

const mixpanel = Mixpanel.init(MP_TOKEN);

export default mixpanel;
