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
            aggTodo: function() {
                if(this.newListIt != ""){
                // console.log(this.newListIt)
                this.list.push(this.newListIt);
                this.newListIt = "";}
            },

            delTodo(i){
                // console.log(i);
                this.list.splice(i,1)
            }
        }
    }
);