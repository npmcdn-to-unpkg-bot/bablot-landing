(function main() {

  var user = firebase.auth().currentUser;
  var database = firebase.database();
  console.log(user);
  document.querySelector('#bablot-faq-form').addEventListener('submit', (e) => onSumbitFaq(e));
})();


var onSumbitFaq = (e) => {
  e.preventDefault();
  let faqPairs = document.querySelectorAll('#bablot-faq-form .faq_pair');
  let faqs = [];

  // Format the form data in a nicer way for our API
  faqPairs.forEach((faqPair, i) => {
    let question = faqPair.children[`faq_question${i+1}`].value;
    let answer = faqPair.children[`faq_answer${i+1}`].value;
    faqs.push({ question, answer, index: i + 1 });
  });

  postFaqs(faqs);
};

var getFaqs = (faqs) => {
  let user = firebase.auth().currentUser;
  return firebase.database().ref('users/' + user.displayName + '@' + user.uid).once('value')
    .then((showcase)=> {
      if (showcase.val()) {
        showcase.val().forEach((faq) => {
          let questionInput = document.querySelector(`input[name="faq_question${faq.index}"]`);
          let answerInput = document.querySelector(`input[name="faq_answer${faq.index}"]`);
          questionInput.value = faq.question;
          answerInput.value = faq.answer;
        })
      }
    });
}

var postFaqs = (faqs) => {
  let user = firebase.auth().currentUser;
  firebase.database().ref('users/' + user.displayName + '@' + user.uid).set(faqs);
}
