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
const changeDue = document.getElementById("change-due"); // Amount due for refund
const cash = document.getElementById("cash"); // Amount paid
const purchaseBtn = document.getElementById("purchase-btn"); // Purchase button
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

let obj = {}


const calculateChange = () => {
    cid.forEach((element) => {
        obj[element[0]] = element[1];
        console.log(element[0]);
    })

    for (const key in obj) {
        console.log(`this is a key: ${key}`);

    }
    console.log(`obj is : ${obj}`)
}


purchaseBtn.addEventListener("click", () => {
    calculateChange();
    // to know the button works
    console.log("Clicked");
    changeDue.innerHTML += `<p>Clicked</p>`;
})