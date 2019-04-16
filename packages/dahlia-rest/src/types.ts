export type Update = () => any

export interface FetchResult<T> {
  loading: boolean | undefined
  data: T
  error: any
  refetch: (url: string) => any
}

export interface UpdateResult<T> {
  loading: boolean | undefined
  data: T
  error: any
}

export type RequestInterceptor = (config: any) => any
export type RequestErrorInterceptor = (config: any) => any
export type ResponseInterceptor = (error: any) => any
export type ResponseErrorInterceptor = (error: any) => any

export interface Interceptor {
  requests?: RequestInterceptor[]
  requestErrors?: RequestErrorInterceptor[]
  responses?: ResponseInterceptor[]
  responseErrors?: ResponseErrorInterceptor[]
}