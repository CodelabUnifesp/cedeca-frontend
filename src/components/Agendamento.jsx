import { Component } from "react";

export class Agendamento extends Component {
      saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        return (
          <form className="form-horizontal" onClick={this.saveAndContinue}>          
            <div className="container col-10">
              <div className="row justify-content-center">
                <h3 className="mt-4"><center>Ficha de atendimento</center></h3>
              </div>
              
              <div className="row mt-4">
                <div className="col">
                  <label htmlFor="Nome">Nome do assistido: <span className="text-danger">*</span></label>  
                  <input id="Nome" name="Nome" readOnly="readonly" className="form-control input-md" required type="text" placeholder="Nome do assistido da tela anterior" />
                </div>
                <div className="col">
                  <label htmlFor="Advogado">Advogado: <span className="text-danger">*</span></label>  
                  <select id="Nome" name="Nome" className="form-control input-md" required type="text">
                      <option>Advogado 1 </option>
                      <option>Advogado 2 </option>
                      <option>Advogado 3 </option>
                      <option>Advogado 4 </option>
                      <option>Advogado 5 </option>
                      <option>Advogado 6 </option>
                  </select>
                </div>
              </div>

              <div className="row mt-2">
                <div className="col-6">
                  <label htmlFor="Nome">Data: <span className="text-danger">*</span></label>  
                  <input className="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
                </div>
              </div>

              <div className="row mt-4 mb-4 justify-content-between">
                <div className="col-5 text-left">
                  <button className="btn btn-secondary" onClick={this.back}>Retornar</button>
                </div>
                <div className="col-5 text-right">
                    <button className="btn btn-primary">Concluir</button>
                </div>
              </div>
            </div>
          </form>          
        );
    }
}