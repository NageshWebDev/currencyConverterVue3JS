<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import CurrencyStore from '../store/CurrecncyStore'
import { currencies } from '../currency';
import { storeToRefs } from 'pinia';

const displayCurrencyList = ref(false);
const displayCurrencyName = ref("USD");
const displayCurrencyCountry = ref("US Dollar");
const displayCurrencyIcon = ref("$");

const { currencyAmountA } = storeToRefs(CurrencyStore());
const { updateCurrencyA, updateCodeA, focusOnAActive } = CurrencyStore();

watch(currencyAmountA, () => {
    if (currencyAmountA.value) {
        const onlyAmount = String(currencyAmountA.value).match(/[^a-zA-Z]/g).join('')
        updateCurrencyA(+onlyAmount, false);
    } else currencyAmountA.value = 0;
})

function onClickHandler(code, countryCurrency, icon) {
    displayCurrencyName.value = code;
    displayCurrencyList.value = false;
    displayCurrencyCountry.value = countryCurrency;
    displayCurrencyIcon.value = icon;

    updateCodeA(code);
    updateCurrencyA(currencyAmountA.value, true);
}

onBeforeMount(() => {
    currencies.sort(
        (countryA, countryB) => {
            if (countryA.countryName < countryB.countryName) return -1
            return 1
        }
    )
});
</script>


<template>
    <section class="p-5">
        <input type="tex" placeholder="Enter Amount" class="styleTextFiled" v-model="currencyAmountA"
            @focus="focusOnAActive" />
        <div @mouseenter="displayCurrencyList = true" @mouseleave="displayCurrencyList = false"
            class="transition-all relative">
            <div class="styleDisplayBtn"><span
                    class="text-black font-bold w-[40px] h-[40px] rounded-full bg-purple-300 flex justify-center items-center">{{
                        displayCurrencyIcon }}</span> <span class="font-bold text-xl">{{ displayCurrencyCountry }}</span></div>
            <div v-show="displayCurrencyList" class=styleCurrencyList>
                <button v-for="currency in currencies"
                    @click="onClickHandler(currency.countryCode, currency.countryCurrency, currency.currencyIcon)"
                    class="styleCurrencyBtn" :key="currency.countryCode"><span class=styleCurrencyIcon>{{
                        currency.currencyIcon }}</span> <span>{{ currency.countryName
    }}</span></button>
            </div>
        </div>
    </section>
</template>