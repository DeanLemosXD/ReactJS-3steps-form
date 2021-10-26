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
                    <label htmlFor="DOC">Documento</label>
                    <input type="text" className="form-control" name="DOC" onChange={inputChange('DOC')} value={values.DOC} />
                </div>
                <div className="form-group">
                    <label htmlFor="number">N.º da solicitação</label>
                    <input type="text" className="form-control" name="number" onChange={inputChange('number')} value={values.number} />
                </div>


                <br />
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

export default OtherData
