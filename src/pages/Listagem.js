import { useState, useEffect } from "react";
import Header from "../components/Header";
import { useNavigate } from 'react-router-dom'
import './Listagem.css'
import { fetchAllPacients } from "../helper/fetchData";


function Listagem() {
    const navigate = useNavigate();
    const handleClick = ({target}) => {
        navigate('/solicitacao', {state: target.name});
    };
    const [pacients, setPacients] = useState([]);
    const [search, setSearch] = useState('');
    const r = async () => setPacients(await fetchAllPacients());
    
    const filter = () => {
        return pacients.filter((paciente) => {
                const nome = paciente.name.toLowerCase()
                return nome.includes(search.toLowerCase().trim());
            })
    }
    
    const mapList = (pacient) => {
        return (
            <tr>
                <td>{pacient.name}</td>
                <td>{pacient.birth}</td>
                <td>{pacient.cpf}</td>
                <td>
                    <button className="buttonP"name={pacient.id} onClick={handleClick}>
                        Prosseguir
                    </button>
                </td>
            </tr>
        )
    }

    useEffect(() => {
        r();
    }, [])
    
    const pacientList = () => {
        const paci = filter()
        return paci.map(mapList)
    }
    
    return (
        <>
            <Header />
            <div className="back">
                <div className="aligner3">
                    <input
                        value={search}
                        onChange={({target}) => setSearch(target.value)}
                        className="input"
                        type='search'
                        placeholder="Pesquisar"
                    />
                    <div>
                    <table>
                        <thead>
                            <tr>
                                <td id="td1">Paciente</td>
                                <td>Nacimento</td>
                                <td>CPF</td>
                                <td id='td2'>Ações</td>
                            </tr>
                        </thead>
                        <tbody>
                            {pacientList()}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listagem;