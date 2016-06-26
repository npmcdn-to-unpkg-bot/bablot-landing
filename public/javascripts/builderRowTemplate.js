function builderRowTemplate(rowId){
  let template = `
    <div id="builder_row_${rowId}" class="builder-row">
      <div class="builder-row-col-left">
        <button onclick="removeRow(${rowId})" class="delete-button">delete</button>
        <input class="questionInput"/>
      </div>
      <div class="builder-row-col-middle">
        <select onchange="changeTemplateType(this, ${rowId})" onfocus="cacheTemplate(this)">
          <option value="text">text</option>
          <option value="image">image</option>
          <option value="buttons">buttons</option>
        </select>
      </div>
      <div class="builder-row-col-right">
        <div id="card_${rowId}" class="card">
          <div contenteditable="true" class="bablot-messenger-text">
            This is a sample message. Put whatever lubrication you want
            wherever it feels comfortable!
          </div>
          <div class="bablot-messenger-image">
            <div class="wrapper"><img id="previewImage_${rowId}" width="250px" src="http://puu.sh/pFPLm/f5b591e509.png"/></div>
            <div class="url-bar">
              <p>URL:</p>
              <input id="imageUrl_${rowId}" value="http://puu.sh/pFPLm/f5b591e509.png"/>
              <button onclick="updateImage(${rowId})">update</button>
            </div>
          </div>
          <div class="bablot-messenger-buttons">
            <div class="common-width">
              <div contenteditable="true" class="message-text">Sample Message</div>
              <div class="button-column">
                <button contenteditable="true">Some button</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;

    let div = document.createElement('DIV');
    div.innerHTML = template;

    return div.children[0];
}
