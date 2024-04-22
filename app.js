const textarea =document.querySelector("textarea");
const button =document.querySelector("button");
isSpeaking=true;

const textToSpeech = () =>{
    const synth =window.speechSynthesis;
    const text =textarea.value;

    const utternace =new SpeechSynthesisUtterance(text);
    synth.speak(utternace);
    if(text.length>50){
        if(synth.speaking && isSpeaking){
            button.innerText="pause";
            synth.resume();
            isSpeaking=false;
        }
        else{
            button.innerText="Resume";
            synth.pause();
            isSpeaking=true;
        }
    }
    else{
        isSpeaking=false;
        button.innerText="speaking";
    }
    setInterval(()=>{
        if(!synth.speaking && !isSpeaking){
            isSpeaking=true;
            button.innerText ="Convert to speech";
        }
    })
}
button.addEventListener("click",textToSpeech)





