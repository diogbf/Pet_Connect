/* VARIAVEIS */


var emailIniciarSessao = document.getElementById("emailIniciarSessao");
var passwordIniciarSessao = document.getElementById("passwordIniciarSessao");
var emailIniciarSessaoValidade = false;
var passwordIniciarSessaoValidade = false; 

var nome = document.getElementById("nome");
var apelido = document.getElementById("apelido");
var emailCriarConta = document.getElementById("emailCriarConta");
var passwordCriarConta = document.getElementById("passwordCriarConta");
var passwordCriarConta2 = document.getElementById("passwordCriarConta2");
var morada = document.getElementById("morada");
var localidade = document.getElementById("localidade");
var codigoPostal = document.getElementById("codigoPostal");
var nif = document.getElementById("nif");
var tel = document.getElementById("tel");

var nomeValidade = false;
var apelidoValidade = false;
var emailCriarContaValidade = false;
var passwordCriarContaValidade = false;
var passwordCriarContaValidade2 = false;
var moradaValidade = false;
var localidadeValidade = false;
var codigoPostalValidade = false;
var nifValidade = false;
var telValidade = false;

var utilizador;
var utilizador1;

/*--------------------------------------------------- FUNCOES PAGINA INCIAR SESSAO ---------------------------------------------*/
var textoIniciarSessao = document.getElementById("pIniciar").innerHTML;

function clicarSessao(){
    if(textoIniciarSessao != "Inicar Sessão"){
        window.location.href = "Cliente.html";
    }else{
        window.location.href = "Iniciar_sessao.html";
    }
}



function funcaoCriarConta() {
    window.location.href = "Criar_conta.html";
}

if(passwordIniciarSessao != null){
passwordIniciarSessao.onkeydown = function(){

    var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
        // Regex to check if a string
        // contains uppercase, lowercase
        // special character & numeric value
    if(passwordIniciarSessao.value.length == 0){
        avisaErros2.innerHTML = "ola";
        avisaErros2.style.opacity = "0";
    }else{
        if(pattern.test(passwordIniciarSessao.value) && (passwordIniciarSessao.value.length >= 9)){  
            passwordIniciarSessaoValidade = true;
            avisaErros2.innerText = " ";
        }else{
            avisaErros2.innerText = "Insira pelo menos 9 caracteres,tem de conter número, caracter especial e letra maiúscula.";
            avisaErros2.style.color = "red";
            avisaErros2.style.opacity = "1";
        }
    }
}
}

if(emailIniciarSessao != null){
emailIniciarSessao.onkeydown  = function(){
    var arrobaPos = emailIniciarSessao.value.indexOf("@");
    var pontoPos = emailIniciarSessao.value.indexOf(".");

    if(emailIniciarSessao.value.length == 0){
        avisaErros1.innerHTML = "ola";
        avisaErros1.style.opacity = "0";
    }else{
        if (arrobaPos < 1 || pontoPos < arrobaPos + 2 || pontoPos + 2 >=emailIniciarSessao.value.length){
            avisaErros1.innerHTML = "Email inválido.";
            avisaErros1.style.color = "red";
            avisaErros1.style.opacity = "1";
        } else{
            avisaErros1.innerHTML = " ";
            emailIniciarSessaoValidade = true;
        }
    }
}
}

function funcaoIniciarConta() {
    if(passwordIniciarSessao.value != utilizador[3] && emailIniciarSessao.value != utilizador[2] && utilizador == null){
        avisaErros3.style.opacity = "1";
    }
    else if(emailIniciarSessaoValidade == true && passwordIniciarSessaoValidade == true){
        avisaErros3.style.opacity = "0";
        window.location.href = "Home.html";
    }

}


/*------------------------------------------------- FUNCOES PAGINA CRIAR CONTA -------------------------------------------------*/


if(nome != null){
    nome.onkeydown = function(){ 
        var letras = /^[A-Za-z]+$/;
        if(nome.value.length == 0){
            avisoErros.innerHTML = "";
        }else{
            if(nome.value.match(letras)){
                avisoErros.innerHTML = "";
                nomeValidade = true;
            }else{
                avisoErros.innerHTML = "Nome inválido.";
            }
        }
    }
}

if(apelido != null){
    apelido.onkeydown = function(){ 
        var letras = /^[A-Za-z]+$/;
        if(apelido.value.length == 0){
            avisoErros.innerHTML = "";
        }else{
            if(apelido.value.match(letras)){
                avisoErros.innerHTML = "";
                apelidoValidade = true;
            }else{
                avisoErros.innerHTML = "Apelido inválido.";
            }
        }
    }
}


if(emailCriarConta != null){
emailCriarConta.onkeydown  = function(){
    var arrobaPos = emailCriarConta.value.indexOf("@");
    var pontoPos = emailCriarConta.value.indexOf(".");

    if(emailCriarConta.value.length == 0){
        avisoErros.innerHTML = "";
    }else{
        if (arrobaPos < 1 || pontoPos < arrobaPos + 2 || pontoPos + 2 >=emailCriarConta.value.length){
            avisoErros.innerHTML = "Email inválido.";
            avisoErros.style.color = "red";
        } else{
            avisoErros.innerHTML = "";
            emailCriarContaValidade = true;
        }
    }
}
}

if(passwordCriarConta != null){
passwordCriarConta.onkeydown = function(){

    var pattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$");
        // Regex to check if a string
        // contains uppercase, lowercase
        // special character & numeric value
    if(passwordCriarConta.value.length == 0){
        avisoErros.innerHTML = "";
    }else{

        if(passwordCriarConta.value.length >= 9){  
            avisoErros.innerText = "";
            passwordCriarContaValidade = true;
        }else{
            avisoErros.innerText = "Insira pelo menos 9 caracteres.";
            avisoErros.style.color = "red";
        }
    }
}
}

if(passwordCriarConta2 != null){
    passwordCriarConta2.onkeydown = function() {
        if(passwordCriarConta2.value.length == 0){
            avisoErros.innerHTML = "";
        }else{
            if(passwordCriarConta2.value == passwordCriarConta.value){
                avisoErros.innerText = ""; 
                passwordCriarContaValidade2 = true;
            }else{
                avisoErros.innerText = "As Passwords não coincidem.";
            } 
        }  
    }
}

