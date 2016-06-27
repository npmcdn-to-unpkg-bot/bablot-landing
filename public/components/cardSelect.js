var cardSelect = Vue.extend({
  props: ['rowId', 'default'],
  template: `
    <select v-model="selected" >
      <option value="text" selected>Text</option>
      <option value="image">Image</option>
    </select>
  `,
  activate: function(done) {
    this.selected = this.default;
    done();
  },
  watch: {
    selected: function(currentValue, oldValue) {
      this.$dispatch('selection-changed', { currentValue, oldValue });
    }
  }
});

Vue.component('card-select', cardSelect);
