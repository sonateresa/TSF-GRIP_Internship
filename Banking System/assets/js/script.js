let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

function sendMoney() {
   var enterName = document.getElementById("enterName").value.trim(); 
   var enterAmount = parseInt(document.getElementById("enterAmount").value);
   var recipientBalanceId = getRecipientBalanceId(enterName);

   if (recipientBalanceId) {
       var recipientBalanceElement = document.getElementById(recipientBalanceId);
       var recipientBankBalance = parseInt(recipientBalanceElement.innerText);

       var myAccountBalanceElement = document.getElementById("myAccountBalance");
       var myAccountBalance = parseInt(myAccountBalanceElement.innerText);

       if (enterAmount > myAccountBalance) {
           alert("Insufficient Balance.");
       } else {
           recipientBankBalance += enterAmount;
           recipientBalanceElement.innerText = recipientBankBalance;

           myAccountBalance -= enterAmount;
           myAccountBalanceElement.innerText = myAccountBalance;

           alert(`Successful Transaction! $${enterAmount} sent to ${enterName}@gmail.com.`);
           logTransaction(enterName, enterAmount);
       }
   } else {
       alert("Recipient not found. Please enter a valid recipient's name.");
   }
}

function getRecipientBalanceId(enterName) {
   var recipientMap = {
       "annathom": "annaBankBalance",
       "ayeshakhan": "ayeshaBankBalance",
       "bhuvang": "bhuvBankBalance",
       "celine": "celineBankBalance",
       "gauthamg": "gauthBankBalance",
       "jaisonjames": "jaisonBankBalance",
       "karanmal": "karanBankBalance",
       "manishared": "manishaBankBalance",
       "kiarasen": "kiaraBankBalance",
       "sameerareddy": "sameeraBankBalance"
   };
   return recipientMap[enterName];
}

function logTransaction(enterName, enterAmount) {
   var transactionHistoryElement = document.getElementById("transaction-history-body");
   var transactionDetails = document.createElement("li");
   transactionDetails.textContent = `$${enterAmount} sent to ${enterName}@gmail.com on ${new Date().toLocaleString()}`;
   transactionHistoryElement.insertBefore(transactionDetails, transactionHistoryElement.firstChild);
}
