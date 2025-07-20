console.log("Promises");

function isCheckSuccess(data) {
  return new Promise(function (resolve, reject) {
    if (data === "Success") {
      return resolve("Succesfully executed");
    } else {
      return reject("Unsuccessfully executed");
    }
  });
}

isCheckSuccess("Success")    // ("") then reject will execute
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });
