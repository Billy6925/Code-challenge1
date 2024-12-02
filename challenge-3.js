// Net Salary Calculator
function calculateNetSalary (basicSalary, benefits) {
    const KRA_TAX_RATES = [
         { threshold: 24000, rate: 0.1 }, 
        { threshold: 32333, rate: 0.25 },
         { threshold: 467333, rate: 0.3 }, 
        { threshold: Infinity, rate: 0.35 } 
    ];
    const NHIF_RATES = [
         { maxSalary: 5999, rate: 150 }, 
        { maxSalary: 7999, rate: 300 }, 
        { maxSalary: 11999, rate: 400 },
         { maxSalary: 14999, rate: 500 }, 
         { maxSalary: 19999, rate: 600 }, 
        { maxSalary: 24999, rate: 750 },
         { maxSalary: 29999, rate: 850 }, 
         { maxSalary: 34999, rate: 900 },
          { maxSalary: 39999, rate: 950 },
           { maxSalary: 44999, rate: 1000 },
            { maxSalary: 49999, rate: 1100 }, 
            { maxSalary: 59999, rate: 1200 }, 
            { maxSalary: 69999, rate: 1300 },
             { maxSalary: 79999, rate: 1400 }, 
        { maxSalary: Infinity, rate: 1700 }
     ];
   
}