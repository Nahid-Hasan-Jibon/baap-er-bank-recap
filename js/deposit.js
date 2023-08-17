/*
1. add event listner to the deposit btn
2. get deposit ammount from the input field
2-5. convert string deposit amount to a number type
3.clear the deposit input field after gettimg the value
4.get the deposit total
5. calculate new deposit total and set the value to the deposit total


6. get current balance total
7. calculate the new balance and set it to the balance total element



*/
//  step-1
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString =depositField.value;
   const newDepositAmmount=parseFloat(newDepositAmountString);
  
// step-3 empty

depositField.value=''

// step-4
const depositTotalElement=document.getElementById('diposit-total')
const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);
// step-5
const newDepositTotal=previousDepositTotal+newDepositAmmount;
// console.log(newDepositTotal)
depositTotalElement.innerText=newDepositTotal;

// step-6
const balanceTotatElement=document.getElementById('balance-total')
const previousBalanceTotalString=balanceTotatElement.innerText;
const previousTotalAmmount=parseFloat(previousBalanceTotalString);

// step-7
const newBalanceTotal=previousTotalAmmount+newDepositAmmount;
balanceTotatElement.innerText=newBalanceTotal;


})