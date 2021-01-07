import { Component } from "react";
import { Card } from "react-bootstrap";

export class Login extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center align-items-center" style={{height: '90vh'}}>
                    <div className="col-sm-4">
                        <Card bg={'light'}>
                            <Card.Body>
                                <form action method="POST" id="form-login" autoComplete="off">
                                    <div className="form-group">
                                        <h5>Email</h5>
                                        <input type="email" id="email" className="form-control" name="email" placeholder="Email" required />
                                    </div>
                                    <div className="form-group">
                                        <h5>Senha</h5>
                                        <input type="password" id="senha" className="form-control" name="senha" placeholder="Senha" required />
                                    </div>
                                    <button type="submit" className="btn btn-primary">Entrar</button>
                                </form>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}