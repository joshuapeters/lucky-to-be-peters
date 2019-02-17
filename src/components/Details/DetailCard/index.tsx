import * as React from 'react'
import "./style.scss"


export interface LocationDetail {
    location:       string;
    infoText:       string;
    imageUrl:       string;
    directionsUrl:  string;
    websiteUrl:     string;
    contactUrl:     string;
}

interface ComponentState {
}

interface ComponentProps {
    locationDetail: LocationDetail;
}

export class DetailCard extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);
    }

    public render() {
        const className = "c-detail-card"
        return (
            <div className = { className }>
                {/* card image */}
                <img src = { this.props.locationDetail.imageUrl }/>
                
                <div className = { className + "__container" }>
                    {/* header and infof */}
                    <h1>{ this.props.locationDetail.location }</h1>
                    <p>{ this.props.locationDetail.infoText }</p>
                    
                    {/* links */}
                    <div className = { className + "__container__links" }>
                        <a target="_blank" rel="noopener noreferrer" href = { this.props.locationDetail.directionsUrl}>Directions</a>
                        <a target="_blank" rel="noopener noreferrer" href = { this.props.locationDetail.websiteUrl   }>Website</a>
                        <a target="_blank" rel="noopener noreferrer" href = { this.props.locationDetail.contactUrl   }>Contact</a>
                    </div>
                </div>
            </div>
        );
    }
}
