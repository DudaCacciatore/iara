const senhaInput = document.getElementById('senha');
const toggleSenha = document.getElementById('toggleSenha');
 
toggleSenha.addEventListener('click', function () {
    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        toggleSenha.textContent = 'visibility_off';
    } else {
        senhaInput.type = 'password';
        toggleSenha.textContent = 'visibility';
    }
});
 