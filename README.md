
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ANIVERSARIO DA MIA MOMOLADADADADA - QUIZ</title>
</head>
<style>
    .titulo {
        display: flex;
        justify-content: center;
        color: rgb(255, 123, 0);
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 1000px;
        margin-left: 50px;
    }
    .pergunta1 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 580px;
    }
    .pergunta2 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 350px;
    }
    .pergunta3 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 350px;
    }
    .pergunta4 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 290px;
    }
    .pergunta5 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 480px;
    }
    .pergunta6 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 440px;
    }
    .pergunta7 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 190px;
    }
    .pergunta8 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 810px;
    }
    .pergunta9 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 680px;
    }
    .pergunta10 {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
        padding: 5px;
        width: 230px;
    }

    .fundo {
        position: fixed;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        z-index: -1;
    }

    #botãoP1,
    #botãoP2,
    #botãoP3,
    #botãoP4,
    #botãoP5,
    #botãoP6,
    #botãoP7,
    #botãoP8,
    #botãoP9,
    #botãoP10,
    #BotãoF {
        background-color: rgb(255, 174, 228) !important;
        border: 1px solid rgb(148, 119, 96);
        border-radius: 100px;
    }

    .input {
        font-weight: bold;
        accent-color: rgb(255, 174, 228);
    }

    .foto_dela {
        position: absolute;
        top: 200px;
        width: 400px;
        height: 300px;
        left: 600px;
    }
    .foto_dela2 {
        position: absolute;
        top: 1100px;
        width: 225px;
        height: 200px;
        left: 800px;
    }

