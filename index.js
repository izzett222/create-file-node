const fs = require("fs");
const items = process.argv;
if (items.length > 4) {
    throw new Error('Too many arguments');
}
if (items.length < 4) {
    throw new Error('Too few arguments');
}
const filename = items[2];
const content = items[3];
console.log(content,  '=====')


fs.writeFile(filename, content, (err) => {
    console.log(err)
})
console.log(items)
