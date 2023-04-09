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

export const deleteProfessor = async (_id) => {
  const response = await fetch(`http://localhost:4000/professors/${_id}`, {
    method: "delete",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();

  return data;
};

export const getProfessorById = async (_id) => {
  const response = await fetch(`http://localhost:4000/professors/${_id}`, {
    method: "get",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();

  return data;
};

export const updateProfessorById = async (values, _id) => {
  const { lastName, course, email } = values;

  const response = await fetch(`http://localhost:4000/professors/${_id}`, {
    method: "put",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      lastName,
      course_id: course,
      email,
    }),
  });

  if (response.status === 200) {
    return "Professor modifié!";
  }
};
