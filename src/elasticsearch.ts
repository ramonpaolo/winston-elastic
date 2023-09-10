import elasticsearch, { type Client, type ClientOptions } from '@elastic/elasticsearch'

const createConnection = (options: ClientOptions): Client => {
  return new elasticsearch.Client(options)
}

export default createConnection
