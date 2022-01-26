/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import CodePushManager from './src/util/CodePushManager'

AppRegistry.registerComponent(appName, () => CodePushManager.apply(App));
