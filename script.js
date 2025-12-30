let lista = new listManager();
let inputItem = document.getElementById("taskInput");
let OuvidorAddTask =  function() {
     console.log(`botao clicado, input: ${inputItem.value}`);  
     lista.addItem(inputItem.value);
     inputItem.value = "";
}

document.getElementById('addButton').addEventListener('click', OuvidorAddTask);


inputItem.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    OuvidorAddTask();
    console.log("tecla enter aqui");
  }
});

