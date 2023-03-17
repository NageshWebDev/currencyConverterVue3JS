<script setup>
import { ref } from 'vue'
import CurrencyStore from '../store/CurrecncyStore'
import { currencies } from '../currency';
import { storeToRefs } from 'pinia';

const userInput = ref();
const displayCurrencyList = ref(false);
const displayCurrencyName = ref("USD");

const {currencyAmountB} = storeToRefs(CurrencyStore());
const {updateCurrencyB, updateCodeB} = CurrencyStore();

function onClickHandler(code) {
    displayCurrencyName.value = code;
    displayCurrencyList.value = false;
    updateCodeB(code);
}

function onChangeHandler(){
    const inputAmount = userInput._value.value;
    updateCurrencyB(inputAmount);
}

</script>
<template>
    <section class="p-5">
        <input type="tex" placeholder="qweqwe" class="w-full text-2xl p-2 mb-3 pl-10" ref="userInput" @change="onChangeHandler" :value="currencyAmountB" />
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