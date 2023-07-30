
const textarea = document.getElementById("exibir");

let livros = [];


function incluirLivro() {

    let livro = {
        Nome: document.getElementById("nome").value,
        Pag: document.getElementById("pag").value,
        Autor: document.getElementById("autor").value,
        Genero: document.getElementById("genero").value
    }

    livros.push(livro);
    console.log(livros);
}


function exibir() {

    let stringPropriedades = '';
    livros.forEach(livro => {
        for (const propriedade in livro) {
            stringPropriedades += propriedade + ': ' + livro[propriedade] + '\n';
        }
        stringPropriedades += '\n';
    });

    console.log(stringPropriedades);
    textarea.value = stringPropriedades;


}
