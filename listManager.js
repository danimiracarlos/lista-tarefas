class listManager {
    constructor() {
        this.list = [];
        this.obterCache();
        this.atualizarHTML();
        this.listaBotoes = document.getElementsByClassName("deleteButton");
        }

    addItem(item) {
        if(item != "") {
        this.list.push(item);
        this.atualizarHTML();
        } else {
            alert("Adicione um texto primeiro!");
        }
    }

    deleteItem(index) {
        this.list.splice(index, 1);
        this.atualizarHTML();
    }

    atualizarHTML() {
        const listContainer = document.getElementById('tasksUl');
        listContainer.innerHTML = '';
        for (let i = 0; i < this.list.length; i++) {
            listContainer.innerHTML += this.itemTemplate(this.list[i]);
        }
        if (this.list.length === 0) {
            listContainer.innerHTML = '<p class="emptyList">Nada a exibir aqui :(</p>';
        }
        this.definirExcluir();
        this.salvarCache();
    }

    itemTemplate(nome) {
        return `
        <li><div class="listItem">
                <p class="textItem">${nome}</p>
                <button class="deleteButton">X</button>
            </div><div class="baseline"></div></li>
        `;
    }

    definirExcluir() {
        this.listaBotoes = document.getElementsByClassName("deleteButton");
        Array.from(this.listaBotoes).forEach((botao, index) => {
            botao.addEventListener('click', () => {
                this.deleteItem(index);
            })});
    }

    salvarCache() {
        localStorage.setItem("lista", JSON.stringify(this.list));
        console.log("salvo no navegador");
    }

    obterCache() {
        const dados = localStorage.getItem("lista");

    if (dados) {
        this.list = JSON.parse(dados);
        console.log("dados iniciais obtidos");
    }
    }
}