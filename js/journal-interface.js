var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();

    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    var output = newEntry.wordCount();
    var vowelOutput = newEntry.vowelCount();
    $('#solution').text('Your whitman-esque tenor journal entry contains exactly ' + output + ' words.');
    $('#vowels').text('Vowel count is equal to ' + vowelOutput);
  });
});
