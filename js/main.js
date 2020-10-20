function open_appendix(id){
    //alert(id);
    $('.hideable').removeClass('show');
    $(`#${id}`).addClass('show');
    document.getElementById(id).scrollIntoView();
}

$('.appendix-link').click(function(e){
    e.preventDefault();
    open_appendix($(this).data('id'));
});