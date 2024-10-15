$(document).ready(function() {
    $('.infoBtn').on('click', function() {
        let description = $(this).data('description');
        $('#modalDescription').text(description);
        $('#infoModal').modal('show');
    });
})
//
