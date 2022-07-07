let seachInputWrapper = document.querySelector('.search-input');
let input = document.querySelector('input');
let autoComplete = document.querySelector('.autocom-box');

input.addEventListener('keyup' , ()=>{
    let searchValue = input.value;
    if (searchValue) {
        seachInputWrapper.classList.add('active');
        let filteredWords = suggestions.filter(function (word) {
            return word.toLowerCase().includes(searchValue.toLowerCase())
        });
        suggestionList(filteredWords);
    }

    else {
        seachInputWrapper.classList.remove('active')
    }
})

function suggestionList (wordsArray){
    let itemsArray = wordsArray.map(function(word){
        return '<li>' + word + '</li>'
    })

    let customWord
    if (!itemsArray.length){
        customWord = '<li>' + input.value+ '</li>' 
    }
    else {
        customWord = itemsArray.join('')
    }

    autoComplete.innerHTML = customWord ;

    // console.log(customWord);

}