import PromptSync from "prompt-sync"; 

const Prompt=PromptSync()

export const creaAccount=(u,p)=>{
  return{
    user:u,
    pass:p
  }

}

export function validaPassword(password) {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasMinLength = password.length >= 8;

  for (let i = 0; i < password.length; i++) {
      const char = password[i];

      if (char >= 'A' && char <= 'Z') {
          hasUpper = true;
      } else if (char >= 'a' && char <= 'z') {
          hasLower = true;
      } else if (char >= '0' && char <= '9') {
          hasNumber = true;
      }
  }

  return hasUpper && hasLower && hasNumber && hasMinLength;
}

export function stampaFormat(arr)
{
  for (let i = 0; i < arr.length; i++)
   {
    console.log(`${i} > : `);
    const obj = arr[i];
    for (let key in obj) {
      console.log(`   ${key}: ${obj[key]}`);
    }
  }
}


export function accessoAdmin(cred){

   let tentUser=Prompt("inserire user > : ")
   let tentPass=Prompt("inserire password > : ")

   return tentUser === cred.user && tentPass === cred.pass;
}

export function accessoUser(tentUser,elenco){

  
   
  let trovato=elenco.some(u => u.user === tentUser)

  if(!trovato)
    return -1
  


    let utente=trova(tentUser,elenco)
    let tentPass=Prompt("inserire password > : ")
  
  if(utente.pass===tentPass)
    return 1
  else
    return -2

 
}

export function trova(user,elenco)
{
  return elenco.find(u => u.user === user)
}