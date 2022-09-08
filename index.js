// Write your solution in this file!
var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
};
function setBestCustomer(){
    bestCustomer = 'not bob'
};
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    return bestCustomer
};
const leastFavoriteCustomer = "someguy";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "someotherguy";
    return leastFavoriteCustomer;
};