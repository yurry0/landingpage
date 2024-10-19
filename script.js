const form = document.getElementById('contato-form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    messageValidate();
    
});

function setError(index) {
    campos[index].style.border = '3px solid #e63636'
    spans[index].style.display = 'flex';
}

function removeError(index){

    spans[index].style.display = 'none';
    campos[index].style.border = '3px solid #23DC3D'
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }

    
}

function emailValidate() {
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }else{
        removeError(1);
    }
}

function messageValidate(){
    if(campos[2].value === ''){
        setError(2);
    }
    else{
        removeError(2);
    }
}