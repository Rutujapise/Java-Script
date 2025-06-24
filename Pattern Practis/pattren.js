n= 3
for(i=1; i<=n; i++){
    line =''
    for(j=1; j<=n; j++){
    line += " *"
    }
    console.log (line)
}
console.log(" 5*5 square ")
n= 5
for(i=1; i<=n; i++){
    line =''
    for(j=1; j<=n; j++){
    line += " *"
    }
    console.log (line)
}
console.log(" Right angle triangle")
n= 5
for(i=1; i<=n; i++){
    line =''
    for(j=1; j<=i; j++){
    line += " *"
    }
    console.log (line)
}
console.log(" revarse")
n= 5
for(i=n; i>=1; i--){
    line =''
    for(j=1; j<=i; j++){
    line += " *"
    }
    console.log (line)
}
console.log ("pyramid")
n= 5
for(i=1; i<=n; i++){
       line =' '
    for(j=1; j<=n-i; j++){
        line += ' '
    }
    for(j=1; j<=i; j++){
        line += ' *'
    }
    console.log (line)
}

//
console.log("Diamond")
for(i=1; i<=n; i++){
       line =' '
    for(j=1; j<=n-i; j++){
        line += ' '
    }
    for(j=1; j<=i; j++){
        line += ' *'
    }
    console.log (line)
}
for(i=n-1; i>=1; i--){
       line =' '
    for(j=1; j<=n-i; j++){
        line += ' '
    }
    for(k=1; k<=i; k++){
        line += ' *'
    }
    console.log (line)
}


        function printNumberPyramid(n) {
            console.log("Number Pyramid without spaces:");
            for (let i = 1; i <= n; i++) {
                let row = '';
                for (let j = 1; j <= 2 * i - 1; j++) {
                    row += i;
                }
                console.log(row);
            }

            console.log("\nNumber Pyramid with spaces:");
            for (let i = 1; i <= n; i++) {
                let row = '';
                for (let j = 1; j <= i; j++) {
                    row += i + ' ';
                }
                console.log(row.trim());
            }
        }

        function printPascalsTriangle(n) {
            console.log("\nPascal's Triangle:");
            for (let i = 0; i < n; i++) {
                let row = '';
                let val = 1;
                for (let j = 0; j <= i; j++) {
                    row += val + ' ';
                    val = val * (i - j) / (j + 1);
                }
                console.log(row.trim());
            }
        }

        
        printNumberPyramid(4);
        printPascalsTriangle(5);
    
        function printHollowSquare(n) {
      console.log("Hollow Square:");
      for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
          if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
            row += '* ';
          } else {
            row += '  ';
          }
        }
        console.log(row.trim());
      }
    }
    function printHourglass(n) {
    console.log("Hourglass Pattern:");
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) row += ' ';
        for (let k = i; k < n; k++) row += '* ';
        console.log(row.trim());
    }
    for (let i = n - 2; i >= 0; i--) {
        let row = '';
        for (let j = 0; j < i; j++) row += ' ';
        for (let k = i; k < n; k++) row += '* ';
        console.log(row.trim());
    }
}

    // Call functions with examples
    printHollowSquare(5);
    printHourglass(4);

n=4;

for(i=1; i<=n; i++){
       line =' '
    for(j=1; j<=n-i; j++){
        line += ' '
    }
    for(j=1; j<=i; j++){
        line += ' *'
    }
    console.log (line)
}

function printZigZag(n) {
    console.log("Zig-Zag Pattern:");
    for (let row = 1; row <= 3; row++) {
        let line = '';
        for (let col = 1; col <= n; col++) {
            if ((row + col) % 4 === 0 || (row === 2 && col % 4 === 0)) {
                line += '* ';
            } else {
                line += '  ';
            }
        }
        console.log(line.trim());
    }
}
printZigZag(15);