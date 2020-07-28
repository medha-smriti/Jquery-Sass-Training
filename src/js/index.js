$(document).ready(function() {
    $('#home-button').click (function () {
            $.get('http://localhost:8080/getUserTimelineTweets', function(data, status) {
            $('.newsfeed-area').appendChild(data);
            console.log(status);    
            alert(data);
        });
    });
});


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
