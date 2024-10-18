// import { products } from "./script.js";
let products = JSON.parse(localStorage.getItem("product"));
let cogsData = JSON.parse(localStorage.getItem("cogsData"));
const test = document.getElementById("test");

test.addEventListener("click", () => {
  console.log(cogsData);
});

const productList = document.getElementById("product-list");

function displayCostOfGoodsSoldChart(cogsData) {
  console.log(cogsData);
  const ctx = document.getElementById("cogsChart").getContext("2d");
  const cogsChart = new Chart(ctx, {
    type: "pie", // or 'bar' for stacked bar chart
    data: {
      labels: [
        "Raw Materials",
        "Labor",
        "Machine Cost",
        "Energy Cost",
        "Packaging",
        "Overhead",
      ],
      datasets: [
        {
          label: "COGS Breakdown",
          data: cogsData,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {},
  });
}

function displayResourceUtilizationChart() {
  const ctx = document
    .getElementById("resourceUtilizationChart")
    .getContext("2d");
  const resourceUtilizationChart = new Chart(ctx, {
    type: "bar", // or 'line'
    data: {
      labels: ["Machine 1", "Machine 2", "Labor Team A"],
      datasets: [
        {
          label: "Resource Utilization",
          data: [10, 20, 30],
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              max: 100, // Set maximum to 100% for utilization
            },
          },
        ],
      },
    },
  });
}

function displayInventoryChart() {
  const ctx = document.getElementById("inventoryChart").getContext("2d");
  const inventoryChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Inventory Levels",
          data: [10, 20, 30, 40, 50, 60],
          fill: false,
          borderColor: "rgba(255, 206, 86, 1)",
          tension: 0.1,
        },
      ],
    },
    options: {
      // Customize chart options as needed
    },
  });
}

function displayProductionSalesChart() {
  const ctx = document.getElementById("productionSalesChart").getContext("2d");
  const productionSalesChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          type: "bar",
          label: "Production Quantity",
          data: [10, 20, 30, 40, 50, 60],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          type: "line",
          label: "Sales Quantity",
          data: [
            /* Insert sales quantities here */
          ],
          fill: false,
          borderColor: "rgba(255, 99, 132, 1)",
          tension: 0.1,
        },
      ],
    },
    options: {
      // Customize chart options as needed
    },
  });
}

const renderCogs = document.getElementById("render-cogs");
const renderResourceUtilization = document.getElementById("render-resource-utilization");
const renderInventory = document.getElementById("render-inventory");
const renderProductionSales = document.getElementById("render-production-sales");

renderCogs.addEventListener("click", () => {
    displayCostOfGoodsSoldChart(cogsData);

})
renderResourceUtilization.addEventListener("click", () => {
    displayResourceUtilizationChart();

})
renderInventory.addEventListener("click", () => {
    displayInventoryChart();

})
renderProductionSales.addEventListener("click", () => {
    displayProductionSalesChart();
})