if(morada != null){
    morada.onkeydown = function() {
        if(morada.value.length == 0){
            avisoErros.innerHTML = "";
        }else{
            if(morada.value.length <= 5){
                avisoErros.innerText = "Morada incompleta.";
            }else{
                avisoErros.innerText = "";
                moradaValidade = true;
            }
        }
    }
}

if(codigoPostal != null){
    var hifenPos = codigoPostal.value.indexOf("-");

    codigoPostal.onkeydown = function() {
        if(codigoPostal.value.length == 0){
            avisoErros.innerHTML = "";
        }else{
            if(hifenPos != 4 && codigoPostal.value.length != 7){
                avisoErros.innerText = "Código postal inválido.";
            }else{
                avisoErros.innerText="";
                codigoPostalValidade= true;
            }
        }
    }
}

if(nif != null){
    nif.onkeydown = function(){
        if(nif.value.length == 0){
            avisoErros.innerHTML = "";
        }else{
            if(nif.value.length != 8 || isNaN(nif.value)){
                avisoErros.innerText = "NIF inválido.";
            }else{
                avisoErros.innerText="";
                nifValidade= true;
            }
        }
    }
}


if(tel != null){
    tel.onkeydown = function(){
        if(tel.value.length == 0){
            avisoErros.innerHTML = "";
        }else{
            if(tel.value.length != 8 || isNaN(tel.value) || tel.value[0] != 9){
                avisoErros.innerText = "Telemóvel inválido."
            }else{
                avisoErros.innerText="";
                telValidade= true;
            }
        }
    }
}

function funcaoRegistar2() {
    if(localidade.selectedIndex == 0){
        avisoErros.innerText = "Campos inválidos."
    }else{
        avisoErros.innerText = ""
        localidadeValidade = true;
    }

    if(nomeValidade == true && apelidoValidade == true && emailCriarContaValidade == true && passwordCriarContaValidade == true && passwordCriarContaValidade2 == true && moradaValidade == true && localidadeValidade == true && codigoPostalValidade == true && nifValidade == true && telValidade == true){
        utilizador = [nome.value, apelido.value, emailCriarConta.value, passwordCriarConta.value, morada.value, localidade.value, codigoPostal.value, nif.value, tel.value];
        localStorage.setItem("Utilizador", JSON.stringify(utilizador));
        window.location.href = "Home.html";    
    }else{
        avisoErros.innerText = "Campos inválidos."
    }
}

function nomeUtilizador() {
    utilizador = localStorage.getItem("Utilizador");
    utilizador = JSON.parse(utilizador);
    document.getElementById("pIniciar").innerText = utilizador[0] + " " + utilizador[1]; 
}

if(localStorage.getItem("Utilizador") == null){
    var b = 0;
}else{
    nomeUtilizador()
}




/* ------------------------------------------- CARRINHO -------------------------------------------------------- */

let carro = document.querySelectorAll('.adicionarCarrinho');     // vai buscar todos os botoes ".adicionarCarrinho"
let fav = document.querySelectorAll('.favoritosVazio');  

