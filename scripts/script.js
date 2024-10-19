const MSEButton = document.getElementById("market-size-estimation")
const CBAButton= document.getElementById("cost-benefit-analysis")
const CLVButton= document.getElementById("customer-lifetime-value")
const ROIButton= document.getElementById("return-on-investment")
const PEButton= document.getElementById("price-elasticity")
const PMButton= document.getElementById("product-margin")
const SFRPButton= document.getElementById("sales-forecasting-revenue-projections")
const CACCLVButton= document.getElementById("customer-acquisition-cost-lifetime-value")
const CRButton= document.getElementById("churn-rate")
const CBButton= document.getElementById("competitive-benchmarking")
const GPMButton= document.getElementById("gross-profit-margin")
const AOVButton= document.getElementById("average-order-value")
const CACButton= document.getElementById("customer-acquisition-cost")
const CRRButton= document.getElementById("customer-retention-rate")
const NPSButton= document.getElementById("net-promoter-score")
const WCRButton= document.getElementById("website-conversion-rate")
const CSNSButton= document.getElementById("customer-satisfaction-net-satisfaction")
const RAPButton= document.getElementById("return-on-advertising-spend")
const EMCRButton= document.getElementById("email-marketing-conversion-rate")
const ARPUButton= document.getElementById("average-revenue-per-user")
const CLVCARButton= document.getElementById("customer-lifetime-value-customer-acquisition-cost-ratio")
const ITRButton= document.getElementById("inventory-turnover-rate")
const OFCTButton= document.getElementById("order-fulfillment-cycle-time")
const ODRButton= document.getElementById("order-defect-rate")
const RPEButton= document.getElementById("revenue-per-employee")
const OPMButton= document.getElementById("operating-profit-margin")
const EBITDAButton= document.getElementById("earnings-before-interest-taxes-depreciation-and-amortization")
const FCFButton= document.getElementById("free-cash-flow")

// Function to create a chart
function createChart(ctx, type, labels, data, label) {
  return new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: 'rgba(224, 224, 224, 0.2)',
        borderColor: '#e0e0e0',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: '#2c2c2c'
          },
          ticks: {
            color: '#a0a0a0'
          }
        },
        x: {
          grid: {
            color: '#2c2c2c'
          },
          ticks: {
            color: '#a0a0a0'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: '#e0e0e0'
          }
        }
      }
    }
  });
}

