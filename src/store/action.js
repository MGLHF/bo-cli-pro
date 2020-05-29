import dispatcher from './dispatcher';
import { COUNT_ADD, COUNT_CUT } from './type';

const action = {
  add () {
    dispatcher.dispatch({
      type: COUNT_ADD,
    });
  },
  cut () {
    dispatcher.dispatch({
      type: COUNT_CUT,
    });
  }
}

export default action;