import * as React from 'react'
import "./style.scss"

interface ComponentState {
}

interface ComponentProps {
    text: string;
    name: string;
    type?: string;
    onClick: (event) => void;
}

export class Button extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        return (
            <div className = "c-button">
                <button
                    type    = { this.props.type } 
                    onClick = { this.handleClick } 
                    name    = { this.props.name }>
                    { this.props.text }
                </button>
            </div>
        );
    }

    private handleClick(event){
        this.props.onClick(event);
        return false;
    }


}
