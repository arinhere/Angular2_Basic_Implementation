import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: 
    `<br/><br/>
    <span style='padding-top: 50px; padding-left: 50px'>
        <i
            class="glyphicon" 
            [class.glyphicon-star-empty]="!isFavorite"
            [class.glyphicon-star]="isFavorite"
            (click)="makeFav()">
        </i>        
    </span>
    `,
    styles:[`
        .glyphicon-star{
            color: orange;
        }

        .glyphicon-heart{
            color: #ccc;
        }        
    `]
})

export class FavoriteComponent{
    //isFavorite=false; By this way, you cannot set the value depeneds on the input
    @Input('is-favorite') isFavorite=false;//By this way you are making the value depends on the input fields. is-favorite is the alias.
    @Output() changeFavorite=new EventEmitter();//Used to publish the event to the client

    makeFav(){
        this.isFavorite=!this.isFavorite;
        this.changeFavorite.emit({newValue: this.isFavorite});
    }
}