// create empty user input
const grossPay = parseInt(process.argv[2]);
const nssfdeduction = parseInt(process.argv[3]);

    //Get the tax Rate section
    function calculateTaxRate(grossSalary) {
      let taxRates;
      if (grossSalary >= 24000 && grossSalary <= 288000) {
        taxRates = 0.01;
      } else if (grossSalary > 288000 && grossSalary <= 388000) {
        taxRates = 0.25;
      } else {
        taxRates = 0.30;
      }
      return taxRates;
    }

    //Get the NHIF deduction here
    function calculateNhif(grossPay) {
      let nhif;
      if (grossPay <= 5999) {
        nhif = 150;
      } else if (grossPay <= 7999) {
        nhif = 300;
      } else if (grossPay <= 11999) {
        nhif = 400;
      } else if (grossPay <= 14999) {
        nhif = 500;
      } else if (grossPay <= 19999) {
        nhif = 600;
      } else if (grossPay <= 24999) {
        nhif = 750;
      } else if (grossPay <= 29999) {
        nhif = 850;
      } else if (grossPay <= 34999) {
        nhif = 900;
      } else if (grossPay <= 39999) {
        nhif = 950;
      } else if (grossPay <= 44999) {
        nhif = 1000;
      } else if (grossPay <= 49999) {
        nhif = 1100;
      } else if (grossPay <= 59999) {
        nhif = 1200;
      } else if (grossPay <= 69999) {
        nhif = 1300;
      } else if (grossPay <= 79999) {
        nhif = 1400;
      } else if (grossPay <= 89999) {
        nhif = 1500;
      } else if (grossPay <= 99999) {
        nhif = 1600;
      } else {
        nhif = 1700;
      }
      return nhif;
    }

    //get the NSSF deduction here
    function calculateNSSF(grossPay, nssfdeduction) {
      let totalDeductions;
      if (nssfdeduction > 0 && nssfdeduction < 72000) {
        totalDeductions = grossPay * 0.06;
      } else if (nssfdeduction >= 72000 && nssfdeduction <= 216800) {
        totalDeductions = nssfdeduction;
      } else {
        return (totalDeductions = `The deductions are neither in Tire I or II`);
      }
      return totalDeductions;
    }

    function calculateTaxableIncome(grossPay, contributionBenefit=0, disability=0, haveMortgage=0, mortgageInterest=0, haveLifeInsurancePolicy=0, insurancePremium=0, homeOwnershipSavings=0, homeOwnershipTotalDeposit=0) {
        let taxableIncome = grossPay - contributionBenefit;
      
        if (disability >= 150000 && disability <= 1800000) {
          taxableIncome = Math.abs(taxableIncome - homeOwnershipTotalDeposit - insurancePremium - mortgageInterest - disability);
        } else {
          taxableIncome = taxableIncome - homeOwnershipTotalDeposit - insurancePremium - mortgageInterest - disability;
        }
        return taxableIncome;
}

let TaxablePay = calculateTaxableIncome(grossPay, contributionBenefit=0, disability=0, haveMortgage=0, mortgageInterest=0, haveLifeInsurancePolicy=0, insurancePremium=0, homeOwnershipSavings=0, homeOwnershipTotalDeposit=0)
let TaxRate = calculateTaxRate(grossPay)
let Relief = 24000
const calculatePaye=(TaxablePay,TaxRate)=>{
    if((TaxablePay * TaxRate)-Relief>0){
        return Paye= TaxablePay * TaxRate;
    
    }else {
    return Paye=0
    }
}
let PAYE = calculatePaye(TaxablePay,TaxRate)
let nssf = calculateNSSF(nssfdeduction, grossPay)
let nhif = calculateNhif(grossPay)
const NetIncome = grossPay-(PAYE)-nssfdeduction-nhif;

console.log('Your taxable Pay is ',TaxablePay)
console.log('Your net Income is', NetIncome)
console.log('Your PAYE is ',PAYE)
  
console.log("Gross Pay:", grossPay);
console.log("NSSF Deduction:", nssfdeduction);