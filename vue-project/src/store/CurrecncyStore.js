import { ref } from "vue";
import { defineStore } from "pinia";
import { reference } from "../reference";

export default defineStore("CS", () => {
  const currencyAmountA = ref(1);
  const currencyAmountB = ref(1);

  const currencyCodeA = ref("USD");
  const currencyCodeB = ref("USD");

  const focusOnA = ref(false)
  const focusOnB = ref(false)

  function focusOnAActive() {
    focusOnA.value = true;
    focusOnB.value = false;
  }

  function updateCurrencyA(newCurrencyAmountA, updateWithoutFocus) {
    currencyAmountA.value = newCurrencyAmountA;
    if (focusOnA.value || updateWithoutFocus) {
      const AwrtUSD = reference.filter(
        (curr) => curr.code === currencyCodeA.value
      );
      const BwrtUSD = reference.filter(
        (curr) => curr.code === currencyCodeB.value
      )
      currencyAmountB.value = (AwrtUSD[0].wrtUSD / BwrtUSD[0].wrtUSD) * currencyAmountA.value;
    }
    return currencyAmountA.value;
  }

  function updateCodeA(newCurrencyCodeA) {
    currencyCodeA.value = newCurrencyCodeA;
  }

  function focusOnBActive() {
    focusOnA.value = false;
    focusOnB.value = true;
  }

  function updateCurrencyB(newCurrencyAmountB, updateWithoutFocus) {
    currencyAmountB.value = newCurrencyAmountB;
    if (focusOnB.value || updateWithoutFocus) {
      const AwrtUSD = reference.filter(
        (curr) => curr.code === currencyCodeA.value
      );
      const BwrtUSD = reference.filter(
        (curr) => curr.code === currencyCodeB.value
      )
      currencyAmountA.value = (BwrtUSD[0].wrtUSD / AwrtUSD[0].wrtUSD) * currencyAmountB.value;
    }
    return currencyAmountB.value;
  }

  function updateCodeB(newCurrencyCodeB) {
    currencyCodeB.value = newCurrencyCodeB;
  }

  return {
    updateCurrencyA,
    updateCodeA,
    updateCurrencyB,
    updateCodeB,
    currencyAmountA,
    currencyCodeA,
    currencyAmountB,
    currencyCodeB,
    focusOnAActive,
    focusOnBActive
  };
});
