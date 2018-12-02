import { IProvider } from "../interfaces/signup-provider";
import { IEmailSignup } from "../models/signup";

export class SignupProvider implements IProvider<IEmailSignup>{
    
    public index = (): IEmailSignup[] => {
        return [];
    };    

    public get = (id: any): IEmailSignup  => {
        return null;
    };

    public post = (body: IEmailSignup): IEmailSignup => {
        return null;
    };

    public put = (id: any, body: IEmailSignup): IEmailSignup => {
        return null
    };

    public delete = (id: any): boolean => {
        return false;
    };

}