import fs from 'fs';

export default (filepath1, filepath2) => {
  const file1 = JSON.parse(fs.readFileSync(filepath1, { encoding: 'utf8', flag: 'r' }));
  const file2 = JSON.parse(fs.readFileSync(filepath2, { encoding: 'utf8', flag: 'r' }));
  const keysFile1 = Object.keys(file1);
  const keysFile2 = Object.keys(file2);
  const commonKeys = keysFile1.concat(keysFile2.filter((key) => (
    keysFile1.indexOf(key) === -1
  ))).sort();
  const sortedObj = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const key of commonKeys) {
    if (Object.prototype.hasOwnProperty.call(file1, key)) {
      if (Object.prototype.hasOwnProperty.call(file2, key)) {
        if (file1[key] === file2[key]) sortedObj[`  ${key}`] = file1[key];
        else {
          sortedObj[`- ${key}`] = file1[key];
          sortedObj[`+ ${key}`] = file2[key];
        }
      } else sortedObj[`- ${key}`] = file1[key];
    } else sortedObj[`+ ${key}`] = file2[key];
  }
  // eslint-disable-next-line no-console
  console.log(sortedObj);
  return sortedObj;
};
