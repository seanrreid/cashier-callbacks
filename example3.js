// Just using a callback...

const haveCash = true;

function buyStuff(total, haveCash) {
    const payment = setTimeout(function () {
        if (haveCash === true) {
            const myChange = getChange(100, total);
            console.log("my change is:", myChange)
            return myChange;
        }
    }, 100);
    return payment;
}

function getChange(payment, total) {
  let change = payment - total
  return change;
}

console.log(buyStuff(10, true))