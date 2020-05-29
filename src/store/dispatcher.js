import { Dispatcher } from 'flux';
import appStore from './index';
import { COUNT_ADD, COUNT_CUT } from './type';

const dispatcher = new Dispatcher();
dispatcher.register((action) => {
  switch(action.type) {
    case COUNT_ADD:
      appStore.getState().count++;
      break;
    case COUNT_CUT:
      appStore.getState().count--;
      break;
    default:
      break;
  }
})

export default dispatcher;