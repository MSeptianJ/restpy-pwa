import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/component/appbar';
import './views/component/hero';
import './views/component/contacts';
import './views/component/discount';
import './views/component/copyright-bar';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  // WebsocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
