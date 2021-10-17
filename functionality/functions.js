// Here a put all inputs
let input_name = document.querySelector('#input_name')

let input_phone = document.querySelector('#input_phone')

let input_email = document.querySelector('#input_email')

let send = document.querySelector('#submit')
//INPUTS

//Here I put all menssages and displays
let msg1 = document.querySelector('#alert1')
let msg2 = document.querySelector('#alert2')
let msg3 = document.querySelector('.checked')

msg1.style.display = 'none'
msg2.style.display = 'none'
msg3.style.display = 'none'
msg1.style.color = 'red'
msg2.style.color = 'red'
// menssages and displays

send.addEventListener('click', function(){
    if( input_name.value == 0 || input_phone.value == 0 || input_email.value == 0){
        msg1.style.display = 'block'
    }
    
    else if(input_phone.value.length < 9){
        msg2.style.display = 'block'
    }
    else{
        msg3.style.display = 'block'
        input_name.value = "";
        input_phone.value = "";
        input_email.value = "";
    }

/* 
I need to do a validation in my email, but I can't do that, so if somebody can do it I will be thanked
*/
})