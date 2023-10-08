var joke=require('one-liner-joke');
var s=require('say')
var j=joke.getRandomJoke();
console.log(j)
s.speak(j.body)
