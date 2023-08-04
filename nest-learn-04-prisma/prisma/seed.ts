import user from './seed/user';
import category from './seed/category';
import article from './seed/article';
function run() {
  user();
  category();
  article();
}

run();
