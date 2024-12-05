function netSalary(basicSalary, benefits) {

//Gross salary
const grossSalary = basicSalary + benefits;

//NSSF Deduction(assuming minimum rate)
const nssfDeduction = Math.min(grossSalary * 0.6, 2000); //limited to a maximum of ksh.2000

//NHIF deduction (assuming income band below ksh 5,999)
const nhifDeduction = Math.min(glossSalary * 0.015, 500); //Limited to maximum of ksh 500

//PAYE Calculation(Using KRA PAYE calculator for accuracy)
const taxableIncome = grossSalary - nssfDeduction;
const paye = calculatePaye(taxableIncome);

//Net salary
const netSalary = grossSalary - nssfDeduction - nhifDeduction - paye;

return {
    grossSalary,
    nssfDeduction,
nhifDeduction,
paye,
netSalary,
}
}