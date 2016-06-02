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