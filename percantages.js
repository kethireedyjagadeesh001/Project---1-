


// percentages 

     let percentages=[
          { name  : " Rajendra " ,  Points   : " 95  " },
          { name  : " Anil "     ,  Points   : " 32  " },
          { name  : " Prasad "   ,  Points   : " 72  " },
          { name  : " Kumar "    ,  Points   : " 60  " },

     ]
     for(let i=0 ; i<percentages.length;i++){
        let per=percentages[i]
        console.log("Name  : " ,per.name);
        console.log( "Points  : " ,per.Points);
        if(per.Points  > 90){
            console.log(" 90 % percantages")
        }else if(per.Points > 70){
            console.log(" 80 % precentages")
        } else if(per.Points > 50){
            console.log(" 50 % percentages")
        }else{
            console.log("0 percentages")
        }
      
     }
     console.log("-----------------------");