const url = "https://www.binance.com/exchange/public/product";

const vm = new Vue({
    el: '#app',
    data: {
        x1: {},
        x2: {}

        },
    mounted() {
        this.upDateFirst();
        this.upDateSec();
        this.timerFirst = setInterval(this.upDateFirst, 86400000);
        this.timerSec = setInterval(this.upDateSec, 10000);
        },

    methods:{
        upDateFirst: function() {
           axios.get(url).then(response1 => {
                this.x1 = response1.data['data']
                })
        },

        upDateSec: function() {
            axios.get(url).then(response2 => {
                this.x2 = response2.data['data'];
                console.log(response2.data['data']['1']['tradedMoney'])
            })
        },



        cancelAutoUpdate: function() {

            clearInterval(this.timerFirst)
            clearInterval(this.timerSec)
        },

        beforeDestroy() {
           clearInterval(this.timerFirst);
           clearInterval(this.timerSec);
        }
    }
});