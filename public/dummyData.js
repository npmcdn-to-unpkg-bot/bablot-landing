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
]
