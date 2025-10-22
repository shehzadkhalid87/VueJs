<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
<!-- <script>
export default({
  data(){
    return{
      count : 0
    }
  },
  methods:{
    decrement(){
      this.count++
    },
    increment(){
      this.count--  
    }

  }
})
</script> -->
<template>
  <main>
    <div class="counter-card">
      <h2 class="title">The Current Count is...</h2>
      <h1 class="count">{{ count }}</h1>
      <div class="buttons">
        <button class="btn decrement">−</button>
        <button class="btn increment">+</button>button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #89f7fe, #66a6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
}

.counter-card {
  width: 320px;
  height: 320px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.counter-card:hover {
  transform: scale(1.03);
}

.title {
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 10px;
}

.count {
  font-size: 3rem;
  font-weight: bold;
  margin: 10px 0;
  color: #0077ff;
}

.buttons {
  display: flex;
  gap: 15px;
  margin-top: 15px;
}

.btn {
  width: 60px;
  height: 45px;
  border: none;
  border-radius: 10px;
  background: #0077ff;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn:hover {
  background: #005fd1;
  transform: translateY(-2px);
}

.decrement {
  background: #ff4d4d;
}

.decrement:hover {
  background: #e60000;
}
</style>
