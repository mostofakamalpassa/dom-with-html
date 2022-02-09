//deposite event handalers

document.getElementById('deposit-btn').addEventListener('click',function(e){
    const depositInput = document.getElementById('amount-deposit');
    const depost = document.getElementById('deposit');
  
    let total = 0;
    total = parseInt(depositInput.value) + parseInt(depost.innerText);
    depost.innerText = total;
   // return total;
    
    
})