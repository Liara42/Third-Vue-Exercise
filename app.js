Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the Course and Learn Vue!',
      courseGoalB: 'Master Vue and build amazing apps!',
      vueLink: 'https://vuejs.org',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
}).mount('#user-goal');