</style>
<body class="body">
    <img src="IMG-20261108-WA0017.jpg" alt="foto da mia momolada 2" class="foto_dela2">
    <img src="IMG-20261108-WA0021.jpg" alt="foto da mia momolada" class="foto_dela">
    <img src="fundo.jpg" alt="fundo com bolinhas" class="fundo">
    <div class="titulo">
        <h1>QUIZ SOBRE EU E MIA MOMOLADAAAAAAA</h1>
    </div>
    <div>
        <section>
            <h3 class="pergunta1">Quando foi o dia da nossa primeira trocas de mensagens no Whatssap?</h3>
            <label class="input">
                <input type="radio" id="resposta_certa1" name="pergunta1" class="desativado">18/02/24
                <input type="radio" id="resposta_errada1" name="pergunta1" class="desativado">02/03/24
                <input type="radio" id="resposta_errada1" name="pergunta1" class="desativado">20/02/24
                <input type="radio" id="resposta_errada1" name="pergunta1" class="desativado">15/02/24
                <p id="resposta1"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP1">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta2">Quando que foi o dia que a gente se casou?</h3>
            <label class="input">
                <input type="radio" id="resposta_errada2" name="pergunta2" class="desativado">19/04/26
                <input type="radio" id="resposta_errada2" name="pergunta2" class="desativado">23/04/26
                <input type="radio" id="resposta_certa2" name="pergunta2" class="desativado">21/04/26
                <input type="radio" id="resposta_errada2" name="pergunta2" class="desativado">20/04/26
                <p id="resposta2"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP2">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta3" >Quantas rosas tem no buque que eu te dei?</h3>
            <label class="input">
                <input type="radio" id="resposta_errada3" name="pergunta3" class="desativado"> 5
                <input type="radio" id="resposta_certa3" name="pergunta3" class="desativado"> 7
                <input type="radio" id="resposta_errada3" name="pergunta3" class="desativado"> 6
                <input type="radio" id="resposta_errada3" name="pergunta3" class="desativado"> 8
                <p id="resposta3"></p>
            </label>  
        </section>
        <section>
            <button id="botãoP3">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta4" >Qual manga eu te dei ano passado?</h3>
            <label class="input">
                <input type="radio" id="resposta_certa4" name="pergunta4" class="desativado"> Hanako volume 4
                <input type="radio" id="resposta_errada4" name="pergunta4" class="desativado"> Hanako volume 3
                <input type="radio" id="resposta_errada4" name="pergunta4" class="desativado"> Hanako volume 5
                <input type="radio" id="resposta_errada4" name="pergunta4" class="desativado"> Jujutsu Kaisen volume 67
                <p id="resposta4"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP4">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta5">Qual foi o dia em que a gente saiu junto pela primeira vez?</h3>
            <label class="input">
                <input type="radio" id="resposta_errada5" name="pergunta5" class="desativado"> 15/04/26
                <input type="radio" id="resposta_errada5" name="pergunta5" class="desativado"> 18/04/26
                <input type="radio" id="resposta_errada5" name="pergunta5" class="desativado"> 20/04/26
                <input type="radio" id="resposta_certa5" name="pergunta5" class="desativado"> 19/04/26
                <p id="resposta5"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP5">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta6">Qual foi o manga que eu te dei de dia dos namorados?</h3>
            <label class="input">
                <input type="radio" id="resposta_errada6" name="pergunta6" class="desativado"> Konosuba
                <input type="radio" id="resposta_errada6" name="pergunta6" class="desativado"> Hanako
                <input type="radio" id="resposta_certa6" name="pergunta6" class="desativado"> Frieren
                <input type="radio" id="resposta_errada6" name="pergunta6" class="desativado"> Solo leveling aura 67 42
                <p id="resposta6"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP6">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta7">Porque eu fiz um quiz?</h3>
            <label class="input">
                <input type="radio" id="resposta_errada7" name="pergunta7" class="desativado"> Porque sou preguiçoso
                <input type="radio" id="resposta_errada7" name="pergunta7" class="desativado"> Porque achei que voce iria gostar
                <input type="radio" id="resposta_certa7" name="pergunta7" class="desativado"> Porque isso nos traz lembranças
                <input type="radio" id="resposta_certa7" name="pergunta7" class="desativado"> Porque sim
                <p id="resposta7"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP7">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta8"> Está faltando pergunta sua ne? Você gostaria se eu começasse a berrar do nada em publico para todo mundo ouvir.</h3>
            <label class="input">
                <input type="radio" id="resposta_certa8" name="pergunta8" class="desativado"> Sim
                <input type="radio" id="resposta_errada8" name="pergunta8" class="desativado"> Depende
                <input type="radio" id="resposta_errada8" name="pergunta8" class="desativado"> Apenas não
                <input type="radio" id="resposta_errada8" name="pergunta8" class="desativado"> Nunca
            <p id="resposta8"></p>
            </label>
        </section>
        <section>
            <button id="botãoP8">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta9">Quando normalmente você se assusta ou leva uma surpresa, você faz um gesto, qual?</h3>
            <label class="input">
                <input type="radio" id="resposta_errada9" name="pergunta9" class="desativado"> Pular
                <input type="radio" id="resposta_errada9" name="pergunta9" class="desativado"> Se cobrir
                <input type="radio" id="resposta_errada9" name="pergunta9" class="desativado"> Dançar?
                <input type="radio" id="resposta_certa9" name="pergunta9" class="desativado"> Segurar os peitos
                <p id="resposta9"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP9">Confirmar</button>
        </section>
    </div>
    <div>
        <section>
            <h3 class="pergunta10">Oque eu mais amo em você?</h3>
            <label class="input">
                <input type="radio" id="resposta_certa10" name="pergunta10" class="desativado">Seus olhos, que parecem um horizonte de um mar aberto cheio de novas aventuras e sentimentos
                <br>
                <input type="radio" id="resposta_certa10" name="pergunta10" class="desativado">Seu cabelo enrolado, mostrando um ciclo de beleza onde se enrola mostrando uma bela cor ruiva
                <br>
                <input type="radio" id="resposta_certa10" name="pergunta10" class="desativado">Seu rosto, onde cada curva forma uma nova figura onde jamais podera ser reproduzida por tal beleza e divindade
                <br>
                <input type="radio" id="resposta_certa10" name="pergunta10" class="desativado">Sua personalidade, onde quando converso com você consigo criar novos mundos imaginarios com cada um ao seu lado por conseguir uma unica pessoa expressar e me dar novos sentimentos onde jamais serão esquecidos
                <br>
                <p id="resposta10"></p>
            </label>    
        </section>
        <section>
            <button id="botãoP10">Confirmar</button>
        </section>
    </div>
    <div>
        <br>
        <p id="contador"></p>
        <button id="BotãoF">Ver resultado</button>
    </div>
