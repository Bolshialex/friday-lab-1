import chalk from "chalk";
import lodash from "lodash";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 2];

const uniqueNums = lodash.uniq(arr);

console.log(uniqueNums);

console.log(chalk.bgBlueBright("Hello"));
