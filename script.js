
const btn_equal = document.querySelector('#equal');
const btn_per = document.querySelector('#per');
const btn_eraser = document.querySelector('#eraser');
const btn_neg = document.querySelector('#neg');
const btn_clear = document.querySelector('#clear');
const digits = document.querySelectorAll('button.num');
const operators = document.querySelectorAll('button.oper');


var screen = document.querySelector('#screen');
var value = "";
var values = ["","","",""];
var num;
var eraser="";


function operate(a,oper,b){

  if(oper === "+")
    return(add(a,b));
  
  else if(oper === "-")
    return(subtract(a,b));
  
  else if(oper === "*")
    return(multiply(a,b));  
  
  else if(oper === "/")
    return(divide(a,b));


}


btn_clear.addEventListener('click', () => {

  screen.textContent = "";
  values = ["","","",""];
  value = "";

});

btn_per.addEventListener('click', () => {


  if(Number(value) % 1 != 0){

    value = (Number(value).toFixed(2)).toString();
    screen.textContent = value;
  }
  
  else{

    value = (Number(value)/100).toString();
    screen.textContent = value;
  }
   

});

btn_eraser.addEventListener('click', () => {


  if(value.length === 1){

    value = "";
    values[0] = "";
    screen.textContent = "";
    console.log("valor 0:"+values[0]+" Valor 1:"+values[1]+" Valor 2:"+values[2]);
  }
  if(value.length > 1){

    eraser = value.toString();
    eraser = eraser.slice(0, -1);
    screen.textContent = eraser;
    value = eraser;
    console.log("valor 0:"+values[0]+" Valor 1:"+values[1]+" Valor 2:"+values[2]);
    
  }
  if(((values[0]).toString()).length === 1){

    value = "";
    values[0] = "";
    screen.textContent = "";
    console.log("S1valor 0:"+values[0]+" Valor 1:"+values[1]+" Valor 2:"+values[2]);

  }
  if(((values[0]).toString()).length >= 1){

    eraser = values[0].toString();
    eraser = eraser.slice(0, -1);
    screen.textContent = eraser;
    values[0] = Number(eraser);
    console.log("S2valor 0:"+values[0]+" Valor 1:"+values[1]+" Valor 2:"+values[2]);

  }
  

 /* if(value === "" && values[0]!= ""){

   
    eraser = values[0].toString();
    eraser = eraser.slice(0, -1);
    screen.textContent = eraser;
    values[0] = Number(eraser);
    console.log("entra al primero");
    console.log("valor 0:"+values[0]+" Valor 1:"+values[1]+" Valor 2:"+values[2]);
    

  }
  else if(value === "" && values[0] === ""){

    
    screen.textContent = "";
    value = "";
    console.log("entra al segundo");
    console.log("valor 0:"+values[0]+" Valor 1:"+values[1]+" Valor 2:"+values[2]);

  }
  else{
    value = value.slice(0, -1) ;
    screen.textContent = "";
    value = "";
    console.log("entra al tercero");
    console.log("valor 0:"+values[0]+" Valor 1:"+values[1]+" Valor 2:"+values[2]);
  } */
  

});


btn_neg.addEventListener('click', () => {

  if(value === "" && values[0]!= ""){

    values[0] = -1* values[0];
    screen.textContent = values[0];

  }
  else{
    num = Number(value);
    num = num * -1;
    value = num.toString();
    screen.textContent = value;
    //console.log("entro al else");
  }   

});



btn_equal.addEventListener('click', () => {


  console.log(values[0]+values[1]+values[2]);
  if((values[0] != "" || values[0] === 0) && value != ""){

    values[2] = Number(value);
    value = "";
    console.log("el valor 2 es:"+values[2]);

  }
 

  let cont =0;
  for(let i=0; i<3;i++){

      if(values[i] != "" || values[0] === 0){
        cont++;
      }
  }
  if(cont === 3){
    values[3] = "=";
    console.log(values[0]+values[1]+values[2]);
    values[0] = operate(values[0],values[1],values[2]);
    values[1] = "";
    screen.textContent = values[0];
    console.log(values[0]);
    
  }

});



