
let obj = {};
function fiftyThirtyTwenty (money) {
    obj.Needs = (money / 100) * 50;
    obj.Wants = (money / 100) * 30;
    obj.Savings = (money / 100) * 20;
    return obj;
}
console.log(fiftyThirtyTwenty(10000))