// Scroll animation
const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const searchContainer = document.getElementById('filter-search-container');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollProgress = Math.min(scrollTop / 100, 1);

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.justifyContent = `flex-end`;
    logo.style.transform = `scale(${1 - 0.2 * scrollProgress})`;
    searchContainer.style.opacity = `${1 - scrollProgress}`;
    searchContainer.style.transform = `translateY(${-20 * scrollProgress}px)`;
  } else {
    // Scrolling up
    header.style.justifyContent = `center`;
    logo.style.transform = `scale(1)`;
    searchContainer.style.opacity = '1';
    searchContainer.style.transform = 'translateY(0)';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

let products = [];

function estimateMarketSize(population, targetMarketPercentage) {
  if (
    typeof population !== "number" ||
    typeof targetMarketPercentage !== "number"
  ) {
    return "Invalid input: Population and target market percentage must be numbers.";
  }

  if (targetMarketPercentage < 0 || targetMarketPercentage > 100) {
    return "Invalid input: Target market percentage must be between 0 and 100.";
  }

  const marketSize = population * (targetMarketPercentage / 100);
  return marketSize;
}

const population = 1000000;
const targetMarketPercentage = 25;

MSEButton.addEventListener("click", ()=>{
  const estimatedSize = estimateMarketSize(population, targetMarketPercentage);
  if (typeof estimatedSize === "number") {
    console.log("Estimated market size:", estimatedSize);
  } else {
    console.error(estimatedSize);
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'MarketSizeEstimation'
  canvas.ariaLabel = 'Market Size Estimation Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const MarketSizeEstimationCtx = document.getElementById('MarketSizeEstimation').getContext('2d');
  createChart(MarketSizeEstimationCtx, 'radar', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Market Size Estimation');
})

function calculateCostBenefitAnalysis(benefits, costs) {
  if (typeof benefits !== "number" || typeof costs !== "number") {
    return "Invalid input: Benefits and costs must be numbers.";
  }

  if (benefits === 0) {
    return "Invalid input: Benefits cannot be zero.";
  }

  return costBenefitRatio;
}

const benefits = 1000;
const costs = 500;

CBAButton.addEventListener("click", ()=>{
  const costBenefitResult = ((benefits - costs) / benefits) * 100;
  
  if (typeof costBenefitResult === "number") {
    console.log("Cost-Benefit Analysis Result:", costBenefitResult + "%");
  } else {
    console.error(costBenefitResult);
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'CustomerBenefitAnalysis'
  canvas.ariaLabel = 'Customer Benefit Analysis Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const CustomerBenefitAnalysisCtx = document.getElementById('CustomerBenefitAnalysis').getContext('2d');
  createChart(CustomerBenefitAnalysisCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Customer Benefit Analysis');
  
})

function calculateCustomerLifetimeValue(
  averageMonthlyRevenuePerUser,
  averageUserLifespanInMonths,
  grossMargin
) {
  if (
    typeof averageMonthlyRevenuePerUser !== "number" ||
    typeof averageUserLifespanInMonths !== "number" ||
    typeof grossMargin !== "number"
  ) {
    return "Invalid input: All arguments must be numbers.";
  }

  if (grossMargin === 0) {
    return "Invalid input: Gross margin cannot be zero.";
  }

  const clv =
    (averageMonthlyRevenuePerUser * averageUserLifespanInMonths) / grossMargin;

  return clv;
}

const averageMonthlyRevenuePerUser = 50;
const averageUserLifespanInMonths = 24;
const grossMargin = 0.6;

CLVButton.addEventListener('click', ()=> {
  const TotalCustomerLifetimeValue = calculateCustomerLifetimeValue(
    averageMonthlyRevenuePerUser,
    averageUserLifespanInMonths,
    grossMargin
  );
  
  if (typeof TotalCustomerLifetimeValue === "number") {
    console.log("Customer Lifetime Value:", TotalCustomerLifetimeValue);
  } else {
    console.error(TotalCustomerLifetimeValue);
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'CustomerLifetimeValue'
  canvas.ariaLabel = 'Customer Lifetime Value'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const CustomerLifetimeValueCtx = document.getElementById('CustomerLifetimeValue').getContext('2d');
  createChart(CustomerLifetimeValueCtx, 'pie', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Customer Lifetime Value');
})

function calculateROI(profit, costs) {
  // Validate inputs (optional, but recommended)
  if (typeof profit !== "number" || typeof costs !== "number") {
    return "Invalid input: Profit and costs must be numbers.";
  }

  if (costs === 0) {
    return "Invalid input: Costs cannot be zero.";
  }

  // Calculate ROI
  const roi = ((profit - costs) / costs) * 100;

  return roi;
}

const profit = 2000;
const TotalCosts = 1000;

ROIButton.addEventListener('click', ()=> {
  const roiResult = calculateROI(profit, costs);
  
  if (typeof roiResult === "number") {
    console.log("Return on Investment (ROI):", roiResult + "%");
  } else {
    console.error(roiResult);
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'returnOnInvestment'
  canvas.ariaLabel = 'Return On Investment Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const returnOnInvestmentCtx = document.getElementById('returnOnInvestment').getContext('2d');
  createChart(returnOnInvestmentCtx, 'bar', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Return On Investment');
})

function calculatePriceElasticity(
  percentChangeInQuantityDemanded,
  percentChangeInPrice
) {
  // Validate inputs (optional, but recommended)
  if (
    typeof percentChangeInQuantityDemanded !== "number" ||
    typeof percentChangeInPrice !== "number"
  ) {
    return "Invalid input: Percent changes must be numbers.";
  }

  if (percentChangeInPrice === 0) {
    return "Invalid input: Percent change in price cannot be zero.";
  }

  // Calculate price elasticity
  const priceElasticity =
    percentChangeInQuantityDemanded / percentChangeInPrice;

  return priceElasticity;
}

const percentChangeInQuantityDemanded = -10; // Example: 10% decrease in quantity demanded
const percentChangeInPrice = 5; // Example: 5% increase in price

PEButton.addEventListener('click', ()=>{
  const elasticity = calculatePriceElasticity(
    percentChangeInQuantityDemanded,
    percentChangeInPrice
  );
  
  if (typeof elasticity === "number") {
    console.log("Price Elasticity of Demand:", elasticity);
  } else {
    console.error(elasticity); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'PriceElasticity'
  canvas.ariaLabel = 'Price Elasticity Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const PriceElasticityCtx = document.getElementById('PriceElasticity').getContext('2d');
  createChart(PriceElasticityCtx, 'bar', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Customer Lifetime Value');
})

function calculateProductMargin(sellingPrice, variableCost) {
  // Validate inputs (optional, but recommended)
  if (typeof sellingPrice !== "number" || typeof variableCost !== "number") {
    return "Invalid input: Selling price and variable cost must be numbers.";
  }

  // Calculate gross profit (product margin)
  const grossProfit = sellingPrice - variableCost;

  return grossProfit;
}

// Example usage:
const sellingPrice = 100; // Example selling price
const variableCost = 60; // Example variable cost

PMButton.addEventListener('click', ()=>{
  const productMargin = calculateProductMargin(sellingPrice, variableCost);
  
  if (typeof productMargin === "number") {
    console.log("Gross Profit (Product Margin):", productMargin);
  } else {
    console.error(productMargin); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'productMargin'
  canvas.ariaLabel = 'Product Margin Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const productMarginCtx = document.getElementById('productMargin').getContext('2d');
  createChart(productMarginCtx, 'bar', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Product Margin');
})


// function forecastSales(pastSalesData, trendAnalysisMethod, seasonalityAdjustmentMethod) {
//   // 1. Trend Analysis
//   const trendComponent = trendAnalysisMethod(pastSalesData);

//   // 2. Seasonality Adjustment
//   const seasonalityComponent = seasonalityAdjustmentMethod(pastSalesData);

//   // 3. Combine Components for Forecast
//   const forecast = [];
//   for (let i = 0; i < futurePeriods; i++) { // Adjust futurePeriods as needed
//     // Combine trend, seasonality, and possibly other factors (e.g., base sales)
//     forecast[i] = trendComponent[i] * seasonalityComponent[i]; // Example combination
//   }

//   return forecast;
// }

// // Example usage (illustrative, replace with actual methods)
// const pastSalesData = [/* Your historical sales data */];

// // function simpleMovingAverageTrend(data) {
// //   // Implement your simple moving average logic here
// //   // ...
// //   return trendComponent;
// // }

// // function multiplicativeSeasonality(data) {
// //   // Implement your multiplicative seasonality adjustment logic here
// //   // ...
// //   return seasonalityComponent;
// // }

// const forecast = forecastSales(pastSalesData, simpleMovingAverageTrend, multiplicativeSeasonality);
// console.log("Sales Forecast:", forecast);

function calculateCACandLTV(
  marketingCosts,
  numberOfNewCustomers,
  clv,
  averageRetention
) {
  // Validate inputs (optional, but recommended)
  if (
    typeof marketingCosts !== "number" ||
    typeof numberOfNewCustomers !== "number" ||
    typeof clv !== "number" ||
    typeof averageRetention !== "number"
  ) {
    return "Invalid input: All arguments must be numbers.";
  }

  if (numberOfNewCustomers === 0) {
    return "Invalid input: Number of new customers cannot be zero.";
  }

  // Calculate CAC
  const cac = marketingCosts / numberOfNewCustomers;

  // Calculate LTV
  const ltv = clv * averageRetention;

  // Return both values
  return { cac: cac, ltv: ltv };
}

// Example usage:
const marketingCosts = 10000; // Example marketing costs
const TotalNumberOfNewCustomers = 200; // Example number of new customers
const clv = 1200; // Example Customer Lifetime Value (from previous calculation)
const averageRetention = 0.75; // Example average retention rate (75%)

CACCLVButton.addEventListener('click',()=>{
  const finalResults = calculateCACandLTV(
    marketingCosts,
    TotalNumberOfNewCustomers,
    clv,
    averageRetention
  );
  
  if (typeof finalResults === "object") {
    console.log("Customer Acquisition Cost (CAC):", finalResults.cac);
    console.log("Lifetime Value (LTV):", finalResults.ltv);
  } else {
    console.error(finalResults); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'customerAcquisitionCostCustomerLifetimeValue'
  canvas.ariaLabel = 'customer Acquisition Cost and Customer Lifetime Value Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const customerAcquisitionCostCustomerLifetimeValueCtx = document.getElementById('customerAcquisitionCostCustomerLifetimeValue').getContext('2d');
  createChart(customerAcquisitionCostCustomerLifetimeValueCtx, 'bar', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Customer Acquisition Cost & Customer Lifetime Value');
})

function calculateChurnRate(numberOfLostCustomers, totalNumberOfCustomers) {
  // Validate inputs (optional, but recommended)
  if (
    typeof numberOfLostCustomers !== "number" ||
    typeof totalNumberOfCustomers !== "number"
  ) {
    return "Invalid input: Number of lost customers and total number of customers must be numbers.";
  }

  if (totalNumberOfCustomers === 0) {
    return "Invalid input: Total number of customers cannot be zero.";
  }

  // Calculate churn rate
  const churnRate = (numberOfLostCustomers / totalNumberOfCustomers) * 100;

  return churnRate;
}

// Example usage:
const numberOfLostCustomers = 50; // Example number of lost customers
const totalNumberOfCustomers = 1000; // Example total number of customers

CRButton.addEventListener('click', ()=>{
  const churnRateResult = calculateChurnRate(
    numberOfLostCustomers,
    totalNumberOfCustomers
  );
  
  if (typeof churnRateResult === "number") {
    console.log("Churn Rate:", churnRateResult + "%");
  } else {
    console.error(churnRateResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'churnRate'
  canvas.ariaLabel = 'Churn Rate Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const churnRateCtx = document.getElementById('churnRate').getContext('2d');
  createChart(churnRateCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Churn Rate');
})

function calculateCompetitiveBenchmark(yourCompanyMetric, industryMetric) {
  // Validate inputs (optional, but recommended)
  if (
    typeof yourCompanyMetric !== "number" ||
    typeof industryMetric !== "number"
  ) {
    return "Invalid input: Your company metric and industry metric must be numbers.";
  }

  if (industryMetric === 0) {
    return "Invalid input: Industry metric cannot be zero.";
  }

  // Calculate competitive benchmark
  const benchmark = (yourCompanyMetric - industryMetric) / industryMetric;

  return benchmark;
}

// Example usage:
const yourCompanyConversionRate = 5; // Example: Your company's conversion rate is 5%
const industryAverageConversionRate = 3; // Example: Industry average conversion rate is 3%

CBButton.addEventListener('click', ()=>{
  const benchmarkResult = calculateCompetitiveBenchmark(
    yourCompanyConversionRate,
    industryAverageConversionRate
  );
  
  if (typeof benchmarkResult === "number") {
    console.log("Competitive Benchmark:", benchmarkResult);
    if (benchmarkResult > 0) {
      console.log("Your company is performing better than the industry average.");
    } else if (benchmarkResult < 0) {
      console.log("Your company is performing worse than the industry average.");
    } else {
      console.log("Your company is performing at the industry average.");
    }
  } else {
    console.error(benchmarkResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'competitiveBenchmark'
  canvas.ariaLabel = 'Competitive Benchmark Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const competitiveBenchmarkCtx = document.getElementById('competitiveBenchmark').getContext('2d');
  createChart(competitiveBenchmarkCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Competetinve Benchmark');
})

function calculateGrossProfitMargin(revenue, costOfGoodsSoldForGross) {
  // Validate inputs (optional, but recommended)
  if (typeof revenue !== "number" || typeof costOfGoodsSold !== "number") {
    return "Invalid input: Revenue and cost of goods sold must be numbers.";
  }

  if (revenue === 0) {
    return "Invalid input: Revenue cannot be zero.";
  }

  // Calculate gross profit margin
  const grossProfitMargin = ((revenue - costOfGoodsSold) / revenue) * 100;

  // const revenue = 50000; // Example revenue
  // const costOfGoodsSold = 30000; // Example cost of goods sold

  return grossProfitMargin;
}

const revenue = 1239103;
const costOfGoodsSoldForGross =  238585;

GPMButton.addEventListener('click', ()=>{
  const grossProfitMarginResult = calculateGrossProfitMargin(
    revenue,
    costOfGoodsSoldForGross
  );
  
  if (typeof grossProfitMarginResult === "number") {
    console.log("Gross Profit Margin:", grossProfitMarginResult + "%");
  } else {
    console.error(grossProfitMarginResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'grossProfitMargin'
  canvas.ariaLabel = 'Gross Profit Margin'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const grossProfitMarginCtx = document.getElementById('grossProfitMargin').getContext('2d');
  createChart(grossProfitMarginCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Gross Profit Margin');
})

function calculateAverageOrderValue(totalRevenue, numberOfOrders) {
  // Validate inputs (optional, but recommended)
  if (typeof totalRevenue !== "number" || typeof numberOfOrders !== "number") {
    return "Invalid input: Total revenue and number of orders must be numbers.";
  }

  if (numberOfOrders === 0) {
    return "Invalid input: Number of orders cannot be zero.";
  }
  // Calculate average order value
  const averageOrderValue = totalRevenue / numberOfOrders;

  return averageOrderValue;
}
const numberOfOrders = 200; // Example number of orders

AOVButton.addEventListener('click', ()=>{
  const averageOrderValueResult = calculateAverageOrderValue(
    totalRevenue,
    numberOfOrders
  );
  
  if (typeof averageOrderValueResult === "number") {
    console.log("Average Order Value:", averageOrderValueResult);
  } else {
    console.error(averageOrderValueResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'averageOrderValue'
  canvas.ariaLabel = 'Average Order Value'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const averageOrderValueCtx = document.getElementById('averageOrderValue').getContext('2d');
  createChart(averageOrderValueCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Average Order Value');
})

function calculateCustomerAcquisitionCost(
  marketingSpend,
  numberOfNewCustomers
) {
  // Validate inputs (optional, but recommended)
  if (
    typeof marketingSpend !== "number" ||
    typeof numberOfNewCustomers !== "number"
  ) {
    return "Invalid input: Marketing spend and number of new customers must be numbers.";
  }

  if (numberOfNewCustomers === 0) {
    return "Invalid input: Number of new customers cannot be zero.";
  }

  // Calculate customer acquisition cost
  const customerAcquisitionCost = marketingSpend / numberOfNewCustomers;

  return customerAcquisitionCost;
}

// Example usage:
const marketingSpend = 5000; // Example marketing spend for the period
const numberOfNewCustomers = 100; // Example number of new customers acquired during the period

CACButton.addEventListener('click', ()=>{
  const cacResult = calculateCustomerAcquisitionCost(
    marketingSpend,
    numberOfNewCustomers
  );
  
  if (typeof cacResult === "number") {
    console.log("Customer Acquisition Cost (CAC):", cacResult);
  } else {
    console.error(cacResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'customerAcquisitionCost'
  canvas.ariaLabel = 'Customer Acquisition Cost'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const customerAcquisitionCostCtx = document.getElementById('customerAcquisitionCost').getContext('2d');
  createChart(customerAcquisitionCostCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Churn Rate');
})

function calculateCustomerRetentionRate(retainedCustomers, initialCustomers) {
  // Validate inputs (optional, but recommended)
  if (
    typeof retainedCustomers !== "number" ||
    typeof initialCustomers !== "number"
  ) {
    return "Invalid input: Retained customers and initial customers must be numbers.";
  }

  if (initialCustomers === 0) {
    return "Invalid input: Initial number of customers cannot be zero.";
  }

  // Calculate customer retention rate
  const retentionRate = retainedCustomers / initialCustomers;

  return retentionRate;
}

const retainedCustomers = 900; // Example: 900 customers were retained
const initialCustomers = 1000; // Example: You started with 1000 customers

CRRButton.addEventListener('click', ()=>{
  const retentionRateResult = calculateCustomerRetentionRate(
    retainedCustomers,
    initialCustomers
  );
  
  if (typeof retentionRateResult === "number") {
    console.log("Customer Retention Rate:", retentionRateResult);
    console.log(
      "Customer Retention Rate Percentage:",
      retentionRateResult * 100 + "%"
    );
  } else {
    console.error(retentionRateResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'customerRetentionRate'
  canvas.ariaLabel = 'Customer Retention Rate Percentage'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const customerRetentionRateCtx = document.getElementById('customerRetentionRate').getContext('2d');
  createChart(customerRetentionRateCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Customer Retention Rate');
})

function calculateNPS(percentPromoters, percentDetractors) {
  // Validate inputs (optional, but recommended)
  if (
    typeof percentPromoters !== "number" ||
    typeof percentDetractors !== "number"
  ) {
    return "Invalid input: Promoter and detractor percentages must be numbers.";
  }

  if (
    percentPromoters < 0 ||
    percentPromoters > 100 ||
    percentDetractors < 0 ||
    percentDetractors > 100
  ) {
    return "Invalid input: Percentages must be between 0 and 100.";
  }

  // Calculate NPS
  const nps = ((percentPromoters - percentDetractors) / 100) * 1000;

  return nps;
}

const percentPromoters = 75; // Example: 75% of respondents are promoters
const percentDetractors = 10; // Example: 10% of respondents are detractors

NPSButton.addEventListener('click', ()=>{
  const npsResult = calculateNPS(percentPromoters, percentDetractors);
  
  if (typeof npsResult === "number") {
    console.log("Net Promoter Score (NPS):", npsResult);
  } else {
    console.error(npsResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'netPromoterScore'
  canvas.ariaLabel = 'Net Promoter Score'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const netPromoterScoreCtx = document.getElementById('netPromoterScore').getContext('2d');
  createChart(netPromoterScoreCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Net Promoter Score');
})

function calculateConversionRate(completedActions, totalVisitors) {
  // Validate inputs (optional, but recommended)
  if (
    typeof completedActions !== "number" ||
    typeof totalVisitors !== "number"
  ) {
    return "Invalid input: Completed actions and total visitors must be numbers.";
  }

  if (totalVisitors === 0) {
    return "Invalid input: Total number of visitors cannot be zero.";
  }

  // Calculate conversion rate
  const conversionRate = (completedActions / totalVisitors) * 100;

  return conversionRate;
}

const completedPurchases = 150; // Example: 150 visitors made a purchase
const totalWebsiteVisitors = 10000; // Example: 10000 visitors came to the website

// CRButton.addEventListener('click', ()=>{
//   const conversionRateResult = calculateConversionRate(
//     completedPurchases,
//     totalWebsiteVisitors
//   );
  
//   if (typeof conversionRateResult === "number") {
//     console.log("Website Conversion Rate:", conversionRateResult + "%");
//   } else {
//     console.error(conversionRateResult); // Display error message if inputs were invalid
//   }
// })

function calculateCSATandNSAT(percentSatisfied, percentDissatisfied) {
  // Validate inputs (optional, but recommended)
  if (
    typeof percentSatisfied !== "number" ||
    typeof percentDissatisfied !== "number"
  ) {
    return "Invalid input: Satisfied and dissatisfied percentages must be numbers.";
  }

  if (
    percentSatisfied < 0 ||
    percentSatisfied > 100 ||
    percentDissatisfied < 0 ||
    percentDissatisfied > 100
  ) {
    return "Invalid input: Percentages must be between 0 and 100.";
  }

  // Calculate NSAT
  const nsat = percentSatisfied - percentDissatisfied;

  return { csat: percentSatisfied, nsat: nsat };
}

const percentSatisfiedCustomers = 80; // Example: 80% of customers are satisfied
const percentDissatisfiedCustomers = 15; // Example: 15% of customers are dissatisfied

const results = calculateCSATandNSAT(
  percentSatisfiedCustomers,
  percentDissatisfiedCustomers
);

if (typeof results === "object") {
  console.log("Customer Satisfaction (CSAT):", results.csat + "%");
  console.log("Net Satisfaction (NSAT):", results.nsat);
} else {
  console.error(results); // Display error message if inputs were invalid
}

function calculateROAS(revenueFromAds, costOfAdSpend) {
  // Validate inputs (optional, but recommended)
  if (typeof revenueFromAds !== "number" || typeof costOfAdSpend !== "number") {
    return "Invalid input: Revenue and cost must be numbers.";
  }

  if (costOfAdSpend === 0) {
    return "Invalid input: Cost of ad spend cannot be zero.";
  }

  // Calculate ROAS
  const roas = (revenueFromAds - costOfAdSpend) / costOfAdSpend;

  return roas;
}

// Example usage:
const revenueFromAds = 12000; // Example revenue generated from ads
const costOfAdSpend = 2000; // Example cost of running the ads

const roasResult = calculateROAS(revenueFromAds, costOfAdSpend);

if (typeof roasResult === "number") {
  console.log("Return on Ad Spend (ROAS):", roasResult);
} else {
  console.error(roasResult); // Display error message if inputs were invalid
}

function calculateEmailConversionRate(completedActions, totalClicks) {
  // Validate inputs (optional, but recommended)
  if (typeof completedActions !== "number" || typeof totalClicks !== "number") {
    return "Invalid input: Completed actions and total clicks must be numbers.";
  }

  if (totalClicks === 0) {
    return "Invalid input: Total number of clicks cannot be zero.";
  }

  // Calculate email marketing conversion rate
  const conversionRate = (completedActions / totalClicks) * 100;

  return conversionRate;
}

// Example usage:
const completedPurchasesFromEmail = 50; // Example: 50 people made a purchase after clicking the email
const totalEmailClicks = 500; // Example: 500 people clicked on the email

EMCRButton.addEventListener('click', ()=>{
  const emailConversionRateResult = calculateEmailConversionRate(
    completedPurchasesFromEmail,
    totalEmailClicks
  );
  
  if (typeof emailConversionRateResult === "number") {
    console.log(
      "Email Marketing Conversion Rate:",
      emailConversionRateResult + "%"
    );
  } else {
    console.error(emailConversionRateResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'emailMarketingConversionRate'
  canvas.ariaLabel = 'Email Marketing Conversion Rate'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const emailMarketingConversionRateCtx = document.getElementById('emailMarketingConversionRate').getContext('2d');
  createChart(emailMarketingConversionRateCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Email Marketing Conversion Rate');
})


function calculateARPU(totalRevenue, numberOfUsers) {
  // Validate inputs (optional, but recommended)
  if (typeof totalRevenue !== "number" || typeof numberOfUsers !== "number") {
    return "Invalid input: Total revenue and number of users must be numbers.";
  }

  if (numberOfUsers === 0) {
    return "Invalid input: Number of users cannot be zero.";
  }

  // Calculate ARPU
  const arpu = totalRevenue / numberOfUsers;

  return arpu;
}

// Example usage:
const totalRevenueForPeriod = 50000; // Example total revenue for the period
const numberOfUsersForPeriod = 2500; // Example number of users during the period

ARPUButton.addEventListener('click', ()=>{
  const arpuResult = calculateARPU(totalRevenueForPeriod, numberOfUsersForPeriod);
  
  if (typeof arpuResult === "number") {
    console.log("Average Revenue Per User (ARPU):", arpuResult);
  } else {
    console.error(arpuResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'averageRevenuePerUser'
  canvas.ariaLabel = 'Average Revenue Per User '
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const averageRevenuePerUserCtx = document.getElementById('averageRevenuePerUser').getContext('2d');
  createChart(averageRevenuePerUserCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Average Revenue Per User');
})

function calculateLTVtoCACRatio(clv, cac) {
  // Validate inputs (optional, but recommended)
  if (typeof clv !== "number" || typeof cac !== "number") {
    return "Invalid input: CLV and CAC must be numbers.";
  }

  if (cac === 0) {
    return "Invalid input: CAC cannot be zero.";
  }

  // Calculate LTV to CAC ratio
  const ltvToCacRatio = clv / cac;

  return ltvToCacRatio;
}

// Example usage:
const customerLifetimeValue = 1200; // Example CLV
const customerAcquisitionCost = 200; // Example CAC

CLVCARButton.addEventListener('click', ()=>{
  const ltvToCacRatioResult = calculateLTVtoCACRatio(
    customerLifetimeValue,
    customerAcquisitionCost
  );
  
  if (typeof ltvToCacRatioResult === "number") {
    console.log(
      "Customer Lifetime Value to Customer Acquisition Cost Ratio:",
      ltvToCacRatioResult
    );
  } else {
    console.error(ltvToCacRatioResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'customerLifetimeValueToCustomerAcquisitionCost'
  canvas.ariaLabel = 'Customer Lifetime Value to Customer Acquisition Cost Ratio'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const customerLifetimeValueToCustomerAcquisitionCostCtx = document.getElementById('customerLifetimeValueToCustomerAcquisitionCost').getContext('2d');
  createChart(customerLifetimeValueToCustomerAcquisitionCostCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Customer Lifetime Value to Customer Acquisition Cost');
})

function calculateInventoryTurnoverRate(
  costOfGoodsSold,
  averageInventoryValue
) {
  // Validate inputs (optional, but recommended)
  if (
    typeof costOfGoodsSold !== "number" ||
    typeof averageInventoryValue !== "number"
  ) {
    return "Invalid input: Cost of goods sold and average inventory value must be numbers.";
  }

  if (averageInventoryValue === 0) {
    return "Invalid input: Average inventory value cannot be zero.";
  }

  // Calculate inventory turnover rate
  const inventoryTurnoverRate = (costOfGoodsSold / averageInventoryValue) * 100;

  return inventoryTurnoverRate;
}

// Example usage:
const costOfGoodsSold = 50000; // Example cost of goods sold over a period
const averageInventoryValue = 10000; // Example average inventory value over the same period

ITRButton.addEventListener('click', ()=>{
  const inventoryTurnoverRateResult = calculateInventoryTurnoverRate(
    costOfGoodsSold,
    averageInventoryValue
  );
  
  if (typeof inventoryTurnoverRateResult === "number") {
    console.log("Inventory Turnover Rate:", inventoryTurnoverRateResult + "%");
  } else {
    console.error(inventoryTurnoverRateResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'inventoryTurnvoerRate'
  canvas.ariaLabel = 'Inventory Turnover Rate'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const inventoryTurnvoerRateCtx = document.getElementById('inventoryTurnvoerRate').getContext('2d');
  createChart(inventoryTurnvoerRateCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Inventory Turnover');
})


// // On order placement:
// const orderPlacementTime = Date.now();

// // ... (order processing and fulfillment logic) ...

// // On order delivery:
// const orderDeliveryTime = Date.now();

// // Calculate fulfillment cycle time
// const cycleTimeInMillis = orderDeliveryTime - orderPlacementTime;
// const cycleTimeInHours = cycleTimeInMillis / (1000 * 60 * 60); // Convert to hours

// console.log("Order Fulfillment Cycle Time (hours):", cycleTimeInHours);

function calculateOrderDefectRate(ordersWithDefects, totalOrders) {
  // Validate inputs (optional, but recommended)
  if (
    typeof ordersWithDefects !== "number" ||
    typeof totalOrders !== "number"
  ) {
    return "Invalid input: Orders with defects and total orders must be numbers.";
  }

  if (totalOrders === 0) {
    return "Invalid input: Total number of orders cannot be zero.";
  }

  // Calculate order defect rate
  const defectRate = (ordersWithDefects / totalOrders) * 100;

  return defectRate;
}

// Example usage:
const ordersWithDefects = 15; // Example number of orders with defects
const totalOrders = 500; // Example total number of orders

ODRButton.addEventListener('click', ()=>{
  const defectRateResult = calculateOrderDefectRate(
    ordersWithDefects,
    totalOrders
  );
  
  if (typeof defectRateResult === "number") {
    console.log("Order Defect Rate:", defectRateResult + "%");
  } else {
    console.error(defectRateResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'orderDefectRate'
  canvas.ariaLabel = 'Order Defect Rate Rate'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const orderDefectRateCtx = document.getElementById('orderDefectRate').getContext('2d');
  createChart(orderDefectRateCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Order Defect rate');
})

function calculateRevenuePerEmployee(totalRevenue, numberOfEmployees) {
  // Validate inputs (optional, but recommended)
  if (
    typeof totalRevenue !== "number" ||
    typeof numberOfEmployees !== "number"
  ) {
    return "Invalid input: Total revenue and number of employees must be numbers.";
  }

  if (numberOfEmployees === 0) {
    return "Invalid input: Number of employees cannot be zero.";
  }

  // Calculate revenue per employee
  const revenuePerEmployee = totalRevenue / numberOfEmployees;

  return revenuePerEmployee;
}

// Example usage:
const totalRevenue = 1000000; // Example total revenue
const numberOfEmployees = 50; // Example number of employees

RPEButton.addEventListener('click', ()=>{
  const revenuePerEmployeeResult = calculateRevenuePerEmployee(
    totalRevenue,
    numberOfEmployees
  );
  
  if (typeof revenuePerEmployeeResult === "number") {
    console.log("Revenue Per Employee:", revenuePerEmployeeResult);
  } else {
    console.error(revenuePerEmployeeResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'revenuePerEmployee'
  canvas.ariaLabel = 'Revenue Per Employee'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const revenuePerEmployeeCtx = document.getElementById('revenuePerEmployee').getContext('2d');
  createChart(revenuePerEmployeeCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Revenue Per Employee');
})

function calculateOperatingProfitMargin(operatingIncomeForProfitMargin, revenueForProfitMargin) {
  // Validate inputs (optional, but recommended)
  if (typeof operatingIncome !== "number" || typeof revenue !== "number") {
    return "Invalid input: Operating income and revenue must be numbers.";
  }

  if (revenue === 0) {
    return "Invalid input: Revenue cannot be zero.";
  }

  // Calculate operating profit margin
  const operatingProfitMargin = (operatingIncome / revenue) * 100;

  return operatingProfitMargin;
}

const operatingIncomeForProfitMargin = 200000; // Example operating income
const revenueForProfitMargin = 1000000; // Example revenue

OPMButton.addEventListener('click', ()=>{
  const operatingProfitMarginResult = calculateOperatingProfitMargin(
    operatingIncomeForProfitMargin,
    revenueForProfitMargin
  );
  
  if (typeof operatingProfitMarginResult === "number") {
    console.log("Operating Profit Margin:", operatingProfitMarginResult + "%");
  } else {
    console.error(operatingProfitMarginResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'operatingProfitMargin'
  canvas.ariaLabel = 'Operating Profit Margin Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const operatingProfitMarginCtx = document.getElementById('operatingProfitMargin').getContext('2d');
  createChart(operatingProfitMarginCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Operating Profit Margin');
})

function calculateEBITDA(operatingIncome, depreciationAmortization) {
  // Validate inputs (optional, but recommended)
  if (
    typeof operatingIncome !== "number" ||
    typeof depreciationAmortization !== "number"
  ) {
    return "Invalid input: Operating income and depreciation & amortization must be numbers.";
  }

  // Calculate EBITDA
  const ebitda = operatingIncome + depreciationAmortization;

  return ebitda;
}

const operatingIncome = 250000; // Example operating income
const depreciationAmortization = 50000; // Example depreciation & amortization expense

EBITDAButton.addEventListener('click', ()=>{
  const ebitdaResult = calculateEBITDA(operatingIncome, depreciationAmortization);
  
  if (typeof ebitdaResult === "number") {
    console.log(
      "Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA):",
      ebitdaResult
    );
  } else {
    console.error(ebitdaResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'earningsBeforeInterestTaxesDepreciationaAmortization'
  canvas.ariaLabel = 'Earnings Before Interest, Taxes, Depreciation, and Amortization'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const earningsBeforeInterestTaxesDepreciationaAmortizationCtx = document.getElementById('earningsBeforeInterestTaxesDepreciationaAmortization').getContext('2d');
  createChart(earningsBeforeInterestTaxesDepreciationaAmortizationCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Earnings Before Interest, Taxes, Depreciation, and Amortization');
})

function calculateFreeCashFlow(cashFromOperations, capitalExpenditures) {
  // Validate inputs (optional, but recommended)
  if (
    typeof cashFromOperations !== "number" ||
    typeof capitalExpenditures !== "number"
  ) {
    return "Invalid input: Cash from operations and capital expenditures must be numbers.";
  }

  // Calculate free cash flow
  const freeCashFlow = cashFromOperations - capitalExpenditures;

  return freeCashFlow;
}

// Example usage:
const cashFromOperations = 500000; // Example cash flow from operations
const capitalExpenditures = 100000; // Example capital expenditures

FCFButton.addEventListener('click', ()=>{
  const freeCashFlowResult = calculateFreeCashFlow(
    cashFromOperations,
    capitalExpenditures
  );
  
  if (typeof freeCashFlowResult === "number") {
    console.log("Free Cash Flow:", freeCashFlowResult);
  } else {
    console.error(freeCashFlowResult); // Display error message if inputs were invalid
  }

  const card = document.createElement('div')
  card.classList.add('canvas-container')
  const canvas = document.createElement('canvas')
  canvas.id = 'freeCashFlow'
  canvas.ariaLabel = 'Free Cash Flow Chart'
  canvas.role = 'img'
  card.appendChild(canvas)
  document.getElementById('main-content').appendChild(card)

  const freeCashFlowCtx = document.getElementById('freeCashFlow').getContext('2d');
  createChart(freeCashFlowCtx, 'line', ['Quality', 'Price', 'Features', 'Support', 'Ease of Use'], [4.5, 3.8, 4.2, 4.0, 4.7], 'Free Cash Flow');
})

function calculateDebtToEquityRatio(totalLiabilities, totalShareholdersEquity) {
  // Validate inputs (optional, but recommended)
  if (
    typeof totalLiabilities !== "number" ||
    typeof totalShareholdersEquity !== "number"
  ) {
    return "Invalid input: Total liabilities and total shareholders' equity must be numbers.";
  }

  if (totalShareholdersEquity === 0) {
    return "Invalid input: Total shareholders' equity cannot be zero.";
  }

  // Calculate debt-to-equity ratio
  const debtToEquityRatio = totalLiabilities / totalShareholdersEquity;

  return debtToEquityRatio;
}

// Example usage:
const totalLiabilities = 500000; // Example total liabilities
const totalShareholdersEquity = 1000000; // Example total shareholders' equity

const debtToEquityRatioResult = calculateDebtToEquityRatio(
  totalLiabilities,
  totalShareholdersEquity
);

if (typeof debtToEquityRatioResult === "number") {
  console.log("Debt-to-Equity Ratio:", debtToEquityRatioResult);
} else {
  console.error(debtToEquityRatioResult); // Display error message if inputs were invalid
}
