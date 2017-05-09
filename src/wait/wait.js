import Promise from './modules';
import getters from '../getters';

const wait = time => new Promise((resolve, reject) => {
  try {
    setTimeout(resolve, getters.delay(time));
  } catch (e) {
    reject(e);
  }
});

export default wait;
