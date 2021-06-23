const app = new Vue(
    {
        el: '#app',
        data: {
            newListIt: "",
            list: [
                'Fare i compiti',
                'Fare la spesa',
                'Fare il bucato'
            ]
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
                this.list= ""
            }
        }
    }
);