let produtos = [
    {nome: 'Royal Canin', subTitulo: 'Puppy mini 85g / saco', preco: 20, quantidade: 0, img:"Recursos/Imagens/caoHumida.png"},
    {nome: 'Frikies', subTitulo: 'Comida húmida Vitalif 100g', preco: 5, quantidade: 0, img:"Recursos/Imagens/caoHumida2.png"},
    {nome: 'Specific', subTitulo: 'Adulto medio 12Kg', preco: 40, quantidade: 0, img: 'Recursos/Imagens/racaocao.png'},
    {nome: 'Royal Canin', subTitulo: 'Júnior Yorkshire Terrier 5Kg', preco: 20, quantidade: 0, img: 'Recursos/Imagens/racaocao2.png'},
    {nome: 'Trixie', subTitulo: 'Shampoo de laranja 500ml', preco: 8, quantidade: 0, img: 'Recursos/Imagens/shampoCao.png'},
    {nome: 'Petbrilho', subTitulo: 'Shampoo Neutro 500ml', preco: 10, quantidade: 0, img: 'Recursos/Imagens/shampoCao2.png'},
    {nome: 'Pedigree', subTitulo: 'Dentastix Daily Fresh 270g', preco: 5, quantidade: 0, img: 'Recursos/Imagens/camidacao.png'},
    {nome: 'Trixie', subTitulo: 'Luva para cuidado do pêlo', preco: 6, quantidade: 0, img: 'Recursos/Imagens/luvaTiraPelo.png'},
    {nome: 'TK-Pet', subTitulo: 'Arnês tam. L', preco: 20, quantidade: 0, img: 'Recursos/Imagens/arnesCao.png'},
    {nome: 'NiteDawg', subTitulo: 'Coleira com pendente tam. M', preco: 6, quantidade: 0, img: 'Recursos/Imagens/coleiraCao.png'},
    {nome: 'TK-Pet', subTitulo: 'Arnês tam. S', preco: 8, quantidade: 0, img: 'Recursos/Imagens/arnesCao2.png'},
    {nome: 'Scalibor', subTitulo: 'Coleira anti-parasitária tam. S/M', preco: 17, quantidade: 0, img: 'Recursos/Imagens/scalibor.png'},
    {nome: 'Felix', subTitulo: 'Seleção carnes em gelatina 400g', preco: 6, quantidade: 0, img: 'Recursos/Imagens/gatoHumida.png'},
    {nome: 'Whiskas', subTitulo: 'Seleção peixe em gelatina 400g', preco: 5, quantidade: 0, img: 'Recursos/Imagens/gatoHumida2.png'},
    {nome: 'Purina One', subTitulo: 'Bifensis Sensitive 3Kg', preco: 12, quantidade: 0, img: 'Recursos/Imagens/racao-gato.png'},
    {nome: 'Libra', subTitulo: 'Kitten Equilíbrio Nutritivo 1,5Kg', preco: 6, quantidade: 0, img: 'Recursos/Imagens/racao-gato2.png'},
    {nome: 'Pet Clean', subTitulo: 'Banho a seco 300ml', preco: 6, quantidade: 0, img: 'Recursos/Imagens/shampoGato.png'},
    {nome: 'Smell Fresh', subTitulo: 'Shampoo Neutro 500ml', preco: 5, quantidade: 0, img: 'Recursos/Imagens/shampoGato2.png'},
    {nome: 'Yes!T', subTitulo: 'Tesoura corta unhas', preco: 4, quantidade: 0, img: 'Recursos/Imagens/tesoura.png'},
    {nome: 'Sanicat', subTitulo: 'Areia aglomerante 10L', preco: 8, quantidade: 0, img: 'Recursos/Imagens/areiagato.png'},
    {nome: 'ZooPets', subTitulo: 'Coleira Marvel tam. S', preco: 10, quantidade: 0, img: 'Recursos/Imagens/coleiraGato.png'},
    {nome: 'Seresto', subTitulo: 'Coleira anti-parasitária tam. M', preco: 13, quantidade: 0, img: 'Recursos/Imagens/coleiraGato2.png'},
    {nome: 'TK-Pet', subTitulo: 'Arranhador poste', preco: 15, quantidade: 0, img: 'Recursos/Imagens/arranhador.png'},
    {nome: 'Petcare', subTitulo: 'Dispensador de ração 3,8L', preco: 17, quantidade: 0, img: 'Recursos/Imagens/dispensador.png'},
    {nome: 'Deli Nature',  subTitulo: 'Ração Coelhos Júnior 3Kg', preco: 7, quantidade: 0, img: 'Recursos/Imagens/coelho.png'},
    {nome: 'Hami Form', subTitulo: 'Bebedouro Coelhos Jovens', preco: 9, quantidade: 0, img:'Recursos/Imagens/coelho2.png'},
    {nome: 'Reino das Aves', subTitulo: 'Periquito Gold Mix 500g', preco: 7, quantidade: 0, img:'Recursos/Imagens/passaro.png'},
    {nome: 'Tetra', subTitulo: 'Flocos Goldfish 100ml', preco: 2, quantidade: 0, img: 'Recursos/Imagens/peixe.png'},
    {nome: 'eSHa Goldy', subTitulo: 'Fórmula peixes água fria 10ml', preco: 6, quantidade: 0, img: 'Recursos/Imagens/remediopeixes.png'},
    {nome: 'Men For San', subTitulo: 'Shampoo Glicerina Aves 125ml', preco: 7, quantidade: 0, img: 'Recursos/Imagens/spray.png'},
    {nome: 'Beaphar', subTitulo: 'Neutralizador de Odores 500ml', preco: 9, quantidade: 0, img: 'Recursos/Imagens/neutrolizador.png'},
    {nome: 'Beaphar', subTitulo: 'Desodorizante roedores 100ml', preco: 8, quantidade: 0, img: 'Recursos/Imagens/spray2.png'},
    {nome: 'Trixie', subTitulo: 'Coleira e trela tam. S', preco: 10, quantidade: 0, img: 'Recursos/Imagens/coleiracoelho.png'},
    {nome: 'Ciano', subTitulo: 'Aquário preto 20L', preco: 35, quantidade: 0, img: 'Recursos/Imagens/aquario.png'},
    {nome: 'Trixie', subTitulo: 'Bebedouro Hamster 100ml', preco: 3, quantidade: 0, img: 'Recursos/Imagens/bebedouro.png'},
    {nome: 'Kasuar', subTitulo: 'Casa Madeira para Pássaros', preco: 11, quantidade: 0, img: 'Recursos/Imagens/casapassaros.png'},
    {nome: 'K&H', subTitulo: 'Casa de tecido impremeável', preco: 50, quantidade: 0, img: 'Recursos/Imagens/promo1.png'},
    {nome: 'Flexi', subTitulo: 'Trela extensível para cães', preco: 13, quantidade: 0, img: 'Recursos/Imagens/promo2.png'},
    {nome: 'TK-Pet', subTitulo: 'Areia aglomerante para gatos', preco: 8, quantidade: 0, img: 'Recursos/Imagens/promo3.png'},
    {nome: 'TK-Pet', subTitulo: 'Sport dog bola de ténis', preco: 4, quantidade: 0, img: 'Recursos/Imagens/promo4.png'},
    {nome: 'Banhos', subTitulo: 'Serviço Banhos', preco: 20, quantidade: 0, img: 'Recursos/Imagens/banhos.jpeg'},
    {nome: 'Veterinário', subTitulo: 'Serviço Veterinário', preco: 46, quantidade: 0, img: 'Recursos/Imagens/veterinario.jpeg'},
    {nome: 'Packs de Treino', subTitulo: '1 Treino', preco: 25, quantidade: 0, img: 'Recursos/Imagens/treinos.png'},
    {nome: 'Packs de Treino', subTitulo: '3 Treinos', preco: 50, quantidade: 0, img: 'Recursos/Imagens/treinos.png'},
    {nome: 'Packs de Treino', subTitulo: '6 Treino', preco: 80, quantidade: 0, img: 'Recursos/Imagens/treinos.png'}

];

var textoIniciarSessao = document.getElementById("pIniciar").innerHTML;
console.log(textoIniciarSessao);


    for (let i=0; i < carro.length; i++){              //quando clica vai correr todos os botoes ".adicionar ao carrinho"
        carro[i].addEventListener('click', () =>{
            if(textoIniciarSessao != "Inicar Sessão"){
                quantCarrinho(produtos[i]);
                precoTotal(produtos[i]);
            }else{
                alert("Para adicionar produtos ao carrinho tem de iniciar sessão.");
            }
        })
    }


function carregaCarrinho(){                       // carrega a pagina para aparecer o numero de itens no carrinho
    let quantProduto = localStorage.getItem('QuantidadeCarrinho');

    if(quantProduto){
        document.querySelector('#quantidadeCarrinho').textContent = quantProduto;
    }
}

