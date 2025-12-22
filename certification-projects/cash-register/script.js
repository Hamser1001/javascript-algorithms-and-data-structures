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

// Currency values in dollars
const currencyValues = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
};

// Currency order for display
const currencyOrder = [
    "ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE",
    "QUARTER", "DIME", "NICKEL", "PENNY"
];

// Display Change in drawer - show current cid
function displayCid() {
    priceScreen.innerHTML = '';

    // Create a h2 element to display the price
    const total = document.createElement('h2');
    priceScreen.appendChild(total);

    // Create a unordered list element to display the currency
    const list = document.createElement('ul');
    priceScreen.appendChild(list);

    // Display the price (not total cash)
    total.textContent = `Price: $${price.toFixed(2)}`;

    // Display the list items on the screen in highest to lowest order
    for (let currency of currencyOrder) {
        // Find this currency in cid
        for (let i = 0; i < cid.length; i++) {
            if (cid[i][0] === currency) {
                const listItem = document.createElement('li');
                listItem.className = "currency-unit";
                listItem.textContent = `${cid[i][0]}: $${cid[i][1].toFixed(2)}`;
                list.appendChild(listItem);
                break;
            }
        }
    }
}

// Main purchase function
purchaseBtn.addEventListener("click", () => {
    const cashGiven = parseFloat(cash.value);

    // Clear previous result
    displayChangeDue.innerHTML = '';

    // Input validation
    if (isNaN(cashGiven) || cashGiven < 0) {
        alert("Please enter a valid cash amount");
        return;
    }

    // Check if customer has enough money
    if (cashGiven < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    // Check if customer paid exact amount
    if (cashGiven === price) {
        displayChangeDue.innerHTML = '<p class="display">No change due - customer paid with exact cash</p>';
        return;
    }

    // Calculate change due
    let changeDue = parseFloat((cashGiven - price).toFixed(2));

    // Create a working copy of cid for calculation
    let tempCid = cid.map(arr => [...arr]);
    const totalCid = parseFloat(tempCid.reduce((sum, item) => sum + item[1], 0).toFixed(2));

    // Calculate change
    let changeArray = [];
    let remainingChange = changeDue;

    // Calculate change from highest to lowest denomination
    for (let denom of currencyOrder) {
        const value = currencyValues[denom];
        let available = 0;

        // Find available amount for this denomination
        for (let i = 0; i < tempCid.length; i++) {
            if (tempCid[i][0] === denom) {
                available = tempCid[i][1];
                break;
            }
        }

        if (available === 0) continue;

        // Calculate how much of this denomination we can give
        const maxUnits = Math.floor(available / value);
        const neededUnits = Math.floor(remainingChange / value);
        const unitsToGive = Math.min(maxUnits, neededUnits);

        if (unitsToGive > 0) {
            const amount = parseFloat((unitsToGive * value).toFixed(2));
            changeArray.push([denom, amount]);
            remainingChange = parseFloat((remainingChange - amount).toFixed(2));

            // Update tempCid
            for (let i = 0; i < tempCid.length; i++) {
                if (tempCid[i][0] === denom) {
                    tempCid[i][1] = parseFloat((tempCid[i][1] - amount).toFixed(2));
                    break;
                }
            }
        }

        if (remainingChange === 0) break;
    }

    // Determine status
    let status = "";
    let displayHTML = "";

    if (remainingChange > 0) {
        // Cannot make exact change
        status = "INSUFFICIENT_FUNDS";
        displayHTML = `<p class="status">Status: ${status}</p>`;
    } else if (totalCid === changeDue) {
        // Drawer will be empty after transaction
        status = "CLOSED";
        displayHTML = `<p class="status">Status: ${status}</p>`;
        // For CLOSED status, show denominations in cid order (not highest to lowest)
        for (let i = 0; i < cid.length; i++) {
            const denom = cid[i][0];
            let amountGiven = 0;
            for (let j = 0; j < changeArray.length; j++) {
                if (changeArray[j][0] === denom) {
                    amountGiven = changeArray[j][1];
                    break;
                }
            }
            if (amountGiven > 0) {
                displayHTML += `<p class="display">${denom}: $${amountGiven.toFixed(2)}</p>`;
            }
        }
        // Update the actual cid for future transactions
        cid = tempCid;
    } else {
        // Normal case
        status = "OPEN";
        displayHTML = `<p class="status">Status: ${status}</p>`;
        // For OPEN status, show denominations in highest to lowest order
        changeArray.sort((a, b) => currencyValues[b[0]] - currencyValues[a[0]]);
        for (let item of changeArray) {
            displayHTML += `<p class="display">${item[0]}: $${item[1].toFixed(2)}</p>`;
        }
        // Update the actual cid for future transactions
        cid = tempCid;
    }

    // Update the display with HTML
    displayChangeDue.innerHTML = displayHTML;

    // Also update the text content for testing purposes
    // This creates a plain text version without HTML tags
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = displayHTML;
    const plainText = tempDiv.textContent.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();
    displayChangeDue.dataset.testContent = plainText;
});

// Allow pressing Enter in the cash input
cash.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        purchaseBtn.click();
    }
});

// Initial display
displayCid();