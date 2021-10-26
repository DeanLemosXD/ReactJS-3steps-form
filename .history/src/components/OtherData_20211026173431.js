import React, { Component } from 'react'

export class OtherData extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { values, inputChange } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-S">Outros Dados</h1>
                <div className="form-group">
                    <label htmlFor="workplace">Empresa</label>
                    <input type="text" className="form-control" name="workplace" onChange={inputChange('workplace')} value={values.workplace} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Numero de Telefone</label>
                    <input type="text" className="form-control" name="phone" onChange={inputChange('phone')} value={values.phone} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descrição</label>
                    <input type="text" className="form-control" name="description" onChange={inputChange('description')} value={values.description} />
                </div>

                <br />

            <div className="text-right">
                <button className="btn btn-primary" onClick={this.continue}>Continuar</button>
            </div>
            </div>
        )
    }
}

export default OtherData
