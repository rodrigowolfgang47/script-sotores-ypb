// Create all global variables
var allOptions, selectedField, currentPrice, hasDollar, OtherWisePrice, hasDollar, selectedOption, valueInHtml;

// Get the select, current price and the default value
selectedField = document.querySelector('select.form-control');
currentPrice = document.querySelector(".list-unstyled h2");
OtherWisePrice = currentPrice.innerHTML;

// Create the event
selectedField.onchange = function(){

    // Get the value selected by user
    selectedOption = this.options[this.selectedIndex];

    // Get value in option html
    valueInHtml = selectedOption.innerHTML;
    
    // verify is has dollar inside the html
    hasDollar = selectedOption.innerHTML.indexOf("$") >= 0;

    // if have dolar, then i'll replace the final price in page, if not, the default value is placed instead

    if(hasDollar){
        let textInValue, inicio, fim, finalvalue;

        textInValue = valueInHtml;

        inicio = textInValue.indexOf("(") + 1;

        fim = textInValue.indexOf(")");

        finalvalue = textInValue.substring(inicio, fim);

        currentPrice.innerHTML = finalvalue;
    }else{
        currentPrice.innerHTML = OtherWisePrice;
    }

    return;
}