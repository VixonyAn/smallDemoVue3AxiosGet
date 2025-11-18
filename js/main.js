const baseUrl = "http://localhost:5180/api/cars"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Cars Vue App',
            allCarList: [],
            carList: [],
            carVendor: '',
            carModel: '',
            carPrice: 0,
            carId: 0,
            statusCode: '',
        }
    },
    methods: {
        myMethod(){

        },
        getAllCars(){
            console.log("er i metoden getAllCars");

            axios.get(baseUrl)
            .then(
                response => {
                    console.log(response)
                    this.allCarList = response.data
                    this.statusCode = response.status
                    this.carList = this.allCarList //initializes
                }
            )
            .catch(
                 error => {
                    console.log(error)
                    this.statusCode = error.response.status
                 } 
            )
        },

        sortByPrice(){
            console.log("er i metoden sortByPrice");
            //this.carList = this.allCarList //laver en kopi af arrayet
            this.carList.sort((a, b) => b.price - a.price) //sorterer
        },
        sortByPriceAsc(){
            console.log("er i metoden sortByPriceAsc");
            this.carList.sort((a,b) => a.price - b.price)
        },
        filterPrice(){
            console.log("er i metoden filterPrice");
            //this.carList.filter((car) => car.price < 500000)
            this.carList = this.allCarList.filter((car) => car.price < 500000)
        },

        saveCar() {
            console.log("Is in the method saveCar");
            axios.post(baseUrl, {"vendor": this.carVendor, "model": this.carModel, "price": this.carPrice})
            .then(
                response => {
                    console.log(response)
                    console.log(response.data)
                }
            )
            .catch(
                 error => {
                    console.log(error)
                 } 
            )
        },
        deleteCar() {
            console.log("Is in the method deleteCar");
            axios.delete(baseUrl + "/" + this.carId)
            .then(
                response => {
                    console.log(response)
                    console.log(response.data)
                }
            )
            .catch(
                 error => {
                    console.log(error)
                 } 
            )
        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
