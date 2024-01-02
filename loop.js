const myResume = [
  {
    name: "Brindhanachi Gopi",
    email: "abc@gamil.com",
    phone: 1234567890,
    degree: "M.A.",
  },

  {
    name: "Santhi",
    email: "abc@gamil.com",
    phone: 1234567890,
    degree: "B.A.",
  },

  {
    name: "Bala",
    email: "abc@gamil.com",
    phone: 1234567890,
    degree: "B.A.",
  },
];

//for loop

for (var i = 0; i < myResume.length; i++) {
  var obj = myResume[i];

  console.log(obj.name);
  console.log(obj.email);
  console.log(obj.phone);
  console.log(obj.degree);
}

//for Each
myResume.forEach(function (obj) {
  console.log(obj.email);
});

//for In
for (let key in myResume) {
  if (myResume.hasOwnProperty(key)) {
    console.log(myResume[key].name);
    console.log(myResume[key].phone);
  }
}

//for Of
for (let index of myResume) {
  console.log(myResume);
}
