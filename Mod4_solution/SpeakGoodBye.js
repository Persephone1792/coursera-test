(function(window) {
    var byeSpeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);

/*(function(window) {
  var byeSpeaker = {};
    byeSpeaker.speak = function() {
        console.log(speakWord + " " + name);
    }
    var speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
    }(window));*/