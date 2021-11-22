import { Container } from './styled';
import Cabecalho from '../../../../components/cabecalho';
import { Button } from '../../../../components/button/styled';

export default function AddEndereco () {
    return (
        <Container>
                <Cabecalho/>

                <h1 className="titulo-pagina">ADICIONE UM ENDEREÇO</h1>

                <div className="boxes"> 
                

                    <div className="box-cadastro">
                        
                        <div className="box-info">
                            <div className="dados">
                                <div className="nome">
                                    NOME COMPLETO:
                                    <input type="text"/>
                                </div>

                                <div className="cidade">
                                    <div class="cep">
                                        CEP
                                        <input type="text"/>
                                    </div>

                                    <div className="bairro">
                                        BAIRRO:
                                        <input type="text"/>
                                    </div>
                                </div>

                                <div className="uf">
                                    <div className="estado">
                                        ESTADO:
                                        <input type="text"/>
                                    </div>

                                    <div className="logradouro">
                                        RUA/AVENIDA
                                        <input type="text"/>
                                    </div>
                                </div>

                                <div className="comp">

                                    <div className="numero">
                                        NÚMERO
                                        <input type="text"/>
                                    </div>
                                    <div className="complemento">
                                        COMPLEMENTO
                                        <input type="text"/>
                                    </div>
                                </div>

                                <div className="tel">
                                    TELEFONE PARA CONTATO
                                    <input type="text"/>
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
            <div className="a">
                <div className="botao">
                    <Button>CONTINUAR</Button>
                </div>
            </div>
        </Container>
    )
}