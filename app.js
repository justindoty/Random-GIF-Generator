 var clickCount1 = 0;
 var clickCount2 = 0;
 var clickCount3 = 0;
 var clickCount4 = 0;
 var i = 0;
 var displayAmount = 5;
 var j = 0;
 var trendingDisplayAmount = 10;
 $(document).ready(function() {

     $(".searchForm").on("submit", function(event) {
         event.preventDefault();
         clickCount1 += parseInt($(this).attr("id"));
         var userInput = $("#gifSearch").val();
         var api = "http://api.giphy.com/v1/gifs/random?";
         var apiKey = "&api_key=dc6zaTOxFJmzC";
         var query = "&tag=" + userInput;
         var url = api + apiKey + query;
         var i = 0;

         $.get(url)
             .then(function(data) {

                 if (clickCount1 == 1) {
                     $(".randomGifDiv").remove();
                     var gif = data.data.image_original_url;

                     $(".displaySection").append("<div class='randomGifDiv'></div>");
                     $(".randomGifDiv").append('<img class="mainImg" src=\'' + gif + '\'/>');
                     $(".randomGifDiv").hide();
                     $(".randomGifDiv").slideDown("slow");

                 }
                 if (clickCount1 == 2) {
                     $(".randomGifDiv").hide("slow");
                     clickCount1 = 0;
                 }
             })
     });

     //STICKER section
     $(".stickerForm").on("submit", function(event) {
         event.preventDefault();
         clickCount2 += parseInt($(this).attr("id"));
         var userInput = $("#stickerSearch").val();
         var api = "http://api.giphy.com/v1/stickers/random?";
         var apiKey = "&api_key=dc6zaTOxFJmzC";
         var query = "&tag=" + userInput;
         var url = api + apiKey + query;
         var i = 0;

         $.get(url)
             .then(function(data) {

                 if (clickCount2 == 1) {
                     $(".randomStickerDiv").remove();
                     var gif = data.data.image_original_url;
                     $(".stickerSection").append("<div class='randomStickerDiv'></div>");
                     $(".randomStickerDiv").append('<img class="stickerImg" src=\'' + gif + '\'/>');
                     $(".randomStickerDiv").hide();
                     $(".randomStickerDiv").slideDown("slow");
                 }
                 if (clickCount2 == 2) {
                     $(".randomStickerDiv").hide("slow");
                     clickCount2 = 0;
                 }
             })
     });

     $(".nonRandomForm").on("submit", function(event) {
         event.preventDefault();
         $('#tryagain').remove();
         clickCount3 += parseInt($(this).attr("id"));
         var userInput = $("#nonRandomSearch").val();
         var formInput = $("#nonRandomSearch").val();
         var api = "http://api.giphy.com/v1/gifs/search?";
         var apiKey = "&api_key=dc6zaTOxFJmzC&limit=100";
         var query = "&q=" + userInput;
         var url = api + query + apiKey;

         if (formInput.length == 0) {
             clickCount3 = 0;
             $(".nonRandomSearchDiv").append("<h1 id='tryagain'>Nothing Entered</h1>");
             $("#tryagain").hide();
             $("#tryagain").slideDown("slow");
             $("#tryagain").delay(1000).slideUp("slow");
         } else {
             $.get(url)
                 .then(function(data) {

                     if (clickCount3 == 1) {
                         $(".nonRandomSearchDiv").empty();
                         for (; i < displayAmount; i++) {
                             var gif = data.data[i].images.original.url;
                             $(".nonRandomSearchDiv").append('<img class="searchImg" src=\'' + gif + '\'/>');
                             $(".nonRandomSearchDiv").hide();
                             $(".nonRandomSearchDiv").show("slow");
                             console.log(clickCount3);
                         }
                     }
                     if (clickCount3 == 2) {
                         $(".nonRandomForm").find(".submitbut").val("Click for Next 5");

                         $(".nonRandomSearchDiv").hide("slow");
                         displayAmount += 5;
                         clickCount3 = 0;
                         console.log(clickCount3);
                     }
                     //Resets the search results to 0
                     if (i >= 100) {
                         i = 0;
                         displayAmount = 4;
                     }
                 })
                 .catch(function() {
                     console.log("Seems to be a problem");
                 });
         }
     });

     //Trendin Section
     $(".trendingBut").on("click", function(event) {
         event.preventDefault();
         clickCount4 += parseInt($(this).attr("id"));

         var api = "http://api.giphy.com/v1/gifs/trending?";
         var apiKey = "&api_key=dc6zaTOxFJmzC&limit=100";
         var url = api + apiKey;

         if (j >= 100) {
             j = 0;
             trendingDisplayAmount = 5;
         }
         $.get(url)
             .then(function(data) {
                 $(".trendingDiv").empty();
                 for (; j < trendingDisplayAmount; j++) {
                     var gif = data.data[j].images.original.url;
                     $(".trendingDiv").append('<img class="trendingImg" src=\'' + gif + '\'/>');
                     $(".trendingDiv").hide();
                     $(".trendingDiv").show("slow");
                 }
                 if (j = trendingDisplayAmount - 1) {
                     //  $(".trendingDiv").hide("slow");
                     trendingDisplayAmount += 10;
                 }
             })
     });
     // Don't remove. Document Ready closing.
 });
