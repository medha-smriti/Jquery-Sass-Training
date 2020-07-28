/**
 * loads all the latest tweet on the newsfeed
 * @returns a list of updated tweets.
 */

$(document).ready(function() {
    $('#home-button').click (function () {
            $.get('http://localhost:8080/getUserTimelineTweets', function(data, status) {
            $('.newsfeed-area').appendChild(data);
            console.log(status);    
            alert(data);
        });
    });
});


/**
 * Posts a new tweet from the user account
 * This function is for the Tweet button in first Column.
 * @param new tweet
 * @returns appends the posted tweet to newsfeed.
 */
$(document).ready(function() {
    $('#tweet').click (function () {

            var info = prompt('enter the tweet');

            $.ajax({
                type: "POST",
                url: 'http://localhost:8080/tweet', 
                data: {info},
                function(data, status) {
            $('.newsfeed-area').appendChild(data);
            console.log(status);    
            alert(data);
        }});
    });
});

/**
 * Posts a new tweet from the user account
 * This function is for the input text area (form) in second Column div.
 * @param new tweet
 * @returns appends the posted tweet to newsfeed.
 */
$(document).ready(function() {
    $('#tweeting').click (function () {

            var info = $('#write-tweet').val();

            $.ajax({
                type: "POST",
                url: 'http://localhost:8080/tweet', 
                data: {info},
                function(data, status) {
            $('.newsfeed-area').appendChild(data);
            console.log(status);    
            alert(data);
        }});
    });
});

/**
 * Searches for tweets related to the search text
 * @param input text
 * @returns loads a list of tweets relevant to the input text
 */
$(document).ready(function() {
    $('#clickSearch').click (function () {
            var info = $('#search').val();

            $.ajax({
                type: "GET",
                url: 'http://localhost:8080/searchTweets', 
                data: {info},
                function(data, status) {
            $('.newsfeed-area').appendChild(data);
            console.log(status);    
            alert(data);
        }});
    });
});
