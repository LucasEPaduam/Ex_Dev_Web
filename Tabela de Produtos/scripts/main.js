var produtos = [];

function enviarDados() {
    var nome = document.getElementById("nome").value;
    var preco = document.getElementById("preco").value;
    var descricao = document.getElementById("descricao").value;
    var url = document.getElementById("urlImagem").value;
  
    if(nome.length === 0 || preco.length === 0 || descricao.length === 0 || url.length === 0   ){
        alert("Todos os dados devem ser preenchidos!")
        return;
    }

    var novoProduto = {
      id: produtos.length,
      nome: nome,
      preco: preco,
      descricao: descricao,
      url: url
    };

    produtos.push(novoProduto);
    

    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;

    var row = table.insertRow(-1);
    row.id = "linha-" + rowCount;

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    var img = document.createElement("img");
    img.src = url;
    img.width = 100;
    img.height = 100;
    cell1.appendChild(img);

    cell2.innerHTML = nome;
    cell3.innerHTML = preco;
    cell4.innerHTML = descricao;

    var botaoAtualizar = document.createElement("button");
    botaoAtualizar.setAttribute("onclick", "atualizarLinha('" + row.id + "')");
    botaoAtualizar.style.backgroundImage = "url('https://www.freeiconspng.com/thumbs/edit-icon-png/edit-new-icon-22.png')";
    botaoAtualizar.style.backgroundSize = "cover";
    botaoAtualizar.style.width = "30px";
    botaoAtualizar.style.height = "30px";
    cell5.appendChild(botaoAtualizar);

    var botaoRemover = document.createElement("button");
    botaoRemover.setAttribute("onclick", "removerLinha('" + row.id + "')");
    botaoRemover.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/860/860829.png')";
    botaoRemover.style.backgroundSize = "cover";
    botaoRemover.style.width = "30px";
    botaoRemover.style.height = "30px";
    cell6.appendChild(botaoRemover);

      
  }
  

  function removerLinha(rowId) {
    var table = document.getElementById("myTable");
    var row = document.getElementById(rowId);
    var index = row.rowIndex;
    table.deleteRow(index);

  }

  
  
