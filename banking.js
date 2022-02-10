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
    
})