import * as React from 'react'
import "./style.scss"
import { Button } from 'components/Button/index';

interface ComponentState {
}

interface ComponentProps {
    buttons: Button[];
}

export class ButtonGroup extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className = "c-button-group">
                { 
                    this.props.buttons
                }
            </div>
        );
    }
}
