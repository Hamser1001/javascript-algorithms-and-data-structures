/*
Currency Unit        Amount
Penny                $0.01 (PENNY)
Nickel               $0.05 (NICKEL)
Dime                 $0.10 (DIME)
Quarter              $0.25 (QUARTER)
Dollar               $1.00 (ONE)
Five Dollars         $5.00 (FIVE)
Ten Dollars          $10.00 (TEN)
Twenty Dollars       $20.00 (TWENTY)
One Hundred Dollars  $100.00 (ONE HUNDRED)
*/

// DOM element references used for the cash register operation
const changeDue = document.getElementById("change-due");
const cash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const priceScreen = document.getElementById("price-screen");

let price = 1.87;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];


purchaseBtn.addEventListener("click", () => {
    console.log("Clicked");
    changeDue.innerHTML = `<h1>Clicked</h1>`;
})