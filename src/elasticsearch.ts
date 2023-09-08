import elasticsearch, { ClientOptions } from '@elastic/elasticsearch'

const createConnection = (options: ClientOptions) => {
  return new elasticsearch.Client(options)
}

export default createConnection
