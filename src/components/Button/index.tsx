import * as React from 'react'
import "./style.scss"

interface ComponentState {
}

interface ComponentProps {
    text: string;
    name: string;
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
                <button onClick = { this.handleClick } name = { this.props.name }>
                    { this.props.text }
                </button>
            </div>
        );
    }

    private handleClick(event){
        event.preventDefault();

        this.props.onClick(event);
    }


}
