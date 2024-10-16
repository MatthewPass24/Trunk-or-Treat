$(document).ready(function() {
// Show description on hover
$('.gallery').on('mouseenter', function() {
    $(this).find('.description').fadeIn();
}).on('mouseleave', function() {
    $(this).find('.description').fadeOut();
});
//timeline functionality on schedule page
$('.button a').on('click', function() {
            const info = $(this).data('info'); // Get the data-info attribute
            $('#modalDescription').text(info); // Set the modal content
            $('#infoModal').modal('show'); // Show the modal
        });
})
