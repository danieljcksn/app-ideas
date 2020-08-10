function converter(){
    const num = document.getElementById('num')
    
    var numero = parseInt(num.value)
    var numero_res = numero
    //Bin armazenará o resultado em número binário
    var bin = "["

    while(numero > 0){
        bin += (numero % 2).toString()
        console.log(bin)
        
        numero = parseInt(numero / 2)
    }
    bin += ']'
    //Após a execução, bin possuirá o valor binário, no entanto invertido.

    //É necessário inverter novamente para finalizar
    var binI = '['

    for(var i = bin.length - 2; i > 0; i--){
        binI += bin[i]
    }
    
    binI += ']'

    var txt = document.getElementById('result')

    if(binI.length == 2)
        txt.innerText = "Insira algum número =)"
    else
        txt.innerText = `O número ${numero_res} é equivalente à ${binI} em binário`
}