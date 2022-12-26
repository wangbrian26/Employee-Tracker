const inquirer = require("inquirer");
const mysql = require("mysql2");


function loadMainPrompts() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Employees",
          value: "VIEW_EMPLOYEES",
        },
        {
          name: "View All Employees By Department",
          value: "VIEW_EMPLOYEES_BY_DEPARTMENT",
        },
        {
          name: "View All Employees By Manager",
          value: "VIEW_EMPLOYEES_BY_MANAGER",
        },
        {
          name: "Add Employee",
          value: "ADD_EMPLOYEE",
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPLOYEE_ROLE",
        },
        {
          name: "Update Employee Manager",
          value: "UPDATE_EMPLOYEE_MANAGER",
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES",
        },
        {
          name: "Add Role",
          value: "ADD_ROLE",
        },
        {
          name: "Remove Role",
          value: "REMOVE_ROLE",
        },
        {
          name: "View All Departments",
          value: "VIEW_DEPARTMENTS",
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT",
        },
        {
          name: "Remove Department",
          value: "REMOVE_DEPARTMENT",
        },
        {
          name: "View Total Utilized Budget By Department",
          value: "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT",
        },
        {
          name: "Quit",
          value: "QUIT",
        },
      ],
    },
  ]);
  .then( res => {
    switch (res.choices) {
      case "VIEW_EMPLOYEES": 
        viewEmployees()
      break:
      case "VIEW_EMPLOYEES_BY_DEPARTMENT":
        viewEmployeesByDepartment()
      break:
      case "VIEW_EMPLOYEES_BY_MANAGER":
        viewEmployeesByManager()
      break:
      case "ADD_EMPLOYEE":
        addEmployees()
      break: 
      case "REMOVE_EMPLOYEE":
        removeEmployees()
      break: 
      case "UPDATE_EMPLOYEE_ROLE":
        updateEmployeeRole()
      break:
      case "UPDATE_EMPLOYEE_MANAGER":
        updateEmployeeManager()
      break: 
      case "VIEW_ROLES":
        viewRoles()
      break:
      case "ADD_ROLE":
        addRole()
      break: 
      case "REMOVE_ROLE":
        removeRole()
      break: 
      case "VIEW_DEPARTMENTS":
        viewDepartments()
      break: 
      case "ADD_DEPARTMENT":
        addDepartments()
      break:
      case "REMOVE_DEPARTMENT":
        removeDepartments()
      break:
      case "VIEW_UTILIZED_BUDGET_BY_DEPARTMENT":
        viewUtilizedBudget()
      break:
      case "QUIT":
        quit()
      break:
    }
  })
}

function viewEmployees() {
  
  loadMainPrompts()
}
function viewEmployeesByDepartment() {
  loadMainPrompts()
}
function viewEmployeesByManager() {
  loadMainPrompts()
}
function addEmployees() {
  loadMainPrompts()
}
function removeEmployees() {
  loadMainPrompts()
}
function updateEmployeeRole() {
  loadMainPrompts()
}
function updateEmployeeManager() {
  loadMainPrompts()
}
function viewRoles() {
  loadMainPrompts()
}
function addRole() {
  loadMainPrompts()
}
function removeRole() {
  loadMainPrompts()
}
function viewDepartments() {
  loadMainPrompts()
}
function addDepartments() {
  loadMainPrompts()
}
function removeDepartments() {
  loadMainPrompts()
}
function viewUtilizedBudget() {
  loadMainPrompts()
}
function quit() {
  console.log("Thanks for using this app. Goodbye.")
  return;
}
