const app = new Vue(
    {
        el: '#app',
        data: {
            newListIt: "",
            list: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ],
            barrato: "false",
        },

        methods: {
            // se non vuoto aggiungi alla lista
            aggTodo: function() {
                if(this.newListIt != ""){
                // console.log(this.newListIt)
                this.list.push(this.newListIt);
                this.newListIt = "";}
            },

            // cancella elemento corrispondente all'index dalla lista
            delTodo(i){
                // console.log(i);
                this.list.splice(i,1)
            },

            delTuttiTodo(){
                alert("Attenzione, stai svuotando l'intera lista"),
                this.list= [];
                // console.log(this.list);
            },

            barrato: function(i){
                if(this.barrato(i) == false){
                    return this.barrato(i) = true
                } else {
                    return this.barrato(i) = false
                }
            }
        },

        mounted() {
            this.barrato = false;
            console.log('this barrato = ' + this.barrato);
        }
    }
);