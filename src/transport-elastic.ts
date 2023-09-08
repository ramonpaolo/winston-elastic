import WinstonTransport from 'winston-transport';
import winston from 'winston'
import { Client } from '@elastic/elasticsearch';

import createConnection from './elasticsearch';

import { IOptions } from './interfaces/options.interface';

class WinstonElastic extends WinstonTransport {
  public options: IOptions
  public elastic: Client

  constructor(options: IOptions){
    super(options)

    this.options = options
    this.silent = options.silent;

    this.elastic = createConnection(options.elasticClient)
  }

  public async log(info: any, next: () => void): Promise<void> {
   if(this.silent) return next();

   await this.elastic.index({
    document: info,
    index: 'log'
   })

   next()
  }

  public async close(): Promise<void> {
    await this.elastic.close()
  }
}

// @ts-ignore
winston.transports.Elastic = WinstonElastic

export default WinstonElastic
