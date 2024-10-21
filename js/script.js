document.getElementById('btnAbrirModal').addEventListener('click', function () {
    var form = document.getElementById('formulario');

    // Verifica se o formulário é válido
    if (form.checkValidity()) {
        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
        modal.show();
    } else {
        form.reportValidity();
    }
});

// Reset do formulário
var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('hidden.bs.modal', function () {
    document.getElementById('formulario').reset();
});
