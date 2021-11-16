require("dotenv").config();
const pool = require("./dbconn");
const express = require("express");
var cors =require('cors');
const app = express();
const bodyParser = require("body-parser");

app.use(cors())
app.use(bodyParser.json());
app.use(express.static("./"));

app.post(`/permits`, (req, res) => {
  console.log('value of request -> ', req);

  try {
    const {
      applicantName,
      dateOfIncorporation,
      placeOfIncorporation,
      streetAddress,
      postal,
      email,
      website,
      contactPerson,
      mobileNumber,
    } = req;
    console.log(applicantName);
    /*
    const query = await pool.query(
      `INSERT INTO Company_Details( "comp_Name", "date_Incorporation", "place_Incorporation", "street_Address", postal, email, website, "contact_Person", "c_Person_mobile")
                VALUES ($cname, $date, $place, $street, $post, $mail, $web, $personal, $contact)`, [comp_Name, date_Incorporation, place_Incorporation, street_Address, postal, email, website, contact_Person, c_Person_mobile]
    );
    */
    return res.send("everythigns ok");
  } catch (error) {
    console.log("error creating the permits -> ", error);
    res.json({ error: 500, message: "error creating the permits" });
  }
});

app.listen(5000, () => console.log("listening"));

/*
server.post("/interface", async (req, res) => {
  try {
    const query = await pool.query(
      `INSERT INTO Company_Details( "comp_Name", "date_Incorporation", "place_Incorporation", "street_Address", postal, email, website, "contact_Person", "c_Person_mobile")
                VALUES ($cname, $date, $place, $street, $post, $mail, $web, $personal, $contact)`, [comp_Name, date_Incorporation, place_Incorporation, street_Address, postal, email, website, contact_Person, c_Person_mobile]
    );
    console.log(query);
    res.json(query);
  } catch (err) {
    console.log(err);
  }
});
*/
