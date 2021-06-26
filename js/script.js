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
            barrato: [],
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

            barra: function(index){
                let element = document.getElementById('indice' + index);
                console.log(element);
                element.classList.toggle('barrato');
            }
        },

        mounted() {
            this.barrato = [];
            console.log('this barrato = ' + this.barrato);
        }
    }
);