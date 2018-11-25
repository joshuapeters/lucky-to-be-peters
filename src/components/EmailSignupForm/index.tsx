import * as React from 'react'
import "./style.scss"
import { Input, InputType } from 'components/Input/index';
import { Button } from 'components/Button/index';


interface ComponentState {
}

interface ComponentProps {
}

export class EmailSignup extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);
    }

    public render() {
        const className = "c-email-signup";
        return (
            <div className = { className }>
                <p>Enter your email below to receive updates about our big day.</p>
                <form className = { className + "__form"}>
                    <Input 
                        type = { InputType.Text } 
                        name = "first-name" 
                        placeholder = "First Name" 
                        required = { true } />
                    <Input 
                        type = { InputType.Text } 
                        name = "last-name" 
                        placeholder = "Last Name" 
                        required = { true } />
                    <Input 
                        type = { InputType.Email } 
                        name = "email" 
                        placeholder = "Email Address" 
                        cssClassName = "last" 
                        required = { true } />
                    <Button 
                        name="email-submit" 
                        text = "Subscribe" 
                        onClick = { this.onSubscribeClick } />
                </form>
            </div>
        );
    }

    private onSubscribeClick(event) {
        console.log("We're submitting now!")
    }
}
