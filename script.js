const add = function(a,b) {
    return(a+b);
  };
  
  const subtract = function(a,b) {
    return(a-b);
  };
  
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
  
  const multiply = function(x) {
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
  };
  
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