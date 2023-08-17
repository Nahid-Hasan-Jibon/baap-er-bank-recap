


document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString =withdrawField.value;
    const newWithdrawAmmount=parseFloat(newWithdrawAmountString);

    withdrawField.value=''

   

    const withdrawTotalElement=document.getElementById('withdraw-total')
    const previousWithdrawTotalString=withdrawTotalElement.innerText;
   const previousWithdrawTotal=parseFloat(previousWithdrawTotalString)



   const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmmount;



withdrawTotalElement.innerText=newWithdrawTotal;




const balanceTotatElement=document.getElementById('balance-total')
const previousBalanceTotalString=balanceTotatElement.innerText;
const previousTotalAmmount=parseFloat(previousBalanceTotalString);


const newBalanceTotal=previousTotalAmmount-newWithdrawAmmount;
balanceTotatElement.innerText=newBalanceTotal;
})