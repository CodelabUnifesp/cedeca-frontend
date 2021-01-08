import { Component } from "react";

export class Cadastro extends Component {

  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }
    render() {
        return (
        <form className="form-horizontal"  onSubmit={this.saveAndContinue}>          
            <div className="container col-10">
              <div className="row justify-content-center">
                  <h3 className="mt-4"><center>Ficha de atendimento</center></h3>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <label htmlFor="Nome">Nome do assistido: <span className="text-danger">*</span></label>  
                  <input id="Nome" name="Nome" placeholder className="form-control" required type="text" />
                </div>
                <div className="col">
                  <label className="control-label" htmlFor="Nome">Nacionalidade </label>  
                  <input id="Nacionalidade" name="Nacionalidade" placeholder="Brasileiro(a)" className="form-control input-md" required readOnly="readonly" type="text" />
                </div>
                <div className="col">
                  <label className="control-label" htmlFor="emailUsuario">Email <span className="text-danger">*</span> </label>  
                  <input id="emailUsuario" name="emailUsuario" className="form-control" placeholder="email@email.com" required type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                </div>
              </div>
              
              <div className="row mt-2">
                <div className="col">
                    <label htmlFor="Nome">Estado Civil: <span className="text-danger">*</span></label>  
                    <select required id="Estado Civil" name="Estado Civil" className="form-control">
                        <option value />
                        <option value="Solteiro(a)">Solteiro(a)</option>
                        <option value="Casado(a)">Casado(a)</option>
                        <option value="Divorciado(a)">Divorciado(a)</option>
                        <option value="Viuvo(a)">Viuvo(a)</option>
                    </select>
                </div>
                
                <div className="col">
                  <label className="control-label" htmlFor="profissao">Profissão: <span className="text-danger">*</span> </label>  
                  <input id="profissao" name="profissao" type="text" placeholder className="form-control input-md" required />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="cpf">CPF: <span className="text-danger">*</span></label>  
                  <input id="cpf" name="cpf" placeholder="Apenas números" className="form-control input-md" required type="text" maxLength={11} pattern="[0-9]+$" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="rg">RG: <span className="text-danger">*</span> </label>  
                  <input id="rg" name="rg" placeholder="Apenas números" className="form-control input-md" required type="text" maxLength={9} pattern="[0-9]+$" />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="telefone">Telefone: <span className="text-danger">*</span> </label>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
                      <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" required type="text" maxLength={13} pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$" onkeypress="formatar('## #####-####', this)" />
                  </div>
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="celular">Celular: <span className="text-danger">*</span> </label>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
                      <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" required type="text" maxLength={13} pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$" onkeypress="formatar('## #####-####', this)" />
                  </div>
                </div>

              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="cep">CEP: <span className="text-danger">*</span> </label>  
                  <input id="cep" name="cep" placeholder="Apenas números" className="form-control input-md" required type="search" maxLength={8} pattern="[0-9]+$" />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="cidade">Cidade:</label>  
                  <input id="cidade" name="cidade" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="estado">UF:</label>
                  <input id="estado" name="estado" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="rua">Rua:</label>
                  <input id="rua" name="rua" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>                

                <div className="col">
                  <label className="control-label" htmlFor="estado">Bairro:</label>
                  <input id="estado" name="estado" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="cidade">Nº:</label>  
                  <input id="cidade" name="cidade" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="complemento">Complemento:</label>  
                  <input id="complemento" name="complemento" className="form-control" placeholder type="text" />
                </div>
              </div>

              <br/>
              <div className="row mt-5">
                <div className="col">
                  <label htmlFor="Nome">Parte contrária: <span className="text-danger">*</span></label>  
                  <input id="Nome" name="Nome" placeholder className="form-control" required type="text" />
                </div>
                <div className="col">
                  <label className="control-label" htmlFor="Nome">Nacionalidade </label>  
                  <input id="Nacionalidade" name="Nacionalidade" placeholder="Brasileiro(a)" className="form-control input-md" required readOnly="readonly" type="text" />
                </div>
                <div className="col">
                  <label className="control-label" htmlFor="emailUsuario">Email <span className="text-danger">*</span> </label>  
                  <input id="emailUsuario" name="emailUsuario" className="form-control" placeholder="email@email.com" required type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" />
                </div>
              </div>
              
              <div className="row mt-2">
                <div className="col">
                    <label htmlFor="Nome">Estado Civil: <span className="text-danger">*</span></label>  
                    <select required id="Estado Civil" name="Estado Civil" className="form-control">
                        <option value />
                        <option value="Solteiro(a)">Solteiro(a)</option>
                        <option value="Casado(a)">Casado(a)</option>
                        <option value="Divorciado(a)">Divorciado(a)</option>
                        <option value="Viuvo(a)">Viuvo(a)</option>
                    </select>
                </div>
                
                <div className="col">
                  <label className="control-label" htmlFor="profissao">Profissão: <span className="text-danger">*</span> </label>  
                  <input id="profissao" name="profissao" type="text" placeholder className="form-control input-md" required />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="cpf">CPF: <span className="text-danger">*</span></label>  
                  <input id="cpf" name="cpf" placeholder="Apenas números" className="form-control input-md" required type="text" maxLength={11} pattern="[0-9]+$" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="rg">RG: <span className="text-danger">*</span> </label>  
                  <input id="rg" name="rg" placeholder="Apenas números" className="form-control input-md" required type="text" maxLength={9} pattern="[0-9]+$" />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="telefone">Telefone: <span className="text-danger">*</span> </label>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
                      <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" required type="text" maxLength={13} pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$" onkeypress="formatar('## #####-####', this)" />
                  </div>
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="celular">Celular: <span className="text-danger">*</span> </label>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
                      <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" required type="text" maxLength={13} pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$" onkeypress="formatar('## #####-####', this)" />
                  </div>
                </div>

              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="cep">CEP: <span className="text-danger">*</span> </label>  
                  <input id="cep" name="cep" placeholder="Apenas números" className="form-control input-md" required type="search" maxLength={8} pattern="[0-9]+$" />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="cidade">Cidade:</label>  
                  <input id="cidade" name="cidade" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="estado">UF:</label>
                  <input id="estado" name="estado" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="rua">Rua:</label>
                  <input id="rua" name="rua" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>                

                <div className="col">
                  <label className="control-label" htmlFor="estado">Bairro:</label>
                  <input id="estado" name="estado" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="cidade">Nº:</label>  
                  <input id="cidade" name="cidade" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="complemento">Complemento:</label>  
                  <input id="complemento" name="complemento" className="form-control" placeholder type="text" />
                </div>
              </div>
              
              <br/>
              <div className="row mt-5">
                <div className="col">
                  <label htmlFor="Nome">Testemunha: <span className="text-danger">*</span></label>  
                  <input id="Nome" name="Nome" placeholder className="form-control" required type="text" />
                </div>
                <div className="col">
                  <label className="control-label" htmlFor="rg">RG: <span className="text-danger">*</span> </label>  
                  <input id="rg" name="rg" placeholder="Apenas números" className="form-control input-md" required type="text" maxLength={9} pattern="[0-9]+$" />
                </div>
                <div className="col">
                  <label className="control-label" htmlFor="cpf">CPF: <span className="text-danger">*</span></label>  
                  <input id="cpf" name="cpf" placeholder="Apenas números" className="form-control input-md" required type="text" maxLength={11} pattern="[0-9]+$" />
                </div>
              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="cep">CEP: <span className="text-danger">*</span> </label>  
                  <input id="cep" name="cep" placeholder="Apenas números" className="form-control input-md" required type="search" maxLength={8} pattern="[0-9]+$" />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="cidade">Cidade:</label>  
                  <input id="cidade" name="cidade" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="estado">UF:</label>
                  <input id="estado" name="estado" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

              </div>

              <div className="row mt-2">
                <div className="col">
                  <label className="control-label" htmlFor="rua">Rua:</label>
                  <input id="rua" name="rua" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>                

                <div className="col">
                  <label className="control-label" htmlFor="estado">Bairro:</label>
                  <input id="estado" name="estado" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col-2">
                  <label className="control-label" htmlFor="cidade">Nº:</label>  
                  <input id="cidade" name="cidade" className="form-control" placeholder required readOnly="readonly" type="text" />
                </div>

                <div className="col">
                  <label className="control-label" htmlFor="celular">Celular: <span className="text-danger">*</span> </label>
                  <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-earphone" /></span>
                      <input id="prependedtext" name="prependedtext" className="form-control" placeholder="XX XXXXX-XXXX" required type="text" maxLength={13} pattern="\[0-9]{2}\ [0-9]{4,6}-[0-9]{3,4}$" onkeypress="formatar('## #####-####', this)" />
                  </div>
                </div>
              </div>


              <br/>
              <div className="row mt-4">
                <div className="col">
                  <label className="control-label" htmlFor="rua">Criança: <span className="text-danger">*</span></label>
                  <input id="crianca" name="crianca" className="form-control" placeholder required type="text" />
                </div>                

                <div className="col">
                  <label className="control-label" htmlFor="nascimento">Nascimento:</label>
                  <input id="nascimento" name="nascimento" placeholder="DD/MM/AAAA" className="form-control" required type="text" maxLength={10} onkeypress="formatar('##/##/####', this)" onblur="showhide()" />
                </div>

                <div className="col-2 mt-auto">
                    <button type="button" className="btn btn-primary">+</button>
                </div>
              </div>

              <div className="row mt-4 mb-4 justify-content-between">
                <div className="col-5 text-left">
                  <button className="btn btn-secondary" type="Reset">Apagar</button>
                </div>
                <div className="col-5 text-right">
                    <button className="btn btn-primary" type="Submit">Próximo</button>
                </div>
              </div>
            </div>
        </form>
        );
    }
}