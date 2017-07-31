(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var output = newEntry.wordCount();
    var vowelOutput = newEntry.vowelCount();
    var consonantOutput = newEntry.consonantCount();
    var teaser = newEntry.getTeaser();
    $('#solution').text('Your whitman-esque tenor journal entry contains exactly ' + output + ' words.');
    $('#vowels').text('Vowel count is equal to ' + vowelOutput);
    $('#consonants').text('Consonant count is equal to ' + consonantOutput);
    $('#teaser').text('Your journal entrys teaser: ' + teaser);
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
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
    if (teaserStr[x - 1] === '.' || teaserStr[x - 1] === '!' || teaserStr[x - 1] === '?') {
      var output = teaserStr.slice(0, x);
      return output;
    }
  }
};

exports.entryModule = Entry;

},{}]},{},[1]);
