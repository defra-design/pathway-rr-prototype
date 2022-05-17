var CSV = require('csv-string')


module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */




/*
=====================================================================
arrayToGovukTable

Convert an array to form needed for govukTable macro
=====================================================================

Expects array or nested array.

Usage:

{% set tableData = [
  ["1 January", "Friday", "New Year’s Day"],
  ["2 April", "Friday", "Good Friday"],
  ["5 April", "Monday", "Easter Monday"]
  ]
%}

{{ govukTable({
  caption: "2021 Bank holidays",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Day of week"
    },
    {
      text: "Holiday name"
    }
  ],
  rows: tableData | arrayToGovukTable
}) }}

*/

filters.arrayToGovukTable = (array) => {
  // Coerce to nested array
  array = (Array.isArray(array[0])) ? array : [array]
  let tableData = []
  array.forEach(row => {
    let rowData = []
    row.forEach(item => {
      rowData.push({
        html: item  // html for flexibility
      })
    })
    tableData.push(rowData)
  })
  // tableData = (tableData.length == 1) ? tableData[0] : tableData
  return tableData;
}

/*
=====================================================================
csvToArray

Convert a CSV string to array or nested array
=====================================================================

Expects CSV string. Requires 'csv-string' npm module

Usage:

let csvData =
  "Product images,✔,✔,✔,✗
  Case images,✔,✔,✔,✗
  Attachments uploaded with a document,✔,✔,✔,✗
  Generic attachments,✔,✔,✗,✗"

{% set arrayData = csvData | csvToArray %}

*/

filters.csvToArray = (csvString) => {
  array = CSV.parse(csvString);
  // Flatten nested array if it's only a single line
  array = (array.length == 1) ? array[0] : array
  return array;
}


/*
=====================================================================
csvToGovukTable

Convert a CSV string to form needed for govukTable macro
=====================================================================

Expects a CSV string. Requires csvToArray filter (above)

Usage:

{% set tableData =
  "1 Janury, Friday, New Year’s Day
  2 April, Friday, Good Friday
  5 April, Monday, Easter Monday"
%}


{{ govukTable({
  caption: "2021 Bank holidays",
  firstCellIsHeader: true,
  head: [
    {
      text: "Date"
    },
    {
      text: "Day of week"
    },
    {
      text: "Holiday name"
    }
  ],
  rows: tableData | csvToGovukTable
}) }}

*/

filters.csvToGovukTable = (csvString) => {
  let array = filters.csvToArray(csvString)
  return filters.arrayToGovukTable(array);
}





  
  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
