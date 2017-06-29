System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var tweetsService;
    return {
        setters:[],
        execute: function() {
            tweetsService = (function () {
                function tweetsService() {
                }
                tweetsService.prototype.getTweets = function () {
                    var tweet = [
                        {
                            imageUrl: "http://lorempixel.com/100/100/sports/1/",
                            name: "Arin G",
                            tweethandle: "@arinhere",
                            desc: "This is a demo tweet like design.",
                            twetcount: 10,
                            likestat: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/sports/2/",
                            name: "Arin G",
                            tweethandle: "@arinhere",
                            desc: "This is a demo tweet like design.",
                            twetcount: 5,
                            likestat: true
                        },
                        {
                            imageUrl: "http://lorempixel.com/100/100/sports/3/",
                            name: "Arin G",
                            tweethandle: "@arinhere",
                            desc: "This is a demo tweet like design.",
                            twetcount: 0,
                            likestat: false
                        }
                    ];
                    return tweet;
                };
                return tweetsService;
            }());
            exports_1("tweetsService", tweetsService);
        }
    }
});
//# sourceMappingURL=tweets.service.js.map