export const fetchClasses = async () => {
  const response = await fetch(`http://localhost:4000/classes/list`, {
    credentials: "include",
  });
  const data = await response.json();

  return data;
};
