var filterList = {

    fuzzyOptions: {
        searchClass: "fuzzy-search",
        location: 0,                    // Approximately where in the text is the pattern expected to be found?
        distance: 100,                  // Determines how close the match must be to the fuzzy location (specified above)
        threshold: 0.4,                 // At what point does the match algorithm give up
        multiSearch: true               // Subtract arguments from the searchString or put searchString as only argument
    },

    defaults: {
        valueNames: [ 'title' ],
        plugins: [
            ListFuzzySearch()
        ]
    },

    init(listId, options){

        filterList.options = $.extend( true, filterList.defaults, options );

        filterList.instance = new List( listId, filterList.options );
    }
}