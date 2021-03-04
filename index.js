/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Profilescreen from './src/Profilescreen';
import Alluserprofilescreen from './src/Alluserprofilescreen';

AppRegistry.registerComponent(appName, () => Alluserprofilescreen);
