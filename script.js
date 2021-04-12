const nameUser = document.querySelector('.field__input');
const button = document.querySelector('.buttonMagic');
const userinformation = document.querySelector('.yourname');
button.addEventListener('click', () => {
    const nume = nameUser.value;
    const procesado = nume.replace(/\s+/g, '');
    if (nameUser.value != "") {
        for (var i = 0; i < nameUser.value.length; i++) {
            if (nameUser.value.charAt(i) == " ") {
                document.querySelector('.div1').textContent = nameUser.value.charAt(0) + ". " + nameUser.value.charAt(i + 1);
                document.querySelector('.alert').textContent = ""
                break;
            } else if (nameUser.value.indexOf(" ") == -1) {
                document.querySelector('.alert').textContent = "Please, put your first and last name with a space between them"
            }
        }
        userinformation.style.visibility = 'visible'

    } else {
        document.querySelector('.alert').textContent = "Information is missing"
    }

    for (var i = 0; i < nameUser.value.length; i++) {
        if (nameUser.value.charAt(i) == " ") {
            var start = 0;
            var final = i;
            var firstName = nameUser.value.substring(start, final);
            document.querySelector('.div2').textContent = firstName + ". " + nameUser.value.charAt(i + 1);
            break;
        }
        document.querySelector('.div3').textContent = procesado.substring(0, 2) + "" + procesado.substring(procesado.length - 2);
    }
    
    document.querySelector('.lucky-number').textContent = aleatorio(0, 999);
    document.querySelector('.nameInHtml').textContent = nameUser.value;
    document.querySelector('.nameLength').textContent = procesado.length;


});
function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * ((maximo + 1) - minimo) + minimo);
}
