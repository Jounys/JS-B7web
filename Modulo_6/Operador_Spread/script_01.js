let info_01 = {
    nome: 'João',
    sobrenome: 'Paulo',
    idade: 23
};

let info_02 = {
    ...info_01,
    nome: 'Isa',
    sobrenome: 'Pereira',
    idade: 19
};
// console.log(info_02) // não funcionou

function addInfo(info){
    let novasInfo = {
        ...info,
        status: 0,
        token: 'abc',
        data_casdastro: 1213
    }
    return novasInfo
};

console.log(addInfo({nome: 'paulo', sobrenome: 'alves'}));