let mic = document.getElementById('mic');
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showUserMsg(userMsg) {
    let html = '';
    html += `<div class="chatarea-inner user">${userMsg}</div>`;
    chatareaouter.innerHTML += html;
    return chatareaouter;
}

const showChatbot = (userChatbot) => {
    let html = '';
    html += ` <div class="chatarea-inner chatbot">${userChatbot}</div>`;
    chatareaouter.innerHTML += html;
    return chatareaouter;
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    console.log(transcript);
    console.log(e)
}

mic.addEventListener("click", function(){
    recognition.start();
    console.log("Activated");
})