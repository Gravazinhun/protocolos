function showDetails(protocol) {
    // Esconde todos os detalhes
    let details = document.querySelectorAll('.protocol-details');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });

    // Exibe os detalhes do protocolo selecionado
    let selectedDetail = document.getElementById(protocol);
    if (selectedDetail) {
        selectedDetail.style.display = 'block';
    }
}