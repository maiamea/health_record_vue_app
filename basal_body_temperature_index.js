
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
                
            }
        })
        window.app = app
