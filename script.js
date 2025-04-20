$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var letter = $('.letter');
    var letter_content = $('#content');
    
    envelope.click( function() {
        open();
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        // Show letter content after a delay to match the animation timing
        setTimeout(function() {
            letter.addClass("jump");
            setTimeout(function() {
                letter_content.addClass("show");
            }, 600);
        }, 400);
    }
    
    function close() {
        envelope.addClass("close").removeClass("open");
        letter.removeClass("jump");
        letter_content.removeClass("show");
    }
   
});