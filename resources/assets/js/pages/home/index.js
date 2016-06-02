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