function quantCarrinho(produtos, action){                 // calcula a quantidade de produtos adicionados ao carrinho
    let quantProduto = localStorage.getItem('QuantidadeCarrinho');
    quantProduto = parseInt(quantProduto);

    let carroItens = localStorage.getItem('ProdutosNoCarro');
    carroItens = JSON.parse(carroItens);

    if( action ) {
        localStorage.setItem("QuantidadeCarrinho", quantProduto - 1);
        document.querySelector('#quantidadeCarrinho').textContent = quantProduto - 1;
    } else if(quantProduto){
        localStorage.setItem('QuantidadeCarrinho', quantProduto + 1);
        document.querySelector('#quantidadeCarrinho').textContent = quantProduto + 1;
    }else{
        localStorage.setItem('QuantidadeCarrinho', 1);
        document.querySelector('#quantidadeCarrinho').textContent = 1;
    }

    defItens(produtos);
}

function defItens(produtos){
    let carroItens = localStorage.getItem('ProdutosNoCarro');
    carroItens = JSON.parse(carroItens);
    

    if(carroItens != null){

        if(carroItens[produtos.subTitulo] == undefined){
            carroItens = {
                ...carroItens,
                [produtos.subTitulo]: produtos
            }
        }
        carroItens[produtos.subTitulo].quantidade +=1;
    }else{
        produtos.quantidade = 1;
        carroItens = {
            [produtos.subTitulo]:produtos
        }
    }
    
    localStorage.setItem("ProdutosNoCarro", JSON.stringify(carroItens));

}

function precoTotal(produtos, action){
    //console.log("preço", produtos.preco);
    let carroPrecoTotal = localStorage.getItem('PreçoTotal');
    
    if(action) {
        carroPrecoTotal = parseInt(carroPrecoTotal);

        localStorage.setItem("PreçoTotal", carroPrecoTotal - produtos.preco);
    }else if(carroPrecoTotal != null){
        carroPrecoTotal = parseInt(carroPrecoTotal);
        localStorage.setItem("PreçoTotal", carroPrecoTotal + produtos.preco);

    }else{
        localStorage.setItem("PreçoTotal", produtos.preco);
    } 
}

let carroItens = localStorage.getItem("ProdutosNoCarro");
//console.log(carroItens)


function displayCarrinho(){
    let divCabecalhoProdutos = document.querySelector(".divCabecalhoProdutos");
    let envio;
    let carroSemEnvio;
    let carroItens = localStorage.getItem("ProdutosNoCarro");
    //console.log(carroItens)
    carroItens = JSON.parse(carroItens);
    let divCarroProdutos = document.querySelector(".divProdutos");
    let carroPrecoTotal = localStorage.getItem('PreçoTotal');
    let carroPrecoTotalConvertido = parseInt(carroPrecoTotal);
    carroSemEnvio = carroPrecoTotal;
    envio = 0;
    
    if(carroPrecoTotalConvertido != 0){
        if(carroPrecoTotalConvertido < 20){
            envio = 4;
            carroPrecoTotalConvertido += 4;
            carroPrecoTotalConvertido += "";
            carroPrecoTotal = carroPrecoTotalConvertido;
        }
    }

    if(carroItens && divCarroProdutos){
        
        avisoFavCar.style.display = "none";
        divImagemCriarConta.style.display = "none";
        divCabecalhoProdutos.style.display = "flex";

        divCarroProdutos.innerHTML = '';
        Object.values(carroItens).map(item => {
            divCarroProdutos.innerHTML += `
            <div class="produto">
            <div id="imgProduto">
                <img src="./${item.img}">
            </div>
            <div id="titulosProduto">
                <span id="nomeProduto">${item.nome}</span><br><br>
                <span class="subNomeProduto">${item.subTitulo}</span>
            </div>
            <div id="quantidadeProduto">
                <button class="botaomenos">-</button>
                <span class="quantProduto">${item.quantidade}</span>
            <button class="botaomais">+</button>
            </div>
            <span id="precoProduto">${item.preco * item.quantidade},00 €</span>
            <button class="lixo"></button>   
        </div>
        `;
        });

        divCarroProdutos.innerHTML += `
            <div id="CodigoPromotransporte">
                <button id="transporte"><b>ENVIO GRÁTIS</b> a partir de 20€</button>
                <div>
                   <p id="pCodigo">Código Promocional<p>
                   <input id="promo" type="text">
                   <button id="aplicar" onclick="codigoPromo()">Aplicar</button>
                </div>    
            </div>
            <div class="precoTotal">
                <br>
                <span id="precoSemPortes">Produtos: ${carroSemEnvio},00€</span><br><br>
                <span id="precoPortes">Envio: ${envio},00€</span><br><br>
                <span id="precoComPortes">Total: ${carroPrecoTotal},00€</span><br><br>
                <button id="AcederPagamento" onclick="acederPagamento()">ACEDER AO PAGAMENTO</button> 
            </div>
        `
        apagarProduto();
        mudarQuantidade()
    }
}

function codigoPromo(){
    var codigoCerto = document.getElementById("promo").value;
    let carroPrecoTotal = localStorage.getItem('PreçoTotal');
    let carroPrecoTotalConvertido2 = parseInt(carroPrecoTotal);
    console.log(codigoCerto);
    if(codigoCerto == "Pweb_2021"){
        carroPrecoTotalConvertido2 = carroPrecoTotalConvertido2 - 5;
        carroPrecoTotal = carroPrecoTotalConvertido2
        localStorage.setItem("PreçoTotal", carroPrecoTotal);
        codigo = 5;
        localStorage.setItem("CodigoDesconto", codigo)
    }
    

    carregaCarrinho();
    displayCarrinho();

}
var codigo;

function apagarProduto() {
    let botaoLixo = document.querySelectorAll('.lixo');
    let quantProduto = localStorage.getItem('QuantidadeCarrinho');
    let precoCarrinho = localStorage.getItem("PreçoTotal");
    let carroItens = localStorage.getItem('ProdutosNoCarro');
    carroItens = JSON.parse(carroItens);
    let nomeProduto;

    for(let i=0; i < botaoLixo.length; i++) {
        botaoLixo[i].addEventListener('click', () => {
            //console.log("lista Botoes lixo" + botaoLixo)
            
            nomeProduto = botaoLixo[i].parentElement.getElementsByClassName('subNomeProduto')[0].innerText;
            //console.log(nomeProduto.getElementsByClassName('subNomeProduto')[0].innerText);
            //console.log(nomeProduto);

            //nomeProduto = botaoLixo[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'');
            //console.log(nomeProduto);
            localStorage.setItem('QuantidadeCarrinho', quantProduto - carroItens[nomeProduto].quantidade);
            localStorage.setItem('PreçoTotal', precoCarrinho - ( carroItens[nomeProduto].preco* carroItens[nomeProduto].quantidade));
            
            delete carroItens[nomeProduto];
            localStorage.setItem('ProdutosNoCarro', JSON.stringify(carroItens));
            displayCarrinho();
            carregaCarrinho();
        })
    }
}

