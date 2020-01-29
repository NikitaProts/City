// стартовый экран 
window.onload  = function() {
    document.getElementById('inputCity').value =  localStorage.getItem('city');

    if (document.getElementById('inputCity').value.length == 0){
        document.getElementById('inputCity').placeholder=  'Введите сюда' ;
        document.getElementById('h3').innerHTML = 'А с какого вы города?';
    }else {
        document.getElementById('inputCity').value =  localStorage.getItem('city');
        document.getElementById('h3').innerHTML = 'Ваш город  - ' + document.getElementById('inputCity').value;
    }
}

// основной код 
function saveCity() {
    localStorage.setItem('city', document.getElementById('inputCity').value);
    document.getElementById('h3').innerHTML = 'Ваш город  - ' + document.getElementById('inputCity').value;
       
}

function deleteCity() {
    localStorage.removeItem('city');
    document.getElementById('h3').innerHTML = 'Введите город :)' ;
    document.getElementById('inputCity').placeholder = 'Вот сюда';
    document.getElementById('inputCity').value = ''
    alert('Значение удалено.');
}