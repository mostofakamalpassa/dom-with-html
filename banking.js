//deposite event handalers

document.getElementById('deposit-btn').addEventListener('click',function(e){
   
    const depositInput = document.getElementById('amount-deposit');
    const depost = document.getElementById('deposit');
  
    let total = 0;
    total = parseInt(depositInput.value) + parseInt(depost.innerText);
    depost.innerText = total;
   // return total;
    // get balance 

    const balnace = document.getElementById('balanceTK');
    const getbalance = parseFloat(balnace.innerText);

    balnace.innerText = parseInt(depositInput.value) + getbalance;

    // clear input 

    depositInput.value = '';
    
});


// handle widthdraw 

document.getElementById('withdraw-btn').addEventListener('click', function(e){

  const widthdrawBalanceText = document.getElementById('widthdrawBalance');
  const amountWithdrawFieldText = document.getElementById('amont-withdraw');
  const getBalanceText = document.getElementById('balanceTK');
  const parseWithdrawBalance = parseFloat(widthdrawBalanceText.innerText);
  const parseAmountWithdrawField = parseFloat(amountWithdrawFieldText.value);
  const parseBalance = parseFloat(getBalanceText.innerText);
   


  let totalBalance = parseBalance - parseAmountWithdrawField;
  if(totalBalance < 0) return ;

  getBalanceText.innerText = totalBalance;
  widthdrawBalanceText.innerText = parseWithdrawBalance +  parseAmountWithdrawField;
  // clear filed

  amountWithdrawFieldText.value = '';




})