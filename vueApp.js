const url = "https://www.binance.com/exchange/public/product";

const vm = new Vue({
    el: '#app',
    data: {
        symbols: {}
           },
    mounted() {
        this.upDate();
        this.timer = setInterval(this.upDate, 900000)
    },

    methods:{
        upDate: function() {
           axios.get(url).then(response => {
                this.symbols = response.data['data']
                })
        },
        cancelAutoUpdate: function() { clearInterval(this.timer) },

        beforeDestroy() { clearInterval(this.timer)}
    }
});