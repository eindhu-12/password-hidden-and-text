let pwd=document.querySelector("input");
let hidden=document.getElementById("icons")
function hide(){
    if(pwd.type=="password"){
        pwd.type="text"
        hidden.className="fa-duotone fa-solid fa-eye"
    }
    else{
        pwd.type="password"
        hidden.className="fa-sharp fa-solid fa-eye-slash"
    }
}