import * as React from 'react'

export enum InputType {
    Email       = "email",
    Password    = "password",
    Text        = "text",
}

interface ComponentState {
    value: string;
}

interface ComponentProps {
    type:         InputType;
    name:         string;
    placeholder?: string;
    onChange:     (e: React.FormEvent<HTMLInputElement>) => void;
}

export class Input extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    public render() {
        return (
            <div className = "c-input">
                <input 
                    type        = { this.props.type } 
                    name        = { this.props.name } 
                    onChange    = { this.handleChange } 
                    value       = { this.state.value }
                    placeholder = { this.getPlaceholder() }/>
            </div>
        );
    }

    private handleChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            value: event.currentTarget.value
        });
        this.props.onChange(event);
    }

    private getPlaceholder() {
        if (this.props.placeholder)
            return this.props.placeholder;
        
        switch(this.props.type){
            case InputType.Email:
                return "Enter your email...";
            case InputType.Password:
                return "Enter your password...";
            default:
                return "Enter value...";
        }

    }
}
