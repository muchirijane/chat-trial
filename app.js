//dom elements
let mic = document.getElementById('mic');
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

//chatbot messages
let intro = ["Hello, I am Chitti", "Hi, I am a Robo", "Hello, My name is Chitti"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']

//speechRecognition setup
const speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showUserMsg(userMsg) {
    let html = '';
    html += `<div class="chatarea-inner user">${userMsg}</div>`;
    chatareaouter.innerHTML += html;
    return chatareaouter;
}

const showChatbotResponse = (userChatbot) => {
    let html = '';
    html += ` <div class="chatarea-inner chatbot">${userChatbot}</div>`;
    chatareaouter.innerHTML += html;
    return chatareaouter;
}

// setting up chatbot response
const chatbotResponse = (message) => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'This is under development.';

    
    switch (message) {
        case message.incluses('who are you'):
            let finalResult = intro[Math.floor(Math.random() * intro.length)];
            speech.text = finalResult;
            break;
        case message.incluses('fine'):
            let finalResult = help[Math.floor(Math.random() * intro.length)];
            speech.text = finalResult;
            break;    
        case message.incluses('how are you' || 'how are you doing today'):
            let finalResult = greetings[Math.floor(Math.random() * intro.length)];
            speech.text = finalResult;
            break;
        case message.incluses('tell me somrthing about you' || 'tell me something about your hobbies'):
            let finalResult = hobbies[Math.floor(Math.random() * intro.length)];
            speech.text = finalResult;
            break;

        case message.incluses('pizza'):
            let finalResult = pizza[Math.floor(Math.random() * intro.length)];
            speech.text = finalResult;
            break;
        case message.incluses('thank you' || 'thank you so much'):
            let finalResult = thank[Math.floor(Math.random() * intro.length)];
            speech.text = finalResult;
            break;
        case message.incluses('talk to you later' || 'talk to you tomorrow'):
            let finalResult = closing[Math.floor(Math.random() * intro.length)];
            speech.text = finalResult;
            break;             
        default:
            break;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showChatbotResponse(speech.text));

}
recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    console.log(transcript);
    console.log(e);
}

mic.addEventListener("click", function(){
    recognition.start();
    console.log("Activated");
})