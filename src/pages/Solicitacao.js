import Header from "../components/Header";
import './Solicitacao.css';

function Solicitacao() {
    return (<>
        <Header />
        <div className="back">
            <div className="aligner2">
                <button className="buttonV">Voltar</button>
                <div className="row">
                    <label className="l1">Nome do paciente<input type="text" /></label>
                    <label className="l1">Data de nacimento<input type='date' /></label>
                    <label className="l1">CPF<input type='text' placeholder="123.456.789.01"/></label>
                </div>
                <div id="warning">
                    <p><b>Atenção!</b> Os campos com * devem ser preenchidos obrigatóriamente</p>
                </div>
                <div>
                    <label className="l2">Profissional*
                        <select>

                        </select>
                    </label>
                </div>
                <div className="row">
                    <label className="l3">Tipo de solicitação*
                        <select>
                        </select>
                    </label>
                    <label className="l3">Procedimentos*
                        <select>
                        </select>
                    </label>
                </div>
                <div className="row">
                <label className="l3">Data*
                    <input type="date" />
                </label>
                <label className="l3">Hora*
                    <input type='time' />
                </label>
                </div>
                <button className="buttonS">Salvar</button>
            </div>
        </div>
    </>
    );
};

export default Solicitacao;