import { createAPI } from '../util';
import config from '../config';

const baseUrl = {
  // mock: 'https://www.easy-mock.com/mock/5b31f98e08b3642d152c50eb/example',
  mock: 'http://hgmovie.joysw.win:82/Font/App',
  dev: '',
  pre: '',
  prod: ''
}[config.env || 'mock'];

export default createAPI(baseUrl);
