function checkCashRegister(price, cash, cid) {
  let change;
   const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  let changeDue = cash - price;

  let cidTotal = 0;
  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }
  cidTotal = Math.round(cidTotal * 100) / 100;

  if (cidTotal < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (cidTotal === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    let change = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      let curr = cid[i][0];
      let currTotal = cid[i][1];
      let currValue = currencyUnit[i][1];
      let currChange = 0;

      while (changeDue >= currValue && currTotal > 0) {
        currChange += currValue;
        changeDue = Math.round((changeDue - currValue) * 100) / 100;
        currTotal -= currValue;
      }

      if (currChange > 0) {
        change.push([curr, currChange]);
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: change };
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
