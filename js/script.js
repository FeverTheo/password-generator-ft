var takepassword = document.getElementById("mdp");
// Fonction
function generatePassword() {
    var password='';
    var caracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz' + '0123456789' + '#?!@$%^&*-_';
    for (var i = 0; i < 12; i++) {
        var char = Math.floor(Math.random()*caracteres.length);
        password += caracteres.charAt(char);
    }
    return password;
}
function geneOn() {
    takepassword.innerHTML = generatePassword();
}
