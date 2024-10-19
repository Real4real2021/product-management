<?php 
require_once("../config/db_con.php");

if (isset($_POST["code"])) {
    $costOfGoodsSoldForGross = mysqli_real_escape_string($con, $_POST['costOfGoodsSoldForGross']);
    $population = mysqli_real_escape_string($con, $_POST['population']);
    $targetMarketPercentage = mysqli_real_escape_string($con, $_POST['targetMarketPercentage']);
    $benefits = mysqli_real_escape_string($con, $_POST['benefits']);
    $costs = mysqli_real_escape_string($con, $_POST['costs']);
    $averageMonthlyRevenuePerUser = mysqli_real_escape_string($con, $_POST['averageMonthlyRevenuePerUser']);
    $averageUserLifespanInMonths = mysqli_real_escape_string($con, $_POST['averageUserLifespanInMonths']);
    $grossMargin = mysqli_real_escape_string($con, $_POST['grossMargin']);
    $profit = mysqli_real_escape_string($con, $_POST['profit']);
    $percentChangeInQuantityDemanded = mysqli_real_escape_string($con, $_POST['percentChangeInQuantityDemanded']);
    $percentChangeInPrice = mysqli_real_escape_string($con, $_POST['percentChangeInPrice']);
    $sellingPrice = mysqli_real_escape_string($con, $_POST['sellingPrice']);
    $variableCost = mysqli_real_escape_string($con, $_POST['variableCost']);
    $marketingCosts = mysqli_real_escape_string($con, $_POST['marketingCosts']);
    $numberOfNewCustomers = mysqli_real_escape_string($con, $_POST['numberOfNewCustomers']);
    $clv = mysqli_real_escape_string($con, $_POST['clv']);
    $averageRetention = mysqli_real_escape_string($con, $_POST['averageRetention']);
    $numberOfLostCustomers = mysqli_real_escape_string($con, $_POST['numberOfLostCustomers']);
    $totalNumberOfCustomers = mysqli_real_escape_string($con, $_POST['totalNumberOfCustomers']);
    $yourCompanyMetric = mysqli_real_escape_string($con, $_POST['yourCompanyMetric']);
    $industryMetric = mysqli_real_escape_string($con, $_POST['industryMetric']);
    $revenue = mysqli_real_escape_string($con, $_POST['revenue']);
    $costOfGoodsSold = mysqli_real_escape_string($con, $_POST['costOfGoodsSold']);
    $totalRevenue = mysqli_real_escape_string($con, $_POST['totalRevenue']);
    $numberOfOrders = mysqli_real_escape_string($con, $_POST['numberOfOrders']);
    $marketingSpend = mysqli_real_escape_string($con, $_POST['marketingSpend']);
    $retainedCustomers = mysqli_real_escape_string($con, $_POST['retainedCustomers']);
    $initialCustomers = mysqli_real_escape_string($con, $_POST['initialCustomers']);
    $percentPromoters = mysqli_real_escape_string($con, $_POST['percentPromoters']);
    $percentDetractors = mysqli_real_escape_string($con, $_POST['percentDetractors']);
    $completedActions = mysqli_real_escape_string($con, $_POST['completedActions']);
    $totalVisitors = mysqli_real_escape_string($con, $_POST['totalVisitors']);
    $percentSatisfied = mysqli_real_escape_string($con, $_POST['percentSatisfied']);
    $percentDissatisfied = mysqli_real_escape_string($con, $_POST['percentDissatisfied']);
    $revenueFromAds = mysqli_real_escape_string($con, $_POST['revenueFromAds']);
    $costOfAdSpend = mysqli_real_escape_string($con, $_POST['costOfAdSpend']);
    $totalClicks = mysqli_real_escape_string($con, $_POST['totalClicks']);
    $numberOfUsers = mysqli_real_escape_string($con, $_POST['numberOfUsers']);
    $cac = mysqli_real_escape_string($con, $_POST['cac']);
    $averageInventoryValue = mysqli_real_escape_string($con, $_POST['averageInventoryValue']);
    $ordersWithDefects = mysqli_real_escape_string($con, $_POST['ordersWithDefects']);
    $totalOrders = mysqli_real_escape_string($con, $_POST['totalOrders']);
    $numberOfEmployees = mysqli_real_escape_string($con, $_POST['numberOfEmployees']);
    $operatingIncome = mysqli_real_escape_string($con, $_POST['operatingIncome']);
    $depreciationAmortization = mysqli_real_escape_string($con, $_POST['depreciationAmortization']);
    $cashFromOperations = mysqli_real_escape_string($con, $_POST['cashFromOperations']);
    $capitalExpenditures = mysqli_real_escape_string($con, $_POST['capitalExpenditures']);
    $totalLiabilities = mysqli_real_escape_string($con, $_POST['totalLiabilities']);
    $totalShareholdersEquity = mysqli_real_escape_string($con, $_POST['totalShareholdersEquity']);
    $TotalCosts = mysqli_real_escape_string($con, $_POST['TotalCosts']);
    $TotalNumberOfNewCustomers = mysqli_real_escape_string($con, $_POST['TotalNumberOfNewCustomers']);
    $percentSatisfiedCustomers = mysqli_real_escape_string($con, $_POST['percentSatisfiedCustomers']);
    $percentDissatisfiedCustomers = mysqli_real_escape_string($con, $_POST['percentDissatisfiedCustomers']);
    $yourCompanyConversionRate = mysqli_real_escape_string($con, $_POST['yourCompanyConversionRate']);
    $industryAverageConversionRate = mysqli_real_escape_string($con, $_POST['industryAverageConversionRate']);
    $customerLifetimeValue = mysqli_real_escape_string($con, $_POST['customerLifetimeValue']);
    $customerAcquisitionCost = mysqli_real_escape_string($con, $_POST['customerAcquisitionCost']);
    $totalRevenueForPeriod = mysqli_real_escape_string($con, $_POST['totalRevenueForPeriod']);
    $numberOfUsersForPeriod = mysqli_real_escape_string($con, $_POST['numberOfUsersForPeriod']);
    $completedPurchasesFromEmail = mysqli_real_escape_string($con, $_POST['completedPurchasesFromEmail']);
    $totalEmailClicks = mysqli_real_escape_string($con, $_POST['totalEmailClicks']);

    // Insert each item into the database
    $query = "INSERT INTO product_management.mock_data (costOfGoodsSoldForGross, population, targetMarketPercentage, benefits, costs, averageMonthlyRevenuePerUser, averageUserLifespanInMonths, grossMargin, profit, percentChangeInQuantityDemanded, percentChangeInPrice, sellingPrice, variableCost, marketingCosts, numberOfNewCustomers, clv, averageRetention, numberOfLostCustomers, totalNumberOfCustomers, yourCompanyMetric, industryMetric, revenue, costOfGoodsSold, totalRevenue, numberOfOrders, marketingSpend, retainedCustomers, initialCustomers, percentPromoters, percentDetractors, completedActions, totalVisitors, percentSatisfied, percentDissatisfied, revenueFromAds, costOfAdSpend, totalClicks, numberOfUsers, cac, averageInventoryValue, ordersWithDefects, totalOrders, numberOfEmployees, operatingIncome, depreciationAmortization, cashFromOperations, capitalExpenditures, totalLiabilities, totalShareholdersEquity, TotalCosts, TotalNumberOfNewCustomers, percentSatisfiedCustomers, percentDissatisfiedCustomers, yourCompanyConversionRate, industryAverageConversionRate, customerLifetimeValue, customerAcquisitionCost, totalRevenueForPeriod, numberOfUsersForPeriod, completedPurchasesFromEmail, totalEmailClicks)
                VALUES ('$costOfGoodsSoldForGross', '$population', '$targetMarketPercentage', '$benefits', '$costs', '$averageMonthlyRevenuePerUser', '$averageUserLifespanInMonths', '$grossMargin', '$profit', '$percentChangeInQuantityDemanded', '$percentChangeInPrice', '$sellingPrice', '$variableCost', '$marketingCosts', '$numberOfNewCustomers', '$clv', '$averageRetention', '$numberOfLostCustomers', '$totalNumberOfCustomers', '$yourCompanyMetric', '$industryMetric', '$revenue', '$costOfGoodsSold', '$totalRevenue', '$numberOfOrders', '$marketingSpend', '$retainedCustomers', '$initialCustomers', '$percentPromoters', '$percentDetractors', '$completedActions', '$totalVisitors', '$percentSatisfied', '$percentDissatisfied', '$revenueFromAds', '$costOfAdSpend', '$totalClicks', '$numberOfUsers', '$cac', '$averageInventoryValue', '$ordersWithDefects', '$totalOrders', '$numberOfEmployees', '$operatingIncome', '$depreciationAmortization', '$cashFromOperations', '$capitalExpenditures', '$totalLiabilities', '$totalShareholdersEquity', '$TotalCosts', '$TotalNumberOfNewCustomers', '$percentSatisfiedCustomers', '$percentDissatisfiedCustomers', '$yourCompanyConversionRate', '$industryAverageConversionRate', '$customerLifetimeValue', '$customerAcquisitionCost', '$totalRevenueForPeriod', '$numberOfUsersForPeriod', '$completedPurchasesFromEmail', '$totalEmailClicks')";

    mysqli_query($con, $query) or die(mysqli_error($con));
}

echo json_encode("Data added to database");

?>