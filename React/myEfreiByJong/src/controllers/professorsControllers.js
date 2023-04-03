export const addProfessor = async (values) => {
  const { lastName, course, email, classe } = values;

  const response = await fetch("http://localhost:4000/professors", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      lastName,
      course_id: course,
      email,
      class_id: classe,
    }),
  });

  if (response.status === 200) {
    return "Professor conçu!";
  }
};

export const fetchProfessors = async () => {
  const response = await fetch(`http://localhost:4000/professors/list`, {
    credentials: "include",
  });
  const data = await response.json();

  return data;
};