export const fetchCourses = async () => {
  const response = await fetch(`http://localhost:4000/courses/list`, {
    credentials: "include",
  });
  const data = await response.json();

  return data;
};