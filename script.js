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

    
