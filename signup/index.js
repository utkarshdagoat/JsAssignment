const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.getElementsByTagName("form")[0];

const fetchByThen = () =>{
    const credentials = {
        "email":email.value,
        "password":password.value
    }
    fetch("https://reqres.in/api/login" ,  {
        method:"POST",
        body : JSON.stringify(credentials),
        headers:{
            'Content-type': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((value)=>{
            console.log(value);
        })
        .catch((error) => {
            console.log(error);
        })
}

form.addEventListener('submit' ,(event)=>{
    event.preventDefault();
    fetchByThen();
})


