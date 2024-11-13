document.addEventListener('DOMContentLoaded', function() {
    // Seletor do botão para mostrar o edital completo
    const showEditalBtn = document.getElementById('showEditalBtn');
    const fullEdital = document.getElementById('fullEdital');

    // Quando o botão for clicado, mostrar o edital completo
    showEditalBtn.addEventListener('click', function() {
        fullEdital.classList.toggle('hidden');
        
        if (fullEdital.classList.contains('hidden')) {
            showEditalBtn.textContent = "Mostrar Referências";
        } else {
            showEditalBtn.textContent = "Ocultar Referências";
        }
    });
});
