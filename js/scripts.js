function showKrs(data, elem){
  var krElement = document.getElementById(data);
  krElement.classList.toggle('showKr');

  if(elem.textContent == 'Expandir KRs'){
    elem.innerHTML = 'Retrair KRs';
  }else{
    elem.innerHTML = 'Expandir KRs';

  }
  
  console.log(elem.textContet);
}

function quarterOkrs(data, elem){
  var links = document.querySelectorAll('.temporal-line a');
  for(var i = 0; i < links.length; i++){
    links[i].classList.remove('active');
  }

  elem.classList.add('active');

  var allQuarterElements = document.querySelectorAll('.quarter-okr-content');
  for (var i = 0; i < allQuarterElements.length; i++) {
    allQuarterElements[i].classList.add('hidden');
    allQuarterElements[i].classList.remove('show');
  }

  var quarterElement = document.getElementById(data);

  quarterElement.classList.remove('hidden');
  quarterElement.classList.add('show');
}