import EmployeeModel from "../models/Employee.js"

// Handler method for CREATE Employee
const CreateEmployee = async(request, response) => {

    // response.send("Create Employee Handler Method Got Called!!!")
    console.log('request',request.body)
    try{
      const{empid, name, age, salary, address} = request.body
      const empModel = new EmployeeModel({empid, name, age, salary, address})
      await empModel.save()

      response.status(201).json({

        success: true,
        message: 'employee created succesfully',
        empModel
      })
    }catch(error){
        console.log(error)
        response.status(500).json({
            success: false,
            message: 'employee not created due to internal server error',
            
          })
    }
}


const GetAllEmployees =async (request, response)=>{
   try{
      const employees = await EmployeeModel.find()

      if(!employees){
        response.status(404).json({
          success: false,
          message: 'employee data not found in the database',
          
        })
      }
      response.status(200).json({
        success: true,
        message: 'got all employee from db succesfully',
        employees
      })

   }catch(error){
    response.status(500).json({
      success: false,
      message: 'unable to get employees due to internal server error',
      
    })
   }
}

const UpdateEmployee =async (request, response)=>{
   const employeePk = request.params.id;
   console.log(request.body)

   // updating by primary key which is mongodb object _id

  //  const updatedEmployee = await EmployeeModel.findByIdAndUpdate(employeePk, request.body, { new: true })

   const empid_update = {empid: employeePk} // updating by different type of id's
   const updatedEmployee = await EmployeeModel.findOneAndUpdate(empid_update, request.body, { new: true })

  response.status(200).json({
      success: true,
      message: 'employee updated successfully',
      updatedEmployee
  })

}


const GetEmployeeById = async(request, response)=>{
  const employeePk = request.params.id;

 const employee = await EmployeeModel.findById(employeePk)
 response.status(200).json({
  success: true,
  message: 'employee got successfully',
  employee
})
}

const DeleteEmployeeById = async(request, response)=>{
  const employeePk = request.params.id;

 const employee = await EmployeeModel.findByIdAndDelete(employeePk)
 response.status(200).json({
  success: true,
  message: 'employee deleted successfully',
  employee
})
}

export {CreateEmployee, GetAllEmployees, UpdateEmployee, GetEmployeeById, DeleteEmployeeById}

// http://localhost:4000/api/employee