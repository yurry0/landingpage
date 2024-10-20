const form = document.getElementById('contato-form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required')
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
let errorFlag = true;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidate();
    messageValidate();

    if(errorFlag === false){
        console.log(errorFlag);
        mostrarModal();
        errorFlag = true;
        campos[0].value = '';
        campos[1].value = '';
        campos[2].value = '';
        spans[index].style.display = 'none';
        campos[index].style.border = 'none';
    }

    
});

function setError(index) {
    campos[index].style.border = '3px solid #e63636'
    spans[index].style.display = 'flex';
    errorFlag = true;
    console.log(errorFlag);

}

function removeError(index) {
    spans[index].style.display = 'none';
    campos[index].style.border = '3px solid #23DC3D'
    errorFlag = false;
    console.log(errorFlag);
}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
    } else {
        removeError(0);
    }


}

function emailValidate() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    } else {
        removeError(1);
    }
}

function messageValidate() {
    if (campos[2].value === '') {
        setError(2);
    }
    else {
        removeError(2);
    }
}

/* MODAL */
const modal = document.querySelector("dialog");
const buttonModal = document.getElementById("closeModal");
function mostrarModal(){
    modal.showModal();
}
buttonModal.onclick = () =>{
    modal.close();
}