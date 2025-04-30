import PromptSync from "prompt-sync"; 

const Prompt=PromptSync()

import * as u from  './utils.js'

let scelta
let sceltaUser
let sceltaAdmin

let elencoAccount= []

const credenzialiAdmin={user:"admin",pass:"Admin@1234"}

do
{
   console.log("Benvenuto! premi 1 per modalità user,2 per admin,0 per uscire")
   scelta=Number(Prompt(" > : "))

   if(scelta==1)
   {
       do
       {
        console.log("Benvenuto! premi 1 per creare account,2 per modificarlo,3 per eliminarlo,0 per uscire")
        sceltaUser=Number(Prompt(" > : "))

         switch(sceltaUser)
         {

           case 1 : 
               let user=Prompt("username > : ")
               let errcount=0
               let pass=""
               do
               {
                 if(errcount>=1)
                 {
                    console.log("la password deve contenere almeno 8 caratteri,una maiuscola e un numero")
                 }

                pass=Prompt("password > : ")
                errcount++
               }
               while(!u.validaPassword(pass))

               let newAcc=u.creaAccount(user,pass)

               elencoAccount.push(newAcc)
            break;

            case 2 :
               console.log(" > : per modificare,accedere al proprio account")
               
               let us=Prompt("username > : ")
                let err=u.accessoUser(us,elencoAccount)
               if(err==-1)
               {
                  console.log("utente non trovato")
                  break;
               }
               if(err==-2)
               {
                  console.log("password errata")
                  break;
               }
               
               console.log("benvenuto nella modalità modifica")
               let index = elencoAccount.findIndex(u => u.user === us);
               
               let s
               

               do
               {
                 console.log("premi 1 per cambiare user,2 per cambiare password,0 per uscire")
                 s=Number(Prompt(" > : "))
                 if(s==1)
                 {
                  let nu=Prompt("nuovo username > : ")
                   elencoAccount[index].user=nu
                 }                  
                 if(s==2)
                 {
                  let errcount=0
                  let pass
                  do
                  {
                    if(errcount>=1)
                    {
                       console.log("la password deve contenere almeno 8 caratteri,una maiuscola e un numero")
                    }
   
                   pass=Prompt("nuova password > : ")
                   errcount++
                  }
                  while(!u.validaPassword(pass))

                  elencoAccount[index].pass=pass
                 }
                 
               }
               while(s!=0)
            break;

            case 3 : 
              console.log(" > : per eliminare,accedere al proprio account")
               
            let use=Prompt("username > : ")
             let erro=u.accessoUser(use,elencoAccount)
            if(erro==-1)
            {
               console.log("utente non trovato")
               break;
            }
            if(erro==-2)
            {
               console.log("password errata")
               break;
            }
            
            
            let indexelim = elencoAccount.findIndex(u => u.user === use);
            elencoAccount.splice(indexelim, 1);

            console.log("account eliminato")
            break;
         }
       }
       while(sceltaUser!=0)
   }
   if(scelta==2)
   {
     if(u.accessoAdmin(credenzialiAdmin))
     {
        do
        {
       
         console.log("Benvenuto! admin premi 1 per vedere lista account")
         sceltaAdmin=Number(Prompt(" > : "))
   
          u.stampaFormat(elencoAccount)
        }
        while(sceltaAdmin!=0)
     }
     else
      console.log("accesso non riuscito")
   }

}
while(scelta!=0)
