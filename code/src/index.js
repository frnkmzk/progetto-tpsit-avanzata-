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
