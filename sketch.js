var Student = {
  name: "Riya",
  class: 12,
  roll_no: 21,
  favorite_subject: "coding",
  marks: [12,21,41,14]
}


function setup() {
  createCanvas(400, 400);
  console.log(Student.roll_no);
  Student.roll_no = 45;
  console.log(Student.roll_no);
  console.log(Student.marks);
  console.log(Student.name);
  console.log(Student.favorite_subject);
  console.log(Student.class);
}

function draw() {
  background(220);
}