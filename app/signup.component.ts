import {Component} from 'angular2/core'
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common'
import {spaceValidator} from './spaceValidator'

@Component({
    selector: "signup",
    templateUrl: "app/signup.template.html"
})

export class SignUpComponent{
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form=fb.group({
            username: ["",
                Validators.compose([
                    Validators.required, 
                    Validators.minLength(3),
                    spaceValidator.validateSpace
                ]), spaceValidator.validateUnique],
            pass: ["", Validators.compose([Validators.required, Validators.minLength(8)])],
        });
    }

    //form=new ControlGroup({
    //  username: new Control("", Validators.required),
    //pass: new Control("", Validators.required)
    //});

    onFormSubmit(){
        console.log(this.form.value);
    }
}