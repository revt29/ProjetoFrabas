      let listaEmail = ['22.10214-0@maua.br', 'gabrielmonteiro@pacoca.br', 'brunao@gordo.br', 'modus@ponens.br', '22.10013-0@maua.br']
      let listaSenha = ['luiz', 'pacoca', 'gordo', 'modustollens', 'tiago']
      let listaUsuario = ['Luiz', 'Gabriel Monteiro', 'Bruno', 'Modus Ponens', 'Tiago']
      let telaLojaAtual = 0
      let valorTotal = 0

      let produtos = [
              { id:1, nome:'Coxinha de frango', tipo:'salgado', preco:8.00, desc:'Um salgado com massa de batata e recheio de frango desfiado.', dispCa:'y', dispMol:'y', dispBibli:'n', dispTech:'y', img:'/imagens/produtos/coxinha.png'},

              { id:2, nome:'Pão de queijo', tipo:'salgado', preco:8.00, desc:'Um salgado com massa de polvilho e recheio de queijo parmesão.', dispCa:'y', dispMol:'y', dispBibli:'n', 
              dispTech:'y', img:'/imagens/produtos/pao_de_queijo.png'},

              { id:3, nome:'Sanduíche natural de atum', tipo:'salgado', preco:12.00, desc:'Um sanduíche recheado com tomate, alface e atum.', dispCa:'n', dispMol:'y', dispBibli:'y', dispTech:'y', img:'/imagens/produtos/sanduiche_natural_atum.png'},

              { id:4, nome:'Esfirra de carne', tipo:'salgado', preco:8.00, desc:'Um salgado assado com massa de batata e recheio de carne moída.', dispCa:'y', dispMol:'y', dispBibli:'n', dispTech:'y', img:'/imagens/produtos/esfirra_de_carne.png'},

              { id:5, nome:'Brigadeiro', tipo:'doce', preco:5.00, desc:'Um doce de chocolate e leite condensado com granulados.', dispCa:'y', dispMol:'y', dispBibli:'n', dispTech:'n', img:'/imagens/produtos/brigadeiro.png'},

              { id:6, nome:'Bolo de chocolate', tipo:'doce', preco:6.00, desc:'Uma fatia de bolo de chocolate com recheio de chocolate.', dispCa:'y', dispMol:'y', dispBibli:'n', dispTech:'y', img:'/imagens/produtos/bolo_chocolate.png'},

              { id:7, nome:'Coca-Cola', tipo:'bebida', preco:7.00, desc:'Refrigerante de 350ml feito com base de noz de cola e açúcar.', dispCa:'y', dispMol:'y', dispBibli:'y', dispTech:'y', img:'/imagens/produtos/cocacola.png'},

              { id:8, nome:'Café Espresso', tipo:'bebida', preco:8.00, desc:'Bebida quente feita com grãos de café frescos (sem açúcar).', dispCa:'y', dispMol:'y', dispBibli:'y', dispTech:'y', img:'/imagens/produtos/cafe_espresso.png'},  
      ]

      let cartoes = [
              {id:1, titular:'Tiaguinho', numero:'123456789', cvv:'123', exp:'13/75', logo:'imagens/mastercard.png'},
              {id:2, titular:'Tiaguinho', numero:'987654321', cvv:'321', exp:'00/00', logo:'imagens/mastercard.png'},
              {id:3, titular:'Tiaguinho', numero:'987654321', cvv:'321', exp:'00/00', logo:'imagens/mastercard.png'},
      ]


      // validação de campos
       function formValidation() {
        let erro_email = document.getElementById('erro_email');
        let erro_senha = document.getElementById('erro_senha');
        let email = document.getElementById('email').value;
        let senha = document.getElementById('senha').value;
        let btn = document.getElementById('btn');
        let bemVindo = document.getElementById('bemVindo');
        let emailAceito = 'esperando'
        let senhaAceita = 'esperando'

        //listas de email e senhas cadastradas
        let emailCorreto = listaEmail
        let senhaCorreta = listaSenha

        // validação email
        if (email == "") {
          erro_email.innerText = '*email não preenchido';
          document.getElementById('email').classList.add('erro');
          document.getElementById('email').classList.remove('sucesso');
          erro_email.style.opacity = '1';
        } else if (emailCorreto.includes(email)) {
          erro_email.style.opacity = '0';
          document.getElementById('email').classList.remove('erro')
          document.getElementById('email').classList.add('sucesso');
          emailAceito = 'aceito';
        } else {
          erro_email.innerText = '*email incorreto';
          document.getElementById('email').classList.add('erro');
          document.getElementById('email').classList.remove('sucesso');
          erro_email.style.opacity = '1';
        }
        // validação senha
        if (senha == "") {
          erro_senha.innerText = '*senha não preenchida';
          document.getElementById('senha').classList.add('erro');
          document.getElementById('senha').classList.remove('sucesso');
          erro_senha.style.opacity = '1';
        } else if (senhaCorreta.indexOf(senha) == emailCorreto.indexOf(email)) {
          erro_senha.style.opacity = '0';
          document.getElementById('senha').classList.remove('erro')
          document.getElementById('senha').classList.add('sucesso');
          senhaAceita = 'aceito';
        } else {
          erro_senha.innerText = '*senha incorreta';
          document.getElementById('senha').classList.add('erro');
          document.getElementById('senha').classList.remove('sucesso');
          erro_senha.style.opacity = '1';
        }
        if (emailAceito === 'aceito' && senhaAceita === 'aceito') {
          document.getElementById('senha').classList.remove('erro')
          document.getElementById('senha').classList.add('sucesso');
          btn.style.display = 'none';
          bemVindo.style.display = 'block';
          setTimeout(() => {
            bemVindo.style.opacity = '1';
            bemVindo.style.fontSize = '20px';
          }, "500")
          setTimeout(() => {
            window.open("inicial.html", "_self");
          }, "2500")
        }
      }

    // gerador de produtos

    function prodGen() {
      if (localStorage.getItem('quantidades') == null) {
        localStorage.setItem('quantidades', JSON.stringify([]))
      }
      if (localStorage.getItem('favoritos') == null) {
        localStorage.setItem('favoritos', JSON.stringify([]))
      }
      localStorage.setItem('produtos', JSON.stringify(produtos))
      let fav = localStorage.getItem('favoritos')
      fav = JSON.parse(fav)
      let container = document.getElementById('containerProduto')
      if (container) {
        container.innerHTML = produtos.map(produto => {
          return `<article class="container col-12 col-md-5 col-xxl-3 rounded ${produto.tipo}" data-id='${produto.id}' style="background-color:  rgb(255, 255, 255); border: solid 1px rgb(0, 0, 0 , 0.15); min-width: 300px; max-width: 400px; max-height: 700px;" id="produto" data-id="">
          <i id="${produto.id}" style="display: none;"></i>
          <i id="tipo" style="opacity: 0; display: none;">${produto.tipo}</i>
          <i id="${produto.dispCa}" style="display: none;"></i>
          <i id="${produto.dispMol}" style="display: none;"></i>
          <i id="${produto.dispBibli}" style="display: none;"></i>
          <i id="${produto.dispTech}" style="display: none;"></i>
          <h5 class="text-center py-3" id="nome_produto" style="border-bottom: solid 2px rgb(0, 0, 0 , 0.15); color: black;">${produto.nome}</h5>
          <div class="justify-content-center px-2 pt-2" style="border-bottom: solid 2px rgb(0, 0, 0 , 0.15);">
            <img src="${produto.img}" style="width: 100%; min-height: 100%;max-height: 100%; border-radius: 10px; margin-bottom: 5px;color: black;" alt="Coxinha de frango" id="imagem">
            <p class="text-muted text-start col-12" style="font-size: 12px;">Imagem meramente ilustrativa</p>
          </div>
          <h4 class="text-dark col-12" style="font-size: 50px; margin-top: 5px;">R$ ${produto.preco}.00</h4>
          <p class="text-muted text-start col-12 pb-3" style="border-bottom: solid 2px rgb(0, 0, 0 , 0.15);">${produto.desc}</p>
          <div class="row justify-content-center">
            <div onclick="addCart(${produto.id})" type="button" class="btn col-8 mb-3 py-3 text-nowrap" id="addCartButton" style="margin: 5px; max-height: 64px;">
              <div class="row justify-content-center">
                <span id="addCartText${produto.id}" class="col-12" id="add_cart_text" id="add_cart_text">
                  Adicionar ao carrinho
                </span>
              </div>
            </div>
            <div onclick="addFav(${produto.id})" type="button" class="btn col-1 mb-3" id="addFavButton" style="margin: 5px; max-width: 70px; min-width: 70px;"><img src="imagens/icon_star_empty.png" id="starEmpty${produto.id}" style="width: 35px; margin-top: 4px; display: block; margin-left: 4.5px;"><img src="imagens/icon_star_full.png" id="starFull${produto.id}" style="width: 35px; display: none; margin-top: 4px; margin-left: 4.5px;">
          </div>
        </article>`}).join('')
      }
    if (fav.length !== null && fav.length > 0) {
      for (let i = 0, max = fav.length; i < max; i++) {
        let prodFav = String(fav[i])
        document.getElementById(prodFav).parentElement.classList.add('fav')
      }
    } else {
        return false
    }
      
    }

    //adicionar ao carrinho

    function addCart(idCart) {
      let atual = localStorage.getItem('carrinho') ? localStorage.getItem('carrinho') : []
      let quant = localStorage.getItem('quantidades') ? localStorage.getItem('quantidades') : []
      if (typeof(atual) === "string")
       atual = JSON.parse(atual)
       quant = JSON.parse(quant)
       if (atual.includes(idCart) == false) {
        atual.push(idCart)
        quant.push(1)
        document.getElementById('addCartText' + String(idCart)).innerText = 'Adicionado!'
        setTimeout(() => {
        document.getElementById('addCartText' + String(idCart)).innerText = 'Adicionar ao carrinho'
        }, "1500")
        localStorage.setItem('carrinho', JSON.stringify(atual))
        localStorage.setItem('quantidades', JSON.stringify(quant))
       } else {
        let noFavToast = document.getElementById('noFavToast')
        let toast = new bootstrap.Toast(noFavToast)
        toast.show()
       }
    }

    //adicionar ao favoritos

    function addFav(idFav) {
      let atual = localStorage.getItem('favoritos') ? localStorage.getItem('favoritos') : []
      if (typeof(atual) === "string")
        atual = JSON.parse(atual)
        if (atual.includes(idFav) == false) {
          atual.push(idFav)
          localStorage.setItem('favoritos', JSON.stringify(atual))
          document.getElementById(String(idFav)).parentElement.classList.add('fav');
          document.getElementById('starFull' + String(idFav)).style.display = 'block';
          document.getElementById('starEmpty' + String(idFav)).style.display = 'none';
        } else if (atual.includes(idFav) == true) {
          let indice = atual.indexOf(idFav);
          atual.splice(indice, 1);
          localStorage.setItem('favoritos', JSON.stringify(atual))
          document.getElementById(String(idFav)).parentElement.classList.remove('fav');
          document.getElementById('starFull' + String(idFav)).style.display = 'none';
          document.getElementById('starEmpty' + String(idFav)).style.display = 'block';
          if (telaLojaAtual >= 4) {
            document.getElementById(String(idFav)).parentElement.style.display = 'none';
          }
          if (atual.length < 1 && telaLojaAtual >=4) {
            document.getElementById('nFav').style.display = 'block';
          }
        }
    }

    // Todos = 0
    // Salgados = 1
    // Bebidas = 2
    // Doces = 3
    // Favoritos = 4

      //esconder todos
      function hideTodos() {
        let todosProdutos = document.querySelectorAll("#produto")
        document.getElementById('nFav').style.display = 'none';
        for (let produto = 0, max = todosProdutos.length; produto < max; produto++) {
          todosProdutos[produto].style.display = "none";
        }
      }
      //mostrar todos
      function showTodos() {
        let todosProdutos = document.querySelectorAll("#produto")
        telaLojaAtual = 0
        for (let produto = 0, max = todosProdutos.length; produto < max; produto++) {
          todosProdutos[produto].style.display = "block";
        }
      }

      //mostrar salgados
      function showSalgados() {
        let todosSalgados = document.querySelectorAll(".salgado")
        telaLojaAtual = 1
        for (let salgado = 0, max = todosSalgados.length; salgado < max; salgado++) {
          todosSalgados[salgado].style.display = "block";
        } 
      }
      //mostrar bebidas
      function showBebidas() {
        let todasBebidas = document.querySelectorAll(".bebida")
        telaLojaAtual = 2
        for (let bebida = 0, max = todasBebidas.length; bebida < max; bebida++) {
          todasBebidas[bebida].style.display = "block";
        } 
      }
      //mostrar doces
      function showDoces() {
        let todasDoces = document.querySelectorAll(".doce")
 
        telaLojaAtual = 3
        for (let doce = 0, max = todasDoces.length; doce < max; doce++) {
          todasDoces[doce].style.display = "block";
        } 
      }
      //mostrar favoritos
      function showFav() {
      let fav = JSON.parse(localStorage.getItem('favoritos'))
      document.getElementById('nFav').style.display = 'none'
      telaLojaAtual = 4
      if (fav.length < 1) {
          document.getElementById('nFav').style.display = 'block';
      } else {
      hideTodos()
      let todosFavs = document.querySelectorAll(".fav")
      for (let fav = 0, max = todosFavs.length; fav < max; fav++) {
        todosFavs[fav].style.display = "block";
          }
        }
      }


    //gerador de produtos no carrinho

    function prodCartGen() {
      let prodCartLocalStorage = JSON.parse(localStorage.getItem('carrinho'));
      let QTY = JSON.parse(localStorage.getItem('quantidades'));
      let produtos = JSON.parse(localStorage.getItem('produtos'));
      let container = document.getElementById('containerProduto');
      let produtoCart = [];
      if (prodCartLocalStorage.length > 0) {
        document.getElementById('emptyCart').style.display = 'none';
        document.getElementById('emptyCartText').style.display = 'none';
        document.getElementById('lista_prod').style.minHeight = '377px';
        document.getElementById('addCartButton').classList.remove('disabled');
        document.getElementById('lista_prod').style.opacity = '1';
        for (let prodCart = 0; prodCart < prodCartLocalStorage.length; prodCart++) {
          let prodCartSel = prodCartLocalStorage[prodCart]
          let prodToBeAdded = produtos.find(produto => produto.id === prodCartSel)
          produtoCart.push(prodToBeAdded)
        }
        if (container) {
          container.innerHTML = produtoCart.map(produto => {
            return `<article class="col-12 pb-2 pt-2" id="produtoCart" value="${produto.id}">
            <i style="display: none;" id="${produto.id}"></i>
            <div class="row">
              <div class="col-5 col-md-6 d-flex" style="font-size: 25px;">
                <img class="rounded-circle shadow-sm" src="${produto.img}" style="margin-bottom: 5px; width: 150px; height: 150px;" alt="Coxinha de frango" id="imagem"><div class="text-nowrap" id="ProdutoCartNome">
                  ${produto.nome}
                </div>
              </div>
              <div class="container col-4 col-md-4 ps-5 ps-md-0 pt-0 pt-md-3">
                <div class="row justify-content-center text-center mt-0 mt-md-4" style="font-size: 20px;">
                  <div class="col-12 rounded-circle col-md-2" type="button" id="removeQTYButton" style="font-size: 30px;" onclick="rmvQTY(${produto.id})">
                    -
                  </div>
                  <div class="col-12 col-md-3 pt-0 pt-md-3 my-2 my-md-0" id="QTY${produto.id}">
                   1
                  </div>
                  <div class="col-12 rounded-circle col-md-3 pt-2" type="button" id="addQTYButton" style="font-size: 25px;" onclick="addQTY(${produto.id})">
                    +
                  </div>
                </div>
              </div>
              <div class="col-3 col-md-2">
                <h2 id="price">R$${produto.preco}.00</h2>
                <p class="text-danger" type="button" style="font-size:13px; text-decoration: underline;" onclick="prodCartRemove(${produto.id}); prodCartGen();">Remover</p>
              </div>
            </div>
          </article>`}).join('')
        }
        valorTotal = 0
        if (prodCartLocalStorage.length = 0) {
        } else {
          for (let prodCart = 0; prodCart < produtoCart.length; prodCart++) {
            let produto = produtoCart[prodCart]
            let price = produto.preco
            valorTotal = valorTotal + price
            document.getElementById('totalValue').innerText = 'R$' + valorTotal + '.00';
          }
          localStorage.setItem('valor total', JSON.stringify(valorTotal))
        }
        if (prodCartLocalStorage.length = 0) {
        } else {
          for (let q = 0; q < QTY.length; q++) {
            let prodCartLocalStorage = JSON.parse(localStorage.getItem('carrinho'));
            let QTY = JSON.parse(localStorage.getItem('quantidades'));
            let prodSel = prodCartLocalStorage[q]
            let produto = produtos.find(produto => produto.id == prodSel)
            let id = produto.id
            document.getElementById('QTY' + id).innerText = QTY[q]
          }
        }
      } else {
        valorTotal = 0
        localStorage.setItem('valor total', JSON.stringify(valorTotal))
        document.getElementById('totalValue').innerText = 'R$' + valorTotal + '.00';
        document.getElementById('emptyCart').style.display = 'block';
        document.getElementById('emptyCartText').style.display = 'block';
        document.getElementById('lista_prod').style.minHeight = '93px';
        document.getElementById('lista_prod').style.opacity = '0';
        document.getElementById('addCartButton').classList.add('disabled')
      }
    }
      

    function prodCartRemove(idProduto) { 
      let carrinho = JSON.parse(localStorage.getItem('carrinho')); 
      let quant = JSON.parse(localStorage.getItem('quantidades'))
      indice = carrinho.indexOf(idProduto)
      carrinho = carrinho.filter(produto => produto !== idProduto)
      let prodRemove = quant.splice(indice, 1)
      localStorage.setItem('carrinho', JSON.stringify(carrinho))
      localStorage.setItem('quantidades', JSON.stringify(quant))
      let prodToRemoveIdString = String(idProduto)
      document.getElementById(prodToRemoveIdString).parentElement.remove();
    }

    function addQTY(idProduto) {
      let QTY = localStorage.getItem('quantidades')
      let carrinho = localStorage.getItem('carrinho')
      let produtos = localStorage.getItem('produtos')
      produtos = JSON.parse(produtos)
      if (typeof(carrinho) === "string") {
        indice = JSON.parse(carrinho).indexOf(idProduto)
        QTY = JSON.parse(QTY)
        QTY[indice] = QTY[indice] + 1
        document.getElementById('QTY' + String(idProduto)).innerText = QTY[indice]
        localStorage.setItem('quantidades', JSON.stringify(QTY))
        let precoFinal = 0
        carrinho = JSON.parse(carrinho)
        for (let prod = 0; prod < carrinho.length; prod++) {
          let prodSel = carrinho[prod]
          let produto = produtos.find(p => p.id == prodSel)
          let price = produto.preco
          price = price * QTY[prod]
          precoFinal = precoFinal + price
          localStorage.setItem('valor total', JSON.stringify(precoFinal))
        }
        document.getElementById('totalValue').innerText = 'R$' + precoFinal + '.00';
      }
    }

    function rmvQTY(idProduto) {
      let QTY = localStorage.getItem('quantidades')
      let carrinho = localStorage.getItem('carrinho')
      if (typeof(carrinho) === "string")
        indice = JSON.parse(carrinho).indexOf(idProduto)
        QTY = JSON.parse(QTY)
        if (QTY[indice] > 1) {
          QTY[indice] = QTY[indice] - 1
          document.getElementById('QTY' + String(idProduto)).innerText = QTY[indice]
          let precoFinal = 0
        carrinho = JSON.parse(carrinho)
        for (let prod = 0; prod < carrinho.length; prod++) {
          let prodSel = carrinho[prod]
          let produto = produtos.find(p => p.id == prodSel)
          let price = produto.preco
          price = price * QTY[prod]
          precoFinal = precoFinal + price
          localStorage.setItem('valor total', JSON.stringify(precoFinal))
        }
        document.getElementById('totalValue').innerText = 'R$' + precoFinal + '.00';
      }
        localStorage.setItem('quantidades', JSON.stringify(QTY))
    }


    function cardGen() {
      let historicoProdutos = localStorage.getItem('historico produtos')
      if (historicoProdutos == null) {
        localStorage.setItem('historico produtos', JSON.stringify([]))
      }
      localStorage.setItem('cartoes', JSON.stringify(cartoes))
      localStorage.setItem('cartao selecionado', JSON.stringify(0))
      let container = document.getElementById('containerCartoes')
      if (container) {
        container.innerHTML = cartoes.map(cartao => {
          return `<article type="button" onclick="selectCard(${cartao.id})" class="col-12 rounded mt-2" id="containerCard" style="color: white;">
          <div class="row">
              <h3 class="mb-5 mt-2 col-6">${cartao.numero[0]}****${cartao.numero[5]}${cartao.numero[6]}${cartao.numero[7]}${cartao.numero[8]}</h3>
              <div class="col-6 mt-2 mb-2 text-end">
                <img class="" src="${cartao.logo}" alt="Mastercard" style="width: 100px;">
              </div>
          </div>
          <div class="row">
              <h5 class="pt-3 col-6">${cartao.titular}</h5>
              <p class="pt-3 col-6 text-end">Validade: ${cartao.exp}</p>
          </div>
      </article>`}).join('')
    } 
  }

    function prodSummaryGen() {
      let produtos = JSON.parse(localStorage.getItem('produtos'))
      let carrinho = JSON.parse(localStorage.getItem('carrinho'))
      let quant = JSON.parse(localStorage.getItem('quantidades'))
      let container = document.getElementById('productContainer')
      let precoFinal = JSON.parse(localStorage.getItem('valor total'))
      let produtosSummary = []
      for (i = 0; i < carrinho.length; i++) {
        let idToFind = carrinho[i]
        let produtoSummary = produtos.find(produto => produto.id == idToFind)
        produtosSummary.push(produtoSummary)
      }
      if (container) {
        container.innerHTML = produtosSummary.map(produto => {
          return `<div class="row" id="productContainer">
          <div class="col-12 d-flex border-top py-2" id="productSummary">
            <p class="col-6">
              ${produto.nome}
            </p>
            <p id="quant${produto.id}" class="col-6 text-end">
              x
            </p>
          </div>
        </div>`
        }).join('')
      }
      for (i= 0; i < quant.length; i++) {
        let quantToSet = quant[i]
        let prodID = carrinho[i]
        let quantElement = document.getElementById('quant' + String(prodID))
        quantElement.innerText = quantToSet + 'x'
      }
      document.getElementById('precoFinal').innerText = 'R$' + String(precoFinal) + '.00'
  }

  function goToPaymentScreen() {
    window.open("tela_pagamento.html", "_self");
  }

  function selectCard(cardId) {
    let cartoes = localStorage.getItem('cartoes');
    cartoes = JSON.parse(cartoes)
    let tituloPag = document.getElementById('pedidoTitulo');
    let listaCard = document.getElementById('lista_card');
    let container = document.getElementById('cardSelContainer');
    let metodoTitulo = document.getElementById('metodoTitulo');
    let pedidoConfirmTitulo = document.getElementById('pedidoConfirmTitulo');
    let containerSel = document.getElementById('cardSelContainer');
    let resumoTitulo = document.getElementById('resumoTitulo')
    let produtoContainer = document.getElementById('productContainer')
    let addCartButton = document.getElementById('addCartButton');
    let precoFinal = document.getElementById('precoFinal')
    tituloPag.style.display = 'none'
    listaCard.style.display = 'none'
    localStorage.setItem('cartao selecionado', JSON.stringify(cardId))
    let cardSel = cartoes.find(cartao => cartao.id == cardId)
    if (!Array.isArray(cardSel)) {
      cardSel = [cardSel]
    }
    if (container) {
      container.innerHTML = cardSel.map(cartao => {
        return `<article onclick="cardChange()" type="button" class="col-12 col-md-6 rounded mt-2" id="containerSelCard" style="color: white; min-width: 315.33px">
        <div class="row">
            <h3 class="mb-5 mt-2 col-6">${cartao.numero[0]}****${cartao.numero[5]}${cartao.numero[6]}${cartao.numero[7]}${cartao.numero[8]}</h3>
            <div class="col-6 mt-2 mb-2 text-end">
              <img class="" src="${cartao.logo}" alt="Mastercard" style="width: 100px;">
            </div>
        </div>
        <div class="row">
            <h5 class="pt-3 col-6">${cartao.titular}</h5>
            <p class="pt-3 col-6 text-end">Validade: ${cartao.exp}</p>
        </div>
    </article>`}).join('')
    metodoTitulo.style.display = 'block'
    pedidoConfirmTitulo.style.display = 'block'
    containerSel.style.display = ' block'
    resumoTitulo.style.display = 'block'
    produtoContainer.style.display = 'block'
    addCartButton.style.display = ' block'
    precoFinal.style.display = ' block'
  } 
}
  function cardChange() {
    let tituloPag = document.getElementById('pedidoTitulo');
    let metodoTitulo = document.getElementById('metodoTitulo');
    let pedidoConfirmTitulo = document.getElementById('pedidoConfirmTitulo');
    let addCartButton = document.getElementById('addCartButton');
    let containerToRemove = document.getElementById('containerSelCard')
    let listaCard = document.getElementById('lista_card');
    let resumoTitulo = document.getElementById('resumoTitulo')
    let produtoContainer = document.getElementById('productContainer')
    metodoTitulo.style.display = 'none'
    pedidoConfirmTitulo.style.display = 'none'
    resumoTitulo.style.display = ' none'
    pedidoConfirmTitulo.style.display = 'none'
    produtoContainer.style.display = ' none'
    addCartButton.style.display = 'none'
    precoFinal.style.display = 'none'
    tituloPag.style.display = 'block'
    listaCard.style.display = 'block'
    localStorage.setItem('cartao selecionado', JSON.stringify(0))
    containerToRemove.remove()
  }

  function finishOrder() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho'))
    let quant = JSON.parse(localStorage.getItem('quantidades'))
    let histProdutos = JSON.parse(localStorage.getItem('historico produtos'))
    let precoFinal = localStorage.getItem('valor total')
    let pedido = {id: 0, valor: String(precoFinal), produtos: [], quants: []}
    if (histProdutos.length > 0) {
      pedido.id = histProdutos[histProdutos.length - 1].id + 1
      console.log(pedido.id)
    } else {
      pedido.id = 1
      console.log(pedido.id)
    }
    for (i = 0; i < carrinho.length; i++) {
      let prod = carrinho[i]
      pedido.produtos[i] = prod
    }
    for (q = 0; q < quant.length; q++) {
      let quantToAdd = quant[q]
      pedido.quants.push(quantToAdd)
    }
    histProdutos.push(pedido)
    localStorage.setItem('carrinho', JSON.stringify([]))
    localStorage.setItem('quantidades', JSON.stringify([]))
    localStorage.setItem('historico produtos', JSON.stringify(histProdutos))
    window.open("pedido_concluido.html", "_self");
  }

  function cardListGen() {
    let cartoes = JSON.parse(localStorage.getItem('cartoes'))
    let container = document.getElementById('cardContainer')
    if (container) {
      container.innerHTML = cartoes.map(cartao => {
        return `<article type="button" class="col-10 rounded mt-2" id="containerCard" style="color: white;">
        <div class="row">
            <h3 class="mb-5 mt-2 col-6">${cartao.numero[0]}****${cartao.numero[5]}${cartao.numero[6]}${cartao.numero[7]}${cartao.numero[8]}</h3>
            <div class="col-6 mt-2 mb-2 text-end">
              <img class="" src="imagens/mastercard.png" alt="Mastercard" style="width: 100px;">
            </div>
        </div>
        <div class="row">
            <h5 class="pt-3 col-6">${cartao.titular}</h5>
            <p class="pt-3 col-6 text-end">Validade: 12/25</p>
        </div>
    </article>
    <div class="col-1 text-center" style="padding-top: 65px; color: red; font-size:50px" id="removeText">
      <div type="button">
        X
      </div>
    </div>
</div>
</div>
</article>`}).join('')
  }
}

  function prodHistGen() {
    let produtos = JSON.parse(localStorage.getItem('produtos'))
    let histPedidos = JSON.parse(localStorage.getItem('historico produtos'))
    let noOrderMsg = document.getElementById('noOrderMsg')
    let container = document.getElementById('containerPedidos')
    if (histPedidos == null) {
      localStorage.setItem('historico produtos', JSON.stringify([]))
    }
    if (histPedidos.length > 0) {
      noOrderMsg.style.display = 'none'
      container.style.display = 'block'
    }
    if (histPedidos.length > 2) {
      container.style.overflowY = 'scroll'
    }

    if (container) {
      container.innerHTML = histPedidos.map(pedido => {
        return `
        <div class="border-top" id="pedidoContainer${pedido.id}">
        <div class="row">
            <h5 class="mt-2 mb-4 col-6" id="pedidoNumero">
                Pedido #00${pedido.id}
            </h5>
            <h5 class="col-6 text-end mt-2" id="pedidoLocal${pedido.id}">
                Lanchonete do C.A.
            </h5>
        </div>
        <div class="row">
        <div class="row col-6" id="produtosContainer${pedido.id}">

        </div>
        <h3 class="col-6 text-end" style="margin-left:20px; color: rgb(126, 126, 126)">
          R$ 50.00
        </h3>
        </div>
    </div>`}).join('')
   }
   let produtosHist = histPedidos.map(pedido => pedido.produtos)
   let quantsHist = histPedidos.map(pedido => pedido.quants)
   for (pedido = 0; pedido < histPedidos.length; pedido++) {
    let produtosContainer = document.getElementById('produtosContainer' + String(pedido + 1))
    console.log(produtosContainer)
    for (p = 0; p < produtosHist[pedido].length; p++) {
      let produto = produtosHist[pedido]
      let produtoIndex = produto[p]
      let prodSel = produtos.find(produto => produto.id == produtoIndex)
      //criação do container do produto
      let prodContainer = document.createElement('div')
      prodContainer.classList.add('row', 'col-12')
      prodContainer.id = 'produto' + produto[p] + '-' + [p]
      prodContainer.style.color = 'rgb(126, 126, 126)'
      // criação do produto
      let prodNameContainer = document.createElement('p')
      prodNameContainer.classList.add('col-6')
      let prodName = document.createTextNode(String(prodSel.nome))
      prodNameContainer.appendChild(prodName)
      // criação da quantidade
      let prodQuantContainer = document.createElement('p')
      prodQuantContainer.classList.add('col-6', 'text-end')
      let quantAtual = document.createTextNode(String((quantsHist[pedido])[p]) + 'x')
      prodQuantContainer.appendChild(quantAtual)
      // agregação dos atributos ao container
      prodContainer.appendChild(prodNameContainer)
      prodContainer.appendChild(prodQuantContainer)
      produtosContainer.appendChild(prodContainer)
    }
   }
}