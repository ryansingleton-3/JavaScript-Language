const body = document.querySelector("body")
const inputDiv = document.getElementById("input-div")
const inputField = document.querySelector("input")
const APIKey = "1a157763-6e12-40f7-811b-025097dc0395"


inputField.addEventListener("keypress", ((e) => {
    if (e.key === "Enter") {
        e.preventDefault()
        let word = inputField.value
        getDictionaryData(word)
        inputField.value = ""
    }
}))


async function getDictionaryData(word) {
    const resp = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${APIKey}`)
    const data = await resp.json()
    addData(data, word)
}

const addData = (data, word) => {
    function capitalizeFirstLetterOfString(str) {
        let newStr = str.charAt(0).toUpperCase() + str.slice(1);
        return newStr
    }
    word = capitalizeFirstLetterOfString(word)
    console.log(word)
    let wordDiv = document.createElement("div")
    body.appendChild(wordDiv)
    wordDiv.className = "container text-center text-white mt-5 border border-white"
    const wordHeaderDiv = document.createElement("div")
    const wordHeader = document.createElement("h2")
    wordDiv.appendChild(wordHeader)
    let partSpeech = data[0].fl
    partSpeech = capitalizeFirstLetterOfString(partSpeech)
    wordHeader.innerHTML = `${word}`
    const partSpeechDiv = document.createElement("div")
    wordDiv.appendChild(partSpeechDiv)
    partSpeechDiv.innerHTML = `Part of Speech: ${partSpeech}`
    const defsDiv = document.createElement("div")
    wordDiv.appendChild(defsDiv)
    const defsHeader = document.createElement("h3")
    defsDiv.appendChild(defsHeader)
    defsHeader.style.borderBottom = "1px solid white"
    defsHeader.style.fontStyle = "italic"
    // add the short definition(s) of the word
    const definitions = data[0].shortdef
    definitions.map((def, index) => {
        let defDiv = document.createElement("div")
        wordDiv.appendChild(defDiv)
        if (definitions.length == 1) {
            defsHeader.innerHTML = "Definition"
            defDiv.innerHTML = `1) ${def}`
        } else {
            defsHeader.innerHTML = "Definitions"
            defDiv.innerHTML = `${index+1}) ${def}`
        }
        defDiv.className = "container text-center text-white mt-1"
    })
    console.log(data)
    console.log(`Part of Speech: ${data[0].fl}`)
    


    


    
}