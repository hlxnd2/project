const Koa = require('koa');
//const serve = require('koa-static');
const bodyparser = require('koa-bodyparser');
//const path = require('path');
const router = require('./api');

class Server {
  constructor({ port = 3030 } = {}) {
    this._port = port;
    this._server = new Koa();

    //const clientPath = path.join(__dirname, '../../client');

    this._server
      //.use(serve(clientPath))
      .use(bodyparser())
      .use(router.routes())
      .use(router.allowedMethods());
  }

  listen(callback = defaultListenCallback) {
    this._server.listen(this._port, callback);
  }
}

module.exports = Server;

/**********************/

function defaultListenCallback() {
  console.log('Server listening!');
}
