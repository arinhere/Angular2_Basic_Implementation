import {Control} from 'angular2/common'

export class spaceValidator{
    static validateUnique(control: Control){    
        
        return new Promise ((resolve, reject) => {
            setTimeout(function(){
                if(control.value=="arin")
                    resolve({ validateUnique: true });
                else
                    resolve(null);
            },1000)
        });
    }

    static validateSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return {validateSpace: true};

        return null;
    }
}