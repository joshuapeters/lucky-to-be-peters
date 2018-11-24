import * as React from 'react'
import "./style.scss"
import { Input, InputType } from 'components/Input/index';


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
                    <Input type = { InputType.Text } name = "first-name" placeholder = "John" />
                    <Input type = { InputType.Text } name = "last-name" placeholder = "Smith" />
                    <Input type = { InputType.Email } name = "email" placeholder = "JohnSmith@Gmail.com" />

                </form>
            </div>
        );
    }
}
