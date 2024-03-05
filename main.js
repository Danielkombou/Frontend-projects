const plusIcon = document.getElementById('plusIcon')
const minIcon = document.querySelector('.minIcon')
const dropdown = document.querySelector('#content')
const paragraph = document.getElementById('content1')

minIcon.style.display = 'none'



function frequentQ(){
    if(dropdown.classList.toggle('answers')){
        dropdown.style.display = 'inline-block'
    }
}
// console.log(frequentQ());