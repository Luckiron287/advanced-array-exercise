// Exercise

// PART 1
// Given an array with different objects inside that contain an instructor profile with his/her name, the availability and the specialities,
// you need to create a new array that contains only instructors that know about Javascript and available on the weekend.
// Keep in mind that if their availability is all, it means that they are also available on the weekend, so they need to be included too.

// PART 2
// Iterate over that new array of instructors available and show a message per instructor saying:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class

// PART 3
// Modify the previous message checking that if an instructor also knows about Python, the message needs to be:
// Hi nameOfInstructor, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop

const instructors = [
    {
      name: "John",
      availability: "all",
      specialities: ["Javascript", "Python", "C++"],
    },
    {
      name: "Mary",
      availability: "weekend",
      specialities: ["Javascript", "Ruby", "C++"],
    },
    {
      name: "Chris",
      availability: "evenings",
      specialities: ["Javascript"],
    },
    {
      name: "Anthony",
      availability: "all",
      specialities: ["Python", "Ruby"],
    },
    {
      name: "Pauline",
      availability: "only Mondays",
      specialities: ["Javascript", "Html", "CSS"],
    },
    {
      name: "Mark",
      availability: "all",
      specialities: ["C#", "C++", "Javascript"],
    },
    {
      name: "Helen",
      availability: "evenings",
      specialities: ["Python", "C++"],
    },

    {
      name: "Charles",
      availability: "none",
      specialities: ["Python"],
    },
  ];
  
  //Nouveau tableau avec instructeurs disponibles les weekends + avec stack JS 
  const jsWeInstructors = instructors.filter((instructor) => {
    return (
      (instructor.availability === "all" ||
        instructor.availability === "weekend") &&
      instructor.specialities.some((speciality) => speciality === "Javascript")
    );
  });

  //Parcours du nouveau tableau pour faire dire une phrase à chacun de ces instrcuteurs
  //jsWeInstructors.forEach(instructor => console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class`));

//Modification du message précédent 
instructors.forEach(instructor => {
    if(instructor.availability === "all" || instructor.availability === "weekend") {
        if(instructor.specialities.some(speciality => speciality === "Python")) {
            console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class and you need to prepare a Python workshop.`)
        }
        else if(instructor.specialities.some(speciality => speciality === "Javascript")) {
            console.log(`Hi ${instructor.name}, we inform you that this weekend you will be doing the support class.`)
        }
    }
})