import {Component} from 'angular2/core'
import {ShowCreator} from './showCreator.service'

@Component({
    selector: 'creators',
    template: `
            <h2>{{ title }}</h2>
            <ul>
                <li *ngFor="#director of showCreator">
                    {{director}}
                </li>
            </ul>
            `,
    providers: [ShowCreator]
})

export class ShowCreatorComponent {
    title= "List of directors";
    showCreator;

    constructor(showcreator: ShowCreator){
        this.showCreator = showcreator.getDirectors();
    }
}