const emailList = [ "topolino@gmail.com", "pluto@gmail.com", "paperino@gmail.com"]  ; 
    console.log(emailList);
const yourEmailElelem = prompt ("Ciao utente, inserisci la tua mail");
    console.log(yourEmailElelem);

let search = false;

for (i = 0; i < emailList.length; i++){
    curEmail = emailList [i];
    
    if(curEmail == yourEmailElelem)
    search = true
    console.log(curEmail, search);
}

if (search == true){
    document.querySelector(".ms_mail").innerHTML = "Email approvata";
}else{
    document.querySelector(".ms_mail").innerHTML = "Rfaiprova";
}
 


