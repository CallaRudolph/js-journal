function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.wordCount = function() {
  var count = 0;
  var bodyArr = this.body.split(" ");
  for (i = 0; i < bodyArr.length; i++) {
    count++;
  }
  return count;
}

Entry.prototype.vowelCount = function() {
  var count = 0;
  var vowelArr = ['a', 'e', 'i', 'o', 'u'];
  for (i = 0; i < this.body.length; i++) {
    for (j = 0; j < vowelArr.length; j++) {
      if (this.body[i] === vowelArr[j]) {
        count++;
      }
    }
  }
  return count;
}

exports.entryModule = Entry;
