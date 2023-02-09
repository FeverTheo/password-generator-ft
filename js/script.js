// var takepassword = 
// Fonction
function generatePassword() {
    var length = document.querySelector("#length").value;
    var password='';
    var caracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '#?!@$%^&*-_';
    for (var i = 0; i < length; i++) {
        var char = Math.floor(Math.random()*caracteres.length);
        password += caracteres.substring(char,char+1);
    }
    // return password;
    document.getElementById("mdp").setAttribute('value',password);
}

function geneOn() {
    // takepassword.innerHTML = generatePassword();
}

