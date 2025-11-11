
// high salary or medium salary or low salary


 let salarys =[ 
        {  name  : " prakash "  ,  salary : 25000  ,    Job  : " IT department "  },
        {  name  : " harish  "  ,  salary : 70000  ,    Job  : " Government    "  },
        {  name  : " Chandu  "  ,  salary : 25000  ,    Job  : " IT department "  },
        {  name  : " Naveen  "  ,  salary : 35000  ,    Job  : " Fiences       "  },
        {  name  : " Ganesh  "  ,  salary : 25000  ,    Job  : " IT department "  } ,
     ]

     for  (let i=0 ; i<salarys.length ; i++){
           let sal=salarys[i];
          console.log("name  : " + sal.name);
          console.log("salary : "+ sal.salary);
          console.log("Job : "   + sal.Job )

        if(sal.salary > 50000){
            console.log(" high salary ")
        }else if(sal.salary > 30000){
            console.log(" medium salary ")
        }else{
            console.log(" Low salary ")
        }
     }