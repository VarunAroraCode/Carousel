const fs = require('fs');
const csvWriter = require('csv-write-stream');
var writer = csvWriter();
var faker = require('faker');

const dataGen = () => {
    writer.pipe(fs.createWriteStream('sampleData.csv'));
    for(var i = 0; i<20000000; i++){
        writer.write({
            id: i,
            image: faker.image.nature()
        })
    }
    writer.end();
    console.log('done');
}
dataGen();
