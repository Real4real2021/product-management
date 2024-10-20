let costOfGoodsSoldForGross = []
let population = []
let targetMarketPercentage = []
let benefits = []
let costs = []
let averageMonthlyRevenuePerUser = []
let averageUserLifespanInMonths = []
let grossMargin = []
let profit = []
let percentChangeInQuantityDemanded = []
let percentChangeInPrice = []
let sellingPrice = []
let variableCost = []
let marketingCosts = []
let numberOfNewCustomers = []
let clv = []
let averageRetention = []
let numberOfLostCustomers = []
let totalNumberOfCustomers = []
let yourCompanyMetric = []
let industryMetric = []
let revenue = []
let costOfGoodsSold = []
let totalRevenue = []
let numberOfOrders = []
let marketingSpend = []
let retainedCustomers = []
let initialCustomers = []
let percentPromoters = []
let percentDetractors = []
let completedActions = []
let totalVisitors = []
let percentSatisfied = []
let percentDissatisfied = []
let revenueFromAds = []
let costOfAdSpend = []
let totalClicks = []
let numberOfUsers = []
let cac = []
let averageInventoryValue = []
let ordersWithDefects = []
let totalOrders = []
let numberOfEmployees = []
let operatingIncome = []
let depreciationAmortization = []
let cashFromOperations = []
let capitalExpenditures = []
let totalLiabilities = []
let totalShareholdersEquity = []
let TotalCosts = []
let TotalNumberOfNewCustomers = []
let percentSatisfiedCustomers = []
let percentDissatisfiedCustomers = []
let yourCompanyConversionRate = []
let industryAverageConversionRate = []
let customerLifetimeValue = []
let customerAcquisitionCost = []
let totalRevenueForPeriod = []
let numberOfUsersForPeriod = []
let completedPurchasesFromEmail = []
let totalEmailClicks = []
let age = []
let gender = []
let language = []
let educationLvl = []
let investment = []
let products = []
let completedPurchases = []
let totalWebsiteVisitors = []
let operatingIncomeForProfitMargin = []
let revenueForProfitMargin = []

function loading() {
  console.log("loading");
}

let skipLoading = false;

async function post(url, data, options = {}) {
  const { timeout = 8000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  if (!url.includes("notifications")) {
    if (!skipLoading) loading();
    const responseText = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      ...options,
      body: JSON.stringify(data),
    });
    clearTimeout(id);
    if (!skipLoading) loading();
    if (skipLoading) skipLoading = false;
    return responseText.json();
  }
  const responseText = await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.log(error);
  });
  if (skipLoading) skipLoading = false;
  return responseText.json();
}

async function checkTables() {
  const response = await fetch("exec/create.php");
  const result = await response.json();
  console.log(result); 
  return result.success; 
}

async function retData(){
  const response = await fetch("function/readProducts.php");
  const mockData = await response.json()
  return mockData;
}

processData();
checkTables();

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

let marketSize = [];
let constBenefitAnalysisRes = [];
let calculateCustomerLifetimeValueRes = [];
let returnOnInvestment = [];
let priceElasticityRes = [];
let productMarginRes = [];
let CACandLTVRes = [];
let ChurnRateRes = [];
let CompetitiveBenchmarkRes = [];
let GrossProfitMarginRes = [];
let AverageOrderValueRes = [];
let CustomerAcquisitionCostRes = [];
let CustomerRetentionRateRes = [];
let NPSRes = [];
let ConversionRateRes = [];
let CSATandNSATRes = [];
let ROASRes = [];
let EmailConversionRateRes = [];
let ARPURes = [];
let LTVtoCACRatioRes = [];
let InventoryTurnoverRateRes = [];
let OrderDefectRateRes = [];
let RevenuePerEmployeeRes = [];
let OperatingProfitMarginRes = [];
let EBITDARes = [];
let FreeCashFlowRes = [];

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

// Scroll animation and search functionality

const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const searchContainer = document.getElementById('filter-search-container');
const filterSearch = document.getElementById('filter-search');
const searchResults = document.getElementById('search-results');
const filters = document.getElementById('filters');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollProgress =   Math.min(scrollTop / 100, 1);

  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.justifyContent = `flex-end`;
    logo.style.transform = `scale(${1 - 0.2 * scrollProgress})`;
    searchContainer.style.transform = `translateY(${-20 * scrollProgress}px)`;
  } else {
    // Scrolling up
    header.style.justifyContent = `center`;
    logo.style.transform = `scale(1)`;
    searchContainer.style.transform = 'translateY(0)';
  }

  // Show search results if filters are not in view
  if (filters.getBoundingClientRect().bottom < 0) {
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Search functionality
filterSearch.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filterButtons = document.querySelectorAll('.filter-buttons');
  const matchingFilters = Array.from(filterButtons).filter(button => 
    button.value.toLowerCase().includes(searchTerm)
  );

  searchResults.innerHTML = '';
  matchingFilters.forEach(filter => {
    const resultElement = document.createElement('div');
    resultElement.classList.add('search-result');
    resultElement.textContent = filter.value;
    resultElement.addEventListener('click', () => {
      filter.click();
      searchResults.style.display = 'none';
    });
    searchResults.appendChild(resultElement);
  });

  if (matchingFilters.length > 0 && filters.getBoundingClientRect().bottom < 0) {
    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
  if (!searchContainer.contains(e.target)) {
    searchResults.style.display = 'none';
  }
});

