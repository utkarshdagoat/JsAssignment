const firstName = document.getElementsByClassName('name')[0];
const lastName = document.getElementsByClassName('name')[1];
const message = document.getElementById('message');
const email = document.getElementById('inputEmail4');
const password = document.getElementsByClassName('passwords')[0];
const confirmPassword = document.getElementsByClassName('passwords')[1];
const age = document.getElementById('Age');
const city = document.getElementById('city');
const phoneNumber = document.getElementById('phone');

const namePattern =/^[A-Za-z]*$/
const emailPattern = /^[A-Za-z0-9]+@[a-z]{2,5}.(com|in)$/
const agePattern = /^[1-9]$|^[1-9][0-9]$|^(100)$/;
const cityPattern = /^[A-Za-z]+$/
const phonePattern = /^((0)|(\+91))|(([6-9]{1})([0-9]{9}))$/

const messageDisplay = (messageValue) =>{
    message.style.display = "block";
    message.innerHTML = messageValue;
}

const onNameNotMatch = (ele) =>{
    ele.value = "";
    messageDisplay('The name should only be character and should be less than 15 characters');
}

firstName.addEventListener("keyup" , () =>{ 
    const regexMatch = namePattern.test(firstName.value);
    
    if(!regexMatch || firstName.value.length > 15){
       onNameNotMatch(firstName);
    }
})

lastName.addEventListener("keyup" , () =>{
    const regexMatch = namePattern.test(lastName.value);
    if(!regexMatch || lastName.value.length > 15){
        onNameNotMatch(lastName);
     }
})

//one event for foucs out
email.addEventListener("focusout" , (event) =>{
        const regexMatch = emailPattern.test(email.value);
        if(email.value){
            if(!regexMatch){
                email.value = "";
                messageDisplay("Please Enter a valid Email");
            }   
        }
       
})
//one envent for enter key
email.addEventListener("keypress" , (event) =>{
    if(event.key === "Enter"){
        const regexMatch = emailPattern.test(email.value);
        if(!regexMatch){
            email.value = "";
            messageDisplay("Please Enter a valid Email");
        }
    }
})

const passwordMatch = () =>{
    if(password.value !== confirmPassword.value){
        messageDisplay("Both passwords should match");
        confirmPassword.value = "";
    }
}

const events = ['keypress' , 'focusout']
events.forEach(element => {
    confirmPassword.addEventListener(element , (event) =>{
        if(event.key === "Enter"){
           passwordMatch();
        }
    if(element === 'focusout') passwordMatch();
      
    })
});

const ageMatch = ()=>{
    const regexMatch = agePattern.test(age.value);
    if(!regexMatch){
        messageDisplay("The age must be a number between 1 to 100");
        age.value = "";
    }    
}

events.forEach((eve) =>{
    age.addEventListener(eve ,(event) =>{
        
        if(event.key === "Enter"){
            ageMatch();
        }
        if(age.value){
            if(eve === 'focusout') {
                ageMatch()
            };
        }
      
    } )
})

const cityMatch = () =>{
    const regexMatch = cityPattern.test(city.value);
    if(!regexMatch){
        messageDisplay("Please enter a valid city");
        city.value = "";
    } 
}

events.forEach((eve) =>{
    city.addEventListener(eve , (event) =>{
        
        if(event.key === "Enter"){
            cityMatch();
        }
        if(city.value){
            if(eve === 'focusout') {
                cityMatch()
            };
        }
    })
})

const phoneMatch = () =>{
    const regexMatch = phonePattern.test(phoneNumber.value);
    if(!regexMatch){
        messageDisplay("Please enter a valid phone number");
        phoneNumber.value = "";
    }
}

events.forEach((eve) =>{
    phoneNumber.addEventListener(eve , (event) =>{
        if(event.key === "Enter") phoneMatch();
        if(phoneNumber.value){
            if(eve === 'focusout') {
                phoneMatch()
            };
        }
    })
})
