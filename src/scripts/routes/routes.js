import List from '../views/pages/List';
import Detail from '../views/pages/Detail';
import Favorite from '../views/pages/Favorite';

const routes = {
  '/': List,
  '/index.html': List,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
