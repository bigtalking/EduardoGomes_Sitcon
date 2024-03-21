import { useState } from "react";
import Header from "../components/Header";
import './Listagem.css'
import * as fs from 'fs-web';
// import fs from 'fs';
import path from "path";

function Listagem() {
    // const tx = fs.readFileSync(path.resolve(__dirname, '../data/.pacientes'), 'utf-8', (err, d) => d)
    // const tx = fs.readFile(path.resolve(__dirname, '../data/.pacientes')).then((a) => a)
    // const f = () => {console.log(tx)}
    const [pacients, setPacients] = useState([]);
    const f = async () => {
        try {
          const search = await fetch(`http://localhost:3001/data`);
          const data = await search.json();
          setPacients(data);
        } catch (error) {
            console.log(error)
          return error;
        }
    };
    const mapList = (pacient) => {
        return (
            <tr>
                <td>{pacient.name}</td>
                <td>{pacient.birth}</td>
                <td>{pacient.cpf}</td>
                <td><button className="buttonP">Prosseguir</button></td>
            </tr>
        )
    }
    f();
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