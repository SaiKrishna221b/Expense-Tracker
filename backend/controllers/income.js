
const IncomeSchema = require('../models/incomeModel')

const addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date

    })


    try {
        //validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' })

        }

        if (amount <= 0 || !amount == 'number') {

            return res.status(400).json({ message: 'Invalid input for number' })
        }
        await income.save()
        console.log('Income saved:', income);
        res.status(200).json({ message: 'Income Added' })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' })

    }
    console.log(income)
}

const getIncomes = async (req, res) => {

    try {
        const incomes = await IncomeSchema.find().sort({ createdAt: -1 })
        res.status(200).json(incomes)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' })
    }
}

const deleteIncomes = async (req, res) => {

    const { id } = req.params;
    console.log(req.params)
}

module.exports = { addIncome, getIncomes, deleteIncomes }