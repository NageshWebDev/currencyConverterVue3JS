<script setup>
import CurrencyA from './components/CurrencyA.vue';
import CurrencyB from './components/CurrencyB.vue';
</script>

<template>
  <p class="shadow-lg shadow-[#222] text-center mt-5 text-5xl text-white bg-[#333] py-5" style="font-family: 'Maven Pro', sans-serif;">
    <span class="text-purple-400 text-7xl">C</span>urrency <span class="text-purple-400 text-7xl">C</span>onverter <i class="text-purple-400 fa-solid fa-cash-register pl-2 text-7xl"></i>
  </p>
  <section class="flex justify-around items-center mt-10 min-w-fit">
    <CurrencyA />
    <p class="text-4xl text-white"><i class="fa-solid fa-equals"></i></p>
    <CurrencyB />
  </section>
</template>