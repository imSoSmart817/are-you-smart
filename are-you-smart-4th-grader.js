function smart (){
  var text = prompt("who are you");
  if(text == "null" || text == null || text == "" ){
    return;
  }
  alert ("hey " + text);
  var answer = prompt("do you want to know if you are smart ?");
  if (answer == "yes") {
    var answer1 = prompt ("what is 12*3");
    if (answer1 == "36") {
      alert ("you are smart! Time for the next question");
      var answer2 = prompt ("27/3");
      if (answer2 == "9") {
        alert ("congratulations you completed the quiz 🥳");
      } else {
        alert ("sorry that is incorrect");
      }
    } else {
       alert ("sorry that is incorrect");
    }
  } else {
    alert("Have a nice day!");
  }
}

smart();
