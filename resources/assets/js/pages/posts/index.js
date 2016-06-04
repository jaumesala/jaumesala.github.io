SITE.posts.index = function(){

    console.log('index');


    filterList.init('posts-filte-list', {
        valueNames: [ 'title', 'categories', 'tags' ],
    });

}