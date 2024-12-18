const donations = []; 

document.getElementById('noakhali-button').addEventListener('click', function () {
    const noakhaliInput = document.getElementById('noakhali-input').value;
    const noakhaliInputValue = parseFloat(noakhaliInput);

    if (isNaN(noakhaliInputValue) || noakhaliInputValue <= 0) {
        alert("Please enter a positive number.");
        return;
    }

    const donateMoneyNoakhali = document.getElementById('donate-money-noakhali').innerText;
    const donateMoneyNoakhaliValue = parseFloat(donateMoneyNoakhali);
    const newBalance = noakhaliInputValue + donateMoneyNoakhaliValue;

    document.getElementById('donate-money-noakhali').innerText = newBalance.toFixed(2);

    const availableMoney = document.getElementById('available-money').innerText;
    const availableMoneyValue = parseFloat(availableMoney);
    const newAvailableMoney = availableMoneyValue - noakhaliInputValue;

    if (newAvailableMoney < 0) {
        alert("Not enough available money to donate this amount.");
        return;
    }

    document.getElementById('available-money').innerText = newAvailableMoney.toFixed(2);

    const timestamp = new Date().toISOString(); 
    donations.push({ amount: newBalance.toFixed(2), time: timestamp });

    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.getElementById('closeModal').addEventListener('click', function () {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    });

    document.getElementById('noakhali-input').value = '';
});

document.getElementById('history').addEventListener('click', function (event) {
    event.preventDefault();

    var queryParams = '';
    for (var i = 0; i < donations.length; i++) {
        queryParams += 'donation' + (i + 1) + '=' + encodeURIComponent(donations[i].amount) +'&time' + (i + 1) + '=' + encodeURIComponent(donations[i].time);
        if (i < donations.length - 1) {
            queryParams += '&';
        }
    }

    window.location.href = `history.html?${queryParams}`;
});

document.getElementById('feni-button').addEventListener('click', function () {
    const feniInput = document.getElementById('feni-input').value;
    const feniInputValue = parseFloat(feniInput);

    if (isNaN(feniInputValue) || feniInputValue <= 0) {
        alert("Please enter a positive number.");
        return;
    }

    const donateMoneyFeni = document.getElementById('donate-money-feni').innerText;
    const donateMoneyFeniValue = parseFloat(donateMoneyFeni);
    const newBalance = feniInputValue + donateMoneyFeniValue;

    document.getElementById('donate-money-feni').innerText = newBalance.toFixed(2);

    const availableMoney = document.getElementById('available-money').innerText;
    const availableMoneyValue = parseFloat(availableMoney);
    const newAvailableMoney = availableMoneyValue - feniInputValue;

    if (newAvailableMoney < 0) {
        alert("Not enough available money to donate this amount.");
        return;
    }

    document.getElementById('available-money').innerText = newAvailableMoney.toFixed(2);

    const timestamp = new Date().toISOString();
    donations.push({ amount: newBalance.toFixed(2), time: timestamp });

    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.getElementById('closeModal').addEventListener('click', function () {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    document.getElementById('feni-input').value = '';
});

document.getElementById('history').addEventListener('click', function (event) {
    event.preventDefault();

    var queryParams = '';
    for (var i = 0; i < donations.length; i++) {
        queryParams += 'donation' + (i + 1) + '=' + encodeURIComponent(donations[i].amount) +'&time' + (i + 1) + '=' + encodeURIComponent(donations[i].time);
        if (i < donations.length - 1) {
            queryParams += '&';
        }
    }

    window.location.href = `history.html?${queryParams}`;
});


document.getElementById('quota-button').addEventListener('click', function () {
    const quotaInput = document.getElementById('quota-input').value;
    const quotaInputValue = parseFloat(quotaInput);

    if (isNaN(quotaInputValue) || quotaInputValue <= 0) {
        alert("Please enter a positive number.");
        return;
    }

    const donateMoneyQuota = document.getElementById('donate-money-quota').innerText;
    const donateMoneyQuotaValue = parseFloat(donateMoneyQuota);
    const newBalance = quotaInputValue + donateMoneyQuotaValue;

    document.getElementById('donate-money-quota').innerText = newBalance.toFixed(2);

    const availableMoney = document.getElementById('available-money').innerText;
    const availableMoneyValue = parseFloat(availableMoney);
    const newAvailableMoney = availableMoneyValue - quotaInputValue;

    if (newAvailableMoney < 0) {
        alert("Not enough available money to donate this amount.");
        return;
    }

    document.getElementById('available-money').innerText = newAvailableMoney.toFixed(2);

    const timestamp = new Date().toISOString();
    donations.push({ amount: newBalance.toFixed(2), time: timestamp });

    const modal = document.getElementById('successModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    document.getElementById('closeModal').addEventListener('click', function () {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    document.getElementById('quota-input').value = '';
});

document.getElementById('history').addEventListener('click', function (event) {
    event.preventDefault();

    var queryParams = '';
    for (var i = 0; i < donations.length; i++) {
        queryParams += 'donation' + (i + 1) + '=' + encodeURIComponent(donations[i].amount) +'&time' + (i + 1) + '=' + encodeURIComponent(donations[i].time);
        if (i < donations.length - 1) {
            queryParams += '&';
        }
    }

    window.location.href = `history.html?${queryParams}`;
});








