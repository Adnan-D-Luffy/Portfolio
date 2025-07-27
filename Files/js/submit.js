const form = document.querySelector("form");
const msge = document.querySelector(".msge");
form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const Name = form.Name.value;
    const mail = form.mail.value;
    const txt = form.txt.value;
    const body = {Name,mail,txt};
    const endpoint = "/sent/msge";
    
   const submit = await fetch(endpoint,{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(body)
    })
    const response = await submit.json();
    const Stat = response;
    console.log(Stat)
    check(Stat);


})


const check = (stat)=>{
    if(Number(stat) === 200) {
        setTimeout(
            ()=>{
                msge.innerHTML = ""
            },3000
        )
        msge.innerHTML = `Your text have been sent`;
        msge.style.color ="green";

    }
    else if (Number(stat) === 404){
          setTimeout(
            ()=>{
                msge.innerHTML = ""
            },3000
        )
        msge.innerHTML = `Sorry Your  txt haven't been sent `
          msge.style.color ="red";
    }
}

