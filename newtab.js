// newtab.js
chrome.runtime.sendMessage({ message: "getRandomQuestion" }, (response) => {
  console.log(response);
  if (response && response.question) {
    document.getElementById("question").innerText = response.question;
    document.getElementById("input").innerText = "Input: " + response.input;
    document.getElementById("output").innerText = "Output: " + response.output;
    document.getElementById("explanation").innerText = "Explanation: " + response.explanation;
    document.getElementById("source").innerText = "Source: " + response.source;
    document.getElementById("topic").innerText = "Topic: " + response.topic;
    document.getElementById("solve").href = response.link_to_solve;
  }
});
