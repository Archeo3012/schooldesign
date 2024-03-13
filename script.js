
$(document).ready(function(){
    $("a").click(function(event){
        event.preventDefault();
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 1000, function(){
            window.location.hash = this.hash;
        });
    });
});