function changeTemplateType(el, rowId) {
  let currentSelect = el.options[el.selectedIndex].value;
  let builderRow = document.querySelector(`#builder_row_${rowId}`);
  let previousCard = builderRow.querySelector('.bablot-messenger-' + previousSelect);
  let currentCard = builderRow.querySelector('.bablot-messenger-' + currentSelect);
  previousCard.style.display = 'none';
  currentCard.style.display = 'block';
  el.blur();
}

function cacheTemplate(el) {
  previousSelect = el.options[el.selectedIndex].value;
}

function removeRow(rowId) {
  let user = firebase.auth().currentUser;
  let builderRow = document.querySelector(`#builder_row_${rowId}`);
  builderRow.remove();
  gatherFaqs((faqs) => {
    firebase.database().ref('users/' + user.displayName + '@' + user.uid).set(faqs);
  });
}

function addNewBuilderRow() {
  gatherFaqs((faqs) => {
    if (faqs.length < 15) {
      let builder = document.querySelector(`.builder`);
      let builderRow = builderRowTemplate(faqs.length);
      builder.appendChild(builderRow);
    } else {
      alert('Maximum FAQs reached!')
    }
  });
}

function updateImage(rowId) {
  let url = document.querySelector(`#imageUrl_${rowId}`).value;
  let imagePreview = document.querySelector(`#previewImage_${rowId}`);
  imagePreview.src = url;
}

function setAnswer(builderRow, answer) {
  let cardElement = builderRow.querySelector('.card');
  if (answer.type === 'text') {
    cardElement.querySelector('.bablot-messenger-text').innerHTML = answer.response.text;
  } else if (answer.type === 'image') {
    let select = builderRow.querySelector('select');
    select.value = 'image';
    previousSelect = "text";
    select.onchange(select);
    cardElement.querySelector('img').src = answer.response.url;
  }
}
