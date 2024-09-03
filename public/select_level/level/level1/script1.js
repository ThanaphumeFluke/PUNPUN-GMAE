//level = 1
var random1, random2, result
var inop1, op1_value

//findnumber function
function findnumber() {
  random1 = Math.floor(Math.random() * 9) + 1
  random2 = Math.floor(Math.random() * 9) + 1
  document.getElementById("num1").innerHTML = random1
  document.getElementById("num2").innerHTML = random2
  result = operator(random1, random2, Math.floor(Math.random() * 4))
  if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
    return findnumber();
  }
  return result;
}
//operator function
function operator(n1, n2, random) {
  if (random == 0) {
    return n1 + n2;
  }
  else if (random == 1) {
    return n1 - n2;
  }
  else if (random == 2) {
    return n1 * n2;
  }
  else if (random == 3) {
    return n1 / n2;
  }
}
//check function
function check(input1) {
  if (result == operator(random1, random2, input1)) {
    document.getElementById("check").innerHTML = "Correct!"
    document.getElementById("submit").disabled = true;
    pause();
    setTimeout(resume, 3000)
  }
  else {
    document.getElementById("check").innerHTML = "Incorrect"
  }
}
//submitted function
function submitted() {
  inop1 = document.getElementById("operator1")
  op1_value = inop1.value
  check(op1_value)
}

document.getElementById("answer").innerHTML = findnumber()

var timer;
var ele = document.getElementById('timer');
(function (){
  var sec = 1;
  timer = setInterval(()=>{
    ele.innerHTML = sec + ' s';
    sec ++;
  }, 1000)
})() 

function pause(){
  clearInterval(timer);
}

function resume(){
  document.getElementById('timer').innerHTML = "0 s";
  document.getElementById("submit").disabled = false;
  (function (){
    var sec = 1;
    timer = setInterval(()=>{
      ele.innerHTML = sec + ' s';
      sec ++;
    }, 1000)
  })()
  findnumber();
  document.getElementById("check").innerHTML = ""
  document.getElementById("answer").innerHTML = findnumber()
}