// https://jsonplaceholder.typicode.com/posts

async function lerPosts(){
    let postArea = document.querySelector('.posts')
    postArea.innerHTML = 'Carregando...'

    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();

    if(json.length > 0){
        postArea.innerHTML = '';

        for(let i in json) {
            let postHTML = `<div><h1>${json[i].title}</h1>${json[i].body}<hr/><p>${json[i].id}</p></div>`;
            postArea.innerHTML += postHTML
        }
    } else {
        postArea.innerHTML = 'Sem posts para exibir!'
    }
};

async function addNovoPost(title, body){
    await fetch('https://jsonplaceholder.typicode.com/posts',
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            // em caso da variavel ser o mesmo nome da propriedade, só basta colocar o nome uma vez
            title,
            body: body,
            userId: 2
        })
    })
    document.querySelector('#titleField').value = '';
    document.querySelector('#bodyField').value = '';

    lerPosts()
}

document.querySelector('#insertButton').addEventListener('click', () => {
    let title = document.querySelector('#titleField').value
    let body = document.querySelector('#bodyField').value

    if(title && body){
        addNovoPost(title, body)
    } else {
        alert('Digite algo primeiro.')
    }
})

lerPosts()