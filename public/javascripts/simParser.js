function parseSim(element, type) {
  if (type == 'image') { return parseImage(element); }
  else if (type == 'text') { return parseText(element); }
  else if (type == 'buttons') { return parseButtons(element); }
}

function parseImage(element) {
  return {
    url: element.querySelector('img').src
  };
}

function parseText(element) {
  return { text: element.innerHTML };
}

function parseButtons(element) {
  return {
    "message": {
      "attachment":{
        "type":"template",
        "payload":{
          "template_type":"button",
          "text":"What do you want to do next?",
          "buttons":[
            {
              "type":"web_url",
              "url":"https://petersapparel.parseapp.com",
              "title":"Show Website"
            }
          ]
        }
      }
    }
  };
}
