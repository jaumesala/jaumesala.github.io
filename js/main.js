/* @preserve
 *
 * Author:  Jaume Sala
 * Website: jaumesala.net
 *
 */


/* ---------- SITE OBJECT ---------- */

SITE = {
    common: {
        init: function() {
        }
    },

    home: {
        init: function() {
            console.log('home');
        }
    },

    posts: {
        init: function() {
            console.log('posts');
        }
    },

    contact: {
        init: function() {
            console.log('contact');
        }
    }

}



/* ---------------------------------------------------------------------------------------------------- */
UTIL = {
    exec: function(controller, method) {
        var ns = SITE,
            method = (method === undefined) ? "init" : method;

        if (controller !== "" && ns[controller] && typeof ns[controller][method] == "function") {
            ns[controller][method]();
        }
    },

    init: function() {
        var body = document.body,
            controller = body.getAttribute("data-controller"),
            method = body.getAttribute("data-method");

        UTIL.exec("common");
        UTIL.exec(controller);
        UTIL.exec(controller, method);
    }
};
/* ---------------------------------------------------------------------------------------------------- */


//Let's go baby!
$(document).ready(UTIL.init);
SITE.home.index = function(){

    console.log('index');

    setTimeout(function(){
        animateLine();
    }, 1000);

    setTimeout(function(){
        animateName();
    }, 1300);

    setTimeout(function(){
        animateSkills();
    }, 2500);

}

function animateLine(){
    $('#who').addClass('show-line');
}

function animateName(){
    $('#who').find('.inner').addClass('fadeInRight');
}


function animateSkills(){
    var $skills = $('#what').find('.animated');
    var current = $skills.first();

    aniamteNext(current);

    function aniamteNext($elem){

        setTimeout(function(){
            $elem.addClass('fadeInUp').removeClass('fadeOutUp');
        }, 500);

        setTimeout(function(){
            $elem.addClass('fadeOutUp').removeClass('fadeInUp');

            if($elem.next().length){
                aniamteNext($elem.next());
            } else {
                console.log("aaa");
                aniamteNext($skills.first());
            }
        }, 5000);
    }
}
//# sourceMappingURL=main.js.map
