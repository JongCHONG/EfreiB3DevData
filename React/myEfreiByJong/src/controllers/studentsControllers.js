export const addStudent = async (values) => {
  const { name, sex, age, classe } = values;

  const response = await fetch("http://localhost:4000/students", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      name,
      sex,
      age,
      class: classe,
    }),
  });

  if (response.status === 200) {
    return "Etudiant crée!";
  }
};

export const fetchStudents = async () => {
  const response = await fetch(`http://localhost:4000/students/list`, {
    credentials: "include",
  });
  const data = await response.json();

  return data;
};
