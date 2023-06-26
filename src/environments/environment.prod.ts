import { config} from '../config'
export const environment = {
  firebase: {
    projectId: config.projectId,
    appId: config.appId,
    storageBucket: config.storageBucket,
    locationId: config.locationId,
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    messagingSenderId: config.messagingSenderId
  },
  production: true
};
