// ============================================================
// TAKE-HOME ASSIGNMENT: Student Records Manager
// Save as assignment.js and upload to GitHub.
// ============================================================

// 1. Create an array called students with at least 5 student objects.
//    Each object needs: name, age, course, score
const students = [
  // TODO
  { name: "Dennis", age: 25, score: 85 },
  { name: "Chika", age: 18, score: 45 },
  { name: "Izu", age: 22, score: 75 },
  { name: "John", age: 20, score: 35 },
  { name: "Lisa", age: 20, score: 65 },
];

// 2. Return a letter grade (A, B, C or F) for a score
function getGrade(score) {
  // TODO
  switch (true) {
    case score >= 70:
      return "A";
    case score >= 60:
      return "B";
    case score >= 50:
      return "C";
    default:
      return "F";
  }
}

// 3. Log a sentence like:
//    "Amina (22) is studying Web Development and scored 72 - Grade A"
function displayStudent(student) {
  // TODO
    console.log(
      `${student.name} (${student.age})  is studying Web Development and scored ${student.score} - Grade ${getGrade(student.score)}`,
    )
}
// displayStudent(students);

// 4. Use forEach to display every student with displayStudent
// TODO
students.forEach((student) => displayStudent(student))

// 5. Use filter to create an array of students who passed (score >= 50), then log it
// TODO
const passedStudents = students.filter((student) => student.score >= 50); // TODO
console.log(passedStudents)
// 6. Use map to create an array of all student names, then log it
// TODO
const studentNames =  students.map((student) => {
  return student.name;
})
console.log(studentNames)


// 7. BONUS: return the average score of all students
function averageScore(students) {
  // TODO
   
    const total = students.reduce((total, student) => {
      return total += student.score ;
    }, 0);
   return total/students.length;
}

console.log(averageScore(students))