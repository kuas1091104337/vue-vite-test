const fs = require("fs-extra"),
      unflatten = require("flat").unflatten,
      { extractSheets } = require("spreadsheet-to-json"),
      path = require("path");
extractSheets(
  {
    spreadsheetKey: '1h3QO4phzP7r_Cuits7EFyMjLYUIZXacOeeXTyjBKGEo',
    credentials: require('./dot-a-vue3-i18n-3b43bdb33ac6.json'),
    sheetsToExtract: ['index', 'about'],
  },
  (err, data) => {
    // 抓到內容之後要做的動作
    if (err) throw err;
    const read = [...data['index'], ...data['about']];
    const result = {};
    const files = [];
    for (const key in read[0]) {
      if (key !== 'key') {
        files.push(key);
        result[key] = {};
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el['key']] = el[file] ? el[file] : ''
      }
    });
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(
          path.resolve(__dirname, './language', `${fileName}.json`)
        )
      );
      fs.writeJSONSync(
        path.resolve(__dirname, './language', `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      );
    }
  }
);
// 每次上線的時候都先執行 node GoogleSheetToJson.js