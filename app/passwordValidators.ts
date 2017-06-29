import {Validators, Control, ControlGroup} from 'angular2/common'

export class passwordValidators{
    static passLength(){
        var len=5;
        return len;
    }

    static comparePass(controlgroup: ControlGroup){
        
        var newpass=controlgroup.find("newpass").value;
        //alert(newpass);
        var confpass=controlgroup.find('confirmPassword').value;
        //alert(confpass);

        if (newpass == '' || confpass == '')
            return null;

        if(newpass!=confpass)
            return {comparePass: true};
        
        return null;
    }
}