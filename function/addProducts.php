<?php 
require_once("../config/db_con.php");

if (isset($_POST["code"])) {
    $MarketSize = my_sqli_escape_string($con, $_POST['MarketSize']);
    $TargetMarketPercentage = my_sqli_escape_string($con, $_POST['TargetMarketPercentage']);
    $SellingPrice = my_sqli_escape_string($con, $_POST['SellingPrice']);
    $CosttoProduceEachUnit = my_sqli_escape_string($con, $_POST['CosttoProduceEachUnit']);
    $VariableCosts = my_sqli_escape_string($con, $_POST['VariableCosts']);
    $GrossProfit = my_sqli_escape_string($con, $_POST['GrossProfit']);
    $TotalRevenue = my_sqli_escape_string($con, $_POST['TotalRevenue']);
    $NumberofUnitsSold = my_sqli_escape_string($con, $_POST['NumberofUnitsSold']);
    $CustomerSatisfaction = my_sqli_escape_string($con, $_POST['CustomerSatisfaction']);
    $CustomerLoyalty = my_sqli_escape_string($con, $_POST['CustomerLoyalty']);
    $AverageTimeinUse = my_sqli_escape_string($con, $_POST['AverageTimeinUse']);
    $ReplacementRate = my_sqli_escape_string($con, $_POST['ReplacementRate']);
    $NumberofCompetitors = my_sqli_escape_string($con, $_POST['NumberofCompetitors']);
    $AdvertisingSpend = my_sqli_escape_string($con, $_POST['AdvertisingSpend']);
    $WebTraffic = my_sqli_escape_string($con, $_POST['WebTraffic']);
    $EmailSubscribers = my_sqli_escape_string($con, $_POST['EmailSubscribers']);
    $EmailOpenRates = my_sqli_escape_string($con, $_POST['EmailOpenRates']);
    $EmailClickThroughRates = my_sqli_escape_string($con, $_POST['EmailClickThroughRates']);
    $EmailConversionRate = my_sqli_escape_string($con, $_POST['EmailConversionRate']);
    $OnlineSales = my_sqli_escape_string($con, $_POST['OnlineSales']);
    $InStoreSales = my_sqli_escape_string($con, $_POST['InStoreSales']);
    $TotalSales = my_sqli_escape_string($con, $_POST['TotalSales']);
    $EmployeeCount = my_sqli_escape_string($con, $_POST['EmployeeCount']);
    $RnDExpenses = my_sqli_escape_string($con, $_POST['RnDExpenses']);
    $GeneralandAdministrativeExpenses = my_sqli_escape_string($con, $_POST['GeneralandAdministrativeExpenses']);
    $CurrentAssets = my_sqli_escape_string($con, $_POST['CurrentAssets']);
    $LongtermDebt = my_sqli_escape_string($con, $_POST['LongtermDebt']);
    $ShareholderEquity = my_sqli_escape_string($con, $_POST['ShareholderEquity']);
    $OperatingIncome = my_sqli_escape_string($con, $_POST['OperatingIncome']);
    $CapitalExpenditures = my_sqli_escape_string($con, $_POST['CapitalExpenditures']);

    // Insert each item into the database
    $query = "INSERT INTO product_management.managed_products (MarketSize, TargetMarketPercentage, SellingPrice, CosttoProduceEachUnit, VariableCosts, GrossProfit, TotalRevenue, NumberofUnitsSold, CustomerSatisfaction, CustomerLoyalty, AverageTimeinUse, ReplacementRate, NumberofCompetitors, AdvertisingSpend, WebTraffic, EmailSubscribers, EmailOpenRates, EmailClickThroughRates, EmailConversionRate, OnlineSales, InStoreSales, TotalSales, EmployeeCount, RnDExpenses, GeneralandAdministrativeExpenses, CurrentAssets, LongtermDebt, ShareholderEquity, OperatingIncome, CapitalExpenditures)
                VALUES ('$MarketSize', '$TargetMarketPercentage', '$SellingPrice', '$CosttoProduceEachUnit', '$VariableCosts', '$GrossProfit', '$TotalRevenue', '$NumberofUnitsSold', '$CustomerSatisfaction', '$CustomerLoyalty', '$AverageTimeinUse', '$ReplacementRate', '$NumberofCompetitors', '$AdvertisingSpend', '$WebTraffic', '$EmailSubscribers', '$EmailOpenRates', '$EmailClickThroughRates', '$EmailConversionRate', '$OnlineSales', '$InStoreSales', '$TotalSales', '$EmployeeCount', '$RnDExpenses', '$GeneralandAdministrativeExpenses', '$CurrentAssets', '$LongtermDebt', '$ShareholderEquity', '$OperatingIncome', '$CapitalExpenditures')";

    mysqli_query($con, $query) or die(mysqli_error($con));
}

echo json_encode("Data added to database");

?>