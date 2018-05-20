$(".interactionaccordion").click(function () {

    $(".interactionaccordion").removeClass("interactionactive");
    $(this).toggleClass("show");
    $(this).addClass("interactionactive");
    
    if ($(this).hasClass("show")) {
        
        $(".interactionaccordion").next().hide();
        $(this).next().show();
     
    }
    else {
        $(this).next().hide();
        $(this).removeClass("interactionactive");

    }
});



$('.toggle').click(function ()
{

    if ($(this).next().hasClass('show'))
    {
        $(this).next().removeClass('show');
        $(this).next().slideUp(350);
    }
    else
    {
        $(this).parent().parent().find('li .text').removeClass('show');
        $(this).parent().parent().find('li .text').slideUp(350);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(350);
    }
});