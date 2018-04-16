
/////////////////////////////////////////////////////// Global Theme Options///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Signika:400,700',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

// Add the background image to the container
Highcharts.wrap(Highcharts.Chart.prototype, 'getContainer', function (proceed) {
    proceed.call(this);
    this.container.style.background =
        '#F3F4F7';
});


Highcharts.theme = {
    colors: ['#2b3142', '#c9ccd6', '#4a5470', '#7798BF', '#aaeeee',
        '#ff0066', '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: null,
        style: {
            fontFamily: 'Signika, serif'
        }
    },
    title: {
        style: {
            color: 'black',
            fontSize: '22px',
            fontWeight: 'bold'
        }
    },

    subtitle: {
        style: {
            color: 'black',
            fontSize: '18px'
        }
    },
    tooltip: {
        borderWidth: 0
    },
    legend: {
        itemStyle: {
            fontWeight: 'bold',
            fontSize: '13px',
            color: 'black'
        }
    },
    xAxis: {
        labels: {
            style: {
                color: 'black'
            }
        }
    },
    yAxis: {
        labels: {
            style: {
                color: 'black'
            }
        },
        title: {
            style: {
                color: 'black'
            }
        }
    },
    plotOptions: {
        series: {
            shadow: true
        },
        candlestick: {
            lineColor: 'black'
        },
        map: {
            shadow: false
        }
    },

    // General
    background2: '#E0E0E8'

};


// Apply the theme
Highcharts.setOptions(Highcharts.theme);



/////////////////////////////////////////////////////// CHART 1///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

Highcharts.chart('chart0', {
     colors: ['#2b3142', '#4a5470', '#c9ccd6',  '#7798BF'],
    chart: {
        type: 'bar'
    },
    tooltip: {
        valueSuffix: '%'
    },
    title: {
        text: "Are Britain's national news outlets pro-Brexit or anti-Brexit?" 
    },
    subtitle: {
        text: 'For each of the following news outlets, please say whether you think they are pro-Brexit, anti-Brexit or neither.%'
    },
    xAxis: {
        categories: ['The Daily Mail','The Sun','The Daily Express','The Daily Telegraph','The Daily Mirror','The Times','Sky News','BBC News','ITV News','The Guardian','The Independent','Channel 4 News','The i']
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percent',
            align: 'high'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Pro-Brexit',
        data: [40,37,31,23,15,14,12,8,6,5,5,3,3]
    }, {
        name: "Neither",
        data: [3,3,2,4,4,7,14,24,24,4,10,19,9]
    }, {
        name: "Don't Know",
        data: [51,54,60,63,63,65,63,41,58,58,63,60,73]
    }, {
        name: "Anti-Brexit",
        data: [6,7,7,10,19,15,11,27,13,33,23,18,15]
    }, 
    ]
});

/////////////////////////////////////////////////////// CHART 2///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

Highcharts.chart('chart1', {
    chart: {
        type: 'bar'
    },
    tooltip: {
        valueSuffix: '%'
    },
    title: {
        text: 'Stay or go? Do Europeans want Britain to leave the EU'
    },
    subtitle: {
        text: 'At this point would you prefer that Britain stays in or leaves the EU?%'
    },
    xAxis: {
        categories: ['Denmark', 'Finland', 'Germany', 'Sweden', 'France', 'Norway']
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percent',
            align: 'high'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Prefer that Britain stay',
        data: [63, 59, 58, 58, 36, 34]
    }, {
        name: "Don't know",
        data: [22, 22, 25, 25, 32, 34]
    }, {
        name: 'Prefer that Britain leaves',
        data: [15, 19, 17, 17, 32, 32]
    }, 
    ]
});

/////////////////////////////////////////////////////// CHART 3///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

Highcharts.chart('chart2', {
    colors: ['#2b3142', '#4a5470', '#c9ccd6',  '#7798BF'],
    chart: {
        type: 'bar'
    },
    tooltip: {
        valueSuffix: '%'
    },
    title: {
        text: 'Will Brexit leave the EU better or worse off?'
    },
    xAxis: {
        categories: ['Germany', 'France', 'Norway', 'Sweden', 'Finland', 'Denmark' ]
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percent',
            align: 'high'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Better off after Britain leaves',
        data: [8, 12, 10, 4, 9, 4]
    }, {
        name: "Not really make ant difference",
        data: [47, 49, 29, 29, 15, 19]
    }, {
        name: "Don't Know",
        data: [20, 20, 24, 20, 17, 16]
    }, {
        name: "Worse off after Britain leaves",
        data: [25, 19, 37, 47, 59, 61]
    }, 
    ]
});


/////////////////////////////////////////////////////// CHART 4///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


