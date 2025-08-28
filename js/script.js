document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault(); //preventing page reload
    // console.log('ok')
    const mobileNumber = 1712345678;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById('mobile-number').value
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumber === mobileNumberValueConverted && pinNumber === pinNumberValueConverted){
        window.location.href="./home.html"
    }else{
        alert('Invalid Credentials')
    }
})