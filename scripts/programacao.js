let res = document.createElement("div");
let res2 = document.createElement("div");
let res3 = document.createElement("div");
let res4 = document.createElement("div");
let res5 = document.createElement("div");
let res6 = document.createElement("div");
let res7 = document.createElement("div");

let select = document.getElementById("options");
let array = [];
let gerar = document.getElementById("gerar");
let gerar2 = document.getElementById("gerar2");
let gerar3 = document.getElementById("gerar3");
let executar = document.getElementById("executar");
let executar2 = document.getElementById("executar2");
let executar3 = document.getElementById("executar3");
let executar4 = document.getElementById("executar4");
let resposta = document.querySelector("#resposta");
let resposta2 = document.querySelector("#resposta2");
let resposta3 = document.querySelector("#resposta3");
let resposta4 = document.querySelector("#resposta4");
let resposta5 = document.querySelector("#resposta5");
let resposta6 = document.querySelector("#resposta6");
let resposta7 = document.querySelector("#resposta7");

res.style.color = "black";
res2.style.color = "black";
res3.style.color = "black";
res4.style.color = "black";
res5.style.color = "black";
res6.style.color = "black";
res7.style.color = "black";

resposta.appendChild(res);
resposta2.appendChild(res2);
resposta3.appendChild(res3);
resposta4.appendChild(res4);
resposta5.appendChild(res5);
resposta6.appendChild(res6);
resposta7.appendChild(res7);

gerar.addEventListener("click", () => {
  let tamanho = parseInt(document.getElementById("tamanho").value);
  array = [];

  for (let i = 0; i < tamanho; i++) {
    array[i] = random(tamanho, 1);
  }
  res.innerHTML = `Números gerados [ ${array} ]<br>`;

  function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let orderType = select.value;

  if (orderType === "crescente") {
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          let aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
    res.innerHTML += `Array Ordenado: [ ${array} ]`;
  } else if (orderType === "decrescente") {
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] < array[j + 1]) {
          let aux = array[j];
          array[j] = array[j + 1];
          array[j + 1] = aux;
        }
      }
    }
    res.innerHTML += `Array Invertido: [ ${array} ]`;
  }
});

gerar2.addEventListener("click", () => {
  let tamanho2 = parseInt(document.getElementById("tamanho2").value);
  array = [];

  for (let i = 0; i < tamanho2; i++) {
    array[i] = random(tamanho2, 1);
  }
  res2.innerHTML = `Números gerados [ ${array} ]<br>`;

  function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let orderType = select.value;

  if (orderType === "crescente") {
    for (i = 1; i < array.length; i++) {
      let j = i - 1;
      valor_atual = array[i];
      while (j >= 0 && valor_atual < array[j]) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = valor_atual;
    }
    res2.innerHTML += `Array Ordenado: [ ${array} ]`;
  } else if (orderType === "decrescente") {
    for (i = 1; i < array.length; i++) {
      let j = i - 1;
      valor_atual = array[i];
      while (j >= 0 && valor_atual > array[j]) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = valor_atual;
    }
    res2.innerHTML += `Array Invertido: [ ${array} ]`;
  }
});

gerar3.addEventListener("click", () => {
  let tamanho3 = parseInt(document.getElementById("tamanho3").value);
  array = [];

  for (let i = 0; i < tamanho3; i++) {
    array[i] = random(tamanho3, 1);
  }
  res3.innerHTML = `Números gerados [ ${array} ]<br>`;

  function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let orderType = select.value;

  if (orderType === "crescente") {
    for (i = 0; i < array.length; i++) {
      menor = i;
      for (j = i + 1; j > array.length; j++) {
        if (array[j] > array[menor]) {
          menor = j;
        }
      }
      if (i != menor) {
        valor_atual = array[i];
        array[i] = array[menor];
        array[menor] = valor_atual;
      }
    }
    res3.innerHTML += `Array Ordenado: [ ${array} ]`;
  } else if (orderType === "decrescente") {
    for (i = 0; i < array.length; i++) {
      menor = i;
      for (j = i + 1; j < array.length; j++) {
        if (array[j] > array[menor]) {
          menor = j;
        }
      }
      if (i != menor) {
        valor_atual = array[i];
        array[i] = array[menor];
        array[menor] = valor_atual;
      }
    }
    res3.innerHTML += `Array Invertido: [ ${array} ]`;
  }
});

