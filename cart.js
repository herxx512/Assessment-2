///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce((a,c)=> a + c['price'], 0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal,couponValue,tax) =>{
    return (cartTotal*(1+tax)) - couponValue
}

console.log(calcFinalPrice(15,3,0.06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
My customer object properties will have name, email, phone number, and coupon. I chose these properties because for takeout or dine-in:
The customer name is needed to keep track of what they ordered online. 
Their email is needed so the restaurant can send them a copy of their receipt and confirmation number.
Their phone number is needed so the restaurant can contact them if there are problems/concerns about their orders.
The customer coupon is needed if they have any so they would be able to get a discount on their purchases.

For the name, the datatype will be a STRING because a string can contain letters and, it is the most appropriate datatype for adding a name.
For the email, the datatype will be a STRING because a string can contain letters, numbers, and special characters.
For the phone number, the datatype will be a NUMBER because a phone number contains only numbers.
For the coupon, the datatype will be a STRING because the coupon will be containing a mixture of letters and numbers.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObj = {
    name: 'Bruce',
    email: 'bruce@justforpractice.com',
    phone: 1234567899,
    coupon: 'Coupon2022'
}

console.log(customerObj)