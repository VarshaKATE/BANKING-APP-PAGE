

let balance = 1000;

function deposit(){
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN(amount) || amount <=0){
        alert('Please enter a valid amount to deposit');
        return;
    }

    balance += amount;
    updateBalance();
}

function withdraw(){
    const amount = parseFloat(document.getElementById('amount').value);
    if (isNaN (amount) || amount <=0){
        alert('Please enter valid amount to withdraw');
        return;
    }

    if (amount > balance){
        alert('insufficient balance in your account')
    }

    balance -= amount;
    updateBalance();

}

function updateBalance(){
    document.getElementById('balance').innerText = balance.toFixed(2);
    document.getElementById('amount').value = '';
}

