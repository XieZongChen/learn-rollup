import fetchApi from './fetch';
import { log } from './logger';

fetchApi('photo?albumId=1').then((data) => {
  data.forEach((item) => {
    log(item);
  });
});
