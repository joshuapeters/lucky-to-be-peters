import * as React from 'react'
import "./style.scss"
import { Input, InputType } from 'components/Input/index';
import { Button } from 'components/Button/index';
import { NetlifyCaptcha } from 'components/NetlifyCaptcha/index';

interface ComponentState {
    email:      string;
    firstName:  string;
    lastName:   string;
    botField: string;
}

interface ComponentProps {
    formText:    string;
    hasCaptcha?: boolean;
}

export class EmailSignup extends React.Component<ComponentProps, ComponentState> {

    constructor(props) {
        super(props);

        this.onFieldUpdate      = this.onFieldUpdate.bind(this);
        this.onSubscribeClick   = this.onSubscribeClick.bind(this);
        this.handleBotFieldChange       = this.handleBotFieldChange.bind(this);
    }

    public render() {
        const className = "c-email-signup";
        return (
            <div className = { className }>
                <p>{this.props.formText}</p>
                <form name="contact" method="post" action="/registered" data-netlify="true" data-netlify-honeypot="botField">
                    <input type="hidden" name="botField" onChange={this.handleBotFieldChange}/>
                    <input type="hidden" name="form-name" value="contact" />
                    <div className = {className + "__form"}>
                        <Input 
                            type            = { InputType.Text } 
                            name            = "firstName" 
                            placeholder     = "First Name" 
                            required        = { true } 
                            onChange        = {this.onFieldUpdate}/>
                        <Input 
                            type            = { InputType.Text } 
                            name            = "lastName" 
                            placeholder     = "Last Name" 
                            required        = { true } 
                            onChange        = {this.onFieldUpdate}/>
                        <Input 
                            type            = { InputType.Email } 
                            name            = "email" 
                            placeholder     = "Email Address" 
                            cssClassName    = "last" 
                            required        = { true } 
                            onChange        = {this.onFieldUpdate}/>
                        <Button 
                            type    = "submit"
                            text    = "Subscribe" 
                            onClick = { this.onSubscribeClick } />
                        {
                            this.props.hasCaptcha &&
                            <NetlifyCaptcha/>
                        }
                    </div>
                </form>
            </div>
        );
    }

    private onFieldUpdate(fieldId: string, value: any) {
        var newState = {...this.state} as ComponentState;
        newState[fieldId] = value;

        this.setState(newState);
    }

    private handleBotFieldChange = e => {
        this.setState({ botField: e.target.value });
      };

    private onSubscribeClick(event) {
        console.log("We're submitting now!")
    }
}
