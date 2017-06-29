import {Component, Input} from 'angular2/core'
import {TweetLikeComponent} from './tweetLike.component'
import {tweetsService} from './tweets.service'

@Component({
    selector: 'tweets',
    template: `
        <div class="media media-text" *ngFor="#userTweet of tweetList">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" src="{{ userTweet.imageUrl }}" alt="sports">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ userTweet.name }}</h4>
                <span class="gray-text">{{ userTweet.tweethandle }}</span>
                
                <div class="body-text">
                    {{ userTweet.desc }}
                </div>
                <span class="body-text">
                    <likeit [totalCount]="userTweet.twetcount" [likedIt]="userTweet.likestat"></likeit>
                </span>
            </div>
        </div>
        `,
    providers: [tweetsService],
    directives: [TweetLikeComponent],    
    styles:[
        `
        .media-text{
            padding-left: 50px;
            font-family: tahoma;
            color: #666;
            font-size: 15px;
            font-weight: bold;
        }
        .gray-text{
            color: #ccc;
        }
        .body-text{
            padding-top: 5px;
            padding-bottom: 5px;
            font-size: 14px;
            font-weight: normal;
        }

        `
    ]
})

export class tweetComponent{
    post={
        totalCount: 10,
        likedIt:true
    }
    tweetList: any[];

    constructor(tweets: tweetsService){
        this.tweetList=tweets.getTweets();
    }
}