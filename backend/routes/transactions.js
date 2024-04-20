const router = require ('express').Router();

const {addIncome, getIncomes, deleteIncomes} = require('../controllers/income.js');
const {addExpense, getExpense, deleteExpenses} = require('../controllers/expense.js');

router.post('/add-income', addIncome)
        .get('/get-incomes', getIncomes)
        .delete('/delete-incomes/:id',deleteIncomes)
        .post('/add-expense', addExpense)
        .get('/get-expenses', getExpense)
        .delete('/delete-expenses/:id',deleteExpenses)


module.exports= router