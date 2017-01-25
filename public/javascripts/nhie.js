let scripts = document.getElementsByTagName('script');
let allQuestions = scripts[scripts.length - 1].getAttribute('questions');
let jsonQuestions = JSON.parse(allQuestions);
let current = 0;

function changeQuestion() {
    let adult = document.getElementsByName('adultQuestions');
    let question = document.getElementById('clickToChange');
    if (adult[0].checked) {
        while (jsonQuestions[current].adult == false) {
            current++;
            if (current == jsonQuestions.length) {
                shuffle(jsonQuestions);
                current = 0;
            }
        }

        question.innerHTML = jsonQuestions[current].question;
    } else if (adult[1].checked) {
        while (jsonQuestions[current].adult == true) {
            current++;
            if (current == jsonQuestions.length) {
                shuffle(jsonQuestions);
                current = 0;
            }
        }

        question.innerHTML = jsonQuestions[current].question;
    } else {
        question.innerHTML = jsonQuestions[current].question;
    }

    current++;
    if (current == jsonQuestions.length) {
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

function countChars() {
    let len = document.getElementById('questionTextfield').value.length;
    document.getElementById('charcount').innerHTML = len;
}
