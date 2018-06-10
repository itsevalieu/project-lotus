import ReactDOM from "react-dom";
import routes from "./routes.js";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();