export const fetchClasses = async () => {
  const response = await fetch(`http://localhost:4000/classes/list`, {
    credentials: "include",
  });
  const data = await response.json();

  return data;
};

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

export const deleteClass = async (_id) => {
  const response = await fetch(`http://localhost:4000/classes/${_id}`, {
    method: "delete",
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();

  return data;
};
