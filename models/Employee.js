import mongoose from "mongoose"

const employeeSchema = new mongoose.Schema({
    empid: String,
    name: String,
    age: Number,
    salary: Number,
    address: String
}, {timestamps: true})

const EmployeeModel = mongoose.model('employee', employeeSchema)

export default EmployeeModel















