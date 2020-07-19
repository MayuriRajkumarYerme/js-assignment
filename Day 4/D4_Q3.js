var shoppingList=["LED", "FAN", "AC"];
var shoppingBasket=[];
for(i=0;i<3;i++)
{
    shoppingBasket[i]=shoppingList[i];
}
console.log("Shopping List is : "+shoppingList);
shoppingBasket.unshift("Laptop");
shoppingBasket.unshift("Mobile");
console.log(`Shopping Basket is : ${shoppingBasket}.`);