function mudarQuantidade() {
    let botaoMenos = document.querySelectorAll('.botaomenos');
    let botaoMais = document.querySelectorAll('.botaomais');
    let quantidadeAtual = 0;
    let produtoAtual = '';
    let carroItens = localStorage.getItem('ProdutosNoCarro');
    carroItens = JSON.parse(carroItens);

    for(let i=0; i < botaoMais.length; i++) {
        botaoMenos[i].addEventListener('click', () => {
            console.log(carroItens);
            //quantidadeAtual = botaoMenos[i].parentElement.querySelector('quantProduto').textContent;
            quantidadeAtual = botaoMenos[i].parentElement.querySelector('span').textContent;
            console.log(quantidadeAtual);
            //produtoAtual = botaoMenos[i].parentElement.getElementsByClassName('subNomeProduto')[0].innerText;
            produtoAtual = botaoMenos[i].parentElement.parentElement.getElementsByClassName('subNomeProduto')[0].innerText;
            console.log(produtoAtual);

            if( carroItens[produtoAtual].quantidade > 1 ) {
                carroItens[produtoAtual].quantidade--;
                console.log(carroItens[produtoAtual].quantidade)
                quantCarrinho(carroItens[produtoAtual], "decrease");
                precoTotal(carroItens[produtoAtual],"decrease");
                localStorage.setItem('ProdutosNoCarro', JSON.stringify(carroItens));
                displayCarrinho();
            }
        });
        botaoMais[i].addEventListener('click', () => {
            console.log(carroItens);
            quantidadeAtual = botaoMenos[i].parentElement.querySelector('span').textContent;
            console.log(quantidadeAtual);
            produtoAtual = botaoMenos[i].parentElement.parentElement.getElementsByClassName('subNomeProduto')[0].innerText;
            console.log(produtoAtual);

            carroItens[produtoAtual].quantidade += 1;
            quantCarrinho(carroItens[produtoAtual]);
            precoTotal(carroItens[produtoAtual]);
            localStorage.setItem('ProdutosNoCarro', JSON.stringify(carroItens));
            displayCarrinho();
        });
    }
}

carregaCarrinho();
displayCarrinho();


function acederPagamento(){
    window.location.href = "metodoPagamento.html";
}




function resumoCompra(){
    let carroItens = localStorage.getItem("ProdutosNoCarro");
    let envio;
    let carroSemEnvio;
    //console.log(carroItens)
    carroItens = JSON.parse(carroItens);
    let resumoCompra = document.querySelector(".resumoCompra");
    let carroPrecoTotal = localStorage.getItem('PreçoTotal');
    let carroPrecoTotalConvertido = parseInt(carroPrecoTotal);
    carroSemEnvio = carroPrecoTotal;
    envio = 0;
    
    if(carroPrecoTotalConvertido != 0){
        if(carroPrecoTotalConvertido < 20){
            envio = 4;
            carroPrecoTotalConvertido += 4;
            carroPrecoTotalConvertido += "";
            carroPrecoTotal = carroPrecoTotalConvertido;
        }
    }

    if(carroItens && resumoCompra){

        resumoCompra.innerHTML = '';
        Object.values(carroItens).map(item => {
            resumoCompra.innerHTML += `
            <div class="produto2">
                <div id="imgProduto2">
                    <img src="./${item.img}">
                </div>
                <div id="titulosProduto2">
                    <span id="nomeProduto2">${item.nome}</span><br>
                    <span class="subNomeProduto2">${item.subTitulo}</span>
                </div>
                <span id="precoProduto2">${item.preco * item.quantidade},00 €</span>
            </div>
        `;
        });

        resumoCompra.innerHTML += `
            <div class="precoTotal2">
                <br>
                <span id="precoSemPortes2">Produtos: ${carroSemEnvio},00€</span><br><br>
                <span id="precoPortes2">Envio: ${envio},00€</span><br><br>
                <span id="precoComPortes2">Total: ${carroPrecoTotal},00€</span><br><br>
            </div>
        `
    }
}

resumoCompra()

function onlyOne(){
    dadosTransferencia.style.display = "block";
    dadosCartao.style.display = "none";
}

function onlyOne2(){
    dadosTransferencia.style.display = "none";
    dadosCartao.style.display = "block";
}



