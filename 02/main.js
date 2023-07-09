cash = 0;
cashGain = 1;
upgradeCost = 10;
function test() {
    alert(" Test main.js i completed, main.js existing and running.")
}

function count() {
    cash = cash + cashGain;
    document.getElementById('cash').innerHTML = cash;
}

function vylepseni () {
    if(cash >= upgradeCost){
    cashGain = cashGain + 1;
    cash = cash - upgradeCost;
    document.getElementById('cash').innerHTML = cash;
    upgradeCost = upgradeCost * 2;
    document.getElementById('upgradeCost').innerHTML = upgradeCost;
    }
    else{
        alert('Nejsou peníze. Musíš více vidělat.')
    }
}