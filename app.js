// 1) IF shartli masalalar

function if1(n) {
  if (n > 0) return n + 1;
  return n;
}

function if2(n) {
  if (n > 0) return n + 1;
  return n - 2;
}

function if3(n) {
  if (n > 0) return n + 1;
  if (n < 0) return n - 2;
  return 10;
}

function if4(a, b, c) {
  let count = 0;
  if (a > 0) count++;
  if (b > 0) count++;
  if (c > 0) count++;
  return count;
}

function if5(a, b, c) {
  let count = 0;
  if (a < 0) count++;
  if (b < 0) count++;
  if (c < 0) count++;
  return count;
}

function if6(num) {
  if (num < 10 || num > 99) {
    return 'Iltimos ikki xonali son kiriting!';
  }
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return { tens, ones };
}

function if7(num) {
  if (num < 10 || num > 99) {
    return 'Iltimos ikki xonali son kiriting!';
  }
  return Math.floor(num / 10) + (num % 10);
}

function if8(num) {
  if (num < 10 || num > 99) {
    return 'Iltimos ikki xonali son kiriting!';
  }
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return `${Math.max(tens, ones)}${Math.min(tens, ones)}`;
}

function if9(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }
  return { a, b };
}

function if10(a, b) {
  if (a !== b) {
    return {
      a: a + b,
      b: a + b,
    };
  }
  return {
    a: 10,
    b: 10,
  };
}

// 2) Integer masalalar

function integer1(cm) {
  return Math.floor(cm / 100);
}

function integer2(kg) {
  return Math.floor(kg / 1000);
}

function integer3(bytes) {
  return Math.floor(bytes / 1024);
}

function integer4(a, b) {
  if (a <= b) {
    return 'A > B bo`lishi kerak!';
  }
  return Math.floor(a / b);
}

function integer5(a, b) {
  if (a <= b) {
    return 'A > B bo`lishi kerak!';
  }
  return a % b;
}

function integer6(num) {
  if (num < 10 || num > 99) {
    return 'Iltimos ikki xonali son kiriting!';
  }
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return { tens, ones };
}

function integer7(num) {
  if (num < 10 || num > 99) {
    return 'Iltimos ikki xonali son kiriting!';
  }
  return Math.floor(num / 10) + (num % 10);
}

function integer8(num) {
  if (num < 10 || num > 99) {
    return 'Iltimos ikki xonali son kiriting!';
  }
  const tens = Math.floor(num / 10);
  const ones = num % 10;
  return ones * 10 + tens;
}

function integer9(num) {
  if (num < 100 || num > 999) {
    return 'Iltimos uch xonali son kiriting!';
  }
  return Math.floor(num / 100) % 10;
}

function integer10(num) {
  if (num < 100 || num > 999) {
    return 'Iltimos uch xonali son kiriting!';
  }
  return num % 10;
}

// Demo ko`rsatish
console.log('if1(5) =', if1(5));
console.log('if1(-3) =', if1(-3));
console.log('if2(-3) =', if2(-3));
console.log('if3(0) =', if3(0));
console.log('if4(2, -1, 3) =', if4(2, -1, 3));
console.log('if5(2, -1, -3) =', if5(2, -1, -3));
console.log('if6(47) =', if6(47));
console.log('if7(47) =', if7(47));
console.log('if8(47) =', if8(47));
console.log('if9(7, 3) =', if9(7, 3));
console.log('if10(5, 9) =', if10(5, 9));

console.log('integer1(250) =', integer1(250));
console.log('integer2(2500) =', integer2(2500));
console.log('integer3(2048) =', integer3(2048));
console.log('integer4(25, 5) =', integer4(25, 5));
console.log('integer5(25, 5) =', integer5(25, 5));
console.log('integer6(47) =', integer6(47));
console.log('integer7(47) =', integer7(47));
console.log('integer8(47) =', integer8(47));
console.log('integer9(456) =', integer9(456));
console.log('integer10(456) =', integer10(456));
