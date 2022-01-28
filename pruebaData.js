// create data
var data2 = [
    ["Enero", 10000],
    ["Febrero", 12000],
    ["Marzo", 18000],
    ["Abril", 11000],
    ["Mayo", 7000],
    ["Junio", 1000],
    ["Julio", 5000],
    ["Agosto", 6000],
    ["Septiembre", 13000],
    ["Octubre", 5000],
    ["Noviembre", 10000],
    ["Diciembre", 12000],
    ["Marzo1", 18000],
    ["Abril1", 11000],
    ["Mayo1", 7000],
    ["Junio1", 1000],
    ["Julio1", 5000],
    ["Agosto1", 6000],
    ["Septiembre1", 13000],
    ["Octubre1", 5000]
];

// create a chart
chart = anychart.line();

// create a line series and set the data
var series = chart.line(data2);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();