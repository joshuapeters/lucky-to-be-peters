import * as React from 'react'
import "./style.scss"


export interface LocationDetail {
    location:       string;
    infoText:       string;
    infoSubtext:    string;
    timeFrame:      string;
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
        const displaySubText =  this.props.locationDetail.infoSubtext != "" && 
                                this.props.locationDetail.infoSubtext != null;

        return (
            <div className = { className }>
                {/* card image */}
                <img src = { this.props.locationDetail.imageUrl }/>
                
                <div className = { className + "__container" }>
                    {/* header and infof */}
                    <h1>{ this.props.locationDetail.location }</h1>
                    <p>{ this.props.locationDetail.infoText }</p>
                    {
                        displaySubText &&
                        <p className = { className + "__container -mobile" }>{this.props.locationDetail.infoSubtext}</p>
                    }    
                    <p className = { className + "__container -mobile" }>{this.props.locationDetail.timeFrame}</p>
                    
                    
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
