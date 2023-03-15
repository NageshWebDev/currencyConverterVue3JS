<script setup>
import { ref } from 'vue'
import CurrencyStore from '../store/CurrecncyStore'
import { currencies } from '../currency';

const displayCurrencyList = ref(false);
const displayCurrencyName = ref("INR");

const {updateCurrencyA} = CurrencyStore();

function onClickHandler(code) {
    console.log(code);
    displayCurrencyName.value = code;
    updateCurrencyA(code);
}

</script>
<template>
    <section class="p-5">
        <input type="tex" placeholder="qweqwe" class="w-full text-2xl p-2 mb-3" />
        <div @mouseenter="displayCurrencyList = true" @mouseleave="displayCurrencyList = false"
            class="w-[400px] transition-all relative">
            <div class=" bg-[#333] p-5 text-white text-center cursor-pointer">{{ displayCurrencyName }}</div>
            <div v-show="displayCurrencyList" class="flex flex-col bg-[lavender] text-black absolute w-full">
                <button v-for="currency in currencies" @click="onClickHandler(currency.countryCode)"
                    class="styleCurrencyBtn" :key="currency.countryCode">{{ currency.countryName }}</button>
            </div>
        </div>
    </section>
</template>