function calculate() {
    // Prices
    const CJ_Price = 30;
    const CI_Price = 5;
    const CF_Price = 5;
    const CH_Price = 5;

    // Get input values
    const sales = parseFloat(document.getElementById('sales').value) || 0;
    const dailyExpenses = parseFloat(document.getElementById('daily-expenses').value) || 0;
    const loansExpenses = parseFloat(document.getElementById('loans-expenses').value) || 0;
    const employeeSalary = parseFloat(document.getElementById('employee-salary').value) || 0;
    const capital = parseFloat(document.getElementById('capital').value) || 0;

    const chickenIntestines = parseFloat(document.getElementById('chicken-intestines').value) || 0;
    const chickenFeet = parseFloat(document.getElementById('chicken-feet').value) || 0;
    const chickenHead = parseFloat(document.getElementById('chicken-head').value) || 0;
    const chickenJoy = parseFloat(document.getElementById('chicken-joy').value) || 0;

    // Calculations
    const expectedSales = (chickenIntestines * CI_Price) + (chickenFeet * CF_Price) + (chickenHead * CH_Price) + (chickenJoy * CJ_Price);
    const actualSales = sales;
    const profit = actualSales - (dailyExpenses + loansExpenses + employeeSalary + capital);
    const expectedProfit = expectedSales - loansExpenses - employeeSalary - capital;
    const totalLossSales = expectedSales - actualSales;
    const totalLossProfit = expectedProfit - profit;

    // Expected Sales for each item
    const chickenIntestinesExpectedSales = chickenIntestines * CI_Price;
    const chickenFeetExpectedSales = chickenFeet * CF_Price;
    const chickenHeadExpectedSales = chickenHead * CH_Price;
    const chickenJoyExpectedSales = chickenJoy * CJ_Price;

    // Sales for each item
    const chickenIntestinesSales = chickenIntestines * CI_Price;
    const chickenFeetSales = chickenFeet * CF_Price;
    const chickenHeadSales = chickenHead * CH_Price;
    const chickenJoySales = chickenJoy * CJ_Price;

    // Display results
    document.getElementById('result-es').textContent = `Expected Sales (ES): ${expectedSales.toFixed(2)}`;
    document.getElementById('result-ep').textContent = `Expected Profit (EP): ${expectedProfit.toFixed(2)}`;
    document.getElementById('result-p').textContent = `Profit (P): ${profit.toFixed(2)}`;
    document.getElementById('result-tls').textContent = `Total Loss Sales (TLS): ${totalLossSales.toFixed(2)}`;
    document.getElementById('result-tlp').textContent = `Total Loss Profit (TLP): ${totalLossProfit.toFixed(2)}`;
    document.getElementById('result-cis').textContent = `Chicken Intestines Expected Sales (CIS): ${chickenIntestinesExpectedSales.toFixed(2)}`;
    document.getElementById('result-cfes').textContent = `Chicken Feet Expected Sales (CFES): ${chickenFeetExpectedSales.toFixed(2)}`;
    document.getElementById('result-ches').textContent = `Chicken Head Expected Sales (CHES): ${chickenHeadExpectedSales.toFixed(2)}`;
    document.getElementById('result-cjes').textContent = `Chicken Joy Expected Sales (CJES): ${chickenJoyExpectedSales.toFixed(2)}`;
    document.getElementById('result-cies').textContent = `Chicken Intestines Sales (CIES): ${chickenIntestinesSales.toFixed(2)}`;
    document.getElementById('result-cfs').textContent = `Chicken Feet Sales (CFS): ${chickenFeetSales.toFixed(2)}`;
    document.getElementById('result-chs').textContent = `Chicken Head Sales (CHS): ${chickenHeadSales.toFixed(2)}`;
    document.getElementById('result-cjs').textContent = `Chicken Joy Sales (CJS): ${chickenJoySales.toFixed(2)}`;
}
