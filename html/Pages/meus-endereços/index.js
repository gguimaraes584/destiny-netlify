import {Container} from './styled';
import { Button } from '../../components/button/styled';
import Cabecalho from '../../components/cabecalho';

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
                                    <div className="endereço">
                                        <div class="opcao">
                                            <input type="radio"/>
                                             <div>São Paulo, São Paulo — CEP XXXXX-XXX</div> 
                                             <div>Destinatário — (11) 9 XXXX-XXXX</div>
                                             <div>
                                               <div>EDITAR</div>
                                               <div>ADICIONAR INSTRUÇÕES DE ENTREGA</div>

                                             </div>
                                        </div>
                                
                                    </div>
                                    </div>
                            <hr/>

                            <div className="box-endereço">
                                    <div className="endereço">
                                        <div className="opcao">
                                            <input type="radio"/>
                                             <div>São Paulo, São Paulo — CEP XXXXX-XXX</div> 
                                             <div>Destinatário — (11) 9 XXXX-XXXX</div>
                                             <div>
                                               <div>EDITAR</div>
                                               <div>ADICIONAR INSTRUÇÕES DE ENTREGA</div>

                                             </div>
                                        </div>
                                
                                    </div>
                            </div>
                            

                    </div>
                </div>
                    
                <div className="a">
                            <div className="botao">
                                <Button>ADICIONAR NOVO ENDEREÇO</Button>
                            </div>
                    </div>
                    

                    <div className="a">
                            <div className="botao">
                                <Button>CONTINUAR</Button>
                            </div>
                    </div>
                    
                    </div>
                
                    <div className="box-endereço">

                        <div className="endereço-desc">
                        
                        <div className="desc">
                            <div className="endereço-imagem">
                                <img src="/assets/images/camisa_corinthians.svg" alt=""/>
                            </div>

                            <div className="info">
                                <h1 className="titulo-produto"> Camisa Corinthians II 21/22 s/n° Estádio Nike Masculina </h1>
                                
                                <div className="c-t">
                                    <div className="cor">
                                        
                                        COR: <span> Preto e Branco</span></div>
                                    <div className="tamanho">
                                        TAMANHO:<span> G </span>
                                    </div>
                                </div>

                                    <hr className="hr2"/>

                                    <div className="f-p">
                                        <div className="preco-produto">
                                            PREÇO DO PRODUTO: <span className="preco">R$179,99</span>
                                        </div>

                                        <div className="frete">
                                            FRETE: <span className="frete2">14,99</span>
                                        </div>
                                    </div>
                                
                                    <hr className="hr2"/>
                                

                                <div className="total">
                                    VOCÊ PAGARÁ: <span className="total2">R$194,98</span>
                                </div>

                            </div>
                            <div className="botao">
                                <Button>ADICIONAR CUPOM</Button>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
        </Container>
    )
}