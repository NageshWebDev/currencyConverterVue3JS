import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { reference } from '../reference';

export default defineStore('CS', () => {
    console.log(reference)
    const currencyAmountA = ref(1);
    const currencyAmountB = ref(1);

    const currencyCodeA = ref('USD');
    const currencyCodeB = ref('USD');

    function computeMeA(currencyAmountA, currencyAmountB, currencyCodeA, currencyCodeB) {
        console.log(currencyAmountA.value)
        console.log(currencyAmountB.value)
        console.log(currencyCodeA.value)
        console.log(currencyCodeB.value)
        return 100;
    }

    function computeMeB(currencyAmountA, currencyAmountB, currencyCodeA, currencyCodeB) {
        console.log(currencyAmountA.value)
        console.log(currencyAmountB.value)
        console.log(currencyCodeA.value)
        console.log(currencyCodeB.value)
        return 100;
    }

    function updateCurrencyA(newAmount, newCurrCode) {
        console.log(newAmount);
        console.log(newCurrCode);

        currencyAmountA.value = newAmount;
        currencyCodeA.value = newCurrCode;
        const newConvertedCurrencyA = computeMeA(currencyAmountA, currencyAmountB, currencyCodeA, currencyCodeB)
        currencyAmountA.value = newConvertedCurrencyA;
        console.log(currencyAmountA.value)
        return currencyAmountA;
    }

    function updateCurrencyB(newAmount, newCurrCode) {
        currencyAmountB.value = newAmount;
        currencyCodeB.value = newCurrCode;
        const newConvertedCurrencyB = computeMeB(currencyAmountA, currencyAmountB, currencyCodeA, currencyCodeB)
        currencyAmountB.value = newConvertedCurrencyB;
        console.log(currencyAmountB.value)
        return currencyAmountA;
    }

    return { updateCurrencyA, updateCurrencyB, currencyAmountA, currencyAmountB }
})