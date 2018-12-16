import * as React from "react"
import "./style.scss"

interface ComponentProps {
}

interface ComponentState {

}

export class LandingSection extends React.Component<ComponentProps, ComponentState> {
    constructor(props) {
        super(props);

    }

    public render() {
        const backgroundStyle = {
            backgroundImage: './background.png'
        };
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