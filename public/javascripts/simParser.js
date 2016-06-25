function parseSim(element, type) {
  if (type == 'image') { return parseImage(element); }
  else if (type == 'text') { return parseText(element); }
}

function parseImage(element) {
  return {
    url: element.querySelector('img').src
  };
}

function parseText(element) {
  return { text: element.innerHTML };
}
