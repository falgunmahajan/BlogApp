export const isValidFullName=(name:string)=>{
 if((/^[a-z]+$/).test(name))return true;
 return false
}

export const isValidContact=(num:string)=>{
    if((/^[0-9]{10}$/).test(num))return true;
    return false
}

export const isValidEmail=(email:string)=>{
    if((/^[\w-\.]+@[\w]+\.[\w]{2,4}$/).test(email))return true;
    return false
}

export const isValidPassword=(pswd:string)=>{
    if(pswd.length!==8) return false
    if(!(/[0-9]/.test(pswd)))return false;
    if(!(/[a-z]/.test(pswd)))return false;
    if(!(/[A-Z]/.test(pswd)))return false;
    if(!(/\W/.test(pswd)))return false;
    return true
}