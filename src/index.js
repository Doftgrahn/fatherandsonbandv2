import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import FatherAndSonBand from './FatherAndSonBand';
import * as serviceWorker from './general/serviceWorker/serviceWorker';

ReactDOM.render(<FatherAndSonBand />, document.getElementById('root'));

serviceWorker.register();
