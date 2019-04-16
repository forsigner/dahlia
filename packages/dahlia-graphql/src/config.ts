export interface GraphqlConfig {
  endpoint: string
}

export let graphqlConfig = {
  endpoint: '/graphql',
} as GraphqlConfig

export function config(options: GraphqlConfig) {
  graphqlConfig = { ...graphqlConfig, ...options }
}
