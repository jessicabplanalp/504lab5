//Step 3: Prepare the data
// labels along the x-axis
var years = [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050];
// For drawing the lines
var africa = [86,114,106,106,107,111,133,221,783,2478];
//var europe = [168,170,178,190,203,276,408,547,675,734];
//var latinAmerica = [40,20,10,16,24,38,74,167,508,784];
//var northAmerica = [6,3,2,2,7,26,82,172,312,433];
//var oceana = [3,3,2,2,2,2,6,13,30,57];

//Step 4: Rendering the chart
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      {
        data: africa
      }
    ]
  }
});
