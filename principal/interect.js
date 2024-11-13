function showDetails(protocolId){
    const allDetails = document.querySelectorAll('.protocol-details');

    allDetails.forEach(detail => {
        if (detail.id !== protocolId) {
            detail.classList.remove('visible');
        }
    });
    
    const selectedElement = document.getElementById(protocolId);
    if(selectedElement) {
        selectedElement.classList.toggle('visible');
    }
}