executar.addEventListener("click", () => {
  let fila = [];
  let matriz = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  function gerarFila() {
    let contador = 0;
    for (let i = 0; i < 9; i++) {
      contador++;
      fila.push(contador);
      res4.innerHTML = `Fila: [ ${fila} ] <br>`;
      res4.innerHTML += `------------------------------- <br>`;
    }
  }

  function removerFila() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        matriz[i][j] = fila.shift();
        res4.innerHTML += `Array: [ ${fila} ]<br>`;
        res4.innerHTML += `Matriz: [ ${matriz} ]<br>`;
        res4.innerHTML += `-------------------------------<br>`;
      }
    }
  }

  gerarFila();
  removerFila();
});

executar2.addEventListener("click", () => {
  let pilha = [];

  function gerarPilha() {
    let contador = 0;
    for (let i = 0; i < 5; i++) {
      contador++;
      pilha.push(contador);
      res5.innerHTML = `ADD-Pilha: [ ${pilha} ]<br>`;
      res5.innerHTML += `-----------------------------<br>`;
    }
  }

  function removerPilha() {
    for (let i = 0; i < 5; i++) {
      pilha.pop();
      res5.innerHTML += `Remuve-Pilha: [ ${pilha} ]<br>`;
      res5.innerHTML += `-----------------------------<br>`;
    }
  }

  gerarPilha();
  removerPilha();
});

executar3.addEventListener("click", () => {
  let matriz = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  function random(max, min) {
    valorAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return valorAleatorio;
  }
  let somaP = 0;
  let somaI = 0;
  function somar() {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        matriz[i][j] = random(20, 1);
      }
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (matriz[i][j] % 2 == 0) {
          somaP += matriz[i][j];
        } else {
          somaI += matriz[i][j];
        }
      }
    }

    let container = document.getElementById("matrix-container");
    let tabela = document.createElement("table");
    tabela.id = "matrix";

    matriz.forEach((linha) => {
      let tr = document.createElement("tr");
      linha.forEach((celula) => {
        let td = document.createElement("td");
        td.textContent = celula;
        tr.appendChild(td);
      });
      tabela.appendChild(tr);
    });

    container.appendChild(tabela);
    res6.innerHTML += `Soma dos Pares:  ${somaP} <br>`;
    res6.innerHTML += `Soma dos Impares:  ${somaI} <br>`;
  }
  somar();
});

executar4.addEventListener("click", () => {
  let matriz = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  let matriz2 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];
  let matriz3 = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  function mudar() {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (i + j == 6) {
          matriz[i][j] = 5;
        } else {
          matriz[i][j] = 0;
        }
      }
    }
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        if (i == j) {
          matriz2[i][j] = 7;
        } else {
          matriz2[i][j] = 0;
        }
      }
    }

    let container2 = document.getElementById("matrix-container2");
    let tabela2 = document.createElement("table");
    tabela2.id = "matrix2";

    matriz.forEach((linha) => {
      let tr2 = document.createElement("tr");
      linha.forEach((celula) => {
        let td2 = document.createElement("td");
        td2.textContent = celula;
        tr2.appendChild(td2);
      });
      tabela2.appendChild(tr2);
    });
    container2.appendChild(tabela2);

    let container3 = document.getElementById("matrix-container3");
    let tabela3 = document.createElement("table");
    tabela3.id = "matrix3";

    matriz2.forEach((linha) => {
      let tr3 = document.createElement("tr");
      linha.forEach((celula) => {
        let td3 = document.createElement("td");
        td3.textContent = celula;
        tr3.appendChild(td3);
      });
      tabela3.appendChild(tr3);
    });

    container3.appendChild(tabela3);

  }
  mudar();
  function somar() {
    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 7; j++) {
        matriz3[i][j] = matriz[i][j] + matriz2[i][j];
      }
    }
    
    let container4 = document.getElementById("matrix-container4");
    let tabela4 = document.createElement("table");
    tabela4.id = "matrix4";

    matriz3.forEach((linha) => {
      let tr4 = document.createElement("tr");
      linha.forEach((celula) => {
        let td4 = document.createElement("td");
        td4.textContent = celula;
        tr4.appendChild(td4);
      });
      tabela4.appendChild(tr4);
    });

    container4.appendChild(tabela4);

    console.table(matriz3);
  }
  somar();
});




    