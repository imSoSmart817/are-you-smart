function smart (){
  var text = prompt("who are you");
  if(text == "null" || text == null || text == "" ){
    return;
  }
  alert ("hey " + text);
  var answer = prompt("do you want to know if you are smart ?");
  if (answer == "yes") {
    answer = prompt ("what is 12*3");
    if (answer == "36") {
      alert ("you are smart! Time for the next question");
      answer = prompt ("27/3");
      if (answer == "9") {
        answer = prompt ("120/60");
        if(answer == "20") {
          alert ("congratulations you completed the quiz 🥳");  
        } else {
          alert ("sorry that is incorrect");  
        }
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
