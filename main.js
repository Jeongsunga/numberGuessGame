// 랜덤번호 지정
// 유저가 번호를 입력 후 go 버튼 누름
// 만약 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down!!
// 랜덤번호 > 유저번호 Up!!
// Reset 버튼을 누르면 게임 리셋
// 5번의 기회를 다 쓰면 게임이 끝난다(더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖의 숫자를 입력하면 알려준다(기회를 깎지 않는다)
// 유저가 이미 입력한 숫자를 입력하면 알려준다(기회를 깎지 않는다)

let computerNum = 0
let chances = 3 // 1) 10으로 변경
let gameOver = false
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let hintButton = document.getElementById("hint-button")
let chanceArea = document.getElementById("chance-area")
let history = []

const startImg = "./image/start.jpg"
const correctImg = "./image/correct.gif"
const failImg = "./image/fail.gif"
const upImg = "./image/up.gif"
const downImg = "./image/down.gif"
let image = document.querySelector('.gif-area')
image.src = startImg;

playButton.addEventListener("click", play)  // 함수를 매개변수로 사용
resetButton.addEventListener("click", reset)
hintButton.addEventListener("focus", hint)
userInput.addEventListener("focus", function(){userInput.value = ""})

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1 // 4) 곱하는 숫자를 10으로 변경
    return computerNum
}

function play(){
    let userValue = userInput.value
    if(userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100 사이 숫자를 입력하시오."
        image.src = failImg;
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력하시오."
        image.src = failImg;
        return;
    }
    chances --
    console.log("chance", chances)
    chanceArea.textContent = `남은 기회 : ${chances} 번`
    if(userValue < computerNum){
        resultArea.textContent = "Up!!"
        image.src = upImg;
    } else if (userValue > computerNum){
        resultArea.textContent = "Down!!"
        image.src = downImg;
    } else{
        resultArea.textContent = "Correct!!!"
        image.src = correctImg;
        gameOver = true  // 2) 숫자 맞춘 후 버튼 disable
    }

    history.push(userValue)

    if(chances < 1){
        gameOver = true
        image.src = failImg;
    }
    if(gameOver){   // 3) gameOver == true과 동일 -> if 안의 조건문이 true라면 실행되므로
        playButton.disabled = true
    }
}

function reset(){
    // user input 창이 깨끗하게 정리
    userInput.value = ""
    // 새로운 번호로 생성
    pickRandomNum()
    resultArea.textContent = "결과 값 확인하기"
    chances = 3
    chanceArea.textContent = `남은 기회 : ${chances} 번`
    history = []
    gameOver = false
    playButton.disabled = false
    image.src = startImg;
}

function hint(){
    let hintNum = pickRandomNum()
    resultArea.textContent = hintNum
}

pickRandomNum()