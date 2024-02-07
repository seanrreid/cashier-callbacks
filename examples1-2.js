// Synchronous functions, quick and slow...

// Quick, default, no delay
function buyStuff(total, haveCash) {
  let payment;
  if (haveCash === true) {
    payment = 100;
  }
  return payment;
}

// 10 ms delay, it will break the stuff...
function buyStuffDelay(total, haveCash) {
  let payment;
  setTimeout(function () {
    payment = 100;
    console.log("Payment in timeout is:", payment);
  }, 10);
  console.log("Payment is: ", payment);
  return payment;
}

// Second function. We're gonna try to run this synchronously (it won't work)
function getChange(payment, total) {
  console.log("What did I pay?", payment);
  const change = payment - total;
  return change;
}

// const cashGivenToCashier = buyStuff(10, true);  // APPEARS synchronous, but isn't.
const cashGivenToCashier = buyStuffDelay(10, true); // Has a 10ms delay that makes the asynchronous runing obvious

console.log("what is my change?", getChange(cashGivenToCashier, 10));
