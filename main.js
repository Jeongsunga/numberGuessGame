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
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")

playButton.addEventListener("click", play)  // 함수를 매개변수로 사용

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1 // 0 ~ 1까지 반환
    console.log(computerNum)
}

function play(){
    let userValue = userInput.value
    if(userValue < computerNum){
        resultArea.textContent = "Up!!"
    } else if (userValue > computerNum){
        resultArea.textContent = "Down!!"
    } else{
        resultArea.textContent = "Correct!!!"
    }
}

pickRandomNum()