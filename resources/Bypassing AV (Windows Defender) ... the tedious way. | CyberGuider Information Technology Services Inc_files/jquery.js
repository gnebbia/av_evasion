/* 
 * TweetScroll jQuery Plugin
 * Author: Pixel Industry
 * Author URL : http://pixel-industry.com
 * Version: 1.2
 * 
 * jQuery plugin to load latest Twitter tweets.
 * 
 */

(function ($) {
    //define the tweetable plugin
    $.fn.tweetscroll = function (options) {
        //specify the plugins defauls
        var defaults = {
            visible_tweets: 10,         //number of tweets to be visible
            username: 'thinkupthemes', 	//@username tweets to display. can be multiple usernames e.g. [philipbeel, vmrkela]
            time: false,                //display date
            replies: false,		//filter out @replys
            date_format: 'style1',
            color: 'blue',
        };
        //overwrite the defaults
        var tweetscrollOptions = $.extend({}, defaults, options);
        
        // Wordpress widget change
        tweetscrollOptions['instance_id'] = $(this).attr('data-instance-id');        
        if(!tweetscrollOptions['instance_id'])
            tweetscrollOptions['instance_id'] = "";
        tweetscrollOptions['action'] = 'thinkup_widget_tweetscroll_ajax';
        
        //loop through each instance
        return this.each(function (options) {
            //assign our initial vars
            var act = $(this);
            var $allTweets;
            
            // Wordpress widget change
            var requestURL = PiTweetScroll.ajaxrequests;
            
            //do a JSON request to twitters API
            if(jQuery.isArray(tweetscrollOptions.username)){
                var numOfUsers = tweetscrollOptions.username.length;
                var tweetsCount, $tweetList;              
                var restTweets = (tweetscrollOptions.visible_tweets - (Math.floor(tweetscrollOptions.visible_tweets / numOfUsers) * numOfUsers));
                var tweetsPerUser = Math.floor(tweetscrollOptions.visible_tweets / numOfUsers);
                $allTweets = $('<ul class="tweet-feed">');   
                
                jQuery.each(tweetscrollOptions.username, function(index, val){
                    
                    if(restTweets > 0){
                        tweetsCount = tweetsPerUser + 1;
                        restTweets--;
                    }
                    else{
                        tweetsCount = tweetsPerUser;
                    }
                    
                    $.getJSON(requestURL, tweetscrollOptions, function (data) {
                        $tweetList = createHtml(data, tweetscrollOptions);
                        
                        $tweetList.find('li').appendTo($allTweets);
                        if(index == numOfUsers - 1 ){
                            $($allTweets).appendTo(act);
                            setInitialListHeight($allTweets);
                            /*setInterval(function(){
                                animateTweets($allTweets);
                            }, 3000);*/   
                        }
                    });
                    
                });
                
            }else{

                $.getJSON(requestURL, tweetscrollOptions, function (data) {
                    $allTweets = createHtml(data, tweetscrollOptions);
                    $($allTweets).appendTo(act);
                    setInitialListHeight($allTweets);
                    /*setInterval(function(){
                        animateTweets($allTweets);
                    }, 3000);*/  
                });   
            }
            
 
            
            function setInitialListHeight($allTweets){
                var containerSize = 0;                

            }
            
        });
        
        function createHtml(data, tweetscrollOptions){
            var $tweetList;
            var tweetMonth = '';
            var shortMonths = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
            var allMonths = ["January","February","March","April","May","June","July","August","Septemper","October","November","December"];
            
            $.each(data, function (i, item) {
                
                //check for the first loop
                if(i == 0){
                    $tweetList = $('<ul class="tweet-feed ' + tweetscrollOptions.color + '">');
                }



                //handle @reply and #tag filtering if required
                if (tweetscrollOptions.replies === false) {
                    if (item.in_reply_to_status_id === null) {
                        $tweetList.append('<li class="tweet-content"><p class="twitter-tweet-' + i + '">' + item.text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&" target="_blank" >$&</a> ').replace(/#(.*?)(\s|$)/g, '<a href="http://twitter.com/search?q=%23$1&src=hash" target="_blank" >#$1 </a>').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1" target="_blank" >@$1 </a>$2')+'</p></li>');
                    }
                } else {
                    $tweetList.append('<li class="tweet-content"><p class="twitter-tweet-' + i + '">' + item.text.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, '<a href="$&" target="_blank" >$&</a> ').replace(/#(.*?)(\s|$)/g, '<a href="http://twitter.com/search?q=%23$1&src=hash" target="_blank" >#$1 </a>').replace(/@(.*?)(\s|\(|\)|$)/g, '<a href="http://twitter.com/$1" target="_blank" >@$1 </a>$2') + '</p></li>');
                }

                //display the tiem of tweet if required
                if (tweetscrollOptions.time == true) {
                    var monthIndex = jQuery.inArray(item.created_at.substr(4, 3), shortMonths);
                        
                    if(tweetscrollOptions.date_format == 'style1'){
                        tweetMonth = monthIndex + 1;
                        if(tweetMonth < 10) {
                            tweetMonth = '0' + tweetMonth;
                        }
                        $tweetList.find('.twitter-tweet-' + i).append('<small> ' + item.created_at.substr(8, 2) + '/' + tweetMonth + '/' + item.created_at.substr(26,4) + '</small>');
                    }else{
                        
                        tweetMonth = allMonths[monthIndex];
                        $tweetList.find('.twitter-tweet-' + i).append('<small> ' + tweetMonth + ' ' + item.created_at.substr(8, 2) + ' ' + item.created_at.substr(26,4) + '</small>');
                    }
 
                }
  
            });
            return $tweetList;
        }
    }
})(jQuery);