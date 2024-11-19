let botonName = document.getElementsByClassName("boton")
let arrayBoton = Array.from(botonName);

let idElement=[];
    arrayBoton.forEach((elemento)=>{
        idElement=elemento.id
    })

if(idElement!='boton_recovery')
{
document.getElementById('useForm').addEventListener('submit',async(e)=>{

        e.preventDefault();
        
        const email=document.getElementById('email').value;
        const password=document.getElementById('password').value;
        const data={email,password,idElement}

        try{
            const response = await fetch('http://localhost:3000/form',
                {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(data)
            });
            if (response.ok){
                const responseData=await response.json();
                const output = document.getElementById("output");
                output.innerHTML =`
                <h2>${responseData}</h2>
                `;
            }}
        catch (error){
            console.log(error);
        }

});
}
else{
    document.getElementById('useForm').addEventListener('submit',async(e)=>{

        e.preventDefault();
        
        const email=document.getElementById('email').value;
        const data={email,idElement}
        console.log("Ventana recovery",data)

        try{
            const response = await fetch('http://localhost:3000/form',
                {
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(data)
            });
            if (response.ok){
                const responseData=await response.json();
                console.log(responseData)
                if (responseData.message == 'true'){
                    window.location.href = responseData.redirect;
                }
                else{
                    const output = document.getElementById("output");
                    output.innerHTML =`
                    <h2>${responseData.message}: ${email}</h2>
                    `;
                }
            }}
        catch (error){
            console.log(error);
        }
});
}

let escribirenRegister = document.getElementById('email').value


// escribirenRegister.addEventListener("click",()=>{
//     console.log(escribirenRegister)
//     escribirenRegister = "correo@123.com"
// })
