import * as React from 'react'
import "./style.scss"
import { LocationDetail, DetailCard } from '../DetailCard/index';


interface ComponentState {
}

interface ComponentProps {
    details: LocationDetail[];
}

export class LocationDetailsList extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);
    }

    public render() {
        const className = "c-location-detail-list"
        const details = this.props.details;
        return (
            <div className = { className }>
               {
                   details.map((d) => { return ( <DetailCard locationDetail = {d}/>); })
               } 
            </div>
        );
    }
}
