async function getAlunos() {
  let url = "http://localhost:8080/alunos";

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  for (let aluno of data) {
    let cardAluno = document.createElement("div");
    cardAluno.classList.add("aluno");

    cardAluno.innerHTML = `
        <p>Id: ${aluno.id}</p>
        <p>Nome: ${aluno.nome}</p>
    `;

    document.querySelector(".todosAlunos").appendChild(cardAluno);
  }
}

async function cadastrar() {
  let id = document.querySelector("#idAluno").value;
  let nome = document.querySelector("#nomeAluno").value;

  //Tratamento de erros

  let dados = {
    id,
    nome,
  };

  let url = "http://localhost:8080/cadastro";

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(dados),
  });
  const data = await response.json();

  console.log(data);
  window.location.reload();
}

async function Atualizar() {
    let id = document.querySelector("#idAluno").value;
    let nome = document.querySelector("#nomeAluno").value;

    //Tratamento de erros

    if(!id || !nome) {
        alert("Digite o ID e o Nome para atualizar o aluno!");
        return;
    }


    let dados = {
        id,
        nome,
    };
    let url = "http://localhost:8080/atualizar";

    const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(dados),
    });
    const data = await response.json();

    if (!response.ok) {
        alert(data.message); 
    } else {
        alert(data.message);
        window.location.reload();
    }
}

getAlunos();