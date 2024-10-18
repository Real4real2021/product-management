<?php require_once("../config/db_con.php") ?>
<?php

$associativeArray = array();
$selectForm = "SELECT * FROM product_management.managed_products";
$result = mysqli_query($con, $selectForm) or die (mysqli_query($con));
while ($row = mysqli_fetch_assoc($result)){
    $code = $row['code']
    $quantity = $row['quantity']
    $cost = $row['cost']
    $supplier = $row['supplier']
    $leadTime = $row['leadTime']
    $hoursPerUnit = $row['hoursPerUnit']
    $laborCostPerHour = $row['laborCostPerHour']
    $skillLevel = $row['skillLevel']
    $machineHoursPerUnit = $row['machineHoursPerUnit']
    $machineCostPerHour = $row['machineCostPerHour']
    $utilizationRate = $row['utilizationRate']
    $electricityUsage = $row['electricityUsage']
    $fuelConsumption = $row['fuelConsumption']
    $waterUsage = $row['waterUsage']
    $wasteMaterial = $row['wasteMaterial']
    $wasteDisposalCost = $row['wasteDisposalCost']
    $recyclingRate = $row['recyclingRate']
    $packagingMaterial = $row['packagingMaterial']
    $packagingCost = $row['packagingCost']
    $inboundTransportationCost = $row['inboundTransportationCost']
    $outboundTransportationCost = $row['outboundTransportationCost']
    $rentUtilities = $row['rentUtilities']
    $administrativeExpenses = $row['administrativeExpenses']
    $associativeArray[]=[
        'code' => $code,
        'quantity' => $quantity,
        'cost' => $cost,
        'supplier' => $supplier,
        'leadTime' => $leadTime,
        'hoursPerUnit' => $hoursPerUnit,
        'laborCostPerHour' => $laborCostPerHour,
        'skillLevel' => $skillLevel,
        'machineHoursPerUnit' => $machineHoursPerUnit,
        'machineCostPerHour' => $machineCostPerHour,
        'utilizationRate' => $utilizationRate,
        'electricityUsage' => $electricityUsage,
        'fuelConsumption' => $fuelConsumption,
        'waterUsage' => $waterUsage,
        'wasteMaterial' => $wasteMaterial,
        'wasteDisposalCost' => $wasteDisposalCost,
        'recyclingRate' => $recyclingRate,
        'packagingMaterial' => $packagingMaterial,
        'packagingCost' => $packagingCost,
        'inboundTransportationCost' => $inboundTransportationCost,
        'outboundTransportationCost' => $outboundTransportationCost,
        'rentUtilities' => $rentUtilities,
        'administrativeExpenses' => $administrativeExpenses,
    ];
};
echo json_encode($associativeArray);