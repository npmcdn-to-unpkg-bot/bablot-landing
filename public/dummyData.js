window.dummyData = [
  {
    type: 'text',
    question: 'Hello!',
    answer: {
      "text": "Salutations, friend!"
    }
  },
  {
    type: 'image',
    question: 'Can you show me a panda?',
    answer: {
      "attachment":{
        "type":"image",
        "payload":{
          "url":"http://i.giphy.com/14aUO0Mf7dWDXW.gif"
        }
      }
    }
  },
  {
    type: 'button',
    question: 'why',
    answer: {
     "attachment": {
        "type": "template",
        "payload": {
          "template_type": "button",
          "text": "Call and schedule a Virtual Reality tour at our office.",
          "buttons": [
            {
              "type":"web_url",
              "title":"Call",

              "url":"https://www.facebook.com/l.php?u=tel%3A5555555555&h=sAQHTr9Ou"
            },
            {
              "type":"web_url",
              "title": "Map",
              "url":"https://goo.gl/IJEilT"
            }
          ]
        }
      }
    }
  }
  // {
  //   "attachment": {
  //     "type": "template",
  //     "payload": {
  //       "template_type": "button",
  //       "text": "You can always cancel a viewing! Just call as much advance as you can, please and thanks!",
  //       "buttons": [
  //         {
  //           "type":"web_url",
  //           "title":"Call ext. 102",
  //           "url":"https://www.facebook.com/l.php?u=tel%3A5555555555&h=sAQHTr9Ou"
  //         }
  //       ]
  //     }
  //   }
  // },
  // {
  //   "attachment": {
  //     "type": "template",
  //     "payload": {
  //       "template_type": "button",
  //       "text": "There is a sample copy of our lease located on our website. You will be able to print out a personalized lease, only after you (and your entire group) have made a deposit and started the online lease process.",
  //       "buttons": [
  //         {
  //           "type":"web_url",
  //           "title":"Sample Forms",
  //           "url":"http://foersom.com/net/HowTo/data/OoPdfFormExample.pdf"
  //         }, {
  //           "type":"web_url",
  //           "title":"Call with ext. 102",
  //           "url":"https://www.facebook.com/l.php?u=tel%3A5555555555&h=sAQHTr9Ou"
  //         }
  //       ]
  //     }
  //   }
  // },
  // {
  //   "attachment": {
  //     "type": "template",
  //     "payload": {
  //       "template_type": "button",
  //       "text": "For initial deposits: debit, certified cheque, or credit card*. These payments must be made ON SITE in our office.  We also accept walk-in debit/credit* payments. \n\n Alternatively, you can download a form here!",
  //       "buttons": [
  //         {
  //           "type":"web_url",
  //           "title":"Get payment form",
  //           "url":"http://foersom.com/net/HowTo/data/OoPdfFormExample.pdf"
  //         }
  //       ]
  //     }
  //   }
  // }
]
