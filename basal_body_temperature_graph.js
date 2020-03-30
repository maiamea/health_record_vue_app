
        var app = new Vue({
            el: '#app',
            data: {
                h2: '基礎体温(℃)',
                
                basalBodyTemperatures: [
                    ["1 月", 36.7],
                    ["2 火", 36.0],
                    ["3 水", 36.9],
                    ["4 木", 37.0],
                    ["5 金", 37.1],
                    ["6 土", 36.7],
                    ["7 日", 36.0],
                    ["8 月", 36.9],
                    ["9 火", 37.0],
                    ["10 水", 37.1]
                ],
                measuredAt: "", 
                measuredValue: ""
            },
            methods: {
                addBasalBodyTemperature(){
                    console.log('addBasalBodyTemperature', this.measuredAt, this.measuredValue)
                    this.basalBodyTemperatures.push([this.measuredAt, Number(this.measuredValue)])
                    
                        this.drawGraph()
                    
                },
                
                drawGraph() {
                    // Load the Visualization API and the corechart package.
                    google.charts.load('current', { 'packages': ['corechart'] });



                    // Callback that creates and populates a data table,
                    // instantiates the pie chart, passes in the data and
                    // draws it.
                    const drawChart = () => {

                        // Create the data table.
                        var data = new google.visualization.DataTable();
                        data.addColumn('string', 'Topping');
                        data.addColumn('number', 'Slices');
                        // data.addRows([
                        //     ['1 月', 36.7],
                        //     ['2 火', 36.0],
                        //     ['3 水', 36.9],
                        //     ['4 木', 37.0],
                        //     ['5 金', 37.1]
                        // ]);
                        data.addRows(
                            this.basalBodyTemperatures
                        )

                        // Set chart options
                        var options = {
                            'title': 'How Much Pizza I Ate Last Night',
                            'width': 400,
                            'height': 300
                        };

                        // Instantiate and draw our chart, passing in some options.
                        var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
                        chart.draw(data, options);
                    }
                    // Set a callback to run when the Google Visualization API is loaded.
                    google.charts.setOnLoadCallback(drawChart);
                }
            }
        })
        window.app = app
