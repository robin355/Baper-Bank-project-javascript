//withDrow button catch
const withDrowBtn = document.getElementById('withdrow-btn');
withDrowBtn.addEventListener('click', function () {
    // input value catch
    const inputField = document.getElementById('withdrow-field');
    inputFieldValueString = inputField.value;
    inputFieldValue = parseFloat(inputFieldValueString);

    inputField.value = '';
    if (isNaN(inputFieldValue)) {
        alert('please Enter Number');
        return;
    }
    //Withdrow Value Catch
    const withDrowAmount = document.getElementById('withdrow-amount');
    const previousWithDrowAmountString = withDrowAmount.innerText;
    const previousWithDrowAmountValue = parseFloat(previousWithDrowAmountString);
    //withdrow Amound Added
    const currentWithdrowAmount = inputFieldValue + previousWithDrowAmountValue;
    withDrowAmount.innerText = currentWithdrowAmount;
    //blance Amound
    const balance = document.getElementById('balance-amount');
    const previousBalanceString = balance.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    //    withdrow amound
    if (previousBalance < inputFieldValue) {
        alert('Not enough Money you account');
        return;
    }
    const totalWithDrow = previousBalance - inputFieldValue;
    balance.innerText = totalWithDrow;










})