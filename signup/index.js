const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementsByTagName("form")[0];
const message = document.getElementById('message');
const successMessage = document.getElementById('successMessage');


const displayError = (mess) =>{
    message.style.display = "block";
    message.innerHTML = mess;
    email.value = ""
    password.value = ""
}
const displaySuccess = (mess) =>{
    successMessage.style.display = "block";
    successMessage.innerHTML = mess;
}
const validateEmail = (value) =>{
    const emailPattern = /^.+@[a-z]{2,6}.(com|in)$/
    if(!emailPattern.test(value)){
        email.value = "";
        displayError("The Email is not valid")
        return false;
    }
    return true;
}


const fetchByThen = () =>{  
    const credentials = {
        email: email.value,
        password: password.value
    }
    const options = {
        method:"POST",
        body : JSON.stringify(credentials),
        headers:{
            'Content-type': 'application/json',
            'Accept':'*/*'
        }
    }
    console.log(email.value);
    console.log(password.value);
    if(validateEmail(email.value)){
    fetch("https://reqres.in/api/login" ,  options)
        .then((response) =>{ 
            if(!response.ok) throw  Error("Invalid credentialss");
            return response.json();
        })
        .then((res)=>{
            displaySuccess(`The form is submitted successfully`);
        })
        .catch((err) => {
            displayError(err);
        })
    }
}

const fetchByAwait =async () =>{
    try{
        const credentials = {
            email: email.value,
            password: password.value
        }
        const options = {
            method:"POST",
            body : JSON.stringify(credentials),
            headers:{
                'Content-type': 'application/json',
                'Accept':'*/*'
            }
        }
        if(validateEmail(email.value)){
            const response = await fetch( "https://reqres.in/api/login" ,options);
            const readableData = await response.json();
            if(!response.ok) throw new Error(readableData.error);
            displaySuccess("The form was submitted succesfully")
        }
    } catch(err){
        displayError(err);
    }
}

form.addEventListener('submit' ,(event)=>{
    event.preventDefault();
    //fetchByThen();
    fetchByAwait();
})


