/**
 * Gathers all FAQs currently on the page, and provides them to the callback
 * @param  {Function} cb callback called with array of FAQs
 */
var gatherFaqs = (cb) => {

  let builderRows = document.querySelectorAll('.builder .builder-row');
  let faqs = [];
  console.log(builderRows);
  // Format the form data in a nicer way for our API
  builderRows.forEach((builderRow, i) => {
    let select = builderRow.querySelector('select');
    let currentSelection = select.options[select.selectedIndex].value;
    let question = builderRow.querySelector('.questionInput').value;
    let sim = builderRow.querySelector(`.bablot-messenger-${currentSelection}`)
    let response =  parseSim(sim, currentSelection);

    faqs.push({
      question,
      answer: {
        type: currentSelection,
        response
      },
      index: i
    });
  });

  cb(faqs);
};

var getFaqs = (faqs) => {
  window.visibleRowNumber = 0;
  let user = firebase.auth().currentUser;
  return firebase.database().ref('users/' + user.displayName + '@' + user.uid).once('value')
    .then((showcase)=> {
      if (showcase.val()) {
        window.visibleRowNumber = showcase.val().length;
        showcase.val().forEach((faq) => {
          let builder = document.querySelector(`.builder`);
          let builderRow = builderRowTemplate(faq.index);
          let questionInput = builderRow.querySelector('.questionInput');

          builder.appendChild(builderRow);
          questionInput.value = faq.question;
          setAnswer(builderRow, faq.answer);
          builderRow.style.display = "flex";
        });
      }
      document.querySelector('.builder-page').style.display = 'block';
    });
}

var postFaqs = (faqs) => {
  let user = firebase.auth().currentUser;
  firebase.database().ref('users/' + user.displayName + '@' + user.uid).set(faqs);
}
