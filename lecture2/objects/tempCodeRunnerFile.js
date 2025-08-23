 let student1 = {
  id: 1,
  sName: "Vinod",
  sAge: 29,
  isStudent: false,
  greet: function () {
    console.log(
      `hey my id is ${student.identity} & my name is ${student.sName}`
    );
  },
};
let JSONData=JSON.stringify(student1);    //consvert the object into json
console.log(JSONData);
let parseObject=JSON.parse(student1);
console.log(parseObject);