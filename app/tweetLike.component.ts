import {Component, Input} from 'angular2/core'

@Component({
    selector: 'likeit',
    template:`
        <i 
            class="glyphicon glyphicon-heart"
            [class.highLight]="likedIt"
            (click)="onClick()"
            ></i>  {{ totalCount }}      
    `,
    styles:[
        `
        .glyphicon-heart{
            color: #ccc;
            cursor: pointer;
        }

        .highLight{
            color: deeppink;
        }
        `
    ]
})

export class TweetLikeComponent{
    @Input() totalCount=0;
    @Input() likedIt=false;
    
    onClick(){
        this.likedIt=!this.likedIt;
        this.totalCount +=this.likedIt? 1: -1;
    }
}