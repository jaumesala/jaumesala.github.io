function rot13(t){return(t?t:this).split("").map(function(t){return t.match(/[A-Za-z]/)?(c=Math.floor(t.charCodeAt(0)/97),k=(t.toLowerCase().charCodeAt(0)-83)%26||26,String.fromCharCode(k+(0==c?64:96))):t}).join("")}function animateLine(){$("#who").addClass("show-line")}function animateName(){$("#who").find(".inner").addClass("fadeInRight")}function animateSkills(){function t(e){setTimeout(function(){e.addClass("fadeInUp").removeClass("fadeOutUp")},500),setTimeout(function(){e.addClass("fadeOutUp").removeClass("fadeInUp"),t(e.next().length?e.next():i.first())},5e3)}var i=$("#what").find(".animated"),e=i.first();t(e)}SITE={common:{init:function(){$(".obfuscate").each(function(){var t=$(this);t.attr("href",rot13(t.data("value")))})}},home:{init:function(){}},posts:{init:function(){}},contact:{init:function(){}}},UTIL={exec:function(t,i){var e=SITE,i=void 0===i?"init":i;""!==t&&e[t]&&"function"==typeof e[t][i]&&e[t][i]()},init:function(){var t=document.body,i=t.getAttribute("data-controller"),e=t.getAttribute("data-method");UTIL.exec("common"),UTIL.exec(i),UTIL.exec(i,e)}},$(document).ready(UTIL.init);var filterList={fuzzyOptions:{searchClass:"fuzzy-search",location:0,distance:100,threshold:.4,multiSearch:!0},defaults:{valueNames:["title"],plugins:[ListFuzzySearch()]},init:function(t,i){filterList.options=$.extend(!0,filterList.defaults,i),filterList.instance=new List(t,filterList.options)}};SITE.home.index=function(){setTimeout(function(){animateLine()},1e3),setTimeout(function(){animateName()},1300),setTimeout(function(){animateSkills()},2500)},SITE.posts.index=function(){filterList.init("posts-filte-list",{valueNames:["title","categories","tags"]})};