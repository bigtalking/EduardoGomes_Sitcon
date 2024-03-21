const fs = require('fs');
const path = require('path')

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, './pacientes.txt'), 'utf-8', (err, txt) => {
    return(txt);
}
));

const novo = data.map((cli) => {
    return ({
        id: cli[0],
        name: cli[1],
        birth: cli[2],
        cpf: cli[3],
        status: cli[4]
    })
});

console.log(novo)

fs.writeFileSync(path.resolve(__dirname, './pacientes.txt'), JSON.stringify(novo))