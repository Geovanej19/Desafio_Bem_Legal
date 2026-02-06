
const console = require('console')
const readline = require('readline')


const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



const nomeEmpresa = "Viva Moda"
//Entrada do nome
entradaDeDados.question('\nDigite o seu nome: ', function(nome){
    let nomeCliente = nome

    //Entrada do nome do Produto
    entradaDeDados.question('\nInforme o nome do Produto que deseja comprar: ', function(produto){
        const nomeProduto = produto

        //Entrada do valor da compra
        entradaDeDados.question('\nInforme o valor da compra: R$', function(valor){
            const valorCompra = Number(valor)
            
            //Entrada do valor percentual de Juros
            entradaDeDados.question('\nDigite o percentual de juros: %', function(juros){
                const valorJuros = Number(juros)

                //Entrada do tempo para pagamento
                entradaDeDados.question('\nInforme o tempo a qual deseja pagar: ', function(tempo){
                    const tempoPagamento = Number(tempo)

                    //Calculo do Juros compostos
                    const capital = Number(valor)
                    const taxa = Number(juros)
                    const t = Number(tempo)

                    const i = taxa / 100
                    const Montante = capital * Math.pow(1 + i, t)

                    console.log('\nMontante Final: R$', Montante.toFixed(2))



                    console.log(`\n******************, ${nomeEmpresa}, ********************`)
                    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a): , ${nome}`)
                })

            })

        })
    })
})