const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51Omqi0SJeiqNnZkOjb4KHYxrzkPulGKvYb9kiAubXiVut57c58AYCaAZCUYxm9gcGDcHPD7BGhnVaVGXgWfrdjXv00MEl3zbQU",
);

// API

// -App Config
const app = express();

// -Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// -API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Received, BOOM!!! for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "rupay",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen Command
exports.api = functions.https.onRequest(app);

// Example endpoint

// http://127.0.0.1:5001/demo-amazon-clone/us-central1/api;