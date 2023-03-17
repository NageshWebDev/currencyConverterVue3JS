import { ref } from "vue";
import { defineStore } from "pinia";
import { reference } from "../reference";

export default defineStore("CS", () => {
  console.log(reference);
  const currencyAmountA = ref(1);
  const currencyAmountB = ref(1);

  const currencyCodeA = ref("USD");
  const currencyCodeB = ref("USD");

  function computeMeA(
    currencyAmountA,
    currencyAmountB,
    currencyCodeA
  ) {
    const convertValue = reference.filter(
      (curr) => curr.code === currencyCodeA
    );
    currencyAmountB.value = currencyAmountA.value * convertValue[0].wrtUSD;
    return currencyAmountA.value;
  }

  function computeMeB(
    currencyAmountA,
    currencyAmountB,
    currencyCodeB
  ) {
    const convertValue = reference.filter(
      (curr) => curr.code === currencyCodeB
    );
    currencyAmountB.value = currencyAmountA.value / convertValue[0].wrtUSD;
    return currencyAmountB.value;
  }

  function updateCurrencyA(newCurrencyAmountA) {
    currencyAmountA.value = newCurrencyAmountA;
    return currencyAmountA.value;
  }

  function updateCodeA(newCurrencyCodeA) {
    console.log(
      "🚀 ~ file: CurrecncyStore.js:57 ~ updateCodeA ~ newCurrencyCodeA:",
      newCurrencyCodeA
    );

    const newConvertedCurrencyA = computeMeA(
      currencyAmountA,
      currencyAmountB,
      newCurrencyCodeA,
    );
    console.log(
      "🚀 ~ file: CurrecncyStore.js:65 ~ updateCodeA ~ newConvertedCurrencyA:",
      newConvertedCurrencyA
    );
    currencyAmountA.value = newConvertedCurrencyA;
    return currencyAmountA.value;
  }

  function updateCurrencyB(newCurrencyAmountB) {

    currencyAmountB.value = newCurrencyAmountB;
    return currencyAmountB.value;
  }

  function updateCodeB(newCurrencyCodeB) {


    const newConvertedCurrencyB = computeMeB(
      currencyAmountA,
      currencyAmountB,
      newCurrencyCodeB,
    );
    currencyAmountB.value = newConvertedCurrencyB;
    return currencyAmountB.value;
  }



  return {
    updateCurrencyA,
    updateCodeA,
    updateCurrencyB,
    updateCodeB,
    currencyAmountA,
    currencyAmountB,
  };
});
