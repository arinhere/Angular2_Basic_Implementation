import {Component} from 'angular2/core'
import {ContactFormComponent} from './contact-form.component'
import {SignUpComponent} from './signup.component'
import {changePassComponent} from './changePassword.component'
var debounced = _.debounce();

@Component({
    selector: 'my-app',
    //template: '<contact-form></contact-form><signup></signup>',
    //template: '<changePass></changePass>',
    template: `
    <input style='width: 300px' type='text' id='search' name='search' class='form-control' placeholder='Type to search...' />
    `,
    directives: [ContactFormComponent,SignUpComponent,changePassComponent]
})

export class AppComponent{
    

    constructor(){   
        

        $("#search").keyup(function(e){
            var text=(<HTMLInputElement>e.target).value;
            var url="https://api.spotify.com/v1/search?type=artist&q="+text;

            if(text.length < 3)
                return;

            $.getJSON(url,function(result){
                console.log(result);
            });

        });     
    }
}