import * as React from "react"
import "./style.scss"

interface ComponentProps {
    imageUrl?: string;
}

interface ComponentState {

}

export class LandingSection extends React.Component<ComponentProps, ComponentState> {
    constructor(props) {
        super(props);

    }

    public render() {
        const backgroundStyle = this.props.imageUrl ? {
            backgroundImage: this.props.imageUrl ? `url(${this.props.imageUrl})` : ''
        } : null;
        const className = "c-landing";
        return(
            <div className = { className }>
                <div style = { backgroundStyle } className = { className + "__image" } />
                <div className = { className + "__content" }>
                    {this.props.children}
                </div>
            </div>
        )
    }
}