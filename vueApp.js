const url = "https://www.binance.com/exchange/public/product";

const vm = new Vue({
    el: '#app',
    data: {
        symbols: {},
        tradedmoney: []

    },
    mounted() {
        this.upDate();
        this.timer = setInterval(this.upDate, 10000)
    },

    methods:{

        upDate: function() {
           axios.get(url).then(response => {
                this.symbols = response.data['data']
                this.tradedmoney = response.data['data']['1']['tradedMoney']
            console.log(this.symbols);
            console.log(this.tradedmoney);

            })
        },
        cancelAutoUpdate: function() { clearInterval(this.timer) },


        beforeDestroy() {
            clearInterval(this.timer)
        }

    }
});