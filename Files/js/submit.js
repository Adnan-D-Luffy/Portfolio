const form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const Name = form.Name.value;
    const mail = form.mail.value;
    const txt = form.txt.value;
    const body = {Name,mail,txt};
    const endpoint = "/sent/msge";
    
    fetch(endpoint,{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
    })
})