Highcharts.chart('chart3', {
    colors: ['#aa4646', '#dd9696', '#4a5470', '#7798bf'],
    chart: {
        type: 'bar'
    },
   
    title: {
        text: 'Few Leave voters still expect Brexit to have any negative impact'
    },
    subtitle: {
        text: '% of Leave and Remain voters with negative Brexit expectations, October 2016 vs October 2017'
    },
    xAxis: {

        categories: ['The economy will get worse in the SHORT term', 'The price of food and groceries will go up', 'The price of your weekly shop will go up', 'British companies will do worse', 'The economy will get worse in the LONG term', 'Your personal finances will get worse', 'British society will get worse', 'You and your family will have worse access to public services', 'Laws passed by Parliament will be worse', 'Your own job will be less secure', 'Crime in Britain will be higher'],
        title: {
            text: null
        },
        labels: {
            style: {
                width: '70px',
            }   
        }
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percent',
            align: 'high'
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        series: {
            groupPadding: 0.05,
        },
        bar: {
            dataLabels: {
                enabled: true
            }
        }
    },
    legend: {
         reversed: false
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Leavers in 2016',
        data: [23, 24, 27, 6, 4, 9, 3, 4, 1, 2, 2]
    }, {
        name: 'Leavers in 2017',
        data: [25, 27, 30, 8, 5, 8, 4, 5, 2, 2, 2]
    }, {
        name: 'Remainers in 2016',
        data: [85, 82, 81, 62, 57, 57, 50, 40, 39, 25, 18]
    }, {
        name: 'Remainers in 2017',
        data: [81, 82, 81, 72, 62, 57, 60, 46, 44, 25, 22]
    }]
});


/////////////////////////////////////////////////////// CHART 5///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

Highcharts.chart('chart4', {
    colors: ['#7798BF', '#2b3142',],
    chart: {
        type: 'bar'
    },
    tooltip: {
        valueSuffix: '%'
    },
    title: {
        text: 'What would make Leave voters change their mind about Brexit?'
    },
    subtitle: {
        text: 'If Brexit meant the following things would happen between now and leaving the EU, how would it affect your view on whether or not we should still leave?'
    },
    xAxis: {
        categories: ['A significant increase in unemployment', "Much of London's financial services industry leaving the UK" , 'The price of a weekly grocery shop going up 100%', 'The EU putting up tariffs against British exports', 'Scotland leaving the UK', 'British people need a visa to travel everywhere else in Europe' ]
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent',
            align: 'high'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: "Unsure whether Brexit should still happen or not",
        data: [13, 7, 7, 7, 4, 3]
    }, {
        name: 'Would now oppose Brexit',
        data: [7, 4, 3, 3, 3, 1]
    }, 
    ]
});


/////////////////////////////////////////////////////// CHART 6///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


Highcharts.chart('chart5', {
    legend: {
        enabled: false
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Most Britons don't believe Brexit negotiations can make the difference between a good or bad Brexit"
    },
    subtitle: {
        text: 'Which of the following best reflects your view?% '
    },
    xAxis: {
        categories: [
           
           'Brexit will be good for Britain whatever happens in the Brexit negotiations',
           'Brexit will be good for Britain but the wrong deal in the negotiations could limit the benefits we get',
           "Brexit will likely be good for Britain but  won't be if the wrong deal is agreed in negotiations",
           "Brexit will likely be bad for Britain but  won't be if the right deal is agreed in negotiations",
           'Brexit will be bad for Britain but the right deal in the negotiations could limit the damage caused',
           'Brexit will be bad for Britain whatever happens in the Brexit negotiations'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        series: {
        groupPadding: 0.01
        },
        column: {
            pointPadding: 0.15,
            borderWidth: 0
        }
    },
    series: [{
        data: [17, 15, 11, 8, 18, 18]
    }]
});

/////////////////////////////////////////////////////// CHART 7///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////

Highcharts.chart('chart6', {
     colors: ['#2b3142',  '#c9ccd6', '#4a5470',  '#7798BF'],
    chart: {
        type: 'bar'
    },
    tooltip: {
        valueSuffix: '%'
    },
    title: {
        text: "Boris is the biggest Brexiteer according to Conservative members" 
    },
    subtitle: {
        text: 'For each of the following, please say whether you think they want Britain to stay in or get out of the European Union. % of 927 Conservative party members'
    },
    xAxis: {
        categories: ['Boris Johnson','David Davis','Michael Gove','Jacob Reese-Mogg','Liam Fox','Andrea Leadsom','Theresa May','Michael Fallon','Damian Green','Jeremy Hunt','Amber Rudd','Philip Hammond','Justine Greening','The Queen','David Cameron']
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'Percent',
            align: 'high'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [  {
        name: "Wants Britain to stay in the EU",
        data: [6,5,7,8,8,12,35,26,28,36,48,61,35,12,84]
    }, {
        name: "Don't Know",
        data: [5,13,12,17,21,28,12,40,47,42,30,21,48,48,9]
    }, {
        name: 'Wants Britain to get out of the EU',
        data: [89,82,81,75,71,61,53,34,25,22,22,18,17,40,7]
    },
    ]
});

/////////////////////////////////////////////////////// CHART 8///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


Highcharts.chart('chart7', {
    colors: ['#2b3142',   '#4a5470'],
    legend: {
        enabled: true
    },
    chart: {
        type: 'column'
    },
    title: {
        text: "Brexit Referendun"
    },
    subtitle: {
        text: 'Preference and turnout by age'
    },
    xAxis: {
        categories: [
           
           '18-24',
           '25-34',
           '35-44',
           '45-54',
           '55-64',
           '65+'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Percent'
        }
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
        series: {
        groupPadding: 0.1
        },
        column: {
            pointPadding: 0.01,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Turnout',
        data: [36,58,72,75,81,83]
    }, {
        name: 'Voted Remain',
        data: [66,63,55,47,44,37]
    }]
});