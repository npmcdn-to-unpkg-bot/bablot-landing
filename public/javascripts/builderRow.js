function toggleCard(rowId) {
  let card = document.querySelector(`#card_${rowId}`);
  if (card.style.display !== 'none') {
    card.style.display = 'none';
  } else {
    card.style.display = 'block'
  }
}

function updateImage(rowId) {
  let url = document.querySelector(`#imageUrl_${rowId}`).value;
  let imagePreview = document.querySelector(`#previewImage_${rowId}`);
  imagePreview.src = url;
}
