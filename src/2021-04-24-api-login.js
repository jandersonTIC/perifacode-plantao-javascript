const express = require("express");

const app = express();
const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing

app.post("/login", (request, response) => {
    const username = request.body.username;
    const password = request.body.password;

    if (username === "adrianogrego" && password === "123456") {
        response.json({
            name: "Adriano Grego",
            picture: "1fd2s1f3s.jpg",
            token: "f4ds54f3ds1f65s",
        });
    } else {
        response.status(401);
        response.json({
            error: "Username or password invald!",
        });
    }
});

app.listen(port, () => {
    console.log(`Api funcionando http://localhost:${port}`);
});
