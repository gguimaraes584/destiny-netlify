
import { Container } from "./styled";
import { Button } from "../../../components/button/styled";
import { Input } from "../../../components/input/styled";

export default function LoginAdmin () {
    return(
        <Container>
            
            <div class="conteudo-reg">
                <div class="box-reg">
                    <div class="reg-titulo">Insira o Login de Administrador</div>
                    <div class="reg-campos">
                        <div class="reg-campotitulo">Usuário :</div>
                        <div class="reg-campos-input">
                            <Input type="text" />
                        </div>
                    </div>

                    <div class="reg-campos">
                        <div class="reg-campotitulo">Senha :</div>
                        <div class="reg-campos-input">
                            <Input type="password" />
                        </div>
                    </div>

                    <div class="reg-a">
                        <Button href="https://www.youtube.com/watch?v=Mj5udbZml_I">Entrar</Button>
                    </div>

                    
                </div>
            </div>
        </Container>
    )
}