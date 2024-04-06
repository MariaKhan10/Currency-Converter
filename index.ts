#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency : any = {
    USD : 1,  // base currency
    EUR : 0.92,
    GBP : 0.79,
    INR : 83.30,
    PKR : 280,
    RUB : 92.58,
    TRY : 32.03,
    AED : 3.67,
    SAR : 3.75,
    OMR : 0.38
};

console.log(chalk.blue.bold`----Welcome To Currency Converter----\n`)

let userAnswer = await inquirer.prompt([
    {
    name:"from",
    message:chalk.yellowBright.bold("Enter From Currency"),
    type:"list",
    choices:['USD','EUR','GBP','INR','PKR','RUB','TRY','AED','SAR','OMR']
    },
    {
    name:"to",
    message:chalk.magenta.bold("Enter To Currency"),
    type:"list",
        choices:['USD','EUR','GBP','INR','PKR','RUB','TRY','AED','SAR','OMR']
    },
    {
    name:"amount",
    message:chalk.greenBright("Enter Your Amount"),
    type:"number"
    },
]);

let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount
let baseAmount = amount / fromAmount  // USD Base Currency
let convertedAmount = baseAmount * toAmount

console.log(convertedAmount.toFixed(0));

