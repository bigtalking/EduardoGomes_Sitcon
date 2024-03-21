import { useState } from "react";
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
    const r = async () => setPacients(await fetchAllPacients());
    r();
    
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
    return (
        <>
            <Header />
            <div className="back">
                <div className="aligner3">
                    <input className="input" type='search' placeholder="Pesquisar"/>
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
                            {pacients.map(mapList)}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Listagem;