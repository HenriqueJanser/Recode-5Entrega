import React from "react";

import "../../index.css";

import Imagem1 from "../../assets/img/salvadorimg3.jpg";
import Imagem2 from "../../assets/img/riodejaneiro1.png";
import Imagem3 from "../../assets/img/fortaleza-img2.jpg";
import Imagem4 from "../../assets/img/fortaleza-img2.jpg";
import Imagem5 from "../../assets/img/riodejaneiro-img3.jpg";
import Imagem6 from "../../assets/img/recife-img4.jpg";



export default function Home() {
    return (
        <main className="container-fluid">


            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">


                    <div className="carousel-item active">
                        <img className="d-block w-100" src={Imagem1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Imagem2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Imagem3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Imagem4} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Salvador</h3>
                                <p className="card-text">Primeira capital da América Portuguesa, que corresponde ao atual Brasil, a cidade é uma das mais antigas do continente americano e uma das primeiras cidades planejadas no mundo, ainda no período do Renascimento. Sua fundação em 1549 por Tomé de Sousa ocorreu por conta da implantação do Governo-Geral do Brasil pelo Império Português</p>
                                <a className="btn btn-primary" href="/">Quero conheçer!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img className="card-img-top" src={Imagem5} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Fortaleza</h3>
                                <p className="card-text">A capital do estado do Ceará, situado na região Nordeste do país. Distante 2 285 km de Brasília, capital federal, a cidade desenvolveu-se às margens do riacho Pajeú, e sua toponímia é uma alusão ao Forte Schoonenborch, o qual deu origem ao município, construído pelos holandeses durante sua segunda permanência no local, entre 1649 e 1654.</p>
                                <a className="btn btn-primary" href="/">Quero conheçer!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card" >
                            <img className="card-img-top" src={Imagem6} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Rio de Janeiro</h3>
                                <p className="card-text">É um município brasileiro, capital do estado homônimo, situado no Sudeste do país. Maior destino turístico internacional no Brasil, da América Latina e de todo o Hemisfério Sul (em 2008), a capital fluminense é a cidade brasileira mais conhecida no exterior, funcionando como um "espelho", ou "retrato" nacional, seja positiva ou negativamente.</p>
                                <a className="btn btn-primary" href="/">Quero conheçer!</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src={Imagem6} alt="Card image cap" />
                            <div className="card-body">
                                <h3>Recife</h3>
                                <p className="card-text">Capital do estado de Pernambuco, localizado na Região Nordeste do país. Com área territorial de aproximadamente 218 km², é formado por uma planície aluvial, tendo as ilhas, penínsulas e manguezais como suas principais características geográficas. Cidade nordestina com o melhor Índice de Desenvolvimento Humano.</p>
                                <a className="btn btn-primary" href="/">Quero conheçer!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer>

                <div className="text-center">
                    <p>Desenvolvido por Henrique Janser - Todos os direitos reservados.</p>
                </div>

            </footer>

        </main>
    );
}