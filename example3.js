// Just using a callback...

const haveCash = true;

function buyStuff(total, haveCash) {
    const payment = setTimeout(function () {
        if (haveCash === true) {
            const myChange = getChange(100, total);
            console.log(`My change is $${myChange}.`);
            return myChange;
        }
    }, 100);
    return payment;
}

function getChange(payment, total) {
    console.log(`The total is $${total}.\nI paid $${payment}`);
    let change = payment - total;
    return change;
}

buyStuff(10, true);
