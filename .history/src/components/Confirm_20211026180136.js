import React, { Component } from 'react'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    render() {
        const { 
            values: {name, email, phone, description, workplace, DOC, linkedin } 
        } = this.props;

        return (
            <div className="form-container">
                <h1 className="mb-S">Confirmar</h1>
                    <ul class="list-group">
                        <li class="list-group-item">Nome: {name}</li>
                        <li class="list-group-item">Email: {email}</li>
                        <li class="list-group-item">Telefone: {phone}</li>
                        <li class="list-group-item">Descrição: {description}</li>
                        <li class="list-group-item">Empresa: {workplace}</li>
                        <li class="list-group-item">Documento: {DOC}</li>
                        <li class="list-group-item">linkedin URL: <a href={linkedin}>{linkedin}</a></li>
                    </ul>

                <br /><br />

            <div className="row">
                <div className="col-6">
                    <button className="btn btn-danger" onClick={this.back}>Voltar</button>
                </div>
                <div className="col-6 text-end">
                    <button className="btn btn-primary" onClick={this.continue}>Continuar</button>
                </div>
            </div>
 
            </div>
        )
    }
}

export default Confirm
