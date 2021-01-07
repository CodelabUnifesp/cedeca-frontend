import { Component } from "react";

export class Agendamento extends Component {
    render() {
        return (
            <form className="form-horizontal">
        <fieldset>
          <div className="panel panel-primary" style={{background: '#e6e6e6'}}>
            <div className="panel-heading"><center>Ficha de agendamento</center>
            </div>
            <div className="panel-body ">
              <div className="container">
                {/*Grupo do Nome */}
                <div className="form-group">
                  <label className="col-md-2 control-label offset-md-2" htmlFor="Nome">Nome do assistido </label>  
                  <div className="col-md-4 ">
                    <input id="Nome" name="Nome" readOnly="readonly" className="form-control input-md" required type="text" placeholder="Nome do assistido da tela anterior" />
                  </div>
                </div>
                {/* Grupo de advogados */}
                <div className="form-group">
                  <label className="col-md-2 control-label offset-md-2" htmlFor="Nome">Selecione o Advogado <abbr title="Campo Obrigatório"><h11>*</h11></abbr></label>  
                  <div className="col-md-4 ">
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
                {/* Form code begins */}
                <div className="form-group"> {/* Date input */}
                  <label className="col-md-2 control-label offset-md-2" htmlFor="date">Date</label>
                  <div className="col-md-2">
                    <input className="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="text" />
                  </div>
                </div>
                {/* Button (Double) */}
                <div className="form-group">
                  <label className="col-md-5 control-label" htmlFor="Cadastrar" />
                  <div className="col-md-1">
                    <button id="Cadastrar" name="Cadastrar" className="btn btn-success" type="Submit">Agendar</button>
                  </div>
                  <div className="col-md-1">
                    <button id="Cancelar" name="Cancelar" className="btn btn-danger" type="Reset">Cancelar</button>
                  </div>
                  <br /><br /><br /><br /><br /><br /><br /><br />
                </div>
                {/* Form code ends */}
              </div>
            </div>
          </div> 
        </fieldset></form>
        );
    }
}