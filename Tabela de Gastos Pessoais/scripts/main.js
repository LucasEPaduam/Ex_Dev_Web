
var valorTotal = 0;

function enviarDados() {
  var conta = document.getElementById("conta").value;
  var valor = document.getElementById("valor").value;
  var tipo = document.getElementById("tipo").value;

  if (conta.length === 0 || valor.length === 0 || tipo.length === 0) {
    alert("Todos os dados devem ser preenchidos!")
    return;
  }

  var table = document.getElementById("myTable");
  var rowCount = table.rows.length;

  var row = table.insertRow(-1);
  row.id = "linha-" + rowCount;

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  cell1.innerHTML = conta;
  cell2.innerHTML = tipo;
  cell3.innerHTML = valor;
  cell4.innerHTML = "<button onclick='removerLinha(\"" + row.id + "\")'>Remover</button>";

  if (tipo == "Entrada") {
    valorTotal += parseFloat(valor);
  } else {
    valorTotal -= parseFloat(valor);
  }

  document.getElementById("exibirValorTotal").value = valorTotal.toFixed(2);
}


function removerLinha(rowId) {
  var table = document.getElementById("myTable");
  var row = document.getElementById(rowId);
  var index = row.rowIndex;
  table.deleteRow(index);

  var tipo = row.getElementsByTagName("td")[1].innerHTML;
  var valor = row.getElementsByTagName("td")[2].innerHTML;
  console.log("valor", valor, tipo);
  if (tipo == "Entrada") {
    valorTotal -= parseFloat(valor);
  } else {
    valorTotal += parseFloat(valor);
  }

  document.getElementById("exibirValorTotal").value = valorTotal.toFixed(2);
}

