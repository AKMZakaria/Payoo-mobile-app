const validPin = 1234;

const transactionData = []

// Function to get input values
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

// function to get innerText 

function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}

// function to toggle buttons

function handleToggle(id) {

    const forms = document.getElementsByClassName('form');

    for (const form of forms) {
        form.style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';
}

// function to toggle btn style

function btnStyleToggle(id) {
    const formBtn = document.getElementsByClassName('form-btn')

    for (const btn of formBtn) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-200')
    }

    document.getElementById(id).classList.remove('border-gray-200')

    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
}


// add money feature
document.getElementById('btn-add-money').addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById('bank').value;

    const accountNumber = document.getElementById('account-number').value;

    // const amountNumber = parseInt(document.getElementById('amount-number').value);

    const amountNumber = getInputValueNumber('amount-number')

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

    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data);

})

// cash out money feature

document.getElementById('btn-withdraw')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const amount = Number(document.getElementById('withdraw-amount').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);


        const totalNewAvaiableBalance = availableBalance - amount;

        if (totalNewAvaiableBalance < 0) {
            alert('Not Enough Balance');
            return;
        }


        document.getElementById('available-balance').innerText = totalNewAvaiableBalance;

        const data = {
            name: 'Cash Out',
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);



    })

document.getElementById('transaction-btn')
    .addEventListener('click', function () {
        const transactionContainer = document.getElementById('transaction-container')
        transactionContainer.innerText = ''

        for (const data of transactionData) {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="bg-white rounded-xl flex justify-between items-center mb-3 mt-2">
    
    
                    <div class="flex items-center pl-5 pt-3 pb-3">
    
                        <div class="p-3 rounded-full bg-[#f2f2f2]">
                            <img class="mx-auto" src="./assets/wallet1.png" alt="">
                        </div>
    
                        <div class="ml-2">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical mr-2"></i>
    
                </div>
            `

            transactionContainer.appendChild(div)
        }
    })


// toggling feature 

document.getElementById('add-btn')
    .addEventListener('click', function (e) {

        // document.getElementById('cash-out-parent').style.display = 'none';
        // document.getElementById('add-money-parent').style.display = 'block';

        // const forms = document.getElementsByClassName('form');

        // for (const form of forms) {
        //     form.style.display = 'none';
        // }

        // document.getElementById('add-money-parent').style.display = 'block'

        handleToggle('add-money-parent');

        // const formBtn = document.getElementsByClassName('form-btn')

        // for (const btn of formBtn) {
        //     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        //     btn.classList.add('border-gray-200')
        // }

        // document.getElementById('add-btn').classList.remove('border-gray-200')

        // document.getElementById('add-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

        btnStyleToggle('add-btn')

    })

document.getElementById('cash-out-btn')
    .addEventListener('click', function () {

        // const forms = document.getElementsByClassName('form');

        // for (const form of forms) {
        //     form.style.display = 'none';
        // }

        // document.getElementById('cash-out-parent').style.display = 'block';

        // document.getElementById('add-money-parent').style.display = 'none';

        handleToggle('cash-out-parent');

        // const formBtn = document.getElementsByClassName('form-btn')

        // for (const btn of formBtn) {
        //     btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        //     btn.classList.add('border-gray-200')
        // }

        // document.getElementById('cash-out-btn').classList.remove('border-gray-200')

        // document.getElementById('cash-out-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')

        btnStyleToggle('cash-out-btn');
    })

document.getElementById('transfer-btn')
    .addEventListener('click', function () {

        handleToggle('transfer-money-parent');
        btnStyleToggle('transfer-btn');

    })
document.getElementById('bonus-btn')
    .addEventListener('click', function () {

        handleToggle('get-bonus-parent');
        btnStyleToggle('bonus-btn');

    })
document.getElementById('pay-bill-btn')
    .addEventListener('click', function () {

        handleToggle('pay-bill-parent');
        btnStyleToggle('pay-bill-btn');

    })
document.getElementById('transaction-btn')
    .addEventListener('click', function () {

        handleToggle('transaction-parent');
        btnStyleToggle('transaction-btn');

    })