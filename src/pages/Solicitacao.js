import { useState } from "react";
import Header from "../components/Header";
import './Solicitacao.css';
import { useLocation } from 'react-router-dom'
import { fetchAllProcedimentos, fetchAllProfs, fetchAllTipos, fetchPacient } from "../helper/fetchData";

function Solicitacao() {
    const location = useLocation()
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [cpf, setCpf] = useState('');
    const [prof, setProf] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [procedimento, setProcedimento] = useState([]);

    const mapProf = (prof) => {
        return (
            <option value={prof.id}>
                {prof.name}
            </option>
        )
    }
    
    const mapTipo = (tipo) => {
        console.log('verify')
        return (
            <option value={tipo.id}>
                {tipo.descricao}
            </option>
        )
    }

    // const filterProced = (procedimentos, tipo) => {
    //     const filtered = procedimentos.filter((proced) => proced.tipo_id == tipo);
    //     console.log(filtered);
    //     return filtered;
    // }

    const mapProcedimentos = (proced) => {
        return (
            <option value={proced.id} tipo={proced.tipo_id}>
                {proced.descricao}
            </option>
        )
    }

    const f = async () => {
        if (location.state) {
            const pacient = await fetchPacient(location.state);
            setName(pacient.name);
            setDate(pacient.birth);
            setCpf(pacient.cpf);
        };
        setProf(await fetchAllProfs());
        setTipo( await fetchAllTipos());
        setProcedimento( await fetchAllProcedimentos());
        
    }
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
                            {prof.map(mapProf)}
                        </select>
                    </label>
                </div>
                <div className="row">
                    <label className="l3">Tipo de solicitação*
                        <select>
                            {tipo.map(mapTipo)}
                        </select>
                    </label>
                    <label className="l3">Procedimentos*
                        <select onChange={({target}) => console.log(target)}>
                            {procedimento.map(mapProcedimentos)}
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