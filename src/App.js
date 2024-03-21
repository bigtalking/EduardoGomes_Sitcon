import { Route, Routes } from 'react-router-dom';
import Solicitacao from './pages/Solicitacao';
import Listagem from './pages/Listagem'
import './App.css';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" Component={Listagem} />
          <Route path="/solicitacao" Component={Solicitacao} />
      </Routes>
    </>

  );
}

export default App;
