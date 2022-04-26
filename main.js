const msg = document.querySelectorAll('.msg')[0];
const gus = document.querySelectorAll('input')[0];
const btn = document.querySelectorAll('.btn')[0];

let play = false;
let newWords = "";
let randWords = "";
const sWords = ["apple", "amazon", "microsoft", "google", "tesla", "c++", "python", "javascript", "pycharm", "elon musk", "react", "angular", "lifecycle"];

const createWord = () => {
    let ranNum = Math.floor(Math.random() * sWords.length);
    let newTempSwords = sWords[ranNum];
    return newTempSwords;
}

const scrambleWord = (arr) => {
    for (let i = arr.length-1; i > 0; i--) {
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        console.log(i);
        console.log(j);

        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click', () => {
    if (!play) {
        play = true;
        btn.innerHTML = 'Guss';
        gus.classList.toggle('hiden');
        newWords = createWord();
        randWords = scrambleWord(newWords.split("")).join("");
        msg.innerHTML = `Guss the words: ${randWords}`;
    } else {
        let tempWords = gus.value;
        if (tempWords == newWords) {
            play = false;
            msg.innerHTML = `Awsome It's correct. it is ${newWords}`;
            btn.innerHTML = "Start Again";
            gus.classList.toggle('hiden');
            gus.value = "";
        } else {
            msg.innerHTML = `Sorry It's incorrect, please try again ${randWords}`;
        }
    }
})