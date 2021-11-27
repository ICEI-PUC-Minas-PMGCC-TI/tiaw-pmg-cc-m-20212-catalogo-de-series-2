const KEY_BD = '@usuariosSeries'


var listaRegistros = {

    ultimoIdGerado:0,
    usuarios:[
        { id : 1, nome: 'teste01', telefone: '31 99998888'},
        { id : 2, nome: 'teste02', telefone: '31 99997777'},
        { id : 3, nome: 'teste03', telefone: '31 99996666'}

    ]
}

var FILTRO = ''



function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros))
}

function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaRegistros = JSON.parse(data)
    }
    renderizar()
}

function pesquisar(value){
    FILTRO = value;
    renderizar()

}


function renderizar(){

    const tbody= document.getElementById('listaRegistrosBody')
    if(tbody){
        var data = listaRegistros.usuarios;
        if(FILTRO.trim()){
            const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
            data = data.filter( usuario => {
                return expReg.test( usuario.nome ) || expReg.test( usuario.telefone )
            })
        }
        data = data
        .sort( (a,b) =>{
            return a.nome < b.nome ? -1 : 1
        })
        .map( usuario => {
            return `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.nome}</td>
            <td>${usuario.telefone}</td>
            <td>
                <button onclick='visualizar("cadastro", false, ${usuario.id} )' >Editar</button>
                <button class='vermelho' onclick='perguntarDeleta(${usuario.id})'>Deletar</button>
            </td>

            </tr>`
        })
        tbody.innerHTML = data.join('')
    }

}


function insertUsuario(nome, telefone){
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, nome, telefone
    })
    gravarBD()
    renderizar()
    visualizar('lista')
}

function editUsuario(id, nome, telefone){
    var usuario = listaRegistros.usuarios.find( usuario => usuario.id == id )
    usuario.nome = nome;
    usuario.telefone = telefone;
    gravarBD()
    renderizar()
    visualizar('lista')
}

function deleteUsuario(id){
    listaRegistros.usuarios = listaRegistros.usuarios.filter( usuario => {
        return usuario.id != id
})
    gravarBD()
    renderizar()
}

function perguntarDeleta(id){
    if (confirm('Quer deletar o registro deste usuário?' +id)){
        deleteUsuario(id)
       

    }

}




function limparDados(){
    document.getElementById('nome').value = ''
    document.getElementById('telefone').value = ''
}


function visualizar(pagina, novo=false, id=null){
    document.body.setAttribute('page', pagina);
    if(pagina == 'cadastro') {
        if(novo) limparDados()
        if(id){
            const usuario = listaRegistros.usuarios.find( usuario => usuario.id == id)
            if(usuario){
                document.getElementById('id').value = usuario.id
                document.getElementById('nome').value = usuario.nome
                document.getElementById('telefone').value = usuario.telefone
            }
        }
        document.getElementById('nome').focus()
    }
    
}


function submeter(e){
     e.preventDefault()
     alert('Cadastro Efetuado')
     const data = {
         id: document.getElementById('id').value,
         nome: document.getElementById('nome').value,
         telefone: document.getElementById('telefone').value,
     }
     if(data.id){
        editUsuario(data.id, data.nome, data.telefone)

     }else{
        insertUsuario( data.nome, data.telefone )
     }
     

}



window.addEventListener('load', () => {
    lerBD()
    document.getElementById('cadastroRegistros').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e => {
        pesquisar(e.target.value)
    })
})