export const addClass = async (values) => {
  const { classe } = values;

  const response = await fetch("http://localhost:4000/classes", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      className: classe,
    }),
  });
  if (response.status === 200) {
    return "Classe fondée!";
  }
};

export const addCourse = async (values) => {
  const { course, class_id } = values;

  const response = await fetch("http://localhost:4000/courses", {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      courseName: course,
      class_id
    }),
  });
  if (response.status === 200) {
    return "Matière inventée!";
  }
};