function alertaEncomenda(){
    var numeroCartao = document.getElementById("numeroCartao").value;
    var numeroCartaoValidade = false;
    var nomeTitular = document.getElementById("nomeTitular").value;
    var nomeTitularValidade = false;
    var mes = document.getElementById("mes");
    var mesValidade = false;
    var ano = document.getElementById("ano");
    var anoValidade = false;
    var cvv = document.getElementById("cvv").value;
    var cvvValidade = false;
    var letras = /^[A-Za-z]+$/;
    if(localStorage.getItem('NumeroDeCompras') == null){
        numeroCompras = 111000;
        localStorage.setItem('NumeroDeCompras', JSON.stringify(numeroCompras));
    }

    if(document.getElementsByName('radio')[0].checked){
        alerta.style.display = "block";
        pagamento.style.opacity = "0.1";
        let montanteAreaCliente = localStorage.getItem("PreçoTotal");
        localStorage.setItem('MontanteAreaCliente', montanteAreaCliente);
        numeroCompras = localStorage.getItem('NumeroDeCompras');
        numeroCompras = parseInt(numeroCompras);
        numeroCompras = numeroCompras + 1;
        localStorage.setItem('NumeroDeCompras', JSON.stringify(numeroCompras));

        document.getElementById("quantidadeCarrinho").innerHTML ="0";

        localStorage.removeItem("QuantidadeCarrinho");
        localStorage.removeItem("ProdutosNoCarro");
        localStorage.removeItem("PreçoTotal");
        localStorage.removeItem("CodigoDesconto");

        displayCarrinho();
        carregaCarrinho();


        document.getElementById("avisoPagamento2").innerText = " "
        setTimeout(function(){
            alerta.style.display = "none";
            window.location.href= "Home.html";
        }, 3000);
    }else{
        document.getElementById("avisoPagamento2").innerText = "Escolha um método de pagamento."
    }

    if(document.getElementsByName('radio')[1].checked){
        if(numeroCartao.length == 16){
            numeroCartaoValidade = true;
        }else{
            document.getElementById("avisoPagamento2").innerText = "Dados inválidos."
        }

        if(nomeTitular.match(letras)){
            nomeTitularValidade = true;
        }else{
            document.getElementById("avisoPagamento2").innerText = "Dados inválidos."
        }

        if(mes.selectedIndex == 0){
            document.getElementById("avisoPagamento2").innerText = "Dados inválidos."
           
        }else{
            mesValidade = true;
        }

        if(ano.selectedIndex == 0){
            document.getElementById("avisoPagamento2").innerText = "Dados inválidos."
        }else{
            anoValidade = true;
        }

        if(cvv.length == 3){
            cvvValidade = true;
        }else{
            document.getElementById("avisoPagamento2").innerText = "Dados inválidos."
        }

        if(numeroCartaoValidade == true && nomeTitularValidade == true && mesValidade == true && anoValidade == true && anoValidade == true && cvvValidade == true){
            alerta2.style.display = "block";
            pagamento.style.opacity = "0.1";
            numeroCompras = localStorage.getItem('NumeroDeCompras');
            numeroCompras = parseInt(numeroCompras);
            numeroCompras = numeroCompras + 1;
            localStorage.setItem('NumeroDeCompras', JSON.stringify(numeroCompras));
            document.getElementById("avisoPagamento2").innerText = " ";
            setTimeout(function(){
                alerta.style.display = "none";
                window.location.href= "Comprovativo.html";
            }, 3000);
        }

    }
}


function fatura(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();

    let carroItens = localStorage.getItem("ProdutosNoCarro");
    //console.log(carroItens)
    let codigo = localStorage.getItem("CodigoDesconto");
    carroItens = JSON.parse(carroItens);
    let fatura = document.querySelector(".fatura");
    let carroPrecoTotal = localStorage.getItem('PreçoTotal');
    let envio;
    let carroSemEnvio;
    let carroPrecoTotalConvertido = parseInt(carroPrecoTotal);
    carroSemEnvio = carroPrecoTotal;
    envio = 0;
    let numeroCompras = localStorage.getItem('NumeroDeCompras');
    
    if(carroPrecoTotalConvertido != 0){
        if(carroPrecoTotalConvertido < 20){
            envio = 4;
            carroPrecoTotalConvertido += 4;
            carroPrecoTotalConvertido += "";
            carroPrecoTotal = carroPrecoTotalConvertido;
        }
    }

    if(codigo == null){
        codigo = 0;
    }

    if(carroItens && fatura){
        fatura.innerHTML = '';

        fatura.innerHTML +=`
        <div id="tituloFatura">
            <h3>Fatura / Recibo</h3>
            <div id="imgLogo">
                <img src="./Recursos/Icons/logo.png">
            </div>
        </div>
        `
        fatura.innerHTML += `
            <div class="dadosFatura">
                <span id="subTitulosFatura">Número da encomenda: </span>
                <span id="NumEncomenda">${numeroCompras}</span><br><br>
                <span id="subTitulosFatura">Data da encomenda: </span>
                <span id="dataEncomenda">${d}/${m}/${y}</span><br><br>
                <span id="subTitulosFatura">Morada: </span>
                <span id="moradaEncomenda">${utilizador[4]}</span><br><br>

                <span id="subTitulosFatura">NIF: </span>
                <span id="nifEncomenda">${utilizador[7]}</span><br><br>
                <hr>
                <br>
            </div>
        `
        Object.values(carroItens).map(item => {
          fatura.innerHTML += `
                <div id="titulosProdutoFatura">
                    <span id="nomeProdutoFatura">${item.nome}</span>
                    <span class="subNomeProdutoFatura"> (${item.subTitulo})</span>
                    <span id="precoProdutoFatura">${item.preco * item.quantidade},00 €</span>
                </div><br>
        `;
        });

        fatura.innerHTML += `
        <br>
            <div id="descontosFatura">
                    <span id="subTitulosFatura">Gastos de envio:</span>
                    <span id="gastosFaturaPreco">${envio},00€</span><br><br>
                    <span id="subTitulosFatura">Código desconto:</span>
                    <span id="codigoFaturaPreco">-${codigo},00€</span><br><br>
                </div><br><br>
            <div class="precoTotalFatura">
                <span id="precoTotalFatura2">Total: </span>
                <span id="precoTotalFatura3">${carroPrecoTotal},00€</span><br><br>
            </div>
        `
    }
}

fatura();

function continuarComprar(){
    window.location.href = "Home.html";
}


function dadosCliente(){
    let teste123 = document.querySelector(".teste123");
    if(teste123){
        let dadosCliente = localStorage.getItem('Utilizador');
        let montante = localStorage.getItem('PreçoTotal');
        document.getElementById("nomeFinal").innerText = utilizador[0] + " " + utilizador[1]; 
        document.getElementById("ruaFinal").innerText = utilizador[4]; 
        document.getElementById("codigoFinal").innerText = utilizador[6];
        document.getElementById("localidadeFinal").innerText = utilizador[5]; 
        document.getElementById("telFinal").innerText = utilizador[8]; 
        document.getElementById("nifFinal").innerText = utilizador[7];
        document.getElementById("montante2").innerText = montante + ",00€";
    }
}

dadosCliente();

