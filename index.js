function send() {
  let numberEl = document.getElementById('num').value
  let number = parseInt(numberEl)
  if (number % 3 === 0 &&  number % 5 === 0) {
   document.getElementById('output').innerHTML = 'FIZZBUZZ'
  }else if(number % 5 === 0){
    document.getElementById('output').innerHTML = 'BUZZ'
  }else if(number% 3 === 0){
     document.getElementById('output').innerHTML = 'FIZZ'
  }else{
     document.getElementById('output').innerHTML = "Bu son 3 ga ham 5 ga ham bo'linmaydi"
  }
}
