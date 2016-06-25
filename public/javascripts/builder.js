var onSumbitFaq = () => {

  let faqPairs = document.querySelectorAll('.builder .builder-row');
  let faqs = [];

  // Format the form data in a nicer way for our API
  faqPairs.forEach((faqPair, i) => {
    let select = faqPair.querySelector('select');
    let currentSelection = select.options[select.selectedIndex].value;
    let question = faqPair.querySelector('.questionInput').value;
    let sim = faqPair.querySelector(`.bablot-messenger-${currentSelection}`)
    let response =  parseSim(sim, currentSelection);

    faqs.push({
      question,
      answer: {
        type: currentSelection,
        response
      },
      index: i + 1
    });
  });

  postFaqs(faqs);
};

var getFaqs = (faqs) => {
  let user = firebase.auth().currentUser;
  return firebase.database().ref('users/' + user.displayName + '@' + user.uid).once('value')
    .then((showcase)=> {
      if (showcase.val()) {
        showcase.val().forEach((faq) => {
          let builderRow = document.querySelector(`#builder_row_${faq.index}`);
          let questionInput = builderRow.querySelector('.questionInput');
          questionInput.value = faq.question;
          setAnswer(builderRow, faq.answer);
        });
      }
      document.querySelector('.builder').style.display = 'block';
    });
}

var postFaqs = (faqs) => {
  let user = firebase.auth().currentUser;
  firebase.database().ref('users/' + user.displayName + '@' + user.uid).set(faqs);
}
