var text
var Product= prompt("What would you like to buy? Computer or Tablet?");
switch(Product){
    case "Computer":
    var Price="$1500";
    var Quantity="1";
    var Taxes="$ 0.16";
    var salePrice="1740.00";
    console.log(`Sale price ${Price}`);
    console.log(`Quantity of product: (Due to limited supplies, were limiting purchases to 1 item per person, per month. Sorry for the inconvienence): ${Quantity}`);
    console.log(`Taxes ${Taxes}`);
    console.log(`Total Sale Price:  ${salePrice}`);
    break;

    case "Tablet":
    var Price2="$800";
    var Quantity2="1";
    var Taxes2="$ 0.16";
    var salePrice2="$928.00";
    console.log(`Sale price ${Price2}`);
    console.log(`Quantity of product: (Due to limited supplies, were limiting purchases to 1 item per person, per month. Sorry for the inconvienence): ${Quantity2}`);
    console.log(`Taxes ${Taxes2}`);
    console.log(`Total Sale Price:  ${salePrice2}`);
}
    