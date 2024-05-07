import { useState, useEffect } from "react";
import Header from "../components/Header";
import './Solicitacao.css';
import { useLocation } from 'react-router-dom'
import { fetchAllProcedimentos, fetchAllProfs, fetchAllTipos, fetchPacient } from "../helper/fetchData";

function Solicitacao() {
    const location = useLocation()
    const [name, setName] = useState('');
    const [birth, setBirth] = useState('');
    const [cpf, setCpf] = useState('');
    const [prof, setProf] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [procedimento, setProcedimento] = useState([]);
    const [data, setData] = useState('');
    const [time, setTime] = useState('');
    const [tipoId, setTipoId] = useState(1);
    const [profId, setProfId] = useState(1);
    const [procedimentoId, setProcedimentoId] = useState(1);

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
            setBirth(pacient.birth);
            setCpf(pacient.cpf);
        };
        setProf(await fetchAllProfs());
        setTipo( await fetchAllTipos());
        setProcedimento( await fetchAllProcedimentos());
        
    }

    const saveData = ({target}) => {
        const save = {
            'name': name,
            'birth': birth,
            'cpf': cpf,
            'professional': profId,
            'tipo':tipoId,
            'procedimento': procedimentoId,
            'data': data,
            'time': time
        }
        const payload = JSON.stringify(save);
        fetch(`http://localhost:3001/save`, {method:'POST',headers: {'Content-Type': 'application/json'}, body: payload})
    }

    useEffect(() => {
        f()
    }, []);

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
                        <input type='date' value={birth} onChange={({target}) => setBirth(target.value)}/>
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
                        <select value={profId} onChange={({target}) => setProfId(target.value)}>
                            {prof.map(mapProf)}
                        </select>
                    </label>
                </div>
                <div className="row">
                    <label className="l3">Tipo de solicitação*
                        <select value={tipoId} onChange={({target}) => setTipoId(target.value)}>
                            {tipo.map(mapTipo)}
                        </select>
                    </label>
                    <label className="l3">Procedimentos*
                        <select value={procedimentoId} onChange={({target}) => setProcedimentoId(target.value)}>
                            {procedimento.map(mapProcedimentos)}
                        </select>
                    </label>
                </div>
                <div className="row">
                <label className="l3">Data*
                    <input type='date' value={data} onChange={({target}) => setData(target.value)}/>
                </label>
                <label className="l3">Hora*
                    <input type='time' value={time} onChange={({target}) => setTime(target.value)}/>
                </label>
                </div>
                <button className="buttonS" onClick={saveData}>Salvar</button>
            </div>
        </div>
    </>
    );
};

export default Solicitacao;