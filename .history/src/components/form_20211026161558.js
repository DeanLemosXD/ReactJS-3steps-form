import React, { Component } from 'react'
import AccountSetup from './AccountSetup';

export class form extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        description: '',
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({step: step + 1});
    };
    
    prevStep = () => {
        const { step } = this.state;
        this.setState({step: step - 1});
    }

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        })
    };

    render() {
        const { step } = this.state;
        const { name, email, phone, description } = this.state;
        const values = { name, email, phone, description }; 

        switch(step) {
            case 1:
                return (
                    <AccountSetup 
                    nextStep={this.nextStep}
                    inputChange={this.inputChange}
                    values={values}
                    />

                )
        }
    }
}

export default form
