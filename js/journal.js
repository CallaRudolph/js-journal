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

exports.entryModule = Entry;
