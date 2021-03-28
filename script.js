const loginArea = document.querySelector('#login-area');
const submitButton = document.querySelector('#submit');
const transactionArea = document.querySelector('#transction');
const depositBtn = document.querySelector('#depositbtn');
const withdrawBtn = document.querySelector('#withdrawbtn');
const depositInput = document.querySelector('#deposit');
const withdrawInput = document.querySelector('#withdraw');
const depositAmount = document.querySelector('#depositAmount');
const balanceAmount = document.querySelector('#balanceAmount');
const withdrawAmount = document.querySelector('#withdrawAmount');

// Login Handler
submitButton.addEventListener('click', (e)=>{
  e.preventDefault();
  loginArea.style.display = 'none';
  transactionArea.style.display = 'block';
})

// Deposit Handler
depositBtn.addEventListener('click', (e)=>{
  const depositAdd = parseFloat(depositInput.value);
  spanUpdate(depositAmount, depositAdd);
  spanUpdate(balanceAmount, depositAdd);
  depositInput.value = "";
});

// withdraw Handler
withdrawBtn.addEventListener('click', (e)=>{
  const withdrawDeduct = parseFloat(withdrawInput.value);
  spanUpdate(withdrawAmount, withdrawDeduct);
  spanUpdate(balanceAmount, -1 * withdrawDeduct);
  withdrawInput.value = "";
})

function spanUpdate(amount, getAmount){
  const balanceCurrent = parseFloat(amount.innerText);
  const balanceTotal = getAmount + balanceCurrent;
  amount.innerText = balanceTotal;
}