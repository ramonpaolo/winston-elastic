import { ClientOptions } from "@elastic/elasticsearch"

interface IOptions {
  elasticClient: ClientOptions;
  silent: boolean;
}

export {
  IOptions,
}