async function processData() {
  try {
    const mockData = await retData();  
    mockData.forEach((Data)=>{
      costOfGoodsSoldForGross.push(Number(Data.costOfGoodsSoldForGross))
      population.push(Number(Data.population))
      targetMarketPercentage.push(Number(Data.targetMarketPercentage))
      benefits.push(Number(Data.benefits))
      costs.push(Number(Data.costs))
      averageMonthlyRevenuePerUser.push(Number(Data.averageMonthlyRevenuePerUser))
      averageUserLifespanInMonths.push(Number(Data.averageUserLifespanInMonths))
      grossMargin.push(Number(Data.grossMargin))
      profit.push(Number(Data.profit))
      percentChangeInQuantityDemanded.push(Number(Data.percentChangeInQuantityDemanded))
      percentChangeInPrice.push(Number(Data.percentChangeInPrice))
      sellingPrice.push(Number(Data.sellingPrice))
      variableCost.push(Number(Data.variableCost))
      marketingCosts.push(Number(Data.marketingCosts))
      numberOfNewCustomers.push(Number(Data.numberOfNewCustomers))
      clv.push(Number(Data.clv))
      averageRetention.push(Number(Data.averageRetention))
      numberOfLostCustomers.push(Number(Data.numberOfLostCustomers))
      totalNumberOfCustomers.push(Number(Data.totalNumberOfCustomers))
      yourCompanyMetric.push(Number(Data.yourCompanyMetric))
      industryMetric.push(Number(Data.industryMetric))
      revenue.push(Number(Data.revenue))
      costOfGoodsSold.push(Number(Data.costOfGoodsSold))
      totalRevenue.push(Number(Data.totalRevenue))
      numberOfOrders.push(Number(Data.numberOfOrders))
      marketingSpend.push(Number(Data.marketingSpend))
      retainedCustomers.push(Number(Data.retainedCustomers))
      initialCustomers.push(Number(Data.initialCustomers))
      percentPromoters.push(Number(Data.percentPromoters))
      percentDetractors.push(Number(Data.percentDetractors))
      completedActions.push(Number(Data.completedActions))
      totalVisitors.push(Number(Data.totalVisitors))
      percentSatisfied.push(Number(Data.percentSatisfied))
      percentDissatisfied.push(Number(Data.percentDissatisfied))
      revenueFromAds.push(Number(Data.revenueFromAds))
      costOfAdSpend.push(Number(Data.costOfAdSpend))
      totalClicks.push(Number(Data.totalClicks))
      numberOfUsers.push(Number(Data.numberOfUsers))
      cac.push(Number(Data.cac))
      averageInventoryValue.push(Number(Data.averageInventoryValue))
      ordersWithDefects.push(Number(Data.ordersWithDefects))
      totalOrders.push(Number(Data.totalOrders))
      numberOfEmployees.push(Number(Data.numberOfEmployees))
      operatingIncome.push(Number(Data.operatingIncome))
      depreciationAmortization.push(Number(Data.depreciationAmortization))
      cashFromOperations.push(Number(Data.cashFromOperations))
      capitalExpenditures.push(Number(Data.capitalExpenditures))
      totalLiabilities.push(Number(Data.totalLiabilities))
      totalShareholdersEquity.push(Number(Data.totalShareholdersEquity))
      TotalCosts.push(Number(Data.TotalCosts))
      TotalNumberOfNewCustomers.push(Number(Data.TotalNumberOfNewCustomers))
      percentSatisfiedCustomers.push(Number(Data.percentSatisfiedCustomers))
      percentDissatisfiedCustomers.push(Number(Data.percentDissatisfiedCustomers))
      yourCompanyConversionRate.push(Number(Data.yourCompanyConversionRate))
      industryAverageConversionRate.push(Number(Data.industryAverageConversionRate))
      customerLifetimeValue.push(Number(Data.customerLifetimeValue))
      customerAcquisitionCost.push(Number(Data.customerAcquisitionCost))
      totalRevenueForPeriod.push(Number(Data.totalRevenueForPeriod))
      numberOfUsersForPeriod.push(Number(Data.numberOfUsersForPeriod))
      completedPurchasesFromEmail.push(Number(Data.completedPurchasesFromEmail))
      totalEmailClicks.push(Number(Data.totalEmailClicks))
      age.push(Number(Data.age))
      gender.push(Number(Data.gender))
      language.push(Number(Data.language))
      educationLvl.push(Number(Data.educationLvl))
      investment.push(Number(Data.investment))
      products.push(Number(Data.products))
      completedPurchases.push(Number(Data.completedPurchases))
      totalWebsiteVisitors.push(Number(Data.totalWebsiteVisitors))
      operatingIncomeForProfitMargin.push(Number(Data.operatingIncomeForProfitMargin))
      revenueForProfitMargin.push(Number(Data.revenueForProfitMargin))
    })

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
    
      return population * (targetMarketPercentage / 100);
    }
    
    MSEButton.addEventListener("click", ()=>{
      for (let i = 0; i < population.length; i++) {
        const result = estimateMarketSize(population[i], targetMarketPercentage[i]);
      
        if (typeof result === "number") {
          marketSize[i] = result; 
        } else {
          console.error(result, "for index:", i);  
          marketSize[i] = null; 
        }
      }

      const chartLabels = marketSize.map((value, index) => `Value ${index + 1}`); 

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
        canvas.id = 'MarketSizeEstimation'
        canvas.ariaLabel = 'Market Size Estimation Chart'
        canvas.role = 'img'
        card.appendChild(canvas)
        document.getElementById('main-content').appendChild(card)
    
      const MarketSizeEstimationCtx = document.getElementById('MarketSizeEstimation').getContext('2d');
      createChart(MarketSizeEstimationCtx, 'bar', chartLabels, marketSize, 'Market Size Estimation'); 
    })
    
    function calculateCostBenefitAnalysis(benefits, costs) {
      if (typeof benefits !== "number" || typeof costs !== "number") {
        return "Invalid input: Benefits and costs must be numbers.";
      }
    
      if (benefits === 0) {
        return "Invalid input: Benefits cannot be zero.";
      }
    
      return ((benefits - costs) / benefits) * 100;
    }
    
    CBAButton.addEventListener("click", ()=>{
      for (let i = 0; i < benefits.length; i++) {
        const result = calculateCostBenefitAnalysis(benefits[i], costs[i]);
      
        if (typeof result === "number") {
          constBenefitAnalysisRes[i] = result; 
        } else {
          console.error(result, "for index:", i);  
          constBenefitAnalysisRes[i] = null; 
        }
      }

      const chartLabels = constBenefitAnalysisRes.map((value, index) => `Value ${index + 1}`); 
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'CustomerBenefitAnalysis'
      canvas.ariaLabel = 'Customer Benefit Analysis Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const CustomerBenefitAnalysisCtx = document.getElementById('CustomerBenefitAnalysis').getContext('2d');
      createChart(CustomerBenefitAnalysisCtx, 'pie', chartLabels, constBenefitAnalysisRes, 'Customer Benefit Analysis');
      
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
    
      return (averageMonthlyRevenuePerUser * averageUserLifespanInMonths) / grossMargin;
    
    }
    
    CLVButton.addEventListener('click', ()=> {
      for (let i = 0; i < averageMonthlyRevenuePerUser.length; i++) {
        const result = calculateCustomerLifetimeValue(averageMonthlyRevenuePerUser[i],averageUserLifespanInMonths[i],grossMargin[i]);
      
        if (typeof result === "number") {
          calculateCustomerLifetimeValueRes[i] = result; 
        } else {
          console.error(result, "for index:", i);  
          calculateCustomerLifetimeValueRes[i] = null; 
        }
      }

      const chartLabels = calculateCustomerLifetimeValueRes.map((value, index) => `Value ${index + 1}`); 
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'CustomerLifetimeValue'
      canvas.ariaLabel = 'Customer Lifetime Value'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const CustomerLifetimeValueCtx = document.getElementById('CustomerLifetimeValue').getContext('2d');
      createChart(CustomerLifetimeValueCtx, 'line', chartLabels, calculateCustomerLifetimeValueRes, 'Customer Lifetime Value');
    })
    
    function calculateROI(profit, costs) {
      if (typeof profit !== "number" || typeof costs !== "number") {
        return "Invalid input: Profit and costs must be numbers.";
      }
    
      if (costs === 0) {
        return "Invalid input: Costs cannot be zero.";
      }
    
      return ((profit - costs) / costs) * 100;
    }
    
    ROIButton.addEventListener('click', ()=> {
      for (let i = 0; i < profit.length; i++) {
        const result = calculateROI(profit[i], costs[i]);
        
        if (typeof result === "number") {
          returnOnInvestment[i] = result;
          console.log("Return on Investment (ROI):", result + "%");
        } else {
          console.error(result);
          returnOnInvestment[i] = null;
        }
      }
    
      const chartLabels = returnOnInvestment.map((value, index) => `Value ${index + 1}`); 

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'returnOnInvestment'
      canvas.ariaLabel = 'Return On Investment Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const returnOnInvestmentCtx = document.getElementById('returnOnInvestment').getContext('2d');
      createChart(returnOnInvestmentCtx, 'radar', chartLabels, returnOnInvestment, 'Return On Investment');
    })
    
    function calculatePriceElasticity(
      percentChangeInQuantityDemanded,
      percentChangeInPrice
    ) {
      if (
        typeof percentChangeInQuantityDemanded !== "number" ||
        typeof percentChangeInPrice !== "number"
      ) {
        return "Invalid input: Percent changes must be numbers.";
      }
    
      if (percentChangeInPrice === 0) {
        return "Invalid input: Percent change in price cannot be zero.";
      }
    
      return  percentChangeInQuantityDemanded / percentChangeInPrice;
    }
    
    PEButton.addEventListener('click', ()=>{
      for (let i = 0; i < percentChangeInQuantityDemanded.length; i++) {
        const result = calculatePriceElasticity(
          percentChangeInQuantityDemanded[i],
          percentChangeInPrice[i]
        );
        
        if (typeof result === "number") {
          console.log("Price Elasticity of Demand:", result);
          priceElasticityRes[i] = result
        } else {
          console.error(result); 
          priceElasticityRes[i] = null
        }
      }
    
      const chartLabels = priceElasticityRes.map((value, index) => `Value ${index + 1}`); 

      
      
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'PriceElasticity'
      canvas.ariaLabel = 'Price Elasticity Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const PriceElasticityCtx = document.getElementById('PriceElasticity').getContext('2d');
      createChart(PriceElasticityCtx, 'bar', chartLabels, priceElasticityRes, 'Price Elasticity Chart');
    })
    
    function calculateProductMargin(sellingPrice, variableCost) {
      if (typeof sellingPrice !== "number" || typeof variableCost !== "number") {
        return "Invalid input: Selling price and variable cost must be numbers.";
      }
    
      return sellingPrice - variableCost;
    }
    
    PMButton.addEventListener('click', ()=>{
      for(let i = 0; i < sellingPrice.length; i++) {
        const result = calculateProductMargin(sellingPrice[i], variableCost[i]);
        
        if (typeof result === "number") {
          console.log("Gross Profit (Product Margin):", result);
          productMarginRes[i] = result;
        } else {
          console.error(result); 
          productMarginRes[i] = null;
        }
      }
      
      const chartLabels = productMarginRes.map((value, index) => `Value ${index + 1}`);

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'productMargin'
      canvas.ariaLabel = 'Product Margin Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const productMarginCtx = document.getElementById('productMargin').getContext('2d');
      createChart(productMarginCtx, 'bar',chartLabels, productMarginRes, 'Product Margin');
    })
    
    function calculateCACandLTV(
      marketingCosts,
      numberOfNewCustomers,
      clv,
      averageRetention
    ) {
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
    
      const cac = marketingCosts / numberOfNewCustomers;
    
      const ltv = clv * averageRetention;
    
      return { cac: cac, ltv: ltv };
    }
    
    CACCLVButton.addEventListener('click',()=>{
      for(let i = 0; i < marketingCosts.length; i++) {
        const result = calculateCACandLTV(
          marketingCosts[i],
          TotalNumberOfNewCustomers[i],
          clv[i],
          averageRetention[i]
        );
        
        if (typeof result === "object") {
          console.log("Customer Acquisition Cost (CAC):", result.cac);
          console.log("Lifetime Value (LTV):", result.ltv);
          CACandLTVRes[i] = result.cac;
          CACandLTVRes[i] = result.ltv;
        } else {
          console.error(result); 
          CACandLTVRes[i] = null;
          CACandLTVRes[i] = null;
        }
      }

      const chartLabels = CACandLTVRes.map((value, index) => `Value ${index + 1}`);

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'customerAcquisitionCostCustomerLifetimeValue'
      canvas.ariaLabel = 'customer Acquisition Cost and Customer Lifetime Value Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const customerAcquisitionCostCustomerLifetimeValueCtx = document.getElementById('customerAcquisitionCostCustomerLifetimeValue').getContext('2d');
      createChart(customerAcquisitionCostCustomerLifetimeValueCtx, 'pie', chartLabels, CACandLTVRes, 'Customer Acquisition Cost & Customer Lifetime Value Ratio');
    })
    
    function calculateChurnRate(numberOfLostCustomers, totalNumberOfCustomers) {
      if (
        typeof numberOfLostCustomers !== "number" ||
        typeof totalNumberOfCustomers !== "number"
      ) {
        return "Invalid input: Number of lost customers and total number of customers must be numbers.";
      }
    
      if (totalNumberOfCustomers === 0) {
        return "Invalid input: Total number of customers cannot be zero.";
      }
    
      return (numberOfLostCustomers / totalNumberOfCustomers) * 100;
    }
    
    CRButton.addEventListener('click', ()=>{
      for (let i = 0; i < numberOfLostCustomers.length; i++) {
        const result = calculateChurnRate(
          numberOfLostCustomers[i],
          totalNumberOfCustomers[i]
        );
        
        if (typeof result === "number") {
          console.log("Churn Rate:", result + "%");
          ChurnRateRes[i] = result;
        } else {
          console.error(result); 
          ChurnRateRes[i] = null;
        }
      }

      const chartLabels = ChurnRateRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'churnRate'
      canvas.ariaLabel = 'Churn Rate Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const churnRateCtx = document.getElementById('churnRate').getContext('2d');
      createChart(churnRateCtx, 'pie', chartLabels, ChurnRateRes, 'Churn Rate');
    })
    
    function calculateCompetitiveBenchmark(yourCompanyMetric, industryMetric) {
      if (
        typeof yourCompanyMetric !== "number" ||
        typeof industryMetric !== "number"
      ) {
        return "Invalid input: Your company metric and industry metric must be numbers.";
      }
    
      if (industryMetric === 0) {
        return "Invalid input: Industry metric cannot be zero.";
      }
    
      return (yourCompanyMetric - industryMetric) / industryMetric;
    }
    
    CBButton.addEventListener('click', ()=>{
      for (let i = 0; i < yourCompanyConversionRate.length; i++) {
        const result = calculateCompetitiveBenchmark(
          yourCompanyConversionRate[i],
          industryAverageConversionRate[i]
        );
        
        if (typeof result === "number") {
          console.log("Competitive Benchmark:", result);
          CompetitiveBenchmarkRes[i] = result;
          if (result > 0) {
            console.log("Your company is performing better than the industry average.");
          } else if (result < 0) {
            console.log("Your company is performing worse than the industry average.");
          } else {
            console.log("Your company is performing at the industry average.");
          }
        } else {
          console.error(result); 
          CompetitiveBenchmarkRes[i] = null;
        }
      }
      
      const chartLabels = CompetitiveBenchmarkRes.map((value, index) => `Value ${index + 1}`);
      
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'competitiveBenchmark'
      canvas.ariaLabel = 'Competitive Benchmark Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const competitiveBenchmarkCtx = document.getElementById('competitiveBenchmark').getContext('2d');
      createChart(competitiveBenchmarkCtx, 'bar', chartLabels, CompetitiveBenchmarkRes, 'Competitive Benchmark');
    })
    
    function calculateGrossProfitMargin(revenue, costOfGoodsSold) {
      if (typeof revenue !== "number" || typeof costOfGoodsSold !== "number") {
        return "Invalid input: Revenue and cost of goods sold must be numbers.";
      }
    
      if (revenue === 0) {
        return "Invalid input: Revenue cannot be zero.";
      }
    
      return ((revenue - costOfGoodsSold) / revenue) * 100;
    }
    
    GPMButton.addEventListener('click', ()=>{
      for(let i = 0; i < revenue.length; i++) {
        const result = calculateGrossProfitMargin(
          revenue[i],
          costOfGoodsSold[i]
        );
        
        if (typeof result === "number") {
          console.log("Gross Profit Margin:", result + "%");
          GrossProfitMarginRes[i] = result;
        } else {
          console.error(result); 
          GrossProfitMarginRes[i]= null
        }
      }

      const chartLabels = GrossProfitMarginRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'grossProfitMargin'
      canvas.ariaLabel = 'Gross Profit Margin'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const grossProfitMarginCtx = document.getElementById('grossProfitMargin').getContext('2d');
      createChart(grossProfitMarginCtx, 'bar', chartLabels, GrossProfitMarginRes, 'Gross Profit Margin');
    })
    
    function calculateAverageOrderValue(totalRevenue, numberOfOrders) {
      if (typeof totalRevenue !== "number" || typeof numberOfOrders !== "number") {
        return "Invalid input: Total revenue and number of orders must be numbers.";
      }
    
      if (numberOfOrders === 0) {
        return "Invalid input: Number of orders cannot be zero.";
      }
      return totalRevenue / numberOfOrders;    
    }
    
    AOVButton.addEventListener('click', ()=>{
      for(let i = 0; i < totalRevenue.length; i++) {
        const result = calculateAverageOrderValue(
          totalRevenue[i],
          numberOfOrders[i]
        );
        
        if (typeof result === "number") {
          console.log("Average Order Value:", result);
          AverageOrderValueRes[i] = result;
        } else {
          console.error(result); 
          AverageOrderValueRes[i] = null;
        }
      }

      const chartLabels = AverageOrderValueRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'averageOrderValue'
      canvas.ariaLabel = 'Average Order Value'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const averageOrderValueCtx = document.getElementById('averageOrderValue').getContext('2d');
      createChart(averageOrderValueCtx, 'line', chartLabels, AverageOrderValueRes, 'Average Order Value');
    })
    
    function calculateCustomerAcquisitionCost(
      marketingSpend,
      numberOfNewCustomers
    ) {
      if (
        typeof marketingSpend !== "number" ||
        typeof numberOfNewCustomers !== "number"
      ) {
        return "Invalid input: Marketing spend and number of new customers must be numbers.";
      }
    
      if (numberOfNewCustomers === 0) {
        return "Invalid input: Number of new customers cannot be zero.";
      }
    
      return marketingSpend / numberOfNewCustomers;
      }
    
    CACButton.addEventListener('click', ()=>{
      for(let i = 0; i < marketingSpend.length; i++) {
        const result = calculateCustomerAcquisitionCost(
          marketingSpend[i],
          numberOfNewCustomers[i]
        );
        
        if (typeof result === "number") {
          console.log("Customer Acquisition Cost (CAC):", result);
          CustomerAcquisitionCostRes[i] = result;
        } else {
          console.error(result); 
          CustomerAcquisitionCostRes[i] = null;
        }
      }

      const chartLabels = CustomerAcquisitionCostRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'customerAcquisitionCost'
      canvas.ariaLabel = 'Customer Acquisition Cost'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const customerAcquisitionCostCtx = document.getElementById('customerAcquisitionCost').getContext('2d');
      createChart(customerAcquisitionCostCtx, 'line', chartLabels, CustomerAcquisitionCostRes, 'Customer Acquisition Cost');
    })
    
    function calculateCustomerRetentionRate(retainedCustomers, initialCustomers) {
      if (
        typeof retainedCustomers !== "number" ||
        typeof initialCustomers !== "number"
      ) {
        return "Invalid input: Retained customers and initial customers must be numbers.";
      }
    
      if (initialCustomers === 0) {
        return "Invalid input: Initial number of customers cannot be zero.";
      }
    
      return retainedCustomers / initialCustomers;
    }
    
    CRRButton.addEventListener('click', ()=>{
      for(let i = 0; i < retainedCustomers.length; i++) {
        const result = calculateCustomerRetentionRate(
          retainedCustomers[i],
          initialCustomers[i]
        );
        
        if (typeof result === "number") {
          console.log("Customer Retention Rate:", result);
          console.log(
            "Customer Retention Rate Percentage:",
            result * 100 + "%"
          );
          CustomerRetentionRateRes[i] = result;
        } else {
          console.error(result); 
          CustomerRetentionRateRes[i] = null;
        }
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
      createChart(customerRetentionRateCtx, 'line', ['Retained Customers', 'Initial Customers'], [retainedCustomers, initialCustomers], 'Customer Retention Rate');
    })
    
    function calculateNPS(percentPromoters, percentDetractors) {
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
    
      return ((percentPromoters - percentDetractors) / 100) * 1000; 
    }

    NPSButton.addEventListener('click', ()=>{
      for(let i = 0; i < percentPromoters.length; i++) {
        const result = calculateNPS(percentPromoters[i], percentDetractors[i]);
        
        if (typeof result === "number") {
          console.log("Net Promoter Score (NPS):", result);
          NPSRes[i] = result;
        } else {
          console.error(result); 
          NPSRes[i] = null;
        }
      }

      const chartLabels = NPSRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'netPromoterScore'
      canvas.ariaLabel = 'Net Promoter Score'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const netPromoterScoreCtx = document.getElementById('netPromoterScore').getContext('2d');
      createChart(netPromoterScoreCtx, 'pie', chartLabels, NPSRes, 'Net Promoter Score');
    })
    
    function calculateConversionRate(completedActions, totalVisitors) {
      if (
        typeof completedActions !== "number" ||
        typeof totalVisitors !== "number"
      ) {
        return "Invalid input: Completed actions and total visitors must be numbers.";
      }
    
      if (totalVisitors === 0) {
        return "Invalid input: Total number of visitors cannot be zero.";
      }
    
      return (completedActions / totalVisitors) * 100;
    }
    
    WCRButton.addEventListener('click', ()=>{
      for(let i = 0; i < completedPurchases.length; i++) {
        const conversionRateResult = calculateConversionRate(
          completedPurchases[i],
          totalWebsiteVisitors[i]
        );
        
        if (typeof conversionRateResult === "number") {
          console.log("Website Conversion Rate:", conversionRateResult + "%");
          ConversionRateRes[i] = conversionRateResult;
        } else {
          console.error(conversionRateResult); 
          ConversionRateRes[i] = null;
        }
      }

      const chartLabels = ConversionRateRes.map((value, index) => `Value ${index + 1}`);

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'websiteConversionRate'
      canvas.ariaLabel = 'Website Conversion Rate'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const websiteConversionRateCtx = document.getElementById('websiteConversionRate').getContext('2d');
      createChart(websiteConversionRateCtx, 'pie', chartLabels, ConversionRateRes, 'Website Conversion Rate');
    })
    
    function calculateCSATandNSAT(percentSatisfied, percentDissatisfied) {
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
    
      const nsat = percentSatisfied - percentDissatisfied;
    
      return { csat: percentSatisfied, nsat: nsat };
    }
    
    CSNSButton.addEventListener('click', ()=>{
      for(let i = 0; i < percentSatisfiedCustomers.length; i++) {
        const results = calculateCSATandNSAT(
          percentSatisfiedCustomers[i],
          percentDissatisfiedCustomers[i]
        );
        console.log(results);
        if (typeof results === "object") {
          console.log("Customer Satisfaction (CSAT):", results.csat + "%");
          console.log("Net Satisfaction (NSAT):", results.nsat);
          CSATandNSATRes.push({
            csat: results.csat,
            nsat: results.nsat
          })
        } else {
          console.error(results); 
          CSATandNSATRes.csat[i] = null;
          CSATandNSATRes.nsat[i] = null;
        }
      }

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'customerSatisfactionNetSatisfaction'
      canvas.ariaLabel = 'Customer Satisfaction & Net Satisfaction Rate'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const customerSatisfactionNetSatisfactionCtx = document.getElementById('customerSatisfactionNetSatisfaction').getContext('2d');
      createChart(customerSatisfactionNetSatisfactionCtx, 'pie', ['Customer Satisfaction', 'Net Satisfaction'], [percentSatisfiedCustomers, percentDissatisfiedCustomers], 'Customer Satisfaction & Net Satisfaction');
    })
    
    function calculateROAS(revenueFromAds, costOfAdSpend) {
      if (typeof revenueFromAds !== "number" || typeof costOfAdSpend !== "number") {
        return "Invalid input: Revenue and cost must be numbers.";
      }
    
      if (costOfAdSpend === 0) {
        return "Invalid input: Cost of ad spend cannot be zero.";
      }
    
      return (revenueFromAds - costOfAdSpend) / costOfAdSpend;
    
    }
    
    RAPButton.addEventListener('click', ()=>{
      for(let i = 0; i < revenueFromAds.length; i++) {
        const result = calculateROAS(revenueFromAds[i], costOfAdSpend[i]);
        
        if (typeof result === "number") {
          console.log("Return on Ad Spend (ROAS):", result);
          ROASRes[i] = result;
        } else {
          console.error(result);
          ROASRes[i] = null;
        }
      }

      const chartLabels = ROASRes.map((value, index) => `Value ${index + 1}`);

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'returnOnAdSpend'
      canvas.ariaLabel = 'Return on Ad Spend'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const returnOnAdSpendCtx = document.getElementById('returnOnAdSpend').getContext('2d');
      createChart(returnOnAdSpendCtx, 'pie', chartLabels, ROASRes, 'Return on Ad Spend');
    })

    function calculateEmailConversionRate(completedActions, totalClicks) {
      if (typeof completedActions !== "number" || typeof totalClicks !== "number") {
        return "Invalid input: Completed actions and total clicks must be numbers.";
      }
    
      if (totalClicks === 0) {
        return "Invalid input: Total number of clicks cannot be zero.";
      }
    
      return (completedActions / totalClicks) * 100;
    }
    
    EMCRButton.addEventListener('click', ()=>{
      for(let i = 0; i < completedPurchasesFromEmail.length; i++) {
        const result = calculateEmailConversionRate(
          completedPurchasesFromEmail[i],
          totalEmailClicks[i]
        );
        
        if (typeof result === "number") {
          console.log(
            "Email Marketing Conversion Rate:",
            result + "%"
          );
          EmailConversionRateRes[i] = result;
        } else {
          console.error(result); 
          EmailConversionRateRes[i] = null;
        }
      }

      const chartLabels = EmailConversionRateRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'emailMarketingConversionRate'
      canvas.ariaLabel = 'Email Marketing Conversion Rate'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const emailMarketingConversionRateCtx = document.getElementById('emailMarketingConversionRate').getContext('2d');
      createChart(emailMarketingConversionRateCtx, 'line', chartLabels, EmailConversionRateRes, 'Email Marketing Conversion Rate');
    })
    
    function calculateARPU(totalRevenue, numberOfUsers) {
      if (typeof totalRevenue !== "number" || typeof numberOfUsers !== "number") {
        return "Invalid input: Total revenue and number of users must be numbers.";
      }
    
      if (numberOfUsers === 0) {
        return "Invalid input: Number of users cannot be zero.";
      }
    
      return totalRevenue / numberOfUsers;
    }
    
    ARPUButton.addEventListener('click', ()=>{
      for(let i = 0; i < totalRevenueForPeriod.length; i++) {
        const result = calculateARPU(totalRevenueForPeriod[i], numberOfUsersForPeriod[i]);
        
        if (typeof result === "number") {
          console.log("Average Revenue Per User (ARPU):", result);
          ARPURes[i] = result;
        } else {
          console.error(result); 
          ARPURes[i] = null;
        }
      }

      const chartLabels = ARPURes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'averageRevenuePerUser'
      canvas.ariaLabel = 'Average Revenue Per User '
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const averageRevenuePerUserCtx = document.getElementById('averageRevenuePerUser').getContext('2d');
      createChart(averageRevenuePerUserCtx, 'pie', chartLabels, ARPURes, 'Average Revenue Per User');
    })
    
    function calculateLTVtoCACRatio(clv, cac) {
      if (typeof clv !== "number" || typeof cac !== "number") {
        return "Invalid input: CLV and CAC must be numbers.";
      }
    
      if (cac === 0) {
        return "Invalid input: CAC cannot be zero.";
      }
    
      return clv / cac;
     }
        
    CLVCARButton.addEventListener('click', ()=>{
      for(let i = 0; i < customerLifetimeValue.length; i++) {
        const result = calculateLTVtoCACRatio(
          customerLifetimeValue[i],
          customerAcquisitionCost[i]
        );
        
        if (typeof result === "number") {
          console.log(
            "Customer Lifetime Value to Customer Acquisition Cost Ratio:",
            result
          );
          LTVtoCACRatioRes[i] = result;
        } else {
          console.error(result); 
          LTVtoCACRatioRes[i] = null;
        }
      }

      const chartLabels = LTVtoCACRatioRes.map((value, index) => `Value ${index + 1}`);

      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'customerLifetimeValueToCustomerAcquisitionCost'
      canvas.ariaLabel = 'Customer Lifetime Value to Customer Acquisition Cost Ratio'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const customerLifetimeValueToCustomerAcquisitionCostCtx = document.getElementById('customerLifetimeValueToCustomerAcquisitionCost').getContext('2d');
      createChart(customerLifetimeValueToCustomerAcquisitionCostCtx, 'line', chartLabels, LTVtoCACRatioRes, 'Customer Lifetime Value to Customer Acquisition Cost Ratio');
    })
    
    function calculateInventoryTurnoverRate(
      costOfGoodsSold,
      averageInventoryValue
    ) {
      if (
        typeof costOfGoodsSold !== "number" ||
        typeof averageInventoryValue !== "number"
      ) {
        return "Invalid input: Cost of goods sold and average inventory value must be numbers.";
      }
    
      if (averageInventoryValue === 0) {
        return "Invalid input: Average inventory value cannot be zero.";
      }
    
      return (costOfGoodsSold / averageInventoryValue) * 100;
    }
  
    ITRButton.addEventListener('click', ()=>{
      for(let i = 0; i < costOfGoodsSold.length; i++) {
        const result = calculateInventoryTurnoverRate(
          costOfGoodsSold[i],
          averageInventoryValue[i]
        );

        if (typeof result === "number") {
          console.log("Inventory Turnover Rate:", result + "%");
          InventoryTurnoverRateRes[i] = result;
        } else {
          console.error(result); 
          InventoryTurnoverRateRes[i] = null;
        }
      }

      const chartLabels = InventoryTurnoverRateRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'inventoryTurnvoerRate'
      canvas.ariaLabel = 'Inventory Turnover Rate'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const inventoryTurnvoerRateCtx = document.getElementById('inventoryTurnvoerRate').getContext('2d');
      createChart(inventoryTurnvoerRateCtx, 'scatter',chartLabels, InventoryTurnoverRateRes, 'Inventory Turnover');
    })
  
    function calculateOrderDefectRate(ordersWithDefects, totalOrders) {
      if (
        typeof ordersWithDefects !== "number" ||
        typeof totalOrders !== "number"
      ) {
        return "Invalid input: Orders with defects and total orders must be numbers.";
      }
    
      if (totalOrders === 0) {
        return "Invalid input: Total number of orders cannot be zero.";
      }
    
      return (ordersWithDefects / totalOrders) * 100;
    }
    
    ODRButton.addEventListener('click', ()=>{
      for(let i = 0; i < ordersWithDefects.length; i++) {
        const result = calculateOrderDefectRate(
          ordersWithDefects[i],
          totalOrders[i]
        );
        
        if (typeof result === "number") {
          console.log("Order Defect Rate:", result + "%");
          OrderDefectRateRes[i] = result;
        } else {
          console.error(result); 
          OrderDefectRateRes[i] = null;
        }
      }

      const chartLabels = OrderDefectRateRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'orderDefectRate'
      canvas.ariaLabel = 'Order Defect Rate Rate'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const orderDefectRateCtx = document.getElementById('orderDefectRate').getContext('2d');
      createChart(orderDefectRateCtx, 'radar', chartLabels, OrderDefectRateRes, 'Order Defect rate');
    })
    
    function calculateRevenuePerEmployee(totalRevenue, numberOfEmployees) {
      if (
        typeof totalRevenue !== "number" ||
        typeof numberOfEmployees !== "number"
      ) {
        return "Invalid input: Total revenue and number of employees must be numbers.";
      }
    
      if (numberOfEmployees === 0) {
        return "Invalid input: Number of employees cannot be zero.";
      }
    
      return totalRevenue / numberOfEmployees;
      }
    
    RPEButton.addEventListener('click', ()=>{
      for(let i = 0; i < totalRevenue.length; i++) {
        const result = calculateRevenuePerEmployee(
          totalRevenue[i],
          numberOfEmployees[i]
        );
        
        if (typeof result === "number") {
          console.log("Revenue Per Employee:", result);
          RevenuePerEmployeeRes[i] = result;
        } else {
          console.error(result); 
          RevenuePerEmployeeRes[i] = null;
        }
      }

      const chartLabels = RevenuePerEmployeeRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'revenuePerEmployee'
      canvas.ariaLabel = 'Revenue Per Employee'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const revenuePerEmployeeCtx = document.getElementById('revenuePerEmployee').getContext('2d');
      createChart(revenuePerEmployeeCtx, 'line', chartLabels, RevenuePerEmployeeRes, 'Revenue Per Employee');
    })
    
    function calculateOperatingProfitMargin(operatingIncome, revenue) {
      if (typeof operatingIncome !== "number" || typeof revenue !== "number") {
        return "Invalid input: Operating income and revenue must be numbers.";
      }
    
      if (revenue === 0) {
        return "Invalid input: Revenue cannot be zero.";
      }
    
      return (operatingIncome / revenue) * 100;
    
    }
    
    OPMButton.addEventListener('click', ()=>{
      for(let i = 0; i < operatingIncome.length; i++) {
        const result = calculateOperatingProfitMargin(
          operatingIncome[i],
          revenue[i]
        );
        
        if (typeof result === "number") {
          console.log("Operating Profit Margin:", result + "%");
          OperatingProfitMarginRes[i] = result;
        } else {
          console.error(result); 
          OperatingProfitMarginRes[i] = null;
        }
      }

      const chartLabels = OperatingProfitMarginRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'operatingProfitMargin'
      canvas.ariaLabel = 'Operating Profit Margin Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const operatingProfitMarginCtx = document.getElementById('operatingProfitMargin').getContext('2d');
      createChart(operatingProfitMarginCtx, 'doughnut', chartLabels, OperatingProfitMarginRes, 'Operating Profit Margin');
    })
    
    function calculateEBITDA(operatingIncome, depreciationAmortization) {
      if (
        typeof operatingIncome !== "number" ||
        typeof depreciationAmortization !== "number"
      ) {
        return "Invalid input: Operating income and depreciation & amortization must be numbers.";
      }
    
      return operatingIncome + depreciationAmortization;
    }
    
    EBITDAButton.addEventListener('click', ()=>{
      for(let i = 0; i < operatingIncome.length; i++) {
        const result = calculateEBITDA(operatingIncome[i], depreciationAmortization[i]);
        
        if (typeof result === "number") {
          console.log(
            "Earnings Before Interest, Taxes, Depreciation, and Amortization (EBITDA):",
            result
          );
          EBITDARes[i] = result;
        } else {
          console.error(result);
          EBITDARes[i] = null;
        }
      }

      const chartLabels = EBITDARes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'earningsBeforeInterestTaxesDepreciationaAmortization'
      canvas.ariaLabel = 'Earnings Before Interest, Taxes, Depreciation, and Amortization'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const earningsBeforeInterestTaxesDepreciationaAmortizationCtx = document.getElementById('earningsBeforeInterestTaxesDepreciationaAmortization').getContext('2d');
      createChart(earningsBeforeInterestTaxesDepreciationaAmortizationCtx, 'bar', chartLabels, EBITDARes, 'Earnings Before Interest, Taxes, Depreciation, and Amortization');
    })
    
    function calculateFreeCashFlow(cashFromOperations, capitalExpenditures) {
      if (
        typeof cashFromOperations !== "number" ||
        typeof capitalExpenditures !== "number"
      ) {
        return "Invalid input: Cash from operations and capital expenditures must be numbers.";
      }
    
      return cashFromOperations - capitalExpenditures;
    }
    
    FCFButton.addEventListener('click', ()=>{
      for(let i = 0; i < cashFromOperations.length; i++) {
        const result = calculateFreeCashFlow(
          cashFromOperations[i],
          capitalExpenditures[i]
        );
        
        if (typeof result === "number") {
          console.log("Free Cash Flow:", result);
          FreeCashFlowRes[i] = result;
        } else {
          console.error(result); 
          FreeCashFlowRes[i] = null;
        }
      }

      const chartLabels = FreeCashFlowRes.map((value, index) => `Value ${index + 1}`);
    
      const card = document.createElement('div')
      card.classList.add('canvas-container')
      const canvas = document.createElement('canvas')
      canvas.id = 'freeCashFlow'
      canvas.ariaLabel = 'Free Cash Flow Chart'
      canvas.role = 'img'
      card.appendChild(canvas)
      document.getElementById('main-content').appendChild(card)
    
      const freeCashFlowCtx = document.getElementById('freeCashFlow').getContext('2d');
      createChart(freeCashFlowCtx, 'line', chartLabels, FreeCashFlowRes, 'Free Cash Flow');
    })
    
    function calculateDebtToEquityRatio(totalLiabilities, totalShareholdersEquity) {
      if (
        typeof totalLiabilities !== "number" ||
        typeof totalShareholdersEquity !== "number"
      ) {
        return "Invalid input: Total liabilities and total shareholders' equity must be numbers.";
      }
    
      if (totalShareholdersEquity === 0) {
        return "Invalid input: Total shareholders' equity cannot be zero.";
      }
    
      const debtToEquityRatio = totalLiabilities / totalShareholdersEquity;
    
      return debtToEquityRatio;
    }
    
    // const debtToEquityRatioResult = calculateDebtToEquityRatio(
    //   totalLiabilities,
    //   totalShareholdersEquity
    // );
    
    // if (typeof debtToEquityRatioResult === "number") {
    //   console.log("Debt-to-Equity Ratio:", debtToEquityRatioResult);
    // } else {
    //   console.error(debtToEquityRatioResult); // Display error message if inputs were invalid
    // }
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}