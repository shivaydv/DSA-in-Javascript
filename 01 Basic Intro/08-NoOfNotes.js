// there are more better ways to do this but this is the simplest way to do this at starting 

function countNotes(amount) {
    let note500 = 0, note200 = 0, note100 = 0, note50 = 0;
    let note20 = 0, note10 = 0, note5 = 0, note1 = 0;
  
    if (amount >= 500) {
      note500 = Math.floor(amount / 500);
      amount = amount % 500;
    }
  
    if (amount >= 200) {
      note200 = Math.floor(amount / 200);
      amount = amount % 200;
    }
  
    if (amount >= 100) {
      note100 = Math.floor(amount / 100);
      amount = amount % 100;
    }
  
    if (amount >= 50) {
      note50 = Math.floor(amount / 50);
      amount = amount % 50;
    }
  
    if (amount >= 20) {
      note20 = Math.floor(amount / 20);
      amount = amount % 20;
    }
  
    if (amount >= 10) {
      note10 = Math.floor(amount / 10);
      amount = amount % 10;
    }
  
    if (amount >= 5) {
      note5 = Math.floor(amount / 5);
      amount = amount % 5;
    }
  
    if (amount >= 1) {
      note1 = amount; // what's left are ₹1 coins
    }
  
    console.log("Currency Breakdown:");
    if (note500) console.log("₹500 x", note500);
    if (note200) console.log("₹200 x", note200);
    if (note100) console.log("₹100 x", note100);
    if (note50)  console.log("₹50 x", note50);
    if (note20)  console.log("₹20 x", note20);
    if (note10)  console.log("₹10 x", note10);
    if (note5)   console.log("₹5 x", note5);
    if (note1)   console.log("₹1 x", note1);
  }
  

  countNotes(2876);
  