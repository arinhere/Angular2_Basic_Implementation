System.register(['angular2/core', './tweetLike.component', './tweets.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, tweetLike_component_1, tweets_service_1;
    var tweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tweetLike_component_1_1) {
                tweetLike_component_1 = tweetLike_component_1_1;
            },
            function (tweets_service_1_1) {
                tweets_service_1 = tweets_service_1_1;
            }],
        execute: function() {
            tweetComponent = (function () {
                function tweetComponent(tweets) {
                    this.post = {
                        totalCount: 10,
                        likedIt: true
                    };
                    this.tweetList = tweets.getTweets();
                }
                tweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        template: "\n        <div class=\"media media-text\" *ngFor=\"#userTweet of tweetList\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object\" src=\"{{ userTweet.imageUrl }}\" alt=\"sports\">\n                </a>\n            </div>\n            <div class=\"media-body\">\n                <h4 class=\"media-heading\">{{ userTweet.name }}</h4>\n                <span class=\"gray-text\">{{ userTweet.tweethandle }}</span>\n                \n                <div class=\"body-text\">\n                    {{ userTweet.desc }}\n                </div>\n                <span class=\"body-text\">\n                    <likeit [totalCount]=\"userTweet.twetcount\" [likedIt]=\"userTweet.likestat\"></likeit>\n                </span>\n            </div>\n        </div>\n        ",
                        providers: [tweets_service_1.tweetsService],
                        directives: [tweetLike_component_1.TweetLikeComponent],
                        styles: [
                            "\n        .media-text{\n            padding-left: 50px;\n            font-family: tahoma;\n            color: #666;\n            font-size: 15px;\n            font-weight: bold;\n        }\n        .gray-text{\n            color: #ccc;\n        }\n        .body-text{\n            padding-top: 5px;\n            padding-bottom: 5px;\n            font-size: 14px;\n            font-weight: normal;\n        }\n\n        "
                        ]
                    }), 
                    __metadata('design:paramtypes', [tweets_service_1.tweetsService])
                ], tweetComponent);
                return tweetComponent;
            }());
            exports_1("tweetComponent", tweetComponent);
        }
    }
});
//# sourceMappingURL=tweets.component.js.map