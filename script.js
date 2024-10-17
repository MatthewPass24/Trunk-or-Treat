$(document).ready(function() {
// Shows the trunk's description on hover
$('.gallery').on('mouseenter', function() {
    $(this).find('.description').fadeIn();
}).on('mouseleave', function() {
    $(this).find('.description').fadeOut();
});
//timeline functionality on schedule page
$('.button a').on('click', function() {
    const info = $(this).data('info'); 
    $('#modalDescription').text(info); 
        $('#infoModal').modal('show');
    });
$('.infoBtn').on('click', function() {
    
})
//jquery for the flyer info
$('#popup').css('display', 'none'); // Ensure the popup is hidden on page load
$('#moreBtn').on('click', function() {
    $('#popup').show();
});
$('#closeButton').on('click', function() {
    $('#popup').hide();
});

})
