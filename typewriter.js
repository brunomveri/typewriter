const sentence = "hello there from lighthouse labs";

const typeWriter = function(str, delayTime) {
  for (let char of str) {
    setTimeout(() => { console.log(char); }, delayTime += 50);
  }
};

typeWriter(sentence, 0);
