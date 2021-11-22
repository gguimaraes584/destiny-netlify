
import {Container} from './styled';

export default function ClientesAdmin () {
    return (
        <Container>

            <div className="container">

                <div className="pesquisar">
                    <input type="text" placeholder="PESQUISAR PEDIDO"/>
                    <img src="../../../../../public/assets/search.svg" alt=""/>
                </div>

                <table>
                    <thead>
                        <th>ID DO CLIENTE</th>
                        <th>ID DO PEDIDO</th>
                        <th>NÚMERO DO PEDIDO</th>
                        <th>DATA DO PEDIDO</th>
                        <th>DESTINATÁRIO</th>
                        <th>CEP</th>
                        <th>SITUAÇÃO</th>
                    </thead>

                    <tr className="cor">
                        <td>1</td>
                        <td>1</td>
                        <td>123</td>
                        <td>31/10/2021</td>
                        <td>RAFAELLA</td>
                        <td>04571-150</td>
                        <td>EM ANDAMENTO</td>
                    </tr>

                    <tr className="cor-alternada">
                    <td>1</td>
                        <td>1</td>
                        <td>123</td>
                        <td>31/10/2021</td>
                        <td>RAFAELLA</td>
                        <td>04571-150</td>
                        <td>EM ANDAMENTO</td>
                    </tr>

                    <tr className="cor">
                        <td>1</td>
                        <td>1</td>
                        <td>123</td>
                        <td>31/10/2021</td>
                        <td>RAFAELLA</td>
                        <td>04571-150</td>
                        <td>EM ANDAMENTO</td>
                    </tr>

                    <tr className="cor-alternada">
                        <td>1</td>
                        <td>1</td>
                        <td>123</td>
                        <td>31/10/2021</td>
                        <td>RAFAELLA</td>
                        <td>04571-150</td>
                        <td>EM ANDAMENTO</td>
                    </tr>

                    <tr className="cor">
                        <td>1</td>
                        <td>1</td>
                        <td>123</td>
                        <td>31/10/2021</td>
                        <td>RAFAELLA</td>
                        <td>04571-150</td>
                        <td>EM ANDAMENTO</td>
                    </tr>

                    <tr className="cor-alternada">
                        <td>1</td>
                        <td>1</td>
                        <td>123</td>
                        <td>31/10/2021</td>
                        <td>RAFAELLA</td>
                        <td>04571-150</td>
                        <td>EM ANDAMENTO</td>
                    </tr>
                </table>

            </div>

        </Container>
    )
}