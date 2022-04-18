let form = document.getElementById('form')
let submitBtn = document.getElementById('submitBtn')
form.addEventListener('submit', addWord)


function addWord(e){
    e.preventDefault()
    // console.log(e.target)
    let textInput = document.getElementById('textInput').value
    // console.log(textInput)
    document.getElementById('textInput').value = '';

    //Get the value of the input and render the number of vowles to the output container
    let outPut = document.getElementById('outPut');
    outPut.innerHTML = "<h6>"+textInput+" has "+countVowels(textInput)+" vowles"+"</h6>"
}

//function that get's the number of vowels in the string
function countVowels(subject) {
    return subject.match(/[aeiou]/gi).length ;
}

