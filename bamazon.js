const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
const Table = require('cli-table-redemption');

let userStatus, itemIndex;

///// 
 const connection = mysql.createConnection({
 	host: 'localhost',
 	port: 3306,
 	user:'root',
 	password: dkamka13
 })