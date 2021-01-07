if (!window.SpeechSynthesisUtterance) {
    document.getElementById("error").style.display = "block";
    document.getElementById("control").style.display = "none";
}

var lang = "ru-RU";

var synth = window.speechSynthesis,
    soundBlock = document.getElementById("sound_block"),
    voice = '',
    supportedVoices = [];

document.getElementById("speak").onclick = function() {
    if (0 === supportedVoices.length) {
        var voices = synth.getVoices();
    }

    for (var i = 0; i < voices.length; i++) {
        if (lang == voices[i].lang) {
            voice = voices[i];
        }
    }

    var words = soundBlock.innerText.split('.');
    for (var i = 0; i < words.length; i++) {
        var utterThis = new SpeechSynthesisUtterance(words[i]);
        utterThis.voice = voice;
        synth.speak(utterThis);
    }
}

document.getElementById("cancel").onclick = function() {
    synth.cancel();
}