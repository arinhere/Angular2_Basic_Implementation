import {Component} from 'angular2/core'

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.template.html'
})

export class ContactFormComponent{
    subsType=[
        {id: 1,label: "Daily"},
        {id: 2, label: "Weekly"},
        {id: 3, label: "Monthly"}
    ]
    OnSubmit(form){
        console.log(form);
    }
}