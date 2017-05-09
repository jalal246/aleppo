import { Promise } from './modules';
import getDelayDuration from './getDelayDuration';

const wait = time => new Promise(resolve => setTimeout(resolve, getDelayDuration(time)));

export default wait;

// wait(30, 's').then(() => console.log('Hello!')); // 'Hello! will be printed after 30 seconds'
