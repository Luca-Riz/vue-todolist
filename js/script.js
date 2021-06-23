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
            aggTodo(){
                // console.log(this.newListIt)
                this.list.push(this.newListIt);
                this.newListIt = "";
            }
        }
    }
);