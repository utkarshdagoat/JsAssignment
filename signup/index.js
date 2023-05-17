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
        return false;
    }
    return true;
}

const fetchByThen = () =>{
    const credentials = {
        "email":email.value,
        "password":password.value
    }
    const options = {
        method:"POST",
        body : JSON.stringify(credentials),
        headers:{
            'Content-type': 'application/json'
        } 
    }
    if(validateEmail(email.value)){
    fetch("https://reqres.in/api/login" ,  options)
        .then((response) =>{  
            if(!response.ok) return false
            return response.json();
        })
        .then((value)=>{
            if(!value) throw Error("The login information is not correct");
            displaySuccess("The form is submitted successfully");
        })
        .catch((err) => {
            displayError(err);
        })
    }
}

const fetchByAwait =async () =>{

}

form.addEventListener('submit' ,(event)=>{
    event.preventDefault();
    fetchByThen();
})


