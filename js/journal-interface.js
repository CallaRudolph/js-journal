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
