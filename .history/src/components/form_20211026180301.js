import React, { Component } from 'react'
import AccountSetup from './AccountSetup';
import OtherData from './OtherData';
import Confirm from './Confirm';

export class form extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        phone: '',
        description: '',
        workplace: '',
        DOC: '',
        linkedin: '',

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
                );
                case 2:
                    return (
                        <OtherData
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                         />
                    );
                    case 3:
                        return (
                            <Confirm 
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            inputChange={this.inputChange}
                            values={values}
                            />
                        );
        }
    }
}

export default form
