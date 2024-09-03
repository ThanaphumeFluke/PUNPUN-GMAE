//level = 2
var random1, random2, random3, result, ans
var inop1, op1_value, inop2, op2_value

function findnumber() {
  random1 = Math.floor(Math.random() * 9) + 1
  random2 = Math.floor(Math.random() * 9) + 1
  random3 = Math.floor(Math.random() * 9) + 1
  document.getElementById("num1").innerHTML = random1
  document.getElementById("num2").innerHTML = random2
  document.getElementById("num3").innerHTML = random3
  op1 = Math.floor(Math.random() * 4)
  op2 = Math.floor(Math.random() * 4)
  if (op1 < 2 && op2 > 1) {
    result = operator(random1, operator(random2, random3, op2), op1)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  else {
    result = operator(operator(random1, random2, op1), random3, op2)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
}

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

function check(input1, input2) {
  if (input1 < 2 && input2 > 1) {
    ans = operator(random1, operator(random2, random3, input2), input1)
  }
  else {
    ans = operator(operator(random1, random2, input1), random3, input2)
  }
  if (result == ans) {
    document.getElementById("check").innerHTML = "Correct!"
    document.getElementById("submit").disabled = true;
    pause();
    setTimeout(resume, 3000)
  }
  else {
    document.getElementById("check").innerHTML = "Incorrect"
  }
}

function submitted() {
  inop1 = document.getElementById("operator1")
  op1_value = inop1.value
  inop2 = document.getElementById("operator2")
  op2_value = inop2.value
  check(op1_value, op2_value)
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