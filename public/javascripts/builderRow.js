function changeTemplateType(el) {
  let currentSelect = el.options[el.selectedIndex].value;
  let previousCard = document.querySelector('.bablot-messenger-' + previousSelect);
  let currentCard = document.querySelector('.bablot-messenger-' + currentSelect);
  previousCard.style.display = 'none';
  currentCard.style.display = 'block';
  el.blur();
}

function cacheTemplate(el) {
  previousSelect = el.options[el.selectedIndex].value;
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
