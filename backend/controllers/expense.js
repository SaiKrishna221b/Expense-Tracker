
const ExpenseSchema = require('../models/expenseModel')

const addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,

    })


    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })

        }

        if (amount <= 0 || !amount == 'number') {

            return res.status(400).json({ message: 'Invalid input for number' })
        }
        await expense.save()
        console.log('expense saved:', expense);
        res.status(200).json({ message: 'Expense Added' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' })

    }
    console.log(expense)
}

const getExpense = async (req, res) => {

    try {
        const expenses = await ExpenseSchema.find().sort({ createdAt: -1 })
        res.status(200).json(expenses)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' })
    }
}

const deleteExpenses = async (req, res) => {

    const { id } = req.params;
    console.log(req.params)
}

module.exports = { addExpense, getExpense, deleteExpenses }