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
          <button v-on:click="toggleEditMode"> Edit </button>
          <button v-on:click="addButton"> Add Button </button>
        </div>
        <div class="bablot-messenger-button">
          <div
            contenteditable="true"
            v-model="content.attachment.payload.text"
            class="text">
          </div>
          <div v-for="button in content.attachment.payload.buttons">
            <div
              contenteditable="true"
              class="fb-btn">
              {{ button.title }}
            </div>
            <div class="details" v-show="isEditMode">
              <input v-model="button.url" class="link" />
              <button class="delete">delete</button>
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
      toggleEditMode: function() {
        this.isEditMode = !this.isEditMode;
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
