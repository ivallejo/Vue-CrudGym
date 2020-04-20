const app = new Vue({
  el: '#app',
  data() {
    return {
      title: 'Vue!',
      tasks: [],
      newTask: '',
    };
  },
  methods: {
    addTask() {
      //console.log('diste click', this.newTask);
      this.tasks.push({ name: this.newTask, status: true });
      this.newTask = '';
      localStorage.setItem('gym-vue', JSON.stringify(this.tasks));
    },
    editTask(i) {
      //this.task.slice(i, 1);s
      this.tasks[i].status = false;
      localStorage.setItem('gym-vue', JSON.stringify(this.tasks));
    },
    removeTask(i) {
      this.tasks.splice(i, 1);
      localStorage.setItem('gym-vue', JSON.stringify(this.tasks));
    },
  },
  created: function () {
    let dataDB = JSON.parse(localStorage.getItem('gym-vue'));
    dataDB == null ? (this.tasks = []) : (this.tasks = dataDB);
  },
});

//8208055302  -- 20 de cada mes / Junio Inicio
