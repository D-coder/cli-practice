function validateUserInput(amount, initialCurrency, targetCurrency){
    if(amount === undefined || initialCurrency === undefined || targetCurrency === undefined){
        console.log('you forgot to provide one of the inputs')
        process.exit();
        }
    }

module.exports = {
    validateUserInput,
};