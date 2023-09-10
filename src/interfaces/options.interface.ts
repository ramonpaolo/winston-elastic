import { type ClientOptions } from '@elastic/elasticsearch'

interface IOptions {
  elasticClient: ClientOptions
  silent: boolean
}

export type {
  IOptions
}
