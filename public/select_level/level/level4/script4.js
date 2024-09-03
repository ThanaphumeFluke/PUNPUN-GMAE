//level = 4
var random1, random2, random3, random4, random5, result, ans
var inop1, op1_value, inop2, op2_value, inop3, op3_value, inop4, op4_value

function findnumber() {
  random1 = Math.floor(Math.random() * 9) + 1
  random2 = Math.floor(Math.random() * 9) + 1
  random3 = Math.floor(Math.random() * 9) + 1
  random4 = Math.floor(Math.random() * 9) + 1
  random5 = Math.floor(Math.random() * 9) + 1
  document.getElementById("num1").innerHTML = random1
  document.getElementById("num2").innerHTML = random2
  document.getElementById("num3").innerHTML = random3
  document.getElementById("num4").innerHTML = random4
  document.getElementById("num5").innerHTML = random5
  var op1 = Math.floor(Math.random() * 4)
  var op2 = Math.floor(Math.random() * 4)
  var op3 = Math.floor(Math.random() * 4)
  var op4 = Math.floor(Math.random() * 4)
  if (op1 < 2 && op2 < 2 && op3 < 2 && op4 > 1) {
    result = operator(operator(operator(random1, random2, op1), random3, op2), operator(random4, random5, op4), op3)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 < 2 && op2 < 2 && op3 > 1 && op4 < 2) {
    result = operator(operator(operator(random1, random2, op1), operator(random3, random4, op3), op2), random5, op4)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 < 2 && op2 > 1 && op3 < 2 && op4 < 2) {
    result = operator(operator(operator(random1, operator(random2, random3, op2), op1), random4, op3), random5, op4)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 < 2 && op2 < 2 && op3 > 1 && op4 > 1) {
    result = operator(operator(random1, random2, op1), operator(operator(random3, random4, op3), random5, op4), op2)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 < 2 && op2 > 1 && op3 > 1 && op4 < 2) {
    result = operator(operator(random1, operator(operator(random2, random3, op2), random4, op3), op1), random5, op4)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 < 2 && op2 > 1 && op3 > 1 && op4 > 1) {
    result = operator(random1, operator(operator(operator(random2, random3, op2), random4, op3), random5, op4), op1)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  } if (op1 < 2 && op2 > 1 && op3 < 2 && op4 > 1) {
    result = operator(operator(random1, operator(random2, random3, op2), op1), operator(random4, random5, op4), op3)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 > 1 && op2 < 2 && op3 < 2 && op4 > 1) {
    result = operator(operator(operator(random1, random2, op1), random3, op2), operator(random4, random5, op4))
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 > 1 && op2 > 1 && op3 < 2 && op4 > 1) {
    result = operator(operator(operator(random1, random2, op1), random3, op2), operator(random4, random5, op4))
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 > 1 && op2 < 2 && op3 > 1 && op4 > 1) {
    result = operator(operator(random1, random2, op1), operator(operator(random3, random4, op3), random5, op4), op2)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  if (op1 > 1 && op2 < 2 && op3 > 1 && op4 < 2) {
    result = operator(operator(operator(random1, random2, op1), operator(random3, random4, op3), op2), random5, op4)
    if (result >= 100 || result <= 0 || result - Math.floor(result) != 0) {
      return findnumber();
    }
    return result;
  }
  else {
    result = operator(operator(operator(operator(random1, random2, op1), random3, op2), random4, op3), random5, op4)
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

function check(input1, input2, input3, input4) {
  if (input1 < 2 && input2 < 2 && input3 < 2 && input4 > 1) {
    ans = operator(operator(operator(random1, random2, input1), random3, input2), operator(random4, random5, input4), input3)
  }
  else if (input1 < 2 && input2 < 2 && input3 > 1 && input4 < 2) {
    ans = operator(operator(operator(random1, random2, input1), operator(random3, random4, input3), input2), random5, input4)
  }
  else if (input1 < 2 && input2 > 1 && input3 < 2 && input4 < 2) {
    ans = operator(operator(operator(random1, operator(random2, random3, input2), input1), random4, input3), random5, input4)
  }
  else if (input1 < 2 && input2 < 2 && input3 > 1 && input4 > 1) {
    ans = operator(operator(random1, random2, input1), operator(operator(random3, random4, input3), random5, input4), input2)
  }
  else if (input1 < 2 && input2 > 1 && input3 > 1 && input4 < 2) {
    ans = operator(operator(random1, operator(operator(random2, random3, input2), random4, input3), input1), random5, input4)
  }
  else if (input1 < 2 && input2 > 1 && input3 > 1 && input4 > 1) {
    ans = operator(random1, operator(operator(operator(random2, random3, input2), random4, input3), random5, input4), input1)
  } else if (input1 < 2 && input2 > 1 && input3 < 2 && input4 > 1) {
    ans = operator(operator(random1, operator(random2, random3, input2), input1), operator(random4, random5, input4), input3)
  }
  else if (input1 > 1 && input2 < 2 && input3 < 2 && input4 > 1) {
    ans = operator(operator(operator(random1, random2, input1), random3, input2), operator(random4, random5, input4), input3)
  }
  else if (input1 > 1 && input2 > 1 && input3 < 2 && input4 > 1) {
    ans = operator(operator(operator(random1, random2, input1), random3, input2), operator(random4, random5, input4), input3)
  }
  else if (input1 > 1 && input2 < 2 && input3 > 1 && input4 > 1) {
    ans = operator(operator(random1, random2, input1), operator(operator(random3, random4, input3), random5, input4), input2)
  }
  else if (input1 > 1 && input2 < 2 && input3 > 1 && input4 < 2) {
    ans = operator(operator(operator(random1, random2, input1), operator(random3, random4, input3), input2), random5, input4)
  }
  else {
    ans = operator(operator(operator(operator(random1, random2, input1), random3, input2), random4, input3), random5, input4)
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
  inop3 = document.getElementById("operator3")
  op3_value = inop3.value
  inop4 = document.getElementById("operator4")
  op4_value = inop4.value
  check(op1_value, op2_value, op3_value, op4_value)
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