import { IEmailSignup } from "../models/signup";

export interface IProvider<T> {
    index:  () => Array<T>;
    get:    (id: any) => T;
    post:   (body: T) => T;
    put:    (id: any, body: T) => T;
    delete: (id: any) => boolean; 
}