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


class CashRegister {
    constructor(cid, price) {
        this.cid = cid;
        this.price = price;
        this.currency = {
            // unit key will be added in next for loop
            PENNY: { label: "Penny", value: 0.01 },
            NICKEL: { label: "Nickel", value: 0.05 },
            DIME: { label: "Dime", value: 0.10 },
            QUARTER: { label: "Quarter", value: 0.25 },
            ONE: { label: "One", value: 1.00 },
            FIVE: { label: "Five", value: 5.00 },
            TEN: { label: "Ten", value: 10.00 },
            TWENTY: { label: "Twenty", value: 20.00 },
            "ONE HUNDRED": { label: "One Hundred", value: 100.00 }
        };
    }

    // Display Change in drawer
    displayCid() {
        // Create a p element to display the Total
        const total = document.createElement('p');
        priceScreen.appendChild(total);
        // Create a unorderd list element to display the 
        const list = document.createElement('ul');
        priceScreen.appendChild(list);

        total.innerHTML = `<h1>Total: ${price}</h1>`;

        // Display the list items on the screen
        for (let i = 0; i < this.cid.length; i++) {
            list.innerHTML += `<li class="currency-unit">${this.currency[this.cid[i][0]].label}: $<span>${this.cid[i][1]}</span></li>`;
        }
    }

    calculate(amount) {
        let changeDue = [];


        // Calculate the unit for each currency
        for (let i = cid.length - 1; i >= 0; i--) {
            this.currency[cid[i][0]].unit = Math.floor(cid[i][1] / this.currency[cid[i][0]].value);
        }

        for (let i = cid.length - 1; i >= 0; i--) {
            // console.log(this.currency[cid[i][0]].value);
            while (this.currency[cid[i][0]].unit > 0 && this.currency[cid[i][0]].value <= amount) {
                amount -= this.currency[cid[i][0]].value;
                console.log(amount);
                this.currency[cid[i][0]].unit--;
            }

        }
    }
}



// Create an Object
const cashClass = new CashRegister(cid, price);




// Input Checker
const inputChecker = (cash, amount) => {
    if (cash < amount) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    if (cash === amount) {
        displayChangeDue.innerHTML = "No change due - customer paid with exact cash";
        return;
    }
}

// Display the CID
cashClass.displayCid();

purchaseBtn.addEventListener("click", () => {
    // Calculate the change Due
    const cashPaid = Number(cash.value).toFixed(2); // 1.87
    let calculateChangeDue = (cashPaid - price).toFixed(2);

    inputChecker(cashPaid, price);
    cashClass.calculate(calculateChangeDue);
    displayChangeDue.innerHTML += `<p class="clicked">Cash Paid: ${cashPaid} - Price: ${price} = Calculate Change Due: ${calculateChangeDue}</p>`;

})