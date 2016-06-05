SITE.posts.index = function(){

    console.log('index');


    filterList.init('posts-filter-list', {
        valueNames: [ 'title', 'categories', 'tags' ],
    });

}