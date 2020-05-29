const EventEmitter = require('events').EventEmitter;

const appStore = {
  ...EventEmitter.prototype,
  state: {
    count: 0,
  },
  getState: function () {
    return this.state;
  }
}
appStore.setMaxListeners(100);

export default appStore;