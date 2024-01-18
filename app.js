const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");

input.addEventListener("input", ()=>{
    if(input.value){
        // counting words 
        const wordsArray = input.value.split(" ").filter((word) => word != "");
        wordCount.innerText = wordsArray.length;
        // count characters 
        characterCount.innerText = input.value.length;
        // count sentence 
        const sentenceArray = input.value.split(/[.!]/);
        sentenceCount.innerText = sentenceArray.length-1;
        // count paragraph 
        const paragraphArray = input.value.split("\n").filter((p)=>p.trim() != "");
        paragraphCount.innerText = paragraphArray.length;
    }
    else{
        wordCount.innerText = characterCount.innerText = sentenceCount.innerText = paragraphCount.innerText = 0;
    }
});