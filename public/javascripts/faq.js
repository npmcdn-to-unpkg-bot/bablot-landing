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

var postFaqs = (faqs) => {

  let user = firebase.auth().currentUser;
  console.log(user);
  firebase.database().ref('users/' + user.displayName + '@' + user.uid).set(faqs);
  return console.log(user);
}
