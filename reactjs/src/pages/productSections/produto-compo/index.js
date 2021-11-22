import { Link } from "react-router-dom";
import { Container } from "./styled";


export default function Produto(props) {
    return(
        <Container>
            <div class="box">       
                <div class="prod">
                    <img src={props.info.img_imagem} alt=''/> 
                    <div class="nome-produto">{props.info.nm_produto}</div>
                    <div class="valor">{props.info.vl_preco}</div>
                    <div class="adc-carrinho">
                        <Link to={{
                            pathname:'/produto/descricao',
                            state: props.info
                        }}>
                            <button> Ver detalhes </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}