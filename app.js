var app = new Vue({
    el: '#app',
    data(){
        return {
            skor: 0,
            JumlahSoal: 10,
            kunciJawaban: [],
            JawabanSiswa: [],
            hasil: {
                benar: 0,
                salah: 0,
                nilai: 0,
            }
        }
    },

    watch: {
        JawabanSiswa(value){
            this.resetHasil()
            for (let i = 0; i < this.JawabanSiswa.length; i++) {
            
                if (this.JawabanSiswa[i] === this.kunciJawaban[i]) {

                    this.hasil.benar++
                    
                }else {
                    this.hasil.salah++
                }
            }
            this.hasil.nilai = this.hasil.benar * this.skor
            
        }    
    },

    methods: {
        resetHasil() {
            this.hasil.benar = 0
            this.hasil.salah = 0
            this.hasil.nilai = 0
        }
    }
}) 