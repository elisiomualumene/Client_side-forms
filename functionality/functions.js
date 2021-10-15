let input_name = document.querySelector("#input_name")
// Get a input named "#input_name"
let send = document.querySelector("#submit")
// Get a buttom with your ID named "#submit"
let container_msg = document.querySelector('#inputfield_name')
// Get a div named "#inputfield_name"
let msg = document.querySelector('#first')
// to show a error menssage
msg.style.display = 'none'
// to hide this menssage
send.addEventListener('click', function(){
//a event listener to call a function on buttom click
    if(input_name.value == 0){ // here i'm doing a validation
        msg.style.display = 'block';
        msg.style.display = 'none';
    }

})

//I'm so Tired I will do It another day :)
//Now I will comit this version on my github origin
//But I don't will merge now!
