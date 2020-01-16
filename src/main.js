var sayHello = 'Hi I am Carolina';

let a = 10;
let b = a;

let spreadsheet = {
    created: Date.now(),
    author: 'Carito Machado',
    cells: [],
    metadata: {
        title: 'carito\'s bugdet'
    }
};

let getSpreadsheetAuthor = spreadsheet => spreadsheet.author;
