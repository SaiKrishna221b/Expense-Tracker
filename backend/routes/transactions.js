const router = require ('express').Router();
const {addIncome, getIncomes, deleteIncomes} = require('../controllers/income.js');


router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-incomes/:id',deleteIncomes)

module.exports= router