function downloadFatura(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();

    let envio;
    let carroSemEnvio;
    let carroItens = localStorage.getItem("ProdutosNoCarro");
    carroItens = JSON.parse(carroItens);
    console.log(carroItens); 
    let codigo = localStorage.getItem("CodigoDesconto");
    let carroPrecoTotal = localStorage.getItem('PreçoTotal');
    let carroPrecoTotalConvertido = parseInt(carroPrecoTotal);
    carroSemEnvio = carroPrecoTotal;
    envio = 0;
    var prod;
    let numeroCompras = localStorage.getItem('NumeroDeCompras');

    Object.values(carroItens).map(item => {
        prod +=item.nome + " " +"("+item.subTitulo +")" + "           " + item.preco * item.quantidade + ",00€" + "\n ";
      });

    prod = prod.replace("undefined", " ");
    console.log(prod);

    if(codigo == null){
        codigo = 0;
    }
    
    if(carroPrecoTotalConvertido != 0){
        if(carroPrecoTotalConvertido < 20){
            envio = 4;
            carroPrecoTotalConvertido += 4;
            carroPrecoTotalConvertido += "";
            carroPrecoTotal = carroPrecoTotalConvertido;
        }
    }

    var textToWrite= 
    'Fatura / Recibo' + "\n" + "\n" + "\n" + 
        
 
    'Número da encomenda: ' + numeroCompras + "\n"+
    'Data: ' + d + "/" + m + "/" + y + "\n"+
    'Morada: '+ utilizador[4] + "\n"+
    'NIF: '+ utilizador[7] + "\n"+"\n"+

    '-------------------------------------------------------------------------------------------------------'+"\n"+

    prod + "\n" + 

    'Gastos de Envio: '+ envio + ",00€" + "\n" + 
    'Código desconto: -' + codigo + ',00€'+ "\n" + "\n" + "\n" +
    'TOTAL:'+ carroPrecoTotal + ",00€"
        

    var textFileAsBlob= new Blob ([textToWrite], {
        type:'text/plain' });

        var fileNameToSaveAs = "fatura";
        var downloadLink= document.createElement("a");
        downloadLink.download= fileNameToSaveAs;

        if(window.webkitURL!=null){
            downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
        }
    downloadLink.click();

        let montanteAreaCliente = localStorage.getItem("PreçoTotal");
        localStorage.setItem('MontanteAreaCliente', montanteAreaCliente);
        document.getElementById("quantidadeCarrinho").innerHTML ="0";

        localStorage.removeItem("QuantidadeCarrinho");
        localStorage.removeItem("ProdutosNoCarro");
        localStorage.removeItem("PreçoTotal");
        localStorage.removeItem("CodigoDesconto");

        displayCarrinho();
        carregaCarrinho();

}





function dadosAreaCliente(){
    let areaAlterarDados = document.querySelector(".tudo");
    let ultimaCompra = localStorage.getItem("NumeroDeCompras");
    let montanteAreaCliente = localStorage.getItem("MontanteAreaCliente");
    if(areaAlterarDados){
        document.getElementById("nomeAreaCliente").innerText = "Nome: " + utilizador[0] + " " + utilizador[1]; 
        document.getElementById("ruaAreaCliente").innerText = "Morada: " + utilizador[4]; 
        document.getElementById("codigoAreaCliente").innerText = "Código postal: " + utilizador[6];
        document.getElementById("localidadeAreaCliente").innerText = "Localidade: " + utilizador[5]; 
        document.getElementById("telAreaCliente").innerText = "Telemóvel: " + utilizador[8]; 
        document.getElementById("nifAreaCliente").innerText = "NIF: " + utilizador[7];

        if(localStorage.getItem("NumeroDeCompras") == null){
            pNumeroFatura.style.display = "none";
            pMontanteFatura.style.display = "none";
        }

        if(ultimaCompra != "111000"){
            //pNumeroFatura.style.display = "block";
            //pMontanteFatura.style.display = "block";
            document.getElementById("pNumeroFatura").innerText = "Número Fatura: " + ultimaCompra;
            document.getElementById("pMontanteFatura").innerText = "Montante: " + montanteAreaCliente + ",00€"; 
        }
    }
}

dadosAreaCliente()


function terminarSessao(){
    areaCliente.style.opacity = "0.1";
    alertaAreaCliente.style.display = "block";
}

function cancelar(){
    areaCliente.style.opacity = "1";
    alertaAreaCliente.style.display = "none";
}


function confirmar(){
    document.getElementById("quantidadeCarrinho").innerHTML ="0";
    document.getElementById("pIniciar").innerHTML ="Inicar Sessão";

    localStorage.removeItem("Utilizador");
    localStorage.removeItem("QuantidadeCarrinho");
    localStorage.removeItem("ProdutosNoCarro");
    localStorage.removeItem("PreçoTotal");

    displayCarrinho();
    carregaCarrinho();
    window.location.href = "Home.html";
}



for (let i=0; i < fav.length; i++){              //quando clica vai correr todos os botoes ".adicionar ao carrinho"
    fav[i].addEventListener('click', () =>{
        quantFavoritos(produtos[i]);
    })
}


function carregaFavoritos(){                       // carrega a pagina para aparecer o numero de itens no carrinho
let quantFavoritos = localStorage.getItem('QuantidadeFavoritos');

if(quantFavoritos){
    document.querySelector('#quantidadeFavoritos').textContent = quantFavoritos;
}
}

function quantFavoritos(produtos){                 // calcula a quantidade de produtos adicionados ao carrinho
let quantFavoritos = localStorage.getItem('QuantidadeFavoritos');
quantFavoritos = parseInt(quantFavoritos);

if(quantFavoritos){
    localStorage.setItem('QuantidadeFavoritos', quantFavoritos + 1);
    document.querySelector('#quantidadeFavoritos').textContent = quantFavoritos + 1;
}else{
    localStorage.setItem('QuantidadeFavoritos', 1);
    document.querySelector('#quantidadeFavoritos').textContent = 1;
}

defFav(produtos);
}

function defFav(produtos){
let favItens = localStorage.getItem('ProdutosNosFavoritos');
favItens = JSON.parse(favItens);


if(favItens != null){

    if(favItens[produtos.subTitulo] == undefined){
        favItens = {
            ...favItens,
            [produtos.subTitulo]: produtos
        }
    }
    favItens[produtos.subTitulo].quantidade +=1;
}else{
    produtos.quantidade = 1;
    favItens = {
        [produtos.subTitulo]:produtos
    }
}

localStorage.setItem("ProdutosNosFavoritos", JSON.stringify(favItens));

}

let favItens = localStorage.getItem("ProdutosNosFavoritos");
//console.log(favItens)



