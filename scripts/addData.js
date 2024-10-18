const  MarketSizeElement = document.getElementById('    Market Size     ') 
const  TargetMarketPercentageElement = document.getElementById('  Target Market Percentage   ') 
const  SellingPriceElement = document.getElementById('     Selling Price      ') 
const  CosttoProduceEachUnitElement = document.getElementById(' Cost to Produce Each Unit  ') 
const  VariableCostsElement = document.getElementById('Variable Costs') 
const  GrossProfitElement = document.getElementById('Gross Profit ') 
const  TotalRevenueElement = document.getElementById('Total Revenue ') 
const  NumberofUnitsSoldElement = document.getElementById('Number of Units Sold  const') 
const  CustomerSatisfactionElement = document.getElementById('Customer Satisfaction ') 
const  CustomerLoyaltyElement = document.getElementById('Customer Loyalty  ') 
const  AverageTimeinUseElement = document.getElementById(' Average Time in Use  ') 
const  ReplacementRateElement = document.getElementById('  Replacement Rate   ') 
const  NumberofCompetitorsElement = document.getElementById('  Number of Competitors   ') 
const  AdvertisingSpendElement = document.getElementById('Advertising Spend  ') 
const  WebTrafficElement = document.getElementById('      Web Traffic       ') 
const  EmailSubscribersElement = document.getElementById('  Email Subscribers   ') 
const  EmailOpenRatesElement = document.getElementById('Email Open Rates ') 
const  EmailClickThroughRatesElement = document.getElementById(' Email Click-Through Rates  ') 
const  EmailConversionRateElement = document.getElementById('  Email Conversion Rate   ') 
const  OnlineSalesElement = document.getElementById(' Online Sales  ') 
const  InStoreSalesElement = document.getElementById(' In-Store Sales  ') 
const  TotalSalesElement = document.getElementById(' Total Sales  ') 
const  EmployeeCountElement = document.getElementById('   Employee Count    ') 
const  RnDExpensesElement = document.getElementById('RnD Expenses ') 
const  GeneralandAdministrativeExpensesElement = document.getElementById('General and Administrative Expenses ') 
const  CurrentAssetsElement = document.getElementById('Current Assets ') 
const  LongtermDebtElement = document.getElementById('Long-term Debt') 
const  ShareholderEquityElement = document.getElementById(' Shareholder Equity  ') 
const  OperatingIncomeElement = document.getElementById('Operating Income ') 
const  CapitalExpendituresElement = document.getElementById('Capital Expenditures') 
const  addData = document.getElementById('add-data') 

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

const MarketSize = MarketSizeElement.value;
const TargetMarketPercentage = TargetMarketPercentageElement.value;
const SellingPrice = SellingPriceElement.value;
const CosttoProduceEachUnit = CosttoProduceEachUnitElement.value;
const VariableCosts = VariableCostsElement.value;
const GrossProfit = GrossProfitElement.value;
const TotalRevenue = TotalRevenueElement.value;
const NumberofUnitsSold = NumberofUnitsSoldElement.value;
const CustomerSatisfaction = CustomerSatisfactionElement.value;
const CustomerLoyalty = CustomerLoyaltyElement.value;
const AverageTimeinUse = AverageTimeinUseElement.value;
const ReplacementRate = ReplacementRateElement.value;
const NumberofCompetitors = NumberofCompetitorsElement.value;
const AdvertisingSpend = AdvertisingSpendElement.value;
const WebTraffic = WebTrafficElement.value;
const EmailSubscribers = EmailSubscribersElement.value;
const EmailOpenRates = EmailOpenRatesElement.value;
const EmailClickThroughRates = EmailClickThroughRatesElement.value;
const EmailConversionRate = EmailConversionRateElement.value;
const OnlineSales = OnlineSalesElement.value;
const InStoreSales = InStoreSalesElement.value;
const TotalSales = TotalSalesElement.value;
const EmployeeCount = EmployeeCountElement.value;
const RnDExpenses = RnDExpensesElement.value;
const GeneralandAdministrativeExpenses = GeneralandAdministrativeExpensesElement.value;
const CurrentAssets = CurrentAssetsElement.value;
const LongtermDebt = LongtermDebtElement.value;
const ShareholderEquity = ShareholderEquityElement.value;
const OperatingIncome = OperatingIncomeElement.value;
const CapitalExpenditures = CapitalExpendituresElement.value;

addData.addEventListener('click', ()=>{
    post('function/addProducts.php', {
        MarketSize: MarketSize,
        TargetMarketPercentage: TargetMarketPercentage,
        SellingPrice: SellingPrice,
        CosttoProduceEachUnit: CosttoProduceEachUnit,
        VariableCosts: VariableCosts,
        GrossProfit: GrossProfit,
        TotalRevenue: TotalRevenue,
        NumberofUnitsSold: NumberofUnitsSold,
        CustomerSatisfaction: CustomerSatisfaction,
        CustomerLoyalty: CustomerLoyalty,
        AverageTimeinUse: AverageTimeinUse,
        ReplacementRate: ReplacementRate,
        NumberofCompetitors: NumberofCompetitors,
        AdvertisingSpend: AdvertisingSpend,
        WebTraffic: WebTraffic,
        EmailSubscribers: EmailSubscribers,
        EmailOpenRates: EmailOpenRates,
        EmailClickThroughRates: EmailClickThroughRates,
        EmailConversionRate: EmailConversionRate,
        OnlineSales: OnlineSales,
        InStoreSales: InStoreSales,
        TotalSales: TotalSales,
        EmployeeCount: EmployeeCount,
        RnDExpenses: RnDExpenses,
        GeneralandAdministrativeExpenses: GeneralandAdministrativeExpenses,
        CurrentAssets: CurrentAssets,
        LongtermDebt: LongtermDebt,
        ShareholderEquity: ShareholderEquity,
        OperatingIncome: OperatingIncome,
        CapitalExpenditures: CapitalExpenditures,
    }).then((Data)=>{
        console.log(Data)
    })
})