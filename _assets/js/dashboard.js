$(function() {

  console.log('dashboard.js init;');

  $(function() {

    $(".mobile-nav-trigger").on('click', function(){
        $(this).toggleClass('active');
    });

    $(".accordion-trigger").accordion({
      collapsible: true,
      active: false
    });

    $('.accordion-header.infobox-trigger').on('click', function(){
        if ($(this).hasClass('ui-state-active')){
            $('.infoboxes').show();
        }else{
            $('.infoboxes').hide();
        }
    });

    $('.timeline-horizontal i.fa').on('click', function(){
        var currentState;
        if ($(this).hasClass('showinfo')){
            currentState = 'onlydisable';
        }
        $('.timeline-horizontal i.fa').each(function(){
            $(this).removeClass('showinfo');
        });
        $('.infoboxes div').each(function(){
            $(this).hide();
        });

        if (currentState != 'onlydisable'){
            $(this).addClass('showinfo');
            console.log($(this).data('infobox'));
            $('.infoboxes div.infobox'+$(this).data('infobox')).show();
        }
    });

  });

});
