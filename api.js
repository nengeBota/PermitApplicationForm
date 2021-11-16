/*take details from form
create fetch request to POST the details to the server, connected 
* write an example response on the server to log that we've successfully received the request, with all the data provided

**/

async function submitPermitApplicationForm() {
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
    } = extractDataFromForm();

    const response = await fetch("http://localhost:5000/permits", {
      method: "post",
      body: JSON.stringify({
        applicantName,
        dateOfIncorporation,
        placeOfIncorporation,
        streetAddress,
        postal,
        email,
        website,
        contactPerson,
        mobileNumber,
      }),
    });
    // alert("response received -> ", JSON.stringify(response));
    console.log("response -> ", response);
  } catch (error) {
    console.log("error -> ", error);
  }
}

function extractDataFromForm() {
  const applicantName = document.getElementById("applicant-name").value;
  const dateOfIncorporation =
    document.getElementById("date_incorporation").value;
  const placeOfIncorporation = document.getElementById(
    "place_incorporation"
  ).value;
  const streetAddress = document.getElementById("street").value;
  const postal = document.getElementById("postal").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const contactPerson = document.getElementById("Cperson").value;
  const mobileNumber = document.getElementById("phone").value;

  return {
    applicantName,
    dateOfIncorporation,
    placeOfIncorporation,
    streetAddress,
    postal,
    email,
    website,
    contactPerson,
    mobileNumber,
  };
}

function fancilyExtractDataFromForm() {
  const inputIds = [
    "applicant-name",
    "date_incorporation",
    "place_Incorporation",
  ];

  const results = inputIds.reduce((acc, id) => {
    acc[id] = document.getElementById(id).value;
    return acc;
  }, {});

  return results;
}
