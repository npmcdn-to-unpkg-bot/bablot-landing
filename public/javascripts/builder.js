var previousSelect;

var imageTemplate = `
  <div class="bablot-messenger-image">
    <img width="250px" src="http://puu.sh/pFPLm/f5b591e509.png"/>
  </div>`;

var textTemplate = `
  <div class="bablot-messenger-text" contenteditable="true">
    Text
  </div>`;

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
