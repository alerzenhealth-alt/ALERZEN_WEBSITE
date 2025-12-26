import csv from 'csv-parser';
import fs from 'fs';

const results = [];
fs.createReadStream('server/data/price_list.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        const output = `Headers: ${JSON.stringify(Object.keys(results[0]))}\nFirst Row: ${JSON.stringify(results[0])}`;
        fs.writeFileSync('server/csv_inspection.txt', output);
    });
