
    function checkNumber() {
      const num = parseFloat(document.getElementById('numberInput').value);
      const result = document.getElementById('numberResult');
      if (isNaN(num)) {
        result.textContent = "Please enter a valid number.";
        result.className = "alert alert-danger";
        result.classList.remove("d-none");
        return;
      }

      if (num > 0) {
        result.textContent = "The number is positive.";
      } else if (num < 0) {
        result.textContent = "The number is negative.";
      } else {
        result.textContent = "The number is zero.";
      }

      result.className = "alert alert-info";
      result.classList.remove("d-none");
    }

    function generateTable() {
      const num = parseInt(document.getElementById('tableInput').value);
      const tableResult = document.getElementById('tableResult');
      tableResult.innerHTML = "";

      if (isNaN(num)) {
        tableResult.innerHTML = '<li class="list-group-item text-danger">Please enter a valid number.</li>';
        return;
      }

      for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.className = "list-group-item";
        li.textContent = `${num} x ${i} = ${num * i}`;
        tableResult.appendChild(li);
      }
    }

    let systemGeneratedNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 0;

    console.log("System Generated Number (for testing):", systemGeneratedNumber); // You can remove this in production

    function checkGuess() {
      const userNumber = parseInt(document.getElementById('guessInput').value);
      const message = document.getElementById('guessMessage');
      attempts++;

      if (isNaN(userNumber)) {
        message.textContent = "Please enter a valid number!";
        message.className = "alert alert-warning mt-3";
        message.classList.remove("d-none");
        return;
      }

      if (userNumber < systemGeneratedNumber) {
        message.textContent = "Too low! Try again.";
        message.className = "alert alert-danger mt-3";
      } else if (userNumber > systemGeneratedNumber) {
        message.textContent = "Too high! Try again.";
        message.className = "alert alert-danger mt-3";
      } else {
        message.textContent = `Correct! You guessed the number in ${attempts} attempts.`;
        message.className = "alert alert-success mt-3";
      }

      message.classList.remove("d-none");
    }

    function resetGame() {
      systemGeneratedNumber = Math.floor(Math.random() * 10) + 1;
      attempts = 0;
      document.getElementById('guessInput').value = "";
      document.getElementById('guessMessage').classList.add("d-none");
      console.clear();
      console.log("New System Generated Number (for testing):", systemGeneratedNumber);
    }

    // Exercise 4: Print Even Numbers
  function printEvenNumbers() {
    let result = [];
    for (let i = 1; i <= 20; i++) {
      if (i % 2 === 0) {
        result.push(i);
      }
    }
    const evenDiv = document.getElementById('evenResult');
    evenDiv.textContent = result.join(", ");
    evenDiv.classList.remove('d-none');
  }

  // Exercise 5: Sum of Digits using do...while
  function sumOfDigits() {
    let num = parseInt(document.getElementById('digitInput').value);
    if (isNaN(num)) {
      document.getElementById('sumResult').textContent = "Please enter a valid number.";
      document.getElementById('sumResult').classList.remove('d-none');
      return;
    }
    let sum = 0;
    do {
      sum += num % 10;
      num = Math.floor(num / 10);
    } while (num > 0);

    const sumDiv = document.getElementById('sumResult');
    sumDiv.textContent = "Sum of digits: " + sum;
    sumDiv.classList.remove('d-none');
  }

  // Exercise 6: FizzBuzz
  function runFizzBuzz() {
    let result = [];
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
      } else if (i % 3 === 0) {
        result.push("Fizz");
      } else if (i % 5 === 0) {
        result.push("Buzz");
      } else {
        result.push(i);
      }
    }
    const fizzDiv = document.getElementById('fizzBuzzResult');
    fizzDiv.textContent = result.join(", ");
    fizzDiv.classList.remove('d-none');
  }

  // Exercise 7: Prime Checker
  function checkPrime() {
    const num = parseInt(document.getElementById('primeInput').value);
    const result = document.getElementById('primeResult');

    if (isNaN(num) || num < 1) {
      result.textContent = "Please enter a valid number greater than 0.";
      result.className = "alert alert-warning d-block";
      return;
    }

    let isPrime = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    result.textContent = isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`;
    result.className = "alert alert-info d-block";
  }

  // Exercise 8: Star Pattern
  function printStarPattern() {
    const n = parseInt(document.getElementById('starInput').value);
    const result = document.getElementById('starResult');

    if (isNaN(n) || n < 1) {
      result.textContent = "Enter a valid number greater than 0.";
      result.classList.remove('d-none');
      return;
    }

    let pattern = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
        pattern += "*";
      }
      pattern += "\n";
    }

    result.textContent = pattern;
    result.classList.remove('d-none');
  }

  // Exercise 9: Largest of Three Numbers
  function findLargest() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const result = document.getElementById('largestResult');

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
      result.textContent = "Please enter all three valid numbers.";
      result.className = "alert alert-warning d-block";
      return;
    }

    let largest = num1;
    if (num2 > largest) largest = num2;
    if (num3 > largest) largest = num3;

    result.textContent = `The largest number is ${largest}.`;
    result.className = "alert alert-info d-block";
  }
  // Exercise 10: Palindrome Checker
  function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value.trim().toLowerCase();
    const reversed = input.split('').reverse().join('');
    const result = document.getElementById('palindromeResult');
    result.textContent = input === reversed ? `${input} is a palindrome.` : `${input} is not a palindrome.`;
    result.classList.remove('d-none');
  }

  // Exercise 11: Count Vowels and Consonants
  function countVowelsConsonants() {
    const input = document.getElementById('vcInput').value.toLowerCase();
    let vowels = 0, consonants = 0;
    for (let char of input) {
      if (/[a-z]/.test(char)) {
        if ("aeiou".includes(char)) {
          vowels++;
        } else {
          consonants++;
        }
      }
    }
    const result = document.getElementById('vcResult');
    result.textContent = `Vowels: ${vowels}, Consonants: ${consonants}`;
    result.classList.remove('d-none');
  }

  // Exercise 12: Reverse a Number using while loop
  function reverseNumber() {
    let num = parseInt(document.getElementById('reverseInput').value);
    let reversed = 0;
    while (num > 0) {
      reversed = reversed * 10 + (num % 10);
      num = Math.floor(num / 10);
    }
    const result = document.getElementById('reverseResult');
    result.textContent = `Reversed number: ${reversed}`;
    result.classList.remove('d-none');
  }

  // Exercise 13: Sum of Odd and Even Numbers
  function sumOddEven() {
    let evenSum = 0, oddSum = 0;
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        evenSum += i;
      } else {
        oddSum += i;
      }
    }
    const result = document.getElementById('oddEvenResult');
    result.textContent = `Sum of even numbers: ${evenSum}, Sum of odd numbers: ${oddSum}`;
    result.classList.remove('d-none');
  }


  function calculateFactorial() {
    let num = parseInt(document.getElementById('factInput').value);
    let result = document.getElementById('factResult');
    if (isNaN(num) || num < 0) {
      result.textContent = "Enter a non-negative number.";
      result.classList.remove('d-none');
      return;
    }
    let fact = 1;
    let i = 1;
    while (i <= num) {
      fact *= i;
      i++;
    }
    result.textContent = `Factorial of ${num}: ${fact}`;
    result.classList.remove('d-none');
  }

  // Exercise 15: Average of N Numbers
  function calculateAverage() {
    const count = parseInt(document.getElementById('countInput').value);
    const nums = document.getElementById('numbersInput').value.split(',').map(Number);
    const result = document.getElementById('avgResult');

    if (nums.length !== count || nums.some(isNaN)) {
      result.textContent = "Enter valid N numbers separated by commas.";
      result.classList.remove('d-none');
      return;
    }

    let sum = 0;
    for (let i = 0; i < count; i++) {
      sum += nums[i];
    }

    const avg = sum / count;
    result.textContent = `Sum: ${sum}, Average: ${avg}`;
    result.classList.remove('d-none');
  }

  // Exercise 16: Leap Year Checker
  function checkLeapYear() {
    const year = parseInt(document.getElementById('yearInput').value);
    const result = document.getElementById('leapResult');

    if (isNaN(year) || year < 0) {
      result.textContent = "Enter a valid positive year.";
      result.classList.remove('d-none');
      return;
    }

    const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    result.textContent = isLeap ? `${year} is a leap year.` : `${year} is not a leap year.`;
    result.classList.remove('d-none');
  }
function findDivisors() {
      const num = parseInt(document.getElementById('divisorInput').value);
      const resultDiv = document.getElementById('divisorResult');

      if (isNaN(num) || num <= 0) {
        resultDiv.textContent = "Please enter a positive number.";
        resultDiv.className = "alert alert-warning";
        resultDiv.classList.remove('d-none');
        return;
      }

      let divisors = [];
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          divisors.push(i);
        }
      }

      resultDiv.textContent = `Divisors of ${num}: ${divisors.join(", ")}`;
      resultDiv.className = "alert alert-info";
      resultDiv.classList.remove('d-none');
    }
     // Exercise 18: Fibonacci Sequence
  function generateFibonacci() {
    const n = parseInt(document.getElementById('fiboInput').value);
    const result = document.getElementById('fiboResult');
    if (isNaN(n) || n <= 0) {
      result.textContent = "Enter a positive number of terms.";
      result.classList.remove("d-none");
      return;
    }

    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    result.textContent = `Fibonacci sequence: ${fib.slice(0, n).join(", ")}`;
    result.classList.remove("d-none");
  }

  // Exercise 19: Armstrong Number Checker
  function checkArmstrong() {
    const num = parseInt(document.getElementById('armInput').value);
    const result = document.getElementById('armResult');

    if (isNaN(num) || num < 0) {
      result.textContent = "Please enter a valid non-negative number.";
      result.classList.remove("d-none");
      return;
    }

    const numStr = num.toString();
    const power = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
      sum += Math.pow(parseInt(digit), power);
    }

    result.textContent = (sum === num)
      ? `${num} is an Armstrong number.`
      : `${num} is not an Armstrong number.`;

    result.classList.remove("d-none");
  }

  // Exercise 20: Number Pyramid
  function generatePyramid() {
    const rows = parseInt(document.getElementById('pyramidInput').value);
    const result = document.getElementById('pyramidResult');

    if (isNaN(rows) || rows <= 0) {
      result.textContent = "Please enter a positive number.";
      result.classList.remove("d-none");
      return;
    }

    let pattern = "";
    for (let i = 1; i <= rows; i++) {
      let line = "";
      for (let j = 1; j <= i; j++) {
        line += j;
      }
      for (let j = i - 1; j >= 1; j--) {
        line += j;
      }
      pattern += line + "\n";
    }

    result.textContent = pattern;
    result.classList.remove("d-none");
  }