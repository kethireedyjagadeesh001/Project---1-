

let employees = [

          { name : "Ravi"   , salary  : 40000 , expenses : 12000 },
          { name : "Anil"   , salary  : 55000 , expenses : 25000 },
          { name : "Ganesh" , salary  : 30000 , expenses : 10000 },
          { name : "Kumar"  , salary  : 80000 , expenses : 40000 }

      ];
    
      for(let i=0;i < employees.length ;i++){
        let spent=employees[i]
        
        console.log(" Name  : " , spent.name);
        console.log( "Salary : ",spent.salary);
        console.log("Expenses :" ,spent.expenses);

        if(spent.expenses > 20000){
            console.log("He Spent More Money");

        }else{
            console.log("He Spent Less Money");
        }
      }