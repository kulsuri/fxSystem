        // currency exchange rates
        // GBP = EUR CHF USD JPY CAD NZD AUD ZAR RUB GBP
        var GBP = [1.35, 1.47, 1.53, 184.43, 1.99, 2.29, 2.09, 20.42, 93.75, 1];
        // EUR = GBP CHF USD JPY CAD NZD AUD ZAR RUB EUR
        var EUR = [0.73, 1.08, 1.13, 135.52, 1.47, 1.67, 1.56, 14.80, 69.91, 1];
        // CHF = GBP EUR USD JPY CAD NZD AUD ZAR RUB CHF
        var CHF = [0.68, 0.92, 1.05, 125.18, 1.35, 1.54, 1.44, 13.67, 64.68, 1];
        // USD = GBP EUR CHF JPY CAD NZD AUD ZAR RUB USD
        var USD = [0.65, 0.88, 0.95, 119.35, 1.29, 1.47, 1.37, 13.03, 61.64, 1];
        // JPY = GBP EUR CHF USD CAD NZD AUD ZAR RUB JPY
        var JPY = [ 0.0054, 0.0074, 0.0080, 0.0084, 0.011, 0.012, 0.011, 0.11, 0.52, 1];
        // CAD = GBP EUR CHF USD JPY NZD AUD ZAR RUB CAD
        var CAD = [0.50, 0.68, 0.74, 0.77, 92.46, 1.14, 1.06, 10.10, 47.72, 1];
        // NZD = GBP EUR CHF USD JPY CAD AUD ZAR RUB NZD
        var NZD = [0.44, 0.60, 0.65, 0.68, 81.33, 0.88, 0.93, 8.88, 41.96, 1];
        // AUD = GBP EUR CHF USD JPY CAD NZD ZAR RUB AUD
        var AUD = [0.47, 0.64, 0.70, 0.73, 87.19, 0.94, 1.07, 9.52, 44.94, 1];
        // ZAR = GBP EUR CHF USD JPY CAD NZD AUD RUB ZAR
        var ZAR = [0.050, 0.067, 0.073, 0.077, 9.15, 0.099, 0.11, 0.10, 4.72, 1];
        // RUB = GBP EUR CHF USD JPY CAD NZD AUD ZAR RUB
        var RUB = [0.011, 0.014, 0.015, 0.016, 1.94, 0.021, 0.024, 0.022, 0.21, 1];
             
        function fxRate1() {

        // determine the base currency and end currency from the the dropdown boxes
        var baseCurrency = document.getElementById("currencyType1").value;
        var endCurrency = document.getElementById("currencyType2").value;     
        var fxConversion = document.getElementById("testbox1").value=(baseCurrency + endCurrency);
        var currencyValue1 = document.getElementById("currencyInput1").value;
            
        // determine which exchange rate to use
        if (baseCurrency === "GBP" && endCurrency === "EUR") {
            var exchangeRate1 = document.getElementById("testbox2").value=(GBP[0]);
        }    
            else if(baseCurrency === "GBP" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[1]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[2]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[3]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[4]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[5]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[6]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[7]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[8]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(GBP[9]);
            }
            
            else if(baseCurrency === "EUR" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[0]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[1]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[2]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[3]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[4]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[5]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[6]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[7]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[8]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(EUR[9]);
            }
            
            else if(baseCurrency === "CHF" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[0]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[1]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[2]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[3]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[4]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[5]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[6]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[7]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[8]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CHF[9]);
            }
            
            else if(baseCurrency === "USD" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[0]);
            }
            else if(baseCurrency === "USD" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[1]);
            }
            else if(baseCurrency === "USD" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[2]);
            }
            else if(baseCurrency === "USD" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[3]);
            }
            else if(baseCurrency === "USD" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[4]);
            }
            else if(baseCurrency === "USD" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[5]);
            }
            else if(baseCurrency === "USD" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[6]);
            }
            else if(baseCurrency === "USD" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[7]);
            }
            else if(baseCurrency === "USD" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[8]);
            }
            else if(baseCurrency === "USD" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(USD[9]);
            }
            
            else if(baseCurrency === "JPY" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[0]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[1]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[2]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[3]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[4]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[5]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[6]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[7]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[8]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(JPY[9]);
            }
            
            else if(baseCurrency === "CAD" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[0]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[1]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[2]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[3]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[4]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[5]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[6]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[7]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[8]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(CAD[9]);
            }
            
            else if(baseCurrency === "NZD" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[0]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[1]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[2]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[3]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[4]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[5]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[6]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[7]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[8]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(NZD[9]);
            }
            
            else if(baseCurrency === "AUD" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[0]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[1]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[2]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[3]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[4]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[5]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[6]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[7]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[8]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(AUD[9]);
            }
            
            else if(baseCurrency === "ZAR" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[0]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[1]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[2]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[3]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[4]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[5]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[6]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[7]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "RUB") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[8]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(ZAR[9]);
            }
            
            else if(baseCurrency === "RUB" && endCurrency === "GBP") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[0]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "EUR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[1]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "CHF") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[2]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "USD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[3]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "JPY") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[4]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "CAD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[5]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "NZD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[6]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "AUD") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[7]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "ZAR") {
                var exchangeRate1 = document.getElementById("testbox2").value=(RUB[8]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "RUB") {
                exchangeRate1 = document.getElementById("testbox2").value=(RUB[9]);
            }
            
        else {
            document.getElementById("testbox2").value=("no value available yet");
            }   
            
        document.getElementById("currencyInput2").value=(currencyValue1*exchangeRate1).toFixed(4);
        }

        /* function for dropdown boxes: currency and exchange rate change 'onchange' */
        function fxRate2() {
            
        // determine the base currency and end currency from the the dropdown boxes
        var baseCurrency = document.getElementById("currencyType2").value;
        var endCurrency = document.getElementById("currencyType1").value;
        var fxConversion = document.getElementById("testbox1").value=(baseCurrency + endCurrency);
        var currencyValue2 = document.getElementById("currencyInput2").value;
            
        // determine which exchage rate to use
        if (baseCurrency === "GBP" && endCurrency === "EUR") {
            var exchangeRate2 = document.getElementById("testbox2").value=(GBP[0]);
        }    
            else if(baseCurrency === "GBP" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[1]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[2]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[3]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[4]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[5]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[6]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[7]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[8]);
            }
            else if(baseCurrency === "GBP" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(GBP[9]);
            }
            
            else if(baseCurrency === "EUR" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[0]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[1]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[2]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[3]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[4]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[5]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[6]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[7]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[8]);
            }
            else if(baseCurrency === "EUR" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(EUR[9]);
            }
            
            else if(baseCurrency === "CHF" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[0]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[1]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[2]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[3]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[4]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[5]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[6]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[7]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[8]);
            }
            else if(baseCurrency === "CHF" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CHF[9]);
            }
            
            else if(baseCurrency === "USD" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[0]);
            }
            else if(baseCurrency === "USD" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[1]);
            }
            else if(baseCurrency === "USD" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[2]);
            }
            else if(baseCurrency === "USD" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[3]);
            }
            else if(baseCurrency === "USD" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[4]);
            }
            else if(baseCurrency === "USD" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[5]);
            }
            else if(baseCurrency === "USD" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[6]);
            }
            else if(baseCurrency === "USD" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[7]);
            }
            else if(baseCurrency === "USD" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[8]);
            }
            else if(baseCurrency === "USD" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(USD[9]);
            }
            
            else if(baseCurrency === "JPY" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[0]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[1]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[2]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[3]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[4]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[5]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[6]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[7]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[8]);
            }
            else if(baseCurrency === "JPY" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(JPY[9]);
            }
            
            else if(baseCurrency === "CAD" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[0]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[1]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[2]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[3]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[4]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[5]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[6]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[7]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[8]);
            }
            else if(baseCurrency === "CAD" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(CAD[9]);
            }
            
            else if(baseCurrency === "NZD" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[0]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[1]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[2]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[3]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[4]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[5]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[6]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[7]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[8]);
            }
            else if(baseCurrency === "NZD" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(NZD[9]);
            }
            
            else if(baseCurrency === "AUD" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[0]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[1]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[2]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[3]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[4]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[5]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[6]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[7]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[8]);
            }
            else if(baseCurrency === "AUD" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(AUD[9]);
            }
            
            else if(baseCurrency === "ZAR" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[0]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[1]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[2]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[3]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[4]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[5]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[6]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[7]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[8]);
            }
            else if(baseCurrency === "ZAR" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(ZAR[9]);
            }
            
            else if(baseCurrency === "RUB" && endCurrency === "GBP") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[0]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "EUR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[1]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "CHF") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[2]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "USD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[3]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "JPY") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[4]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "CAD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[5]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "NZD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[6]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "AUD") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[7]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "ZAR") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[8]);
            }
            else if(baseCurrency === "RUB" && endCurrency === "RUB") {
                var exchangeRate2 = document.getElementById("testbox2").value=(RUB[9]);
            }
            
        else {
            document.getElementById("testbox2").value=("no value available yet");
            }   
            
        document.getElementById("currencyInput1").value=(currencyValue2*exchangeRate2).toFixed(4);
        }

        // currency cross rates
        // GBP BUY-SELL = EUR CHF USD JPY CAD NZD AUD ZAR RUB 
        var GBPBuySell = [1.35, 1.32, 1.47, 1.42, 1.53, 1.5, 184.43, 184.12, 1.99, 1.923, 2.29, 2.23, 2.09, 2.01, 20.42, 20.332, 93.75, 93.43];
        // EUR BUY-SELL = GBP CHF USD JPY CAD NZD AUD ZAR RUB 
        var EURBuySell = [0.73, 0.70, 1.08, 1.043, 1.13, 1.094, 135.52, 135.49, 1.47, 1.434, 1.67, 1.64, 1.56, 1.53, 14.80, 14.75, 69.91, 69.89];
        // CHF BUY-SELL = GBP EUR USD JPY CAD NZD AUD ZAR RUB 
        var CHFBuySell = [0.68, 0.65, 0.92, 0.89, 1.05, 1.02, 125.18, 125.12, 1.35, 1.32, 1.54, 1.48, 1.44, 1.40, 13.67, 13.62, 64.68, 64.62];
        // USD BUY-SELL = GBP EUR CHF JPY CAD NZD AUD ZAR RUB 
        var USDBuySell = [0.65, 0.63, 0.88, 0.83, 0.95, 0.92, 119.35, 119.32, 1.29, 1.26, 1.47, 1.44, 1.37, 1.33, 13.03, 13.01, 61.64, 61.59];
        // JPY BUY-SELL = GBP EUR CHF USD CAD NZD AUD ZAR RUB 
        var JPYBuySell = [0.0054, 0.0049, 0.0074, 0.0070, 0.0080, 0.0075, 0.0084, 0.0079, 0.011, 0.004, 0.012, 0.005, 0.011, 0.008, 0.11, 0.09, 0.52, 0.48];
        // CAD BUY-SELL = GBP EUR CHF USD JPY NZD AUD ZAR RUB 
        var CADBuySell = [0.50, 0.44, 0.68, 0.65, 0.74, 0.71, 0.77, 0.72, 92.46, 92.41, 1.14, 1.11, 1.06, 1.02, 10.10, 10.04, 47.72, 47.43];
        // NZD BUY-SELL = GBP EUR CHF USD JPY CAD AUD ZAR RUB 
        var NZDBuySell = [0.44, 0.39, 0.60, 0.52, 0.65, 0.61, 0.68, 0.61, 81.33, 81.11, 0.88, 0.81, 0.93, 0.9, 8.88, 8.80, 41.96, 41.29];
        // AUD BUY-SELL = GBP EUR CHF USD JPY CAD NZD ZAR RUB 
        var AUDBuySell = [0.47, 0.64, 0.70, 0.73, 87.19, 0.94, 1.07, 9.52, 44.94, 0.47, 0.64, 0.70, 0.73, 87.19, 0.94, 1.07, 9.52, 44.94];
        // ZAR BUY-SELL = GBP EUR CHF USD JPY CAD NZD AUD RUB 
        var ZARBuySell = [0.050, 0.067, 0.073, 0.077, 9.15, 0.099, 0.11, 0.10, 4.72, 0.47, 0.64, 0.70, 0.73, 87.19, 0.94, 1.07, 9.52, 9.49];
        // RUB BUY-SELL = GBP EUR CHF USD JPY CAD NZD AUD ZAR 
        var RUBBuySell = [0.011, 0.014, 0.015, 0.016, 1.94, 0.021, 0.024, 0.022, 0.21, 0.47, 0.64, 0.70, 0.73, 87.19, 0.94, 1.07, 9.52, 9.48];


        function crossRate1() {
            
        var baseCurrency = document.getElementById("currencyType1").value;     
        var currencyValue1 = document.getElementById("currencyInput1").value;
            
        if (baseCurrency === "GBP") {
            document.getElementById("cr1").value=("GBPEUR");
            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*GBP[0].gbpeurBuy).toFixed(4);
            var sell1 = document.getElementById("crSell1").value=(currencyValue1*GBP[0].gbpeurSell).toFixed(4);
            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);
            
            document.getElementById("cr2").value=("GBPCHF");
            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*GBPBuySell[2]).toFixed(4);
            var sell2 = document.getElementById("crSell2").value=(currencyValue1*GBPBuySell[3]).toFixed(4);
            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);
            
            document.getElementById("cr3").value=("GBPUSD");
            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*GBPBuySell[4]).toFixed(4);
            var sell3 = document.getElementById("crSell3").value=(currencyValue1*GBPBuySell[5]).toFixed(4);
            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);
            
            document.getElementById("cr4").value=("GBPJPY");
            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*GBPBuySell[6]).toFixed(4);
            var sell4 = document.getElementById("crSell4").value=(currencyValue1*GBPBuySell[7]).toFixed(4);
            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);
            
            document.getElementById("cr5").value=("GBPCAD");
            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*GBPBuySell[8]).toFixed(4);
            var sell5 = document.getElementById("crSell5").value=(currencyValue1*GBPBuySell[9]).toFixed(4);
            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);
            
            document.getElementById("cr6").value=("GBPNZD");
            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*GBPBuySell[10]).toFixed(4);
            var sell6 = document.getElementById("crSell6").value=(currencyValue1*GBPBuySell[11]).toFixed(4);
            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);
            
            document.getElementById("cr7").value=("GBPAUD");
            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*GBPBuySell[12]).toFixed(4);
            var sell7 = document.getElementById("crSell7").value=(currencyValue1*GBPBuySell[13]).toFixed(4);
            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);
            
            document.getElementById("cr8").value=("GBPZAR");
            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*GBPBuySell[14]).toFixed(4);
            var sell8 = document.getElementById("crSell8").value=(currencyValue1*GBPBuySell[15]).toFixed(4);
            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);
            
            document.getElementById("cr9").value=("GBPRUB");
            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*GBPBuySell[16]).toFixed(4);
            var sell9 = document.getElementById("crSell9").value=(currencyValue1*GBPBuySell[17]).toFixed(4);
            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
        }    
            else if (baseCurrency === "EUR") {
                document.getElementById("cr1").value=("EURGBP");
                var buy1 = document.getElementById("crBuy1").value=(currencyValue1*EURBuySell[0]).toFixed(4);
                var sell1 = document.getElementById("crSell1").value=(currencyValue1*EURBuySell[1]).toFixed(4);
                document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);
                
                document.getElementById("cr2").value=("EURCHF");
                var buy2 = document.getElementById("crBuy2").value=(currencyValue1*EURBuySell[2]).toFixed(4);
                var sell2 = document.getElementById("crSell2").value=(currencyValue1*EURBuySell[3]).toFixed(4);
                document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                document.getElementById("cr3").value=("EURUSD");
                var buy3 = document.getElementById("crBuy3").value=(currencyValue1*EURBuySell[4]).toFixed(4);
                var sell3 = document.getElementById("crSell3").value=(currencyValue1*EURBuySell[5]).toFixed(4);
                document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                document.getElementById("cr4").value=("EURJPY");
                var buy4 = document.getElementById("crBuy4").value=(currencyValue1*EURBuySell[6]).toFixed(4);
                var sell4 = document.getElementById("crSell4").value=(currencyValue1*EURBuySell[7]).toFixed(4);
                document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                document.getElementById("cr5").value=("EURCAD");
                var buy5 = document.getElementById("crBuy5").value=(currencyValue1*EURBuySell[8]).toFixed(4);
                var sell5 = document.getElementById("crSell5").value=(currencyValue1*EURBuySell[9]).toFixed(4);
                document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                document.getElementById("cr6").value=("EURNZD");
                var buy6 = document.getElementById("crBuy6").value=(currencyValue1*EURBuySell[10]).toFixed(4);
                var sell6 = document.getElementById("crSell6").value=(currencyValue1*EURBuySell[11]).toFixed(4);
                document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                document.getElementById("cr7").value=("EURAUD");
                var buy7 = document.getElementById("crBuy7").value=(currencyValue1*EURBuySell[12]).toFixed(4);
                var sell7 = document.getElementById("crSell7").value=(currencyValue1*EURBuySell[13]).toFixed(4);
                document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                document.getElementById("cr8").value=("EURZAR");
                var buy8 = document.getElementById("crBuy8").value=(currencyValue1*EURBuySell[14]).toFixed(4);
                var sell8 = document.getElementById("crSell8").value=(currencyValue1*EURBuySell[15]).toFixed(4);
                document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                document.getElementById("cr9").value=("EURRUB");
                var buy9 = document.getElementById("crBuy9").value=(currencyValue1*EURBuySell[16]).toFixed(4);
                var sell9 = document.getElementById("crSell9").value=(currencyValue1*EURBuySell[17]).toFixed(4);
                document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
        }
            else if (baseCurrency === "CHF") {
                document.getElementById("cr1").value=("CHFGBP");
                var buy1 = document.getElementById("crBuy1").value=(currencyValue1*CHFBuySell[0]).toFixed(4);
                var sell1 = document.getElementById("crSell1").value=(currencyValue1*CHFBuySell[1]).toFixed(4);
                document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);
                
                document.getElementById("cr2").value=("CHFEUR");
                var buy2 = document.getElementById("crBuy2").value=(currencyValue1*CHFBuySell[2]).toFixed(4);
                var sell2 = document.getElementById("crSell2").value=(currencyValue1*CHFBuySell[3]).toFixed(4);
                document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                document.getElementById("cr3").value=("CHFUSD");
                var buy3 = document.getElementById("crBuy3").value=(currencyValue1*CHFBuySell[4]).toFixed(4);
                var sell3 = document.getElementById("crSell3").value=(currencyValue1*CHFBuySell[5]).toFixed(4);
                document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                document.getElementById("cr4").value=("CHFJPY");
                var buy4 = document.getElementById("crBuy4").value=(currencyValue1*CHFBuySell[6]).toFixed(4);
                var sell4 = document.getElementById("crSell4").value=(currencyValue1*CHFBuySell[7]).toFixed(4);
                document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                document.getElementById("cr5").value=("CHFCAD");
                var buy5 = document.getElementById("crBuy5").value=(currencyValue1*CHFBuySell[8]).toFixed(4);
                var sell5 = document.getElementById("crSell5").value=(currencyValue1*CHFBuySell[9]).toFixed(4);
                document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                document.getElementById("cr6").value=("CHFNZD");
                var buy6 = document.getElementById("crBuy6").value=(currencyValue1*CHFBuySell[10]).toFixed(4);
                var sell6 = document.getElementById("crSell6").value=(currencyValue1*CHFBuySell[11]).toFixed(4);
                document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                document.getElementById("cr7").value=("CHFAUD");
                var buy7 = document.getElementById("crBuy7").value=(currencyValue1*CHFBuySell[12]).toFixed(4);
                var sell7 = document.getElementById("crSell7").value=(currencyValue1*CHFBuySell[13]).toFixed(4);
                document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                document.getElementById("cr8").value=("CHFZAR");
                var buy8 = document.getElementById("crBuy8").value=(currencyValue1*CHFBuySell[14]).toFixed(4);
                var sell8 = document.getElementById("crSell8").value=(currencyValue1*CHFBuySell[15]).toFixed(4);
                document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                document.getElementById("cr9").value=("CHFRUB");
                var buy9 = document.getElementById("crBuy9").value=(currencyValue1*CHFBuySell[16]).toFixed(4);
                var sell9 = document.getElementById("crSell9").value=(currencyValue1*CHFBuySell[17]).toFixed(4);
                document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
        }
            else if (baseCurrency === "USD") {
                            document.getElementById("cr1").value=("USDGBP");
                            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*USDBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("crSell1").value=(currencyValue1*USDBuySell[1]).toFixed(4);
                            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("cr2").value=("USDEUR");
                            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*USDBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("crSell2").value=(currencyValue1*USDBuySell[3]).toFixed(4);
                            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("cr3").value=("USDCHF");
                            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*USDBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("crSell3").value=(currencyValue1*USDBuySell[5]).toFixed(4);
                            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("cr4").value=("USDJPY");
                            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*USDBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("crSell4").value=(currencyValue1*USDBuySell[7]).toFixed(4);
                            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("cr5").value=("USDCAD");
                            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*USDBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("crSell5").value=(currencyValue1*USDBuySell[9]).toFixed(4);
                            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("cr6").value=("USDNZD");
                            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*USDBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("crSell6").value=(currencyValue1*USDBuySell[11]).toFixed(4);
                            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("cr7").value=("USDAUD");
                            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*USDBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("crSell7").value=(currencyValue1*USDBuySell[13]).toFixed(4);
                            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("cr8").value=("USDZAR");
                            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*USDBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("crSell8").value=(currencyValue1*USDBuySell[15]).toFixed(4);
                            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("cr9").value=("USDRUB");
                            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*USDBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("crSell9").value=(currencyValue1*USDBuySell[17]).toFixed(4);
                            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "JPY") {
                            document.getElementById("cr1").value=("JPYGBP");
                            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*JPYBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("crSell1").value=(currencyValue1*JPYBuySell[1]).toFixed(4);
                            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("cr2").value=("JPYEUR");
                            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*JPYBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("crSell2").value=(currencyValue1*JPYBuySell[3]).toFixed(4);
                            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("cr3").value=("JPYCHF");
                            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*JPYBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("crSell3").value=(currencyValue1*JPYBuySell[5]).toFixed(4);
                            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("cr4").value=("JPYUSD");
                            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*JPYBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("crSell4").value=(currencyValue1*JPYBuySell[7]).toFixed(4);
                            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("cr5").value=("JPYCAD");
                            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*JPYBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("crSell5").value=(currencyValue1*JPYBuySell[9]).toFixed(4);
                            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("cr6").value=("JPYNZD");
                            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*JPYBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("crSell6").value=(currencyValue1*JPYBuySell[11]).toFixed(4);
                            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("cr7").value=("JPYAUD");
                            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*JPYBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("crSell7").value=(currencyValue1*JPYBuySell[13]).toFixed(4);
                            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("cr8").value=("JPYZAR");
                            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*JPYBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("crSell8").value=(currencyValue1*JPYBuySell[15]).toFixed(4);
                            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("cr9").value=("JPYRUB");
                            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*JPYBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("crSell9").value=(currencyValue1*JPYBuySell[17]).toFixed(4);
                            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "CAD") {
                            document.getElementById("cr1").value=("CADGBP");
                            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*CADBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("crSell1").value=(currencyValue1*CADBuySell[1]).toFixed(4);
                            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("cr2").value=("CADEUR");
                            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*CADBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("crSell2").value=(currencyValue1*CADBuySell[3]).toFixed(4);
                            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("cr3").value=("CADCHF");
                            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*CADBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("crSell3").value=(currencyValue1*CADBuySell[5]).toFixed(4);
                            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("cr4").value=("CADUSD");
                            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*CADBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("crSell4").value=(currencyValue1*CADBuySell[7]).toFixed(4);
                            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("cr5").value=("CADJPY");
                            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*CADBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("crSell5").value=(currencyValue1*CADBuySell[9]).toFixed(4);
                            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("cr6").value=("CADNZD");
                            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*CADBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("crSell6").value=(currencyValue1*CADBuySell[11]).toFixed(4);
                            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("cr7").value=("CADAUD");
                            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*CADBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("crSell7").value=(currencyValue1*CADBuySell[13]).toFixed(4);
                            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("cr8").value=("CADZAR");
                            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*CADBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("crSell8").value=(currencyValue1*CADBuySell[15]).toFixed(4);
                            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("cr9").value=("CADRUB");
                            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*CADBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("crSell9").value=(currencyValue1*CADBuySell[17]).toFixed(4);
                            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "NZD") {
                            document.getElementById("cr1").value=("NZDGBP");
                            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*NZDBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("crSell1").value=(currencyValue1*NZDBuySell[1]).toFixed(4);
                            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("cr2").value=("NZDEUR");
                            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*NZDBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("crSell2").value=(currencyValue1*NZDBuySell[3]).toFixed(4);
                            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("cr3").value=("NZDCHF");
                            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*NZDBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("crSell3").value=(currencyValue1*NZDBuySell[5]).toFixed(4);
                            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("cr4").value=("NZDUSD");
                            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*NZDBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("crSell4").value=(currencyValue1*NZDBuySell[7]).toFixed(4);
                            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("cr5").value=("NZDJPY");
                            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*NZDBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("crSell5").value=(currencyValue1*NZDBuySell[9]).toFixed(4);
                            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("cr6").value=("NZDCAD");
                            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*NZDBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("crSell6").value=(currencyValue1*NZDBuySell[11]).toFixed(4);
                            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("cr7").value=("NZDAUD");
                            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*NZDBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("crSell7").value=(currencyValue1*NZDBuySell[13]).toFixed(4);
                            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("cr8").value=("NZDZAR");
                            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*NZDBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("crSell8").value=(currencyValue1*NZDBuySell[15]).toFixed(4);
                            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("cr9").value=("NZDRUB");
                            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*NZDBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("crSell9").value=(currencyValue1*NZDBuySell[17]).toFixed(4);
                            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "AUD") {
                            document.getElementById("cr1").value=("AUDGBP");
                            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*AUDBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("crSell1").value=(currencyValue1*AUDBuySell[1]).toFixed(4);
                            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("cr2").value=("AUDEUR");
                            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*AUDBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("crSell2").value=(currencyValue1*AUDBuySell[3]).toFixed(4);
                            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("cr3").value=("AUDCHF");
                            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*AUDBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("crSell3").value=(currencyValue1*AUDBuySell[5]).toFixed(4);
                            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("cr4").value=("AUDUSD");
                            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*AUDBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("crSell4").value=(currencyValue1*AUDBuySell[7]).toFixed(4);
                            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("cr5").value=("AUDJPY");
                            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*AUDBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("crSell5").value=(currencyValue1*AUDBuySell[9]).toFixed(4);
                            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("cr6").value=("AUDCAD");
                            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*AUDBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("crSell6").value=(currencyValue1*AUDBuySell[11]).toFixed(4);
                            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("cr7").value=("AUDNZD");
                            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*AUDBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("crSell7").value=(currencyValue1*AUDBuySell[13]).toFixed(4);
                            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("cr8").value=("AUDZAR");
                            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*AUDBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("crSell8").value=(currencyValue1*AUDBuySell[15]).toFixed(4);
                            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("cr9").value=("AUDRUB");
                            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*AUDBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("crSell9").value=(currencyValue1*AUDBuySell[17]).toFixed(4);
                            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "ZAR") {
                            document.getElementById("cr1").value=("ZARGBP");
                            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*ZARBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("crSell1").value=(currencyValue1*ZARBuySell[1]).toFixed(4);
                            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("cr2").value=("ZAREUR");
                            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*ZARBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("crSell2").value=(currencyValue1*ZARBuySell[3]).toFixed(4);
                            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("cr3").value=("ZARCHF");
                            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*ZARBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("crSell3").value=(currencyValue1*ZARBuySell[5]).toFixed(4);
                            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("cr4").value=("ZARUSD");
                            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*ZARBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("crSell4").value=(currencyValue1*ZARBuySell[7]).toFixed(4);
                            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("cr5").value=("ZARJPY");
                            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*ZARBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("crSell5").value=(currencyValue1*ZARBuySell[9]).toFixed(4);
                            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("cr6").value=("ZARCAD");
                            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*ZARBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("crSell6").value=(currencyValue1*ZARBuySell[11]).toFixed(4);
                            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("cr7").value=("ZARNZD");
                            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*ZARBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("crSell7").value=(currencyValue1*ZARBuySell[13]).toFixed(4);
                            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("cr8").value=("ZARAUD");
                            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*ZARBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("crSell8").value=(currencyValue1*ZARBuySell[15]).toFixed(4);
                            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("cr9").value=("ZARRUB");
                            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*ZARBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("crSell9").value=(currencyValue1*ZARBuySell[17]).toFixed(4);
                            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "RUB") {
                            document.getElementById("cr1").value=("RUBGBP");
                            var buy1 = document.getElementById("crBuy1").value=(currencyValue1*EURBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("crSell1").value=(currencyValue1*EURBuySell[1]).toFixed(4);
                            document.getElementById("crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("cr2").value=("RUBEUR");
                            var buy2 = document.getElementById("crBuy2").value=(currencyValue1*EURBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("crSell2").value=(currencyValue1*EURBuySell[3]).toFixed(4);
                            document.getElementById("crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("cr3").value=("RUBCHF");
                            var buy3 = document.getElementById("crBuy3").value=(currencyValue1*EURBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("crSell3").value=(currencyValue1*EURBuySell[5]).toFixed(4);
                            document.getElementById("crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("cr4").value=("RUBUSD");
                            var buy4 = document.getElementById("crBuy4").value=(currencyValue1*EURBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("crSell4").value=(currencyValue1*EURBuySell[7]).toFixed(4);
                            document.getElementById("crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("cr5").value=("RUBJPY");
                            var buy5 = document.getElementById("crBuy5").value=(currencyValue1*EURBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("crSell5").value=(currencyValue1*EURBuySell[9]).toFixed(4);
                            document.getElementById("crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("cr6").value=("RUBCAD");
                            var buy6 = document.getElementById("crBuy6").value=(currencyValue1*EURBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("crSell6").value=(currencyValue1*EURBuySell[11]).toFixed(4);
                            document.getElementById("crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("cr7").value=("RUBNZD");
                            var buy7 = document.getElementById("crBuy7").value=(currencyValue1*EURBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("crSell7").value=(currencyValue1*EURBuySell[13]).toFixed(4);
                            document.getElementById("crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("cr8").value=("RUBAUD");
                            var buy8 = document.getElementById("crBuy8").value=(currencyValue1*EURBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("crSell8").value=(currencyValue1*EURBuySell[15]).toFixed(4);
                            document.getElementById("crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("cr9").value=("RUBZAR");
                            var buy9 = document.getElementById("crBuy9").value=(currencyValue1*EURBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("crSell9").value=(currencyValue1*EURBuySell[17]).toFixed(4);
                            document.getElementById("crSpread9").value=(buy9-sell9).toFixed(4);
                    }
        }

        function crossRate2() {
            
        var baseCurrency = document.getElementById("currencyType2").value;     
        var currencyValue1 = document.getElementById("currencyInput2").value;
            
        if (baseCurrency === "GBP") {
                    
            document.getElementById("2cr1").value=("GBPEUR");
            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*GBPBuySell[0]).toFixed(4);
            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*GBPBuySell[1]).toFixed(4);
            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);
            
            document.getElementById("2cr2").value=("GBPCHF");
            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*GBPBuySell[2]).toFixed(4);
            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*GBPBuySell[3]).toFixed(4);
            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);
            
            document.getElementById("2cr3").value=("GBPUSD");
            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*GBPBuySell[4]).toFixed(4);
            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*GBPBuySell[5]).toFixed(4);
            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);
            
            document.getElementById("2cr4").value=("GBPJPY");
            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*GBPBuySell[6]).toFixed(4);
            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*GBPBuySell[7]).toFixed(4);
            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);
            
            document.getElementById("2cr5").value=("GBPCAD");
            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*GBPBuySell[8]).toFixed(4);
            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*GBPBuySell[9]).toFixed(4);
            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);
            
            document.getElementById("2cr6").value=("GBPNZD");
            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*GBPBuySell[10]).toFixed(4);
            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*GBPBuySell[11]).toFixed(4);
            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);
            
            document.getElementById("2cr7").value=("GBPAUD");
            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*GBPBuySell[12]).toFixed(4);
            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*GBPBuySell[13]).toFixed(4);
            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);
            
            document.getElementById("2cr8").value=("GBPZAR");
            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*GBPBuySell[14]).toFixed(4);
            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*GBPBuySell[15]).toFixed(4);
            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);
            
            document.getElementById("2cr9").value=("GBPRUB");
            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*GBPBuySell[16]).toFixed(4);
            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*GBPBuySell[17]).toFixed(4);
            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
        }    
            else if (baseCurrency === "EUR") {
                document.getElementById("2cr1").value=("EURGBP");
                var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*EURBuySell[0]).toFixed(4);
                var sell1 = document.getElementById("2crSell1").value=(currencyValue1*EURBuySell[1]).toFixed(4);
                document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);
                
                document.getElementById("2cr2").value=("EURCHF");
                var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*EURBuySell[2]).toFixed(4);
                var sell2 = document.getElementById("2crSell2").value=(currencyValue1*EURBuySell[3]).toFixed(4);
                document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                document.getElementById("2cr3").value=("EURUSD");
                var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*EURBuySell[4]).toFixed(4);
                var sell3 = document.getElementById("2crSell3").value=(currencyValue1*EURBuySell[5]).toFixed(4);
                document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                document.getElementById("2cr4").value=("EURJPY");
                var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*EURBuySell[6]).toFixed(4);
                var sell4 = document.getElementById("2crSell4").value=(currencyValue1*EURBuySell[7]).toFixed(4);
                document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                document.getElementById("2cr5").value=("EURCAD");
                var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*EURBuySell[8]).toFixed(4);
                var sell5 = document.getElementById("2crSell5").value=(currencyValue1*EURBuySell[9]).toFixed(4);
                document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                document.getElementById("2cr6").value=("EURNZD");
                var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*EURBuySell[10]).toFixed(4);
                var sell6 = document.getElementById("2crSell6").value=(currencyValue1*EURBuySell[11]).toFixed(4);
                document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                document.getElementById("2cr7").value=("EURAUD");
                var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*EURBuySell[12]).toFixed(4);
                var sell7 = document.getElementById("2crSell7").value=(currencyValue1*EURBuySell[13]).toFixed(4);
                document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                document.getElementById("2cr8").value=("EURZAR");
                var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*EURBuySell[14]).toFixed(4);
                var sell8 = document.getElementById("2crSell8").value=(currencyValue1*EURBuySell[15]).toFixed(4);
                document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                document.getElementById("2cr9").value=("EURRUB");
                var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*EURBuySell[16]).toFixed(4);
                var sell9 = document.getElementById("2crSell9").value=(currencyValue1*EURBuySell[17]).toFixed(4);
                document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
        }
            else if (baseCurrency === "CHF") {
                document.getElementById("2cr1").value=("CHFGBP");
                var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*CHFBuySell[0]).toFixed(4);
                var sell1 = document.getElementById("2crSell1").value=(currencyValue1*CHFBuySell[1]).toFixed(4);
                document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);
                
                document.getElementById("2cr2").value=("CHFEUR");
                var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*CHFBuySell[2]).toFixed(4);
                var sell2 = document.getElementById("2crSell2").value=(currencyValue1*CHFBuySell[3]).toFixed(4);
                document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                document.getElementById("2cr3").value=("CHFUSD");
                var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*CHFBuySell[4]).toFixed(4);
                var sell3 = document.getElementById("2crSell3").value=(currencyValue1*CHFBuySell[5]).toFixed(4);
                document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                document.getElementById("2cr4").value=("CHFJPY");
                var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*CHFBuySell[6]).toFixed(4);
                var sell4 = document.getElementById("2crSell4").value=(currencyValue1*CHFBuySell[7]).toFixed(4);
                document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                document.getElementById("2cr5").value=("CHFCAD");
                var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*CHFBuySell[8]).toFixed(4);
                var sell5 = document.getElementById("2crSell5").value=(currencyValue1*CHFBuySell[9]).toFixed(4);
                document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                document.getElementById("2cr6").value=("CHFNZD");
                var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*CHFBuySell[10]).toFixed(4);
                var sell6 = document.getElementById("2crSell6").value=(currencyValue1*CHFBuySell[11]).toFixed(4);
                document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                document.getElementById("2cr7").value=("CHFAUD");
                var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*CHFBuySell[12]).toFixed(4);
                var sell7 = document.getElementById("2crSell7").value=(currencyValue1*CHFBuySell[13]).toFixed(4);
                document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                document.getElementById("2cr8").value=("CHFZAR");
                var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*CHFBuySell[14]).toFixed(4);
                var sell8 = document.getElementById("2crSell8").value=(currencyValue1*CHFBuySell[15]).toFixed(4);
                document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                document.getElementById("2cr9").value=("CHFRUB");
                var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*CHFBuySell[16]).toFixed(4);
                var sell9 = document.getElementById("2crSell9").value=(currencyValue1*CHFBuySell[17]).toFixed(4);
                document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
        }
            else if (baseCurrency === "USD") {
                            document.getElementById("2cr1").value=("USDGBP");
                            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*USDBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*USDBuySell[1]).toFixed(4);
                            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("2cr2").value=("USDEUR");
                            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*USDBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*USDBuySell[3]).toFixed(4);
                            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("2cr3").value=("USDCHF");
                            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*USDBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*USDBuySell[5]).toFixed(4);
                            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("2cr4").value=("USDJPY");
                            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*USDBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*USDBuySell[7]).toFixed(4);
                            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("2cr5").value=("USDCAD");
                            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*USDBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*USDBuySell[9]).toFixed(4);
                            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("2cr6").value=("USDNZD");
                            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*USDBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*USDBuySell[11]).toFixed(4);
                            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("2cr7").value=("USDAUD");
                            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*USDBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*USDBuySell[13]).toFixed(4);
                            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("2cr8").value=("USDZAR");
                            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*USDBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*USDBuySell[15]).toFixed(4);
                            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("2cr9").value=("USDRUB");
                            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*USDBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*USDBuySell[17]).toFixed(4);
                            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "JPY") {
                            document.getElementById("2cr1").value=("JPYGBP");
                            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*JPYBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*JPYBuySell[1]).toFixed(4);
                            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("2cr2").value=("JPYEUR");
                            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*JPYBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*JPYBuySell[3]).toFixed(4);
                            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("2cr3").value=("JPYCHF");
                            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*JPYBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*JPYBuySell[5]).toFixed(4);
                            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("2cr4").value=("JPYUSD");
                            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*JPYBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*JPYBuySell[7]).toFixed(4);
                            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("2cr5").value=("JPYCAD");
                            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*JPYBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*JPYBuySell[9]).toFixed(4);
                            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("2cr6").value=("JPYNZD");
                            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*JPYBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*JPYBuySell[11]).toFixed(4);
                            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("2cr7").value=("JPYAUD");
                            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*JPYBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*JPYBuySell[13]).toFixed(4);
                            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("2cr8").value=("JPYZAR");
                            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*JPYBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*JPYBuySell[15]).toFixed(4);
                            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("2cr9").value=("JPYRUB");
                            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*JPYBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*JPYBuySell[17]).toFixed(4);
                            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "CAD") {
                            document.getElementById("2cr1").value=("CADGBP");
                            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*CADBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*CADBuySell[1]).toFixed(4);
                            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("2cr2").value=("CADEUR");
                            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*CADBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*CADBuySell[3]).toFixed(4);
                            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("2cr3").value=("CADCHF");
                            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*CADBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*CADBuySell[5]).toFixed(4);
                            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("2cr4").value=("CADUSD");
                            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*CADBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*CADBuySell[7]).toFixed(4);
                            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("2cr5").value=("CADJPY");
                            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*CADBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*CADBuySell[9]).toFixed(4);
                            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("2cr6").value=("CADNZD");
                            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*CADBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*CADBuySell[11]).toFixed(4);
                            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("2cr7").value=("CADAUD");
                            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*CADBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*CADBuySell[13]).toFixed(4);
                            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("2cr8").value=("CADZAR");
                            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*CADBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*CADBuySell[15]).toFixed(4);
                            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("2cr9").value=("CADRUB");
                            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*CADBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*CADBuySell[17]).toFixed(4);
                            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "NZD") {
                            document.getElementById("2cr1").value=("NZDGBP");
                            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*NZDBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*NZDBuySell[1]).toFixed(4);
                            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("2cr2").value=("NZDEUR");
                            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*NZDBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*NZDBuySell[3]).toFixed(4);
                            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("2cr3").value=("NZDCHF");
                            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*NZDBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*NZDBuySell[5]).toFixed(4);
                            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("2cr4").value=("NZDUSD");
                            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*NZDBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*NZDBuySell[7]).toFixed(4);
                            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("2cr5").value=("NZDJPY");
                            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*NZDBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*NZDBuySell[9]).toFixed(4);
                            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("2cr6").value=("NZDCAD");
                            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*NZDBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*NZDBuySell[11]).toFixed(4);
                            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("2cr7").value=("NZDAUD");
                            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*NZDBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*NZDBuySell[13]).toFixed(4);
                            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("2cr8").value=("NZDZAR");
                            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*NZDBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*NZDBuySell[15]).toFixed(4);
                            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("2cr9").value=("NZDRUB");
                            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*NZDBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*NZDBuySell[17]).toFixed(4);
                            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "AUD") {
                            document.getElementById("2cr1").value=("AUDGBP");
                            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*AUDBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*AUDBuySell[1]).toFixed(4);
                            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("2cr2").value=("AUDEUR");
                            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*AUDBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*AUDBuySell[3]).toFixed(4);
                            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("2cr3").value=("AUDCHF");
                            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*AUDBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*AUDBuySell[5]).toFixed(4);
                            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("2cr4").value=("AUDUSD");
                            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*AUDBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*AUDBuySell[7]).toFixed(4);
                            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("2cr5").value=("AUDJPY");
                            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*AUDBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*AUDBuySell[9]).toFixed(4);
                            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("2cr6").value=("AUDCAD");
                            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*AUDBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*AUDBuySell[11]).toFixed(4);
                            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("2cr7").value=("AUDNZD");
                            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*AUDBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*AUDBuySell[13]).toFixed(4);
                            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("2cr8").value=("AUDZAR");
                            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*AUDBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*AUDBuySell[15]).toFixed(4);
                            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("2cr9").value=("AUDRUB");
                            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*AUDBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*AUDBuySell[17]).toFixed(4);
                            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "ZAR") {
                            document.getElementById("2cr1").value=("ZARGBP");
                            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*ZARBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*ZARBuySell[1]).toFixed(4);
                            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("2cr2").value=("ZAREUR");
                            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*ZARBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*ZARBuySell[3]).toFixed(4);
                            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("2cr3").value=("ZARCHF");
                            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*ZARBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*ZARBuySell[5]).toFixed(4);
                            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("2cr4").value=("ZARUSD");
                            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*ZARBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*ZARBuySell[7]).toFixed(4);
                            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("2cr5").value=("ZARJPY");
                            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*ZARBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*ZARBuySell[9]).toFixed(4);
                            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("2cr6").value=("ZARCAD");
                            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*ZARBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*ZARBuySell[11]).toFixed(4);
                            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("2cr7").value=("ZARNZD");
                            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*ZARBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*ZARBuySell[13]).toFixed(4);
                            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("2cr8").value=("ZARAUD");
                            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*ZARBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*ZARBuySell[15]).toFixed(4);
                            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("2cr9").value=("ZARRUB");
                            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*ZARBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*ZARBuySell[17]).toFixed(4);
                            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
                    }
            else if (baseCurrency === "RUB") {
                            document.getElementById("2cr1").value=("RUBGBP");
                            var buy1 = document.getElementById("2crBuy1").value=(currencyValue1*EURBuySell[0]).toFixed(4);
                            var sell1 = document.getElementById("2crSell1").value=(currencyValue1*EURBuySell[1]).toFixed(4);
                            document.getElementById("2crSpread1").value=(buy1-sell1).toFixed(4);

                            document.getElementById("2cr2").value=("RUBEUR");
                            var buy2 = document.getElementById("2crBuy2").value=(currencyValue1*EURBuySell[2]).toFixed(4);
                            var sell2 = document.getElementById("2crSell2").value=(currencyValue1*EURBuySell[3]).toFixed(4);
                            document.getElementById("2crSpread2").value=(buy2-sell2).toFixed(4);

                            document.getElementById("2cr3").value=("RUBCHF");
                            var buy3 = document.getElementById("2crBuy3").value=(currencyValue1*EURBuySell[4]).toFixed(4);
                            var sell3 = document.getElementById("2crSell3").value=(currencyValue1*EURBuySell[5]).toFixed(4);
                            document.getElementById("2crSpread3").value=(buy3-sell3).toFixed(4);

                            document.getElementById("2cr4").value=("RUBUSD");
                            var buy4 = document.getElementById("2crBuy4").value=(currencyValue1*EURBuySell[6]).toFixed(4);
                            var sell4 = document.getElementById("2crSell4").value=(currencyValue1*EURBuySell[7]).toFixed(4);
                            document.getElementById("2crSpread4").value=(buy4-sell4).toFixed(4);

                            document.getElementById("2cr5").value=("RUBJPY");
                            var buy5 = document.getElementById("2crBuy5").value=(currencyValue1*EURBuySell[8]).toFixed(4);
                            var sell5 = document.getElementById("2crSell5").value=(currencyValue1*EURBuySell[9]).toFixed(4);
                            document.getElementById("2crSpread5").value=(buy5-sell5).toFixed(4);

                            document.getElementById("2cr6").value=("RUBCAD");
                            var buy6 = document.getElementById("2crBuy6").value=(currencyValue1*EURBuySell[10]).toFixed(4);
                            var sell6 = document.getElementById("2crSell6").value=(currencyValue1*EURBuySell[11]).toFixed(4);
                            document.getElementById("2crSpread6").value=(buy6-sell6).toFixed(4);

                            document.getElementById("2cr7").value=("RUBNZD");
                            var buy7 = document.getElementById("2crBuy7").value=(currencyValue1*EURBuySell[12]).toFixed(4);
                            var sell7 = document.getElementById("2crSell7").value=(currencyValue1*EURBuySell[13]).toFixed(4);
                            document.getElementById("2crSpread7").value=(buy7-sell7).toFixed(4);

                            document.getElementById("2cr8").value=("RUBAUD");
                            var buy8 = document.getElementById("2crBuy8").value=(currencyValue1*EURBuySell[14]).toFixed(4);
                            var sell8 = document.getElementById("2crSell8").value=(currencyValue1*EURBuySell[15]).toFixed(4);
                            document.getElementById("2crSpread8").value=(buy8-sell8).toFixed(4);

                            document.getElementById("2cr9").value=("RUBZAR");
                            var buy9 = document.getElementById("2crBuy9").value=(currencyValue1*EURBuySell[16]).toFixed(4);
                            var sell9 = document.getElementById("2crSell9").value=(currencyValue1*EURBuySell[17]).toFixed(4);
                            document.getElementById("2crSpread9").value=(buy9-sell9).toFixed(4);
                    }
        }












