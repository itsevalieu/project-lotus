import ReactDOM from 'react-dom';
import routes from './routes.js';
import registerServiceWorker from './registerServiceWorker';
// import './assets/css/reset.css';
import './assets/css/Index.css';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();