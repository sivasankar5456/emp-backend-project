import express from 'express'
import { CreateEmployee, GetAllEmployees, UpdateEmployee, GetEmployeeById, DeleteEmployeeById} from '../controller/EmployeeController.js'

const routers = express.Router()

//Router for Create Employee
routers.post('/employee', CreateEmployee)

// router for get all employess
routers.get('/employee', GetAllEmployees)

routers.put('/employee/:id', UpdateEmployee)

routers.get('/employee/:id', GetEmployeeById)

routers.delete('/employee/:id', DeleteEmployeeById)


export default routers