function displayFavoritos(){
let favItens = localStorage.getItem("ProdutosNosFavoritos");
//console.log(favItens)
favItens = JSON.parse(favItens);


let divFavoritosProdutos = document.querySelector(".divFavoritos");



if(favItens && divFavoritosProdutos){
    
    avisoFavCar.style.display = "none";
    divImagemCriarConta.style.display = "none";

    divFavoritosProdutos.innerHTML = '';
    Object.values(favItens).map(item => {
        divFavoritosProdutos.innerHTML += `
        <div class="produtofav">
            <div id="imgProduto">
                <img src="./${item.img}">
            </div>
            <div id="titulosProduto">
                <span id="nomeProduto">${item.nome}</span><br><br>
                <span class="subNomeProduto">${item.subTitulo}</span>
            </div>
            <span id="precoProduto">${item.preco},00 €</span>
            <button class="lixo2"></button>   
        </div>
    `;
    });

    apagarProdutoFav();
}
}


function apagarProdutoFav() {
let botaoLixo2 = document.querySelectorAll('.lixo2');
let quantFavoritos = localStorage.getItem('QuantidadeFavoritos');
let favItens = localStorage.getItem('ProdutosNosFavoritos');
favItens = JSON.parse(favItens);
let nomeProduto2;

for(let i=0; i < botaoLixo2.length; i++) {
    botaoLixo2[i].addEventListener('click', () => {
        //console.log("lista Botoes lixo" + botaoLixo)
        
        nomeProduto2 = botaoLixo2[i].parentElement.getElementsByClassName('subNomeProduto')[0].innerText;
        //console.log(nomeProduto.getElementsByClassName('subNomeProduto')[0].innerText);
        //console.log(nomeProduto);

        //nomeProduto = botaoLixo[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'');
        //console.log(nomeProduto);
        localStorage.setItem('QuantidadeFavoritos', quantFavoritos - 1);
        
        delete favItens[nomeProduto2];
        localStorage.setItem('ProdutosNosFavoritos', JSON.stringify(favItens));

        displayFavoritos();
        carregaFavoritos();
    })
}
}

carregaFavoritos();
displayFavoritos();


function alterarDados(){
    window.location.href = "AlterarDados.html"
}


var nome2 = document.getElementById("nomeAlt");
var apelido2 = document.getElementById("apelidoAlt");
var emailCriarConta2 = document.getElementById("emailCriarContaAlt");
var morada2 = document.getElementById("moradaAlt");
var localidade2 = document.getElementById("localidadeAlt");
var codigoPostal2 = document.getElementById("codigoPostalAlt");
var nif2 = document.getElementById("nifAlt");
var tel2 = document.getElementById("telAlt");

var nome2Validade = false;
var apelido2Validade = false;
var emailCriarConta2Validade = false;
var morada2Validade = false;
var localidade2Validade = false;
var codigoPostal2Validade = false;
var nif2Validade = false;
var tel2Validade = false;





    if(nome2 != null){
        nome2.onkeydown = function(){ 
            var letras = /^[A-Za-z]+$/;
            if(nome2.value.length == 0){
                avisoErros2.innerHTML = "";
            }else{
                if(nome2.value.match(letras)){
                    avisoErros2.innerHTML = "";
                    nome2Validade = true;
                }else{
                    avisoErros2.innerHTML = "Nome inválido.";
                }
            }
        }
    }
    
    if(apelido2 != null){
        apelido2.onkeydown = function(){ 
            var letras = /^[A-Za-z]+$/;
            if(apelido2.value.length == 0){
                avisoErros2.innerHTML = "";
            }else{
                if(apelido2.value.match(letras)){
                    avisoErros2.innerHTML = "";
                    apelido2Validade = true;
                }else{
                    avisoErros2.innerHTML = "Apelido inválido.";
                }
            }
        }
    }
    
    
    if(emailCriarConta2 != null){
    emailCriarConta2.onkeydown  = function(){
        var arrobaPos = emailCriarConta2.value.indexOf("@");
        var pontoPos = emailCriarConta2.value.indexOf(".");
    
        if(emailCriarConta2.value.length == 0){
            avisoErros2.innerHTML = "";
        }else{
            if (arrobaPos < 1 || pontoPos < arrobaPos + 2 || pontoPos + 2 >=emailCriarConta2.value.length){
                avisoErros2.innerHTML = "Email inválido.";
                avisoErros2.style.color = "red";
            } else{
                avisoErros2.innerHTML = "";
                emailCriarContaValidade2 = true;
            }
        }
    }
    }
    
    
    
    if(morada2 != null){
        morada2.onkeydown = function() {
            if(morada2.value.length == 0){
                avisoErros2.innerHTML = "";
            }else{
                if(morada2.value.length <= 5){
                    avisoErros2.innerText = "Morada incompleta.";
                }else{
                    avisoErros2.innerText = "";
                    morada2Validade = true;
                }
            }
        }
    }
    
    if(codigoPostal2 != null){
        var hifenPos = codigoPostal2.value.indexOf("-");
    
        codigoPostal2.onkeydown = function() {
            if(codigoPostal2.value.length == 0){
                avisoErros2.innerHTML = "";
            }else{
                if(hifenPos != 4 && codigoPostal2.value.length != 7){
                    avisoErros2.innerText = "Código postal inválido.";
                }else{
                    avisoErros2.innerText="";
                    codigoPostal2Validade= true;
                }
            }
        }
    }
    
    if(nif2 != null){
        nif2.onkeydown = function(){
            if(nif2.value.length == 0){
                avisoErros2.innerHTML = "";
            }else{
                if(nif2.value.length != 8 || isNaN(nif2.value)){
                    avisoErros2.innerText = "NIF inválido.";
                }else{
                    avisoErros2.innerText="";
                    nifValidade= true;
                }
            }
        }
    }
    
    
    if(tel2 != null){
        tel2.onkeydown = function(){
            if(tel2.value.length == 0){
                avisoErros2.innerHTML = "";
            }else{
                if(tel2.value.length != 8 || isNaN(tel2.value) || tel2.value[0] != 9){
                    avisoErros2.innerText = "Telemóvel inválido."
                }else{
                    avisoErros2.innerText="";
                    tel2Validade= true;
                }
            }
        }
    }   
