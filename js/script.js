const {createApp} = Vue;

createApp({

    data() {

        return {
            tasks: [
                {
                    title: "task 1",
                    done: false,
                    deleted: false,
                },
                {
                    title: "task 2",
                    done: false,
                    deleted: false,
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

       delete(index) {
            this.tasks[index].deleted = true;
       },
    }

}).mount('#app');