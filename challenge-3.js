// Net Salary Calculator
function calculateNetSalary (basicSalary, benefits) {
 const grossSalary = basicSalary + benefits;
 //Calculate NSSF Deduction
 (Assuming Tier I and Tier II contributions)
 let nssfDeduction;
 if (grossSalary <= 18000) {
    nssfDeduction = grossSalary * 0.06; //6% 0f gross for Tier I
 }else {
    nssfDeduction =1080; // Fixed maximum contribution
 }
 // Calculate NHIF Deductions
 const nhifRates = [
    {min: 0, max: 5999, deduction: 150},
    {min:6000, max: 7999, deduction: 300},
    {min:8000, max: 11999, deduction: 400},
    {min:12000, max:14999, deduction: 500},
    {min: 15000, max: 19999, deduction: 600},
    {min:20000, max:24999, deduction: 750},
    
 ]

        
}