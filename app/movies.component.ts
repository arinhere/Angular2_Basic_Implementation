import {Component} from 'angular2/core'
import {MoviesService} from './movies.service'

@Component({
    selector: 'movies',
    template: `<h2>Top Show: Game of thrones</h2>
                
                <table style='padding-top: 10px'>
                    <tr>
                        <td style='padding-bottom: 10px; font-size: 20px'>
                            {{ topTitle }}
                        </td>
                    </tr>
                    <tr *ngFor="#channel of channelList">
                        <td>{{ channel }}</td>
                    </tr>
                </table>
               `,
providers: [MoviesService]
})

export class MoviesComponent{ 
    topTitle = "List of Channels";
    channelList;

    constructor(moviesService: MoviesService){
        this.channelList=moviesService.getChannels();
    }
}