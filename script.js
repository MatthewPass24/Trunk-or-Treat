$(document).ready(function() {
// Show the trunk's description on hover
$('.gallery').on('mouseenter', function() {
    $(this).find('.description').fadeIn();
}).on('mouseleave', function() {
    $(this).find('.description').fadeOut();
});
//timeline functionality on schedule page
$('.button a').on('click', function() {
    const info = $(this).data('info'); 
    $('#modalDescription').text(info); 
        $('#infoModal').modal('show'); // Show the modal
    });
$('.infoBtn').on('click', function() {
    
})
})
