export type Func<TArg, TReturn> = (arg: TArg) => TReturn;

export type ProppedFunc<TArgs extends Array<unknown>, TReturn> = (...args: TArgs) => TReturn;
