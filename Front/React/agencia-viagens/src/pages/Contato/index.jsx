import React from "react";

import "../../index.css";

import Imagem1 from "../../assets/img/googlemaps.png";

export default function Contato() {
    return (
        <main className="container">

            <div className="container contato">
                <h2>Tire suas dúvidas aqui:</h2>
                <form>
                    <div className="form">
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Nome Completo:</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"
                                        placeholder="Digite seu nome:" />
                                    <label for="exampleFormControlInput1">Endereço de email:</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1"
                                        placeholder="nome@exemplo.com">
                                    </input>
                                    <label for="exampleFormControlTextarea1">Digite sua dúvida:</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    <button type="submit" className="btn btn-primary botao-style">Enviar</button>
                                </div>
                            </div>
                            <div className="form-group col-sm-3 my-4">
                                <img src={Imagem1} alt="" className="w-100" />
                                <h3>Nosso Telefone</h3>
                                <p>+55 (00) 0800 0800 0800</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <footer>

                <div className="text-center fixed-bottom">
                    <p>Desenvolvido por Henrique Janser - Todos os direitos reservados.</p>
                </div>

            </footer>

        </main>

    );
}