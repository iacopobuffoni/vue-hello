const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Ciao bro ! Per ora con Boolean è tutto apposto ! :D',
        img: 'https://images.everyeye.it/img-artwork/the-fast-and-the-furious-tokyo-drift-v1-798579-1280x720.webp'
      }
    }
  }).mount('#app')