const inputInit = document.getElementById("animal_inicio");
const inputEnd = document.getElementById("animal_fim");
const textarea = document.getElementById("exibir");

let emptyArray = [];
let userValue;


function inputInicio() {
    userValue = inputInit.value;
    emptyArray.unshift(userValue);
    console.log(emptyArray);    

}

function inputFim() {
    console.log(emptyArray); 
    userValue = inputEnd.value;
    console.log(userValue); 
    emptyArray.push(userValue);
    console.log(emptyArray);    

}

function removeEnd() {
    emptyArray.pop();
    console.log(emptyArray);    

}

function removeInit() {
    emptyArray.shift();
    console.log(emptyArray);    

}

function exibir(){    
    const randomIndex = Math.floor(Math.random() * emptyArray.length);
    let aleatório = emptyArray[randomIndex];
    textarea.value = aleatório;

}
