import { csvFileReaderGenerator } from "./csv/csvFileReaderGenerator";
import { getFileNameAndNumber } from "./utils";

const [filename] = getFileNameAndNumber("./data/fake-100000.csv", 1);

let line = 1;
for (const object of csvFileReaderGenerator(filename)) {
  console.log(`[${line++}] ${JSON.stringify(object)}`);
}

console.log("\n read complete.");
