export interface Variables {
    [key: string]: any;
}
export declare type Mutate = (variables: Variables) => any;
export interface QueryResult<T> {
    loading: boolean | undefined;
    data: T;
    error: any;
    refetch: (variables?: Variables) => any;
}
export interface MutateResult<T> {
    loading: boolean | undefined;
    data: T;
    error: any;
}
