



let years= [
           
            { year : 2000   ,  days : 366  },
            { year : 2001   ,  days : 365  },
            { year : 2002   ,  days  : 365  },
            { year : 2003   ,  days : 365  },
            { year : 2004   ,  days : 366  },
            { year : 2005   ,  days : 365  },

         ]

         for( let i=0 ; i < years.length ; i++){
            let leap=years[i]
            console.log(" Year " , leap.year);
            console.log( "Days " , leap.days);

            if(leap.year%4==0){
               console.log("It is Leap Year ");

            }else{
               console.log("It is not Leap Year")
            }

         }