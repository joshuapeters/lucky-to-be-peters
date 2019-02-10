import { Details }          from './details';
import { IProvider }        from "../../interfaces/signup-provider";
import { LocationDetail }   from 'components/DetailCard/index';


export class LocationDetailProvider implements IProvider<LocationDetail>{
    
    private _details = Details.LocationDetails;

    public index = (): LocationDetail[] => {
        return this._details;
    };    

    public get = (id: string): LocationDetail  => {
        return this._details.find(d => d.location == id);
    };

    public post = (body: LocationDetail): LocationDetail => {
        var index = this._details.push(body);

        return this._details[index];
    };

    public put = (id: string, body: LocationDetail): LocationDetail => {
        let replacementIndex = this._details.findIndex(d => d.location == id);
        
        if (replacementIndex < 0)
            this.post(body);
        else
            this._details[replacementIndex] = body;

        return body;
    };

    public delete = (id: any): boolean => {

        this._details = this._details.filter(d => d.location != id);
        
        return true;
    };

}