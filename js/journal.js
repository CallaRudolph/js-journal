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
};

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
};

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
};

Entry.prototype.getTeaser = function() {
  var teaserArr = [];
  var bodyArr = this.body.split(" ");
  for (i = 0; i < 8; i++) {
    teaserArr.push(bodyArr[i]);
  }
  var teaserStr = teaserArr.join(" ");
  for (x = 0; x < teaserStr.length; x++) {
    if (teaserStr[x - 1] === '.') { break; } {
      var output = teaserStr.slice(0, x + 1)
    }
  }
  return output;
};

exports.entryModule = Entry;
