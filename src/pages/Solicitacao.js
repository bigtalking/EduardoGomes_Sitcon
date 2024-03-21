import { useState } from "react";
import Header from "../components/Header";
import './Solicitacao.css';
import { useLocation } from 'react-router-dom'

function Solicitacao() {
    const location = useLocation()
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [cpf, setCpf] = useState('');
    const f = async () => {
        try {
          const search = await fetch(`http://localhost:3001/data`);
          const data = await search.json();
          const pacient = data.find((pacient) => pacient.id == location.state)
          setName(pacient.name);
          setDate(pacient.birth);
          setCpf(pacient.cpf);
        } catch (error) {
            console.log(error);
          return error;
        };
    };
    f();
    return (<>
        <Header />
        <div className="back">
            <div className="aligner2">
                <button className="buttonV">Voltar</button>
                <div className="row">
                    <label className="l1">
                        Nome do paciente
                        <input type="text" value={name} onChange={({target}) => setName(target.value)}/>
                    </label>
                    <label className="l1">
                        Data de nacimento
                        <input type='date' value={date} onChange={({target}) => setDate(target.value)}/>
                    </label>
                    <label className="l1">
                        CPF
                        <input 
                            type='text'
                            placeholder="123.456.789.01"
                            value={cpf}
                            onChange={({target}) => setCpf(target.value)}
                        />
                    </label>
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