const {createApp} = Vue;

createApp({

    data() {

        return {
            tasks: [
                {
                    title: "task 1",
                    done: false,
                },
                {
                    title: "task 2",
                    done: false,
                },
                {
                    title: "task 3",
                    done: false,
                }
            ]
        }

    },

    methods: {
       isDone(index) {
            if (this.tasks[index].done === false) {
                this.tasks[index].done = true;
            } else if (this.tasks[index].done === true) {
                this.tasks[index].done = false;
            }
       },

       deleteTask(index) {
            this.tasks.splice(index, 1)
       },
    }

}).mount('#app');