let input_name = document.querySelector("#input_name")
let send = document.querySelector("#submit")
let container_msg = document.querySelector('#inputfield_name')

send.addEventListener('click', function(){

    if(input_name.value == 0){
        //let msg = document.write('Please enter a value')
        container_msg.appendChild(msg)
        let msg = 'Please enter a value'
    }

})
