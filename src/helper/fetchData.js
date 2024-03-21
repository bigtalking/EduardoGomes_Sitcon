const fetchPacient = async (id) => {
    try {
      const search = await fetch(`http://localhost:3001/pacientes`);
      const data = await search.json();
      const pacient = data.find((pacient) => pacient.id == id)
      return pacient;
    } catch (error) {
        console.log(error);
      return error;
    };
};

const fetchAllPacients = async () => {
    try {
      const search = await fetch(`http://localhost:3001/pacientes`);
      const data = await search.json();
      return data;
    } catch (error) {
        console.log(error);
      return error;
    };
};


const fetchAllProfs = async () => {
    try {
        const search = await fetch(`http://localhost:3001/profissional`);
        const data = await search.json();
        return data;
      } catch (error) {
          console.log(error);
        return error;
      };
};
const fetchAllTipos = async () => {
    try {
        const search = await fetch(`http://localhost:3001/tipo`);
        const data = await search.json();
        return data;
      } catch (error) {
          console.log(error);
        return error;
      };
};
const fetchAllProcedimentos = async () => {
    try {
        const search = await fetch(`http://localhost:3001/procedimentos`);
        const data = await search.json();
        return data;
      } catch (error) {
          console.log(error);
        return error;
      };
};


export {fetchPacient, fetchAllPacients, fetchAllProfs, fetchAllTipos, fetchAllProcedimentos};