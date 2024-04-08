export const isValidFullName=(name:string)=>{
 if((/^[a-z A-Z]+$/).test(name))return true;
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
    if(pswd.length<8) return false;
    if(!(/[0-9]/.test(pswd)))return false;
    if(!(/[a-z]/.test(pswd)))return false;
    if(!(/[A-Z]/.test(pswd)))return false;
    if(!(/\W/.test(pswd)))return false;
    return true
}

export const isMatchPassword=(pswd:String,cpswd:String)=>{
   if(pswd===cpswd) return true;
   return false;

}

export const isValidData = (data:{
    fullName:string,
    email:string,
    mobileNumber:string,
    password:string,
    confirmPassword:string,
    role:string
  })=>{
    const errObj:any={}
    if(!isValidFullName(data.fullName)) errObj.fullNameErr="Fullname must contain only letters"
    if(!isValidContact(data.mobileNumber)) errObj.contactErr="Phonenumber must contain only 10 digits"
    if(!isValidEmail(data.email)) errObj.emailErr="Email is not Valid"
    if(!isValidPassword(data.password)) errObj.pswdErr="Password must be of length 8 and contain atleast 1 uppercase letter, 1 lowercase letter, 1 digit, 1 special character"
    if(!isMatchPassword(data.password, data.confirmPassword)) errObj.cPswdErr="Password and confirm password must be same"
    if(Object.keys(errObj).length) return [false, errObj]
    return [true,"All are valid"]
}