function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function () {
  console.log('focused');
};

function HtmlSelectElement(items = []) {
  // TODO: without ES6, we would do items || []
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.item.splice(index, 1);
    }
  };
}

// baseHtmlSelectElement without click
// Analyse output
//HtmlSelectElement.prototype = Object.create(HtmlElement.prototype); // baseHtmlElement
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; // Resetting constructor
