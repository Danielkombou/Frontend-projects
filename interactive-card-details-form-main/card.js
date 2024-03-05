
const getData = ()=>{
    const field = document.getElementById('contain')
    const input = document.getElementById('leftContent')
    const typeMonth = document.getElementById('typeMonth')
    const dayRecord = document.getElementById('dateDay')


// Declaration code to hold the Card Number
    const cardNum = document.getElementById('texarea')
    const holdNum = document.createElement('p')
    holdNum.style.color = 'hsl(0, 0%, 100%)'
    holdNum.style.marginTop = '20px'
    holdNum.innerHTML = cardNum.value
    input.append(holdNum)



// Declaration code to hold the Card Name
    let newContainer = document.createElement('div')
    let hold = document.createElement('span')
    hold.style.color = 'hsl(0, 0%, 100%)'
    hold.style.marginTop = '20px'
    hold.style.fontSize = '14px'
    hold.innerHTML = field.value
    newContainer.append(hold)
    input.append(hold)



// Declaration code for date
    let monthHolder = document.createElement('p')
    monthHolder.innerHTML = typeMonth.value
    monthHolder.style.color = 'hsl(0, 0%, 100%)'
    typeMonth.append(monthHolder)
    newContainer.append(monthHolder)
    input.append(monthHolder)
    
// Declaration code for input date
    const dayReg=document.createElement('p')
    dayReg.innerHTML = dayRecord.value
    dayReg.style.color = 'hsl(0, 0%, 100%)'
    newContainer.append(dayReg)
    newContainer.style.display = 'flex'
    newContainer.style.justifyContent = 'space-between'
    input.append(newContainer)
        
}
document.addEventListener('keypress',function (x){
    //let cardNum = document.getElementById('texarea').value
    if(x.keyCode == 13){
        console.log(getData());
        // field = x.target;
        // field.value = ''
    }
})
    // if(x.keyCode == 32){
    //     if(cardNum.length < 20){
    //         alert('Enter at least 20 characters')
    //         // x.preventDefault()
    //     }
    //     else{
    //         console.log(getData())
    //     }
    // }
   

    function confirmation(){
        const hidden = document.getElementById('submit-btn')
        const confirm = document.getElementById('greatBox')
        
        document.addEventListener('click',()=>{
            hidden.style.display = 'block'
            confirm.style.display = 'none'
        })

    }
console.log(confirmation());

function continuation(){
    const comeBack = document.getElementById('submit-btn')
        const initPage = document.getElementById('greatBox')
        
        document.addEventListener('click',()=>{
            comeBack.style.display = 'none'
            initPage.style.display = ''
        })
}
console.log(continuation());



// document.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission
//         const inputElement = event.target; // Get the input element
//         inputElement.value = ''; // Clear the input value
//     }
// });


// var email = document.getElementById("mail");

// email.addEventListener("keyup", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I expect an e-mail, darling!");
//   } else {
//     email.setCustomValidity("");
//   }
// });