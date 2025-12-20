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
const displayChangeDue = document.getElementById("change-due"); // Amount due for refund
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

// Display Change in drawer
const displayCid = () => {
    const objectCid = {
        "PENNY": "Penny",
        "NICKEL": "Nickel",
        "DIME": "Dime",
        "QUARTER": "Quarter",
        "ONE": "One",
        "FIVE": "Five",
        "TEN": "Ten",
        "TWENTY": "Twenty",
        "ONE HUNDRED": "OneHundred"
    };
    // Create a p element to display the Total
    const total = document.createElement('p');
    priceScreen.appendChild(total);

    // Create a unorderd list element to display the 
    const list = document.createElement('ul');
    priceScreen.appendChild(list);

    total.innerHTML = `<h1>Total: ${price}</h1>`;

    // Display the list items on the screen
    for (let i = 0; i < cid.length; i++) {
        list.innerHTML += `<li class="currency-unit">${objectCid[cid[i][0]]}: $<span>${cid[i][1]}</span></li>`;
    }
}



displayCid();
purchaseBtn.addEventListener("click", () => {
    displayChangeDue.innerHTML += `<p class="clicked">Clicked</p>`;
})