import { Configuration, App } from '@midwayjs/decorator';
import { Application } from '@midwayjs/koa';
import * as bodyParser from 'koa-bodyparser';
import * as orm from '@midwayjs/orm';
import { join } from 'path'

@Configuration({
  imports: [
    orm
  ],
  importConfigs: [
    join(__dirname, './config')
  ]
})
export class ContainerLifeCycle {
  @App()
  app: Application;

  async onReady() {
    // bodyparser options see https://github.com/koajs/bodyparser
    this.app.use(bodyParser());
  }
}
