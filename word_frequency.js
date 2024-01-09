//searching my at my computer directory to search for my txt file 
const fs = require('fs')
const path = require('path')
const filePath = process.argv[2]



const STOP_WORDS = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'i',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'were',
  'will',
  'with',
]

function printWordFreq(file, callback) {
  // Read in `file` and print out the frequency of words in that file.
  fs.readFile(file, 'utf8', (err, data) => {
    //placing words into their own arrays, removing punctuation, making lowercase
    const array = data.toString().toLowerCase().split(/[(.?:,| )+\n]/);

    // empty result
const result = {};

    //if the word is already found in result object, we increment count stating we have found another one
    const newText = array.filter(val => !STOP_WORDS.includes(val));      
    for (let word of newText) {
      //if we recognize a Stop word, it should exclude it 

      //if the word pops up, it is counted, otherwiseit is recognized as the first 
      if (result[word]) {
          result[word]++;
      }
      else {
          result[word]=1;
      }
    }

    // search space inside array and remove that index 

    if (err) {
      console.error('Error reading the file:', err)
      process.exit(1)
    }

    //  WORK RIGHT HERE //
    //console.log('Initial data read from file: ', data)
    callback(result);
  })
}

printWordFreq(filePath, (wordCount) => {
  console.log('The results from your word counts:', wordCount)
})
