(function some() {

  var defaultValue = {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text: "What do you want to do next?",
        buttons: [{
          type: "web_url",
          url: "https://petersapparel.parseapp.com",
          title: "Show Website"
        }]
      }
    }
  };

  var buttonCard = Vue.extend(
  {
    props: {
      'content': {
        type: Object,
        default: defaultValue
      }
    },
    template: `
      <div>
        <div class="bablot-messenger-menu">
          <button v-on:click="toggleEditMode" v-if="isEditMode"> Done </button>
          <button v-on:click="toggleEditMode" v-else> Edit </button>
          <button v-on:click="addButton"> Add Button </button>
        </div>
        <div class="bablot-messenger-button">
          <div
            @keyup='updateText'
            @keydown='updateText'
            contenteditable="true"
            v-model="content.attachment.payload.text"
            class="text">
          </div>
          <div v-for="(index, button) in content.attachment.payload.buttons">
            <div
              @keyup='updateText($event, button)'
              @keydown='updateText($event, button)'
              contenteditable="true"
              class="fb-btn">
              {{ button.title }}
            </div>
            <div class="details" v-show="isEditMode">
              <input
                v-model="button.url"
                v-bind:class="['link', index == (content.attachment.payload.buttons.length - 1) ? 'last' : '']"/>
              <img class="delete" v-on:click="deleteButton($index)" src="assets/trash.svg" />
            </div>
          </div>
        </div>
      <div>
    `,
    compiled: function() {
      let textContentDiv = this.$el.querySelector('.text');
      textContentDiv.innerText = this.content.attachment.payload.text;
    },
    data: () => {
      return { isEditMode: false };
    },
    methods: {
      updateText: function(e, button) {
        let textToSet = e.target.innerText;
        if (button) {
          button.title = textToSet;
        } else {
          this.$set('content.attachment.payload.text', textToSet);
        }
      },
      toggleEditMode: function() {
        this.isEditMode = !this.isEditMode;
      },
      deleteButton: function(index) {
        this.content.attachment.payload.buttons.splice(index, 1)
      },
      addButton: function() {
        this.content.attachment.payload.buttons.push({
          type: "web_url",
          url: "https://petersapparel.parseapp.com",
          title: "Show Website"
        });
      }
    }
  });

  Vue.component('button-card', buttonCard);
})()
