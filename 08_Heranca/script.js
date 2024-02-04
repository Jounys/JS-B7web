const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    ...defaultUser, // Clonou/Herdou o objeto
    name: 'João', // Substitui ou cria se não tiver nada
    email: 'suporte@b7web.com.br'
}

let adm1 = {
    ...defaultUser,
    name: 'Boladão',
    email: 'adm@boladao.com.br',
    level: 2
}

console.log(adm1)