</body>
<script>
    // Primeira perguta

    let contador = 0
    let desativado = document.querySelectorAll(".desativado")
    const resultado = document.getElementById("contador")

    // Começa desabilitado
    document.getElementById("BotãoF").disabled = true

    for ( let i = 1; i <= 10; i++) {
        
        document.getElementById(`botãoP${i}`).addEventListener("click", function() {

            this.disabled = true

            let radios = document.querySelectorAll(`input[name="pergunta${i}"]`)
            radios.forEach(function(radio) {
                radio.disabled = true
            })
            
            verficarPerguntas()

            if (document.getElementById(`resposta_certa${i}`).checked) {
                document.getElementById(`resposta${i}`).textContent = "Correto"
                contador += 1
                document.getElementById(`resposta${i}`).style.color = "green"
            } else {
                document.getElementById(`resposta${i}`).textContent = "Errada"
                document.getElementById(`resposta${i}`).style.color = "red"
            }
        })
    }

    

    document.getElementById("botãoP10").addEventListener("click", function() {

        radios = document.querySelectorAll('input[name="pergunta10"]')
        radios.forEach(function(radio) {
            radio.disabled = true
        })

        verficarPerguntas()

        document.getElementById("resposta10").textContent = "Correto"
        document.getElementById("resposta10").style.color = "green"

        this.disabled = true
        this.textContent = "Você acha mesmo que eu gosto mais de uma parte de você doque a outra? para ser bem sincero se você acreditou você é lele da cuca, porque tudo em você eu amo igualmente, desde um gesto simples de uma ação até uma aparencia ou costume diario"
        contador += 1
    })

    function verficarPerguntas() {
        if (Array.from(desativado).every(function(desativados) {
            return desativados.disabled
        })) {
            document.getElementById("BotãoF").disabled = false
        }
    }

    document.getElementById("BotãoF").addEventListener("click", function() {
        contador *= 10
        contador += "%"
        document.getElementById("contador").textContent = contador
        this.disabled = true

        if ( resultado.textContent === "10%") {
            resultado.textContent = "errr.... 10% ;-;, isso era o ponto gratis que eu te dei, me fala se fez de proposito ne?"
        } else if (resultado.textContent === "20%") {
            resultado.textContent = " 20% serio? Ou você estava clicando errado ou era outra pessoa fazendo, NA VERDADE JA SEI, você está testando as possibildades de cada porcentagem, porque provavelmente eu falaria pa você testa no futuro!"
        } else if (resultado.textContent === "30%") {
            resultado.textContent = "30%, 1/3 das resposta, se não sabe muito das coisas ne? falando nisso acho que se você acertar 60% irei colocar 67 apoia?"
        } else if (resultado.textContent === "40%") {
            resultado.textContent = "42% AAAAAAAAAAAAAAAAAAAAAAAAA 42 FOUR TWO, se deve ter lido a do 30% e ter falado 'a do four two tambem?' EU PREVI VOCÊ NE? "
        } else if (resultado.textContent === "50%") {
            resultado.textContent = "50% só metade, esse não vai ter muita coisa escrita não, pode reiniciar o site, serio para de lê, caramba tabom vamos conversar, quer saber vou mandar mensagem para você falando 'VOU VER FULLMETALLL MORR' inclusive irei esperar você me responder, o meu deus, mor você não é gorda para com isso, você é uma divindade perfeita, deus lhe criou pensando exatamente ness proposito, cada olhar é um brilho extensivo que percorre cada celula do meu corpo apenas dizendo 'você tem que ficar com ela' mas enfim vamos mandar, tonara que você não brigue comigo, enfim vou fazer o 60% agora" 
        } else if (resultado.textContent === "60%") {
            resultado.textContent = "677777 ARAAAAAAAAAAAAAAAAAAAAA EGOOOOOOOOOOOO È ELA A MIA MOMOLADA ( ou não ( falo assim porque estou vergonha ( cololquei 3 parenteses dentro do mesmo quie vergonha ( vou parar com isso)))) A AURUDA QUE FAZ 67%%%%%%%%%%%%%%%%%"
        } else if (resultado.textContent === "70%") {
            resultado.textContent = "70% não passa de ano, só passa com 99% pa cima, na verdade 100%, estou me sentindo babaca pelo oque aconteceu, vou repetir minha frase do 50% no whatssap, para ser sincero estou muito arrependido, mas tabaum vou terminar esse site e já ir para o textinho do whattsapp"
        } else if (resultado.textContent === "80%") {
            resultado.textContent = "80% PARABENS JA ESTÀ SABENDO BASTANTE mas ainda errou >:c, mor me desculpa pelo oque eu fiz :c, acabou de dar uma animada, você acabou de me motivar, meu deus eu ti amo muito"
        } else if (resultado.textContent === "90%") {
            resultado.textContent = "COMO QE VOCE ERROU 1 ERA SÒ TER ACERTADO 1 EU ATÈ FACILITEI PARA VOCE!!!! >:CCCCC SE ME PAGA, pera da pa usa emoji né 😡😡😡, primeira vez que uso na programaçõa que maneiro, PARABNES (hum era so ter acertado) 90%"
        } else {
            resultado.textContent = "PARABENSNSNSN <EU AMROROORORORO 100% VOCEEE È INCIRVELEE P)ERFEITAAA MARAVILOHSOSAAA ACERTOUUU TDOODODOD UYPIYPYIPYY, FEIZZIZIZI ANIVERSARIOROROR"
        }
    })

    

</script>
</html>
