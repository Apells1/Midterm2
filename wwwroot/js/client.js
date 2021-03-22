$(function(){
    var toast = new Audio('media/toast.wav');
    $('.code').on('click', function(e) {
        e.preventDefault();
        toast.play();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});