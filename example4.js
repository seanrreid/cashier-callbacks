// Using a Promise and then()

function buyStuff(haveCash) {
    return new Promise(function (resolve) {
        setTimeout(function () {
                if (haveCash === true) {
                    resolve(100)
                }
            })
    }, 100);
};

function getChange(payment, total) {
  let change = payment - total;
  return change;
}

const payment = buyStuff(true);

payment.then(function (whatIPaid) {
    const myChange = getChange(whatIPaid, 10);
    console.log("My change is:", myChange);
})
