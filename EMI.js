
   // More than OR less than

let salarys =[ 

        {  name  : " Pranith "  ,  salary : 35000     ,    EMI  : 4000   },
        {  name  : " Ganesh  "  ,  salary : 80000     ,    EMI  : 18000  },
        {  name  : " Subbu   "  ,  salary : 20000     ,    EMI  : 2500   },
        {  name  : " Naveen  "  ,  salary : 25000     ,    EMI  : 2500   },
        {  name  : " Chinna  "  ,  salary : 100000    ,    EMI  :  25000 },
     ]

     for( let i=0 ; i<salarys.length ; i++){
      let sal=salarys[i]

      console.log( "Name   : " , sal.name );
      console.log( "salary : ", sal.salary);
      console.log( "EMI    : " , sal.EMI);

      if(sal.EMI > 15000){
        console.log("More EMI");

      }else{
        console.log("less EMI");
      }
     }
    