import {Container} from './styled';
import { Button } from '../../../../components/button/styled';
import Cabecalho from '../../../../components/cabecalho';
import { Link } from 'react-router-dom';

export default function Parcelamento () {
    return (
        <Container>
                <Cabecalho/>

                <h1 className="titulo-pagina">MEUS ENDEREÇOS</h1>

                <div className="box-container"> 

                    <div className="box-p-b"> 
                        
                        <div className="box-endereços">
                            <div className="container-endereço">
                                    <div className="box-endereço">
                                                <input type="radio"/>
                                        <div className="endereço">
                                            <div class="opcao">
                                                <div className="infos">
                                                    <div className="end-cadastrado">
                                                        Endereço 1, N° XX
                                                    </div>
                                                <div className="cidade">
                                                    São Paulo, São Paulo — CEP XXXXX-XXX
                                                </div> 

                                                <div className="destinatario">
                                                    Destinatário — (11) 9 XXXX-XXXX
                                                </div>
                                                <div className="e-a">
                                                <div className="editar">EDITAR</div>
                                                <div className="add">ADICIONAR INSTRUÇÕES DE ENTREGA</div>
                                                </div>
                                            </div>
                                            </div>
                                    
                                        </div>
                                    </div>

                                    <div className="box-endereço">
                                                <input type="radio"/>
                                        <div className="endereço">
                                            <div class="opcao">
                                                <div className="infos">
                                                    <div className="end-cadastrado">
                                                        Endereço 2, N° XX
                                                    </div>
                                                <div className="cidade">
                                                    São Paulo, São Paulo — CEP XXXXX-XXX
                                                </div> 

                                                <div className="destinatario">
                                                    Destinatário — (11) 9 XXXX-XXXX
                                                </div>
                                                <div className="e-a">
                                                <div className="editar">EDITAR</div>
                                                <div className="add">ADICIONAR INSTRUÇÕES DE ENTREGA</div>
                                                </div>
                                            </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                

                                    <div className="a">
                                            <div className="botao1">
                                                <Button>
                                                    <Link to="/endereço/add" style={{textDecoration:'none'}}>ADICIONAR NOVO ENDEREÇO </Link></Button>
                                            </div>
                                            <div className="botao2">
                                                <Button>CONTINUAR</Button>
                                            </div>
                                    </div>
                            </div>
                        </div>
                    
                        <div className="box-pedido">

                        <div className="pedido-desc">
                        
                        <div className="desc">
                            <div class="pedido-imagem">
                                <img src="/assets/images/camisa_corinthians.svg" alt=""/>
                            </div>

                            <div className="info">
                                <h1 class="titulo-produto"> Camisa Corinthians II 21/22 s/n° Estádio Nike Masculina </h1>
                                
                                <div class="c-t">
                                    <div class="cor">
                                        
                                        COR: <span> Preto e Branco</span></div>
                                    <div class="tamanho">
                                        TAMANHO:<span> G </span>
                                    </div>
                                </div>

                                    <hr></hr>

                                    <div class="f-p">
                                        <div class="preco-produto">
                                            PREÇO DO PRODUTO: <span class="preco">R$179,99</span>
                                        </div>

                                        <div class="frete">
                                            FRETE: <span class="frete2">14,99</span>
                                        </div>
                                    </div>
                                
                                    <hr></hr>
                                

                                <div class="total">
                                    VOCÊ PAGARÁ: <span class="total2">R$194,98</span>
                                </div>
                                <div className="botao">
                                <Button>ADICIONAR CUPOM</Button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                        </div>
                    </div>

                </div>

        </Container>
    )
}