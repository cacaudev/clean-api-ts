/*
 * @Author: cacaudev
 * @Date: 2020-07-12 17:14:02
 * @Last Modified by: cacaudev
 * @Last Modified time: 2020-07-12 18:05:53
 */

import Koa from "koa";
import Router from "koa-router";
import morgan from "koa-morgan";
import { loggerStream } from "./utils";

const router = new Router();

router.get("/", async (ctx: Koa.Context, next: Koa.Next) => {
  ctx.body = "Hello ts-node from build!";
  return;
});

class App extends Koa {
  constructor() {
    super();
    this.proxy = true;
    this.silent = this.env !== "development";
    this.applyMiddlewares();
    this.applyRouters();
  }

  applyMiddlewares() {
    /**
     * Main app logger
     */
    this.use(morgan("tiny", { stream: loggerStream }));
  }

  applyRouters() {
    this.use(router.routes());
    this.use(router.allowedMethods());
  }
}

export default App;
