import chalk from "chalk";
import lodash from "lodash";
import validator from "validator";
import colors from "colors";
import { faker } from "@faker-js/faker";

export function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(createRandomUser, {
  count: 5,
});

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 2];

const uniqueNums = lodash.uniq(arr);

console.log(uniqueNums);

console.log(chalk.bgBlueBright("Hello"));

console.log(validator.isAlphanumeric("dlksfdsjfbds89u48952"));
console.log(validator.isAlphanumeric("dlksfdsjfb((*&^"));

console.log("Hello, using cyan colors".bgRed);

console.log(
  faker.helpers.fake(
    "Hello {{person.prefix}} {{person.lastName}}, how are you today?"
  )
);
