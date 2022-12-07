/*
Logic:
 - whenever the "#compute" button is pressed
 - retrieve the operands ("#operand1", "#operand2")
 - compute the operation ("#operator")
 - output the result ("#result")
*/

new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data: () => ({
    operand1: "",
    operand2: "",
    operator: "+",
    result: ''
  }),
  watch: {
    operand1 (val) {
      this.compute()
    },
    operand2 (val) {
      this.compute()
    },
    operator (val) {
      this.compute()
    }
  },
  methods: {
    compute () {
      if (this.operand1 !== "" && this.operand2 !== "") {
        switch (this.operator) {
          case '+': this.result = (this.operand1 + this.operand2); break
          case '*': this.result = (this.operand1 * this.operand2); break
          case '-': this.result = (this.operand1 - this.operand2); break
          case '/': this.result = (this.operand1 / this.operand2); break
        }
      } else {
        this.result = 'you need to input values for both operands!'
      }
    }
  }
})