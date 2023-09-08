# elasticsearch-transport

A ElasticSearch transport for [winston][0].

## Motivation
A small library to enable send logs to elasticsearch to analyze logs and build dashboards in Grafana, Kibana or customized plataform.

## Usage
```js
// recommended because have support to types
import winston from 'winston'

import TransportElastic from 'elasticsearch-transport'

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.prettyPrint()),
  transports: [
    new winston.transports.Console()
    new TransportElastic({
            silent: false,
            elasticClient: {
                node: 'http://elasticsearch:9200',
                auth: {
                    username: 'elastic',
                    password: 'elastic',
                }
            }
        })
  ],
});

logger.info('saving log in elasticsearch!!');
```

**Or**

```js
// not recommended because don't have support to types
import winston from 'winston'

import 'elasticsearch-transport' // Only requiring `elasticsearch-transport` will expose winston.transports.Elastic`

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.timestamp(), winston.format.json(), winston.format.prettyPrint()),
  transports: [
    new winston.transports.Console()
  ],
});

logger.add(new winston.transports.Elastic({
    silent: false,
    elasticClient: {
        node: 'http://elasticsearch:9200',
        auth: {
            username: 'elastic',
            password: 'elastic',
        }
    }
}));

log.info('saving log in elasticsearch!!');
```

The Elastic transport takes the following options. All options is required:

| Option |  Description                                     |
| ------ | :----------------------------------------------- |
| silent     | **REQUIRED**. Enable or disable to save the log in elasticsearch |
| elasticClient | The options/credentials to connect in ElasticSearch |

## Installation

**NPM**
```bash
$ npm install winston elasticsearch-transport
```

**Yarn**
```bash
$ yarn add winston elasticsearch-transport
```

### Made by Ramon Paolo Maram &#10084;

[0]: https://github.com/winstonjs/winston
