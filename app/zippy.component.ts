import {Component} from 'angular2/core'

@Component({
    selector:'zippy',
    template:`
        <div class="zippy">
            <div class="zippy-title">
                {{ title }}
                <i class="pull-right glyphicon"
                    [ngClass]="{
                        'glyphicon-chevron-up': isClicked,
                        'glyphicon-chevron-down': !isClicked
                    }"
                (click)="toggle()"
                ></i>
            </div>
            <div class="zippy-content" *ngIf="!isClicked">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .zippy {
            width: 300px;
            border: 1px solid #ccc;
            border-radius: 2px;
        }
        
        .zippy .zippy-title {
            padding: 20px;
            font-weight: bold;
        }
        
        .zippy .zippy-title:hover{
            background: #f0f0f0;
            cursor: pointer;
        }
        
        .zippy .zippy-content {
            padding: 20px;
        }
    `],
})

export class zippyComponent{
    title="This is the title";
    isClicked=true;

    toggle(){
        this.isClicked=!this.isClicked;
    }
}