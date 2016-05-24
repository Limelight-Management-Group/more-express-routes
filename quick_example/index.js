var express = require('express'),
    app = express();

// var burgers = [
//                 "Hamburger",
//                 "Cheese Burger",
//                 "Dble Cheese Burger"
//                ];

// var tacos = [
//                 "Soft Taco",
//                 "Crunchy Taco",
//                 "Super Taco"
//                ];

// app.get("/", function (req, res) {
//     res.send("Hello World");
// });

// app.get("/burgers", function (req, res) {
//     //send all the burgers
//     res.send(burgers.join(", "));
// });

// app.get("/tacos", function (req, res) {
//     //send all the tacos
//     res.send(tacos.join(", "));
// });



app.listen(3000, function () {
    console.log("Go to localhost:3000/");
});

app.get("/thank", function (req, res) {
    var name = req.query.name;
    res.send("Thank you, " + name);
});
