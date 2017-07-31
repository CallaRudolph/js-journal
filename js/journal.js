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

Entry.prototype.consonantCount = function() {
  var count = 0;
  var consonantArr = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  for (i = 0; i < this.body.length; i++) {
    for (j = 0; j < consonantArr.length; j++) {
      if (this.body[i] === consonantArr[j]) {
        count++;
      }
    }
  }
  return count;
}

exports.entryModule = Entry;
