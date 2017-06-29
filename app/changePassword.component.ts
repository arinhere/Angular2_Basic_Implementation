import {Component} from 'angular2/core'
import {Control, ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {passwordValidators} from './passwordValidators'

@Component({
    selector: 'changePass',
    templateUrl: 'app/changePass.template.html'
})

export class changePassComponent{
    form: ControlGroup;
    len=passwordValidators.passLength();
    
    constructor(fb: FormBuilder){
        this.form=fb.group({
            oldpass : ['',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(passwordValidators.passLength())
                ])
            ],
            newpass : ['',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(passwordValidators.passLength())
                ])
            ],
           confirmPassword: ['', Validators.required]
        }, { validator: passwordValidators.comparePass });//As this function needs controlgroup, so it has to be called at the end of controlgroup
    }

    //submit function 
    changePassword(){
        if(this.form.find("oldpass").value!="11111"){
            this.form.find("oldpass").setErrors({
                passIncorrect: true
            })
        }
        console.log(this.form.value);
    }

    logdata(x){
        console.log(x);
    }
}