const validPin = 1234;

// add money feature
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value;
    const amountNumber = parseInt(document.getElementById('amount-number').value);
    const pinNumber = Number(document.getElementById('pin-number').value);
    console.log(pinNumber);

    // console.log(bank,accountNumber,amountNumber,pinNumber);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    // console.log(availableBalance);

    if (accountNumber.length < 11) {
        alert('Please Provide a Valid Account Number');
        return;
    }

    if (pinNumber !== validPin) {
        alert('Please Provide a Valid Pin');
        return;
    }

    const totalNewAvaiableBalance = amountNumber + availableBalance;

    document.getElementById('available-balance').innerText = totalNewAvaiableBalance;

})

// cash out money feature

document.getElementById('btn-withdraw')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const amount = Number(document.getElementById('withdraw-amount').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        
        const totalNewAvaiableBalance = availableBalance - amount;
        
        if(totalNewAvaiableBalance<0){
            alert('Not Enough Balance');
            return;
        }
        
        
        document.getElementById('available-balance').innerText = totalNewAvaiableBalance;



    })


// toggling feature 

document.getElementById('add-btn')
    .addEventListener('click', function () {
        document.getElementById('cash-out-parent').style.display = 'none';
        document.getElementById('add-money-parent').style.display = 'block';
    })

document.getElementById('cash-out-btn')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent').style.display = 'none';
        document.getElementById('cash-out-parent').style.display = 'block';
    })