anychart.onDocumentReady(function () {
    // The data used in this sample can be obtained from the CDN
    // https://cdn.anychart.com/csv-data/msft-daily-short.js
    // https://cdn.anychart.com/csv-data/orcl-daily-short.js
    // https://cdn.anychart.com/csv-data/csco-daily-short.js

    // create data tables on loaded data
    var msftDataTable = anychart.data.table();
    msftDataTable.addData(get_msft_daily_short_data()); 

    var orclDataTable = anychart.data.table();
    orclDataTable.addData(get_orcl_daily_short_data()); 

    var cscoDataTable = anychart.data.table();
    cscoDataTable.addData(get_csco_daily_short_data()); 

    // create stock chart
    var chart = anychart.stock();

    // create plot on the chart with line series
    var plot = chart.plot(0);
    // set grid settings
    plot.yGrid(true).xGrid(true).yMinorGrid(true).xMinorGrid(true);

    // create line series on the plot
    plot
      .line()
      .data(msftDataTable.mapAs({ value: 4 }))
      .name('MSFT')
      .stroke('1.5 #6f3448');

    // create marker series on the plot
    plot
      .marker()
      .data(orclDataTable.mapAs({ value: 4 }))
      .name('ORCL')
      .fill('#857600 0.7')
      .stroke('#857600')
      .type('diamond')
      .legendItem({ iconType: 'marker' });

    // create marker series on the plot
    plot
      .marker()
      .data(cscoDataTable.mapAs({ value: 4 }))
      .name('CSCO')
      .fill('#f1a122 0.7')
      .stroke('#f1a122')
      .type('pentagon')
      .legendItem({ iconType: 'marker' });

    // create scroller series with mapped data
    chart.scroller().line(msftDataTable.mapAs({ value: 4 }));

    // set container id for the chart
    chart.container('container2');
    // initiate chart drawing
    chart.draw();

    // create range picker
    var rangePicker = anychart.ui.rangePicker();
    // init range picker
    rangePicker.render(chart);

    // create range selector
    var rangeSelector = anychart.ui.rangeSelector();
    // init range selector
    rangeSelector.render(chart);
  });