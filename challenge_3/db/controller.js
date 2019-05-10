const connection = require('./database.js');
const addAccount = (info, res, cb) => {
  const {name, email, password, address, phone, creditCard, expiryDate, CVV, zipCode} = info
  console.log('name', name);
  connection.query(`INSERT INTO profiles (name, email, password, address, phone_number, 
    credit_card_number, experation_date, cvv, zipcode) VALUES ("${name}", 
      "${email}", "${password}", "${address}", "${phone}", "${creditCard}", "${expiryDate}", "${CVV}", "${zipCode}")`, cb)
}
module.exports = {
  addAccount: addAccount
}