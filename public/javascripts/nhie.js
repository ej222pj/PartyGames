let scripts = document.getElementsByTagName('script');
let allQuestions = scripts[scripts.length-1].getAttribute("questions");
let jsonQuestions = JSON.parse(allQuestions);
let current = 0;

function changeQuestion() {
    let question = document.getElementById("clickToChange");
    question.innerHTML = jsonQuestions[current].question;

    current++;
    if(current == jsonQuestions.length){
        shuffle(jsonQuestions);
        current = 0;
    }
}

function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

