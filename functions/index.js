const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51LWtwNAgYWQj8kofTdN0iV780q6bhDWROcL2IrOPJdIInMfzFDKqcbiCQQAlPAPEnbKuRZhe6ceDRmplBxS7pBe1008oVrmecR")


//API

//- App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


//API routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!!! for this amount ?>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


//Listen command
exports.api = functions.https.onRequest(app)

// 