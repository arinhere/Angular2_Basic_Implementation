import {Component, Input} from 'angular2/core'

@Component({
    selector: 'voting',
    template: `
        <table>
            <tr>
                <td class="td-style">
                    <i class="glyphicon glyphicon-menu-up"
                    [class.upHighLight]="voteUp"
                    (click)="votedUp()"
                    ></i>
                </td>
            </tr>
            <tr>
                <td class="td-style">
                {{ totalVotes }}
                </td>
            </tr>
            <tr>
                <td class="td-style">
                    <i class="glyphicon glyphicon-menu-down"
                    [class.downHighLight]="voteDown"
                    (click)="votedDown()"
                    ></i>
                </td>
            </tr>
        `,
    styles: [
        `
            .td-style{
                text-align: center;
                padding: 10 10 10 10;
            }
            
            .glyphicon-menu-up, .glyphicon-menu-down
            {
                cursor: pointer;
                color: #ccc;
            }

            .upHighLight, .downHighLight{
                color: orange;
            }
        `
    ]
})

export class votingComponent{
    @Input() neutralVote=0;
    @Input() totalVotes=0;
    @Input() voteDown=false;
    @Input() voteUp=false;
    
    votedUp(){
        var currVote=this.totalVotes;
        if(currVote+1 == this.neutralVote || currVote==this.neutralVote){
            this.totalVotes ++;
            this.voteDown=false;

            if(this.totalVotes==this.neutralVote){
                this.voteUp = false;
            }
            else{
                this.voteUp = true;
            }
        }
    }

    votedDown(){
        var currVote=this.totalVotes;
        if(currVote-1 == this.neutralVote || currVote==this.neutralVote){
            this.totalVotes --;
            this.voteUp = false;

            if(this.totalVotes==this.neutralVote){
                this.voteDown = false;
            }
            else{
                this.voteDown = true;
            }
        }
    }

}