operators.forEach((button) => {

  button.addEventListener('click', () => {

    if(button.id === "add"){

      
      if(values[0] === ""){

        values[0] = Number(value);
        value = "";
        console.log("el value 0 es:" + values[0]);
        
      }
      else if(values[3] === ""){

        values[0] = Number(value);
        value = "";
        console.log("el value 0 es:" + values[0]);

      }
      values[1] = "+";
    }

    if(button.id === "subt"){

     
      if(values[0] === ""){

        values[0] = Number(value);
        value = "";
        
      }
      else if(values[3] === ""){

        values[0] = Number(value);
        value = "";
        console.log("el value 0 es:" + values[0]);

      }
      values[1] = "-";
    }

    if(button.id === "divide"){

      //console.log("/");
      if(values[0] === ""){

        values[0] = Number(value);
        value = "";
        console.log("el value 0 es:" + values[0]);
        
      }
      else if(values[3] === ""){

        values[0] = Number(value);
        value = "";
        console.log("el value 0 es:" + values[0]);

      }
      values[1] = "/";
    }

    if(button.id === "multi"){

      //console.log("*");
      if(values[0] === ""){

        values[0] = Number(value);
        value = "";
        
      }
      else if(values[3] === ""){

        values[0] = Number(value);
        value = "";
        console.log("el value 0 es:" + values[0]);

      }
      values[1] = "*";
    }

 /*   if(button.id === "per"){

      //console.log("%");
      if(values[0] === ""){

        values[0] = Number(value);
        value = "";
        
      }
      else if(values[3] === ""){

        values[0] = Number(value);
        value = "";
        console.log("el value 0 es:" + values[0]);

      }
      values[1] = "%";
    } */


  });

});

digits.forEach((button) => {

  button.addEventListener('click', () => {


    if(button.id === "cero"){

      if(value != 0){
        value = value + "0";
         screen.textContent = value;
      }
      else{
        value ="0";
        screen.textContent = value;
      }
      
    }

    if(button.id === "one"){

        value = value + "1";
        screen.textContent = value;
        //console.log(0);
        if(values[3] === "="){

          values[3] = "";

        }
     
    }

    if(button.id === "two"){


        value = value + "2";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);
      
      
    }

    if(button.id === "three"){


        value = value + "3";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);

      
    }

    if(button.id === "four"){


        value = value + "4";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);

      
    }

    if(button.id === "five"){


        value = value + "5";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);

      
    }

    if(button.id === "six"){


        value = value + "6";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);

     
    }

    if(button.id === "seven"){


        value = value + "7";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);

    }

    if(button.id === "eight"){


        value = value + "8";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);

      
    }

    if(button.id === "nine"){


        value = value + "9";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
        //console.log(0);

      
    }

    if(button.id === "float"){

      // no Found it
      if (value.indexOf('.') <= -1){
        value = value + ".";
        screen.textContent = value;
        if(values[3] === "="){

          values[3] = "";

        }
      //console.log(0);
      }
      
    }

  });

});




function add(a,b) {

  let result = a + b;
  if(result % 1 != 0){
    result = Number(result.toFixed(2));
  }
    return(result);

  };
  
function subtract(a,b) {

  let result = a - b;
  if(result % 1 != 0){
    result = Number(result.toFixed(2));
  }
    return(result);
  };

function multiply(a,b){

  let result = a * b;
  if(result % 1 != 0){
    result = Number(result.toFixed(2));
  }
    return(result);
};

function divide(a,b){

  if(a === 0)
    return("Error");
  else{

    let result = a / b;
    if(result % 1 != 0){
      result = Number(result.toFixed(2));
    }
      return(result);
  }
};

function modul(a,b){

  let result = a % b;
  if(result % 1 != 0){
    result = Number(result.toFixed(2));
  }
    return(result);
}

  
  const sum = function(x) {
    let result = 0;
    if(x.length === 0){
      return 0;
    }
    else{
      for(let i=0; i<x.length;i++){
        result = result + x[i];
      }
      return result;
    }
      
  };
  
  /*const multiply = function(x) {
    let result = 1;
    if(x.length === 0){
      return 0;
    }
    else{
      for(let i=0; i<x.length;i++){
        result = result * x[i];
      }
      return result;
    }
  }; */
  
  const power = function(x,y) {
    let result = 1;
    for(let i=0;i<y;i++){
      result = result*x;
    }
    return result;
  };
  
  const factorial = function(x) {
    let result = 1;
    if(x === 0)
      return 1;
    for(let i=x;i>0;i--){
      result = result * i;
    }
    return result;
  };