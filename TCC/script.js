document.getElementById("btn1").onclick = function () {
    
    document.getElementById("overlay").style.display = "block";
    const popup = document.getElementById("popup");
    popup.classList.add("show");
}

document.getElementById("closePopup").onclick = function () {

    const popup = document.getElementById("popup");
    popup.classList.remove("show");

    
    setTimeout(() => {
        document.getElementById("overlay").style.display = "none";
    }, 180); 
}

window.onclick = function (event) {
    const popup = document.getElementById("popup");
    const overlay = document.getElementById("overlay");

  
    if (event.target === popup || event.target === overlay) {
        popup.classList.remove("show");

        
        setTimeout(() => {
            overlay.style.display = "none";
        }, 180); 
    }
}
function validarCampos() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos!');
        return false; 
    }
    return true; 
}


function salvarDados() {
    if (!validarCampos()) {
        return; 
    }

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

   
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);

    alert('Dados salvos com sucesso!');
}


const tr = document.getElementById("tv");

const re = document.createElement("p");

re.innerHTML = "A InfoTech ES tem se destacado no fortalecimento do ecossistema tecnológico<br>do Espírito Santo, impulsionando a inovação no ecossistema tecnológico local.";

tr.appendChild(re);


function cada