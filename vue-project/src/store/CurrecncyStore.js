import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('CS', () => {
    const currencyA = ref('INR');
    const currencyB = ref('INR');

    const newConvertedCurrencyA = ref(1);
    const newConvertedCurrencyB = ref(1);

    function updateCurrencyA(newCurr) {
        console.log('I am updateCurrencyA from STORE')
        console.log(newCurr)
        currencyA.value = newCurr
        console.log('currencyA.value from STORE', currencyA.value)
        console.log('currencyB.value from STORE', currencyB.value)

        return newConvertedCurrencyA = computed(() => {

        })
    }

    function updateCurrencyB(newCurr) {
        console.log('I am updateCurrencyB from STORE')
        console.log(newCurr)
        currencyB.value = newCurr
        console.log('currencyA.value from STORE', currencyA.value)
        console.log('currencyB.value from STORE', currencyB.value)

        return newConvertedCurrencyB = computed(() => {

        })
    }

    return { updateCurrencyA, updateCurrencyB, newConvertedCurrencyA, newConvertedCurrencyB }
})