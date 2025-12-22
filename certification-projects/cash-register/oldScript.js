// DOM element references used for the cash register operation
const displayChangeDue = document.getElementById("change-due"); // Amount due for refund
const cash = document.getElementById("cash"); // Amount paid
const purchaseBtn = document.getElementById("purchase-btn"); // Purchase button
const priceScreen = document.getElementById("price-screen");

let price = 3.26;
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
            PENNY: { label: "Pennies", value: 0.01 },
            NICKEL: { label: "Nickels", value: 0.05 },
            DIME: { label: "Dimes", value: 0.10 },
            QUARTER: { label: "Quarters", value: 0.25 },
            ONE: { label: "Ones", value: 1.00 },
            FIVE: { label: "Fives", value: 5.00 },
            TEN: { label: "Tens", value: 10.00 },
            TWENTY: { label: "Twenties", value: 20.00 },
            "ONE HUNDRED": { label: "Hundreds", value: 100.00 }
        };
    }

    // Display Change in drawer
    displayCid() {
        // Create a p element to display the TotalchangeDue
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

    calculateChangeDue(amount) {
        amount = Number(amount);
        let changeDue = {};

        // Calculate the unit for each currency
        for (let i = cid.length - 1; i >= 0; i--) {
            this.currency[cid[i][0]].unit = Number(Math.floor(cid[i][1] / this.currency[cid[i][0]].value));
        }

        // Calculate the Due Change
        for (let i = cid.length - 1; i >= 0; i--) {
            while (this.currency[cid[i][0]].unit > 0 && this.currency[cid[i][0]].value <= amount) {
                if (changeDue[cid[i][0]]) {
                    changeDue[cid[i][0]].unit++;
                } else {
                    changeDue[cid[i][0]] = { label: this.currency[cid[i][0]].label, value: this.currency[cid[i][0]].value, unit: 1 };
                }
                amount -= Number(this.currency[cid[i][0]].value.toFixed(2));
                this.currency[cid[i][0]].unit--;
            }
        }

        console.log(this.cid);
        console.log(changeDue);
        displayChangeDue.innerHTML = "";
        for (let i = 0; i < cid.length; i++) {
            if (changeDue[cid[i][0]]) {
                // console.log(changeDue[cid[i][0]]);
                cid[i][1] = Number((cid[i][1] - changeDue[cid[i][0]].value * changeDue[cid[i][0]].unit).toFixed(2));
                console.log(`${cid[i][1]} - ${changeDue[cid[i][0]].value} * ${changeDue[cid[i][0]].unit} = ${cid[i][1] - changeDue[cid[i][0]].value * changeDue[cid[i][0]].unit}`);
                displayChangeDue.innerHTML += `<p class="clicked">${cid[i][0]}: $${changeDue[cid[i][0]].value * changeDue[cid[i][0]].unit}</p>`;
            }
        }
        console.log(this.cid);
        priceScreen.innerHTML = "";
        this.displayCid();
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
    let calculateChangeDueTotal = Number((cashPaid - price).toFixed(2));

    inputChecker(cashPaid, price);
    cashClass.calculateChangeDue(calculateChangeDueTotal);

})