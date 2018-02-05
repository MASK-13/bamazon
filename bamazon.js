var mysql = require('mysql');

var inquirer = require('inquirer');
///// 
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "dkamka13",
    database: "bamazon",
});

connection.connect(function(err) {

    console.log("Connected as id: " + connection.threadId);
    console.log('Welcome to Bamazon!');

    shop();

});


var shop = function() {

    connection.query("SELECT * FROM products", function(err, res) {

        //Presents user with a list of items available for purchase. Loops through the products

        //table and pushes items into the productsArray.

        inquirer.prompt({

            name: "products",

            type: "list",

            choices: function(value) {

                var productsArray = [];

                for (var i = 0; i < res.length; i++) {

                    productsArray.push(res[i].product_name);

                }

                return productsArray;

            },

            message: "Which product you would like to buy?"

        }).then(function(answer) {

            for (var i = 0; i < res.length; i++) {

                //Finds a match with the user's answer...

                if (res[i].product_name === answer.products) {

                    var chosenItem = res[i];

                    inquirer.prompt({

                        name: "quantity",

                        type: "input",

                        message: "How many ?"

                    }).then(function(answer) {

                        //if insufficient stock, prompts user to try again

                        if (chosenItem.stock_quantity < parseInt(answer.quantity)) {

                            console.log("Sorry, we only have " + chosenItem.stock_quantity + " of those in stock.");

                            shop();

                            //if sufficient product, allows user to purchase item(s). Updates products table

                        } else {

                            var total = chosenItem.price * parseInt(answer.quantity);



                            connection.query("UPDATE products SET ? WHERE ?", [{

                                stock_quantity: chosenItem.stock_quantity - parseInt(answer.quantity),

                                product_sales: chosenItem.product_sales + total

                            }, {

                                item_id: chosenItem.item_id

                            }], function(err, res) {



                            });

                            //

                            connection.query("SELECT total_sales,department_name FROM departments", function(err, res) {

                                for (var i = 0; i < res.length; i++) {

                                    if (res[i].department_name === chosenItem.department_name) {

                                        var prevTotal = res[i].total_sales;

                                        var sumSales = prevTotal + total;

                                        var departmentName = chosenItem.department_name;



                                        connection.query("UPDATE departments SET ? WHERE ?", [{



                                            total_sales: sumSales

                                        }, {

                                            department_name: departmentName



                                        }])

                                    }

                                }

                            })



                            const maybePluralize = (count, noun, suffix = 's') =>

                                `${count} ${noun}${count !== 1 && noun.charAt(noun.length-1)!== 's'? suffix : ''}`;

                            console.log("You have bought " + maybePluralize(parseInt(answer.quantity), chosenItem.product_name));

                            console.log("Your total is $" + total);

                            taskChoice();

                        }

                    })

                }



            }

        })

    })

}



function taskChoice() {

    inquirer.prompt([{



            type: 'list',

            name: 'task',

            message: 'What would you like to do?',

            choices: ['buy-stuff', 'quit']

        }



    ]).then(function(choice) {



        if (choice.task === 'buy-stuff') {

            buyStuff();



        } else {

            console.log('Thank YOU ! please come back soon and buy');

            connection.end(function(err) {





            });



        }

    });

}