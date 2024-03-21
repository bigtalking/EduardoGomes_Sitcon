const fs = require('fs');
const path = require('path')


const fileName =  './procedimentos.json'
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, fileName), 'utf-8', (err, txt) => {
    return(txt);
}
));

// fs.readFile(path.resolve(__dirname, './procedimentos.json'), 'utf-8', (err, txt) => {
//     const s1 = txt.replace(/'/g,'\"')
//     const s2 = (s1.replace(/\(/g,'['))
//     const s3 = (s2.replace(/\);/g,'],'))
//     console.log(s3)

// }
// );

const novo = data.map((cli) => {
    return ({
        id: cli[0],
        descricao: cli[1],
        status: cli[2]
    })
});

console.log(novo)

fs.writeFileSync(path.resolve(__dirname, fileName), JSON.stringify(novo))