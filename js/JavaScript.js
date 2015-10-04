
$(document).ready(function () {



    $("nav a").click(function () {
        $(".column.left").removeClass("active");

        $(this).addClass("active").siblings().removeClass("active");
        $("nav").css({ "margin-top": ($(this).index() + 1) * (-5.7) + 2 + "rem" });


        var that = this;


        if ($("main").children().length) {

            $("main").removeClass().bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                $("main").removeClass().addClass("loading animating"),
            $("main").load("html/" + $(that).attr("data-name") + ".html", function (response, status, xhr) {
                if (status == "error") {
                    $("main").removeClass().addClass("error")
                }
                if (status == "success") {
                    $("main").removeClass().addClass("success animating").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        $("main").removeClass("animating")
                    })
                }
            })
                $("main").unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd")
            })

        }
        else {
            $("main").removeClass().addClass("loading animating"),
            $("main").load("html/" + $(that).attr("data-name") + ".html", function (response, status, xhr) {
                if (status == "error") {
                    $("main").removeClass().addClass("error")
                }
                if (status == "success") {
                    $("main").removeClass().addClass("success animating").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        $("main").removeClass("animating")
                    })
                }
            })


        }






    });


    $(".edge").click(function () {
        $(".column.left").toggleClass("active");
    });

    $("nav a").eq(0).trigger("click");











    //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW
    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW
    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW
    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW




    var randomNumberArray = Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22);

    $(randomNumberArray).each(function (key,value) {
    $("<img src='/images/"+key+".jpg'>").load(function () {
        $(".image-content").eq(key).css({
            "background-image": "url(/images/"+key+".jpg)"
        }).removeClass("loading");

        //if ($('body').doesExist()) {
        //}
        //$("#slideshow, #content, footer").fadeIn("fast");
        //$('.right').trigger('click');
    });
   
    });




    // Next or first
    jQuery.fn.nextOrFirst = function (selector) {
        var next = this.next(selector);
        return (next.length) ? next : this.prevAll(selector).last();
    }
    // Prev or last
    jQuery.fn.prevOrLast = function (selector) {
        var prev = this.prev(selector);
        return (prev.length) ? prev : this.nextAll(selector).last();
    }
    // Element existance
    $.fn.doesExist = function () {
        return jQuery(this).length > 0;
    }
    var counter;
    //clearInterval(counter);
    function timer(sec) {
        //var length = sec;
        if (counter) {
            clearInterval(counter);
        }
        counter = setInterval(function () {
            sec--;
            if (sec == 0) {
                clearInterval(counter);
                
                
                $(".slideshow-text.deactive").removeClass("leftdeactive deactive");
                $(".slideshow-text.leftdeactive").removeClass("leftdeactive deactive");
                if ($(".slideshow-text.active").length || $(".slideshow-text.leftactive").length) {
                    $(".slideshow-text.active").removeClass("active leftactive").addClass("deactive").prevOrLast(".slideshow-text").addClass("active");
                    $(".slideshow-text.leftactive").removeClass("active leftactive").addClass("deactive").prevOrLast(".slideshow-text").addClass("active");
                }
                else {
                    $(".slideshow-text").eq(0).addClass("active");
                }


                $(".image-content.deactive").removeClass("leftdeactive deactive");
                $(".image-content.leftdeactive").removeClass("leftdeactive deactive");
                if ($(".image-content.active").length || $(".image-content.leftactive").length) {
                    $(".image-content.active").removeClass("active leftactive").addClass("deactive").prevOrLast(".image-content").addClass("active");
                    $(".image-content.leftactive").removeClass("active leftactive").addClass("deactive").prevOrLast(".image-content").addClass("active");
                }
                else {
                    $(".image-content").eq(0).addClass("active");
                }
                timer(5);



            }
        }, 1000);
    }


    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW
    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW
    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW
    //SLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOWSLIDESHOW
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^






    $(".slideshow-text.deactive").removeClass("leftdeactive deactive");
                $(".slideshow-text.leftdeactive").removeClass("leftdeactive deactive");
                if ($(".slideshow-text.active").length || $(".slideshow-text.leftactive").length) {
                    $(".slideshow-text.active").removeClass("active leftactive").addClass("deactive").prevOrLast(".slideshow-text").addClass("active");
                    $(".slideshow-text.leftactive").removeClass("active leftactive").addClass("deactive").prevOrLast(".slideshow-text").addClass("active");
                }
                else {
                    $(".slideshow-text").eq(0).addClass("active");
                }


                $(".image-content.deactive").removeClass("leftdeactive deactive");
                $(".image-content.leftdeactive").removeClass("leftdeactive deactive");
                if ($(".image-content.active").length || $(".image-content.leftactive").length) {
                    $(".image-content.active").removeClass("active leftactive").addClass("deactive").prevOrLast(".image-content").addClass("active");
                    $(".image-content.leftactive").removeClass("active leftactive").addClass("deactive").prevOrLast(".image-content").addClass("active");
                }
                else {
                    $(".image-content").eq(0).addClass("active");
                }
    timer(5);
});