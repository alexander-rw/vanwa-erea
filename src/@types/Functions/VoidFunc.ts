import { ProppedFunc } from "./Func";

export type VoidFunc = () => void;

export type ProppedVoidFunc<T extends Array<unknown>> = ProppedFunc<T, void>;
