
//deposit area

// deposit button catch
const depositBtn = document.getElementById('deposit-btn');
depositBtn.addEventListener('click', function () {
    // input value catch
    const inputField = document.getElementById('deposit-field');
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    //Deposit Amount add
    const depositAmount = document.getElementById('deposit-amount');
    const previousAmountString = depositAmount.innerText;
    const previousAmount = parseFloat(previousAmountString);
    const totaldeposit = previousAmount + inputValue;
    depositAmount.innerText = totaldeposit;
    //Balance Amound Added
    const BalanceAmount = document.getElementById('balance-amount');
    const previousBalanceString = BalanceAmount.innerText;
    previousBalance = parseFloat(previousBalanceString);
    const TotalBalance = previousBalance + inputValue;
    BalanceAmount.innerText = TotalBalance;


    // deposit valu clear
    inputField.value = null;

})