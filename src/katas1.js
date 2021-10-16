function oneThroughTwenty() {
   
  let numeros = [];

  for (let counter = 1; counter <= 20; counter ++)
  {
    numeros.push(counter)
  }

  return numeros;
    
}

console.log("oneThroughTwenty = "+oneThroughTwenty())




function evensToTwenty() {
    
  let numerosPares = [];

  for(let counter = 1; counter <= 20; counter ++)
  {
    if (counter % 2 ===0)
    {
      numerosPares.push(counter)
    }
  }
  
  return numerosPares
  
}

console.log("evensToTwenty = "+evensToTwenty())




function oddsToTwenty() {

  let numerosImpares = [];

  for(let counter = 1; counter <=20; counter ++)
  {
    if(counter % 2 !== 0)
    {
      numerosImpares.push(counter)
    }
  }
    
  return numerosImpares
   
}

console.log("oddsToTwenty = "+oddsToTwenty())




function multiplesOfFive() {
    
  let multiplosFive = [];

  for( counter = 1; counter <= 100; counter ++)
  {
    if(counter % 5 === 0)
    {
      multiplosFive.push(counter)
    }
  }
  
  return multiplosFive

}

console.log("multiplesOfFive = "+multiplesOfFive())




function squareNumbers() { 

  let quadradosPerfeitos = [] 
  let resultado = 0;
  for(counter = 1; resultado < 100; counter++)
  {
    resultado = counter * counter;
    quadradosPerfeitos.push(resultado)
  }
  return quadradosPerfeitos
}

console.log("squareNumbers = "+squareNumbers(100))




function countingBackwards() {
    
  let numerosInverso = []

  for(counter =20; counter >=1; counter --)
  {
    numerosInverso.push(counter)
  }

  return numerosInverso

}

console.log("countingBackwards = "+countingBackwards())




function evenNumbersBackwards() {
    
  let numerosInversoPares = [];

  for(let counter = 20; counter >= 1; counter --)
  {
    if (counter % 2 ===0)
    {
      numerosInversoPares.push(counter)
    }
  }
  
  return numerosInversoPares
  
}

console.log("evenNumbersBackwards = "+evenNumbersBackwards())




function oddNumbersBackwards() {
    
  let numerosInversoImpares = [];

  for(let counter = 20; counter >=1; counter --)
  {
    if(counter % 2 !== 0)
    {
      numerosInversoImpares.push(counter)
    }
  }
    
  return numerosInversoImpares
}

console.log("oddNumbersBackwards = "+oddNumbersBackwards())




function multiplesOfFiveBackwards() {
    
  let multiplosFiveInverso = [];

  for( counter = 100; counter >= 1; counter --)
  {
    if(counter % 5 === 0)
    {
      multiplosFiveInverso.push(counter)
    }
  }
  
  return multiplosFiveInverso
}

console.log("multiplesOfFiveBackwards = "+multiplesOfFiveBackwards())




function squareNumbersBackwards() {

  let quadradosPerfeitosInverso = [] 
  let resultado = 0;
  for(counter = 10; counter >= 1; counter--)
  {
    resultado = counter * counter;
    quadradosPerfeitosInverso.push(resultado)
  }
  return quadradosPerfeitosInverso
}
  
console.log("squareNumbersBackwards = "+squareNumbersBackwards())

