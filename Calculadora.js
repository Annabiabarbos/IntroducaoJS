function calcular(){
    event.preventDefault();

    //variaveis para cada número
    //let n1 = parsetFloat.document.getElementById('n1').value;
     let n1 = parseFloat(document.getElementById('n1').value);  


    // let n2 = parseFloat.document.getElementById('n2').value;
    let  n2 = parseFloat(document.getElementById('n2').value);

    let op = document.getElementById('operacao').value;

    let resultado;

    if(n1 == NaN || n2 == NaN){
        alert("Ê necessario digitar apenas números");
        return;
    }

    if (op == '+'){
        resultado = somar(n1 , n2);
        

    } else if (op == '-'){
        resultado = subtrair(n1 , n2);
        
      
    } else if (op == '/'){
        resultado = dividir(n1, n2);
       
    } else if (op == '*'){
        resultado = multiplicar (n1, n2);
        
       
    }
   
    document.getElementById('result').innerText = resultado;
    
}


function subtrair (x , y){
   return x  -  y;
}

function somar (x , y){
    return x + y;
}

function dividir (x , y){
    if (y==0){
        return "Não é um número";
    }
    return x / y;
}

function multiplicar(x, y){
    return x * y ;
}