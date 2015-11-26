var baseCurrency;
var endCurrency;  
var fxProduct;
var exchangeRate;

function currencyFormat1() {
    baseCurrency = document.getElementById("currencyType1").value;
    endCurrency = document.getElementById("currencyType2").value;     
    fxProduct = (baseCurrency + endCurrency);   
    document.getElementById("testbox1").value = fxProduct;
}

function currencyFormat2() {
    baseCurrency = document.getElementById("currencyType2").value;
    endCurrency = document.getElementById("currencyType1").value;     
    fxProduct = (baseCurrency + endCurrency);
    document.getElementById("testbox1").value = fxProduct;
}

function fxRate() {
    for (var i=0; i<exchangeRates.length; i+=1) {
        exchangeRate = exchangeRates[i];
        if (fxProduct === "GBPEUR") {
            document.getElementById("testbox2").value=exchangeRates.gbpcadBuy;
        }
        else {
            document.getElementById("testbox2").value="failure";
        }
    }
    
}