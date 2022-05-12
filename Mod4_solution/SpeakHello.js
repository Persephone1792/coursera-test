(function(window) {
    var helloSpeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;
})(window);

/*(function(window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  }
  var speakWord = "Hello";
  window.helloSpeaker = helloSpeaker;
}(window));*/
