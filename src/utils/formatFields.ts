export const formatAge = (age: number) => {
  const years = Math.floor(age / 12);
  const months = age % 12;

  let result = `${years}y `;
  if (months > 0) {
    result += `${months}m`;
  }
  return result;
};

export const formatRefCode = (id: number) => {
  return `${String(id).padStart(6, "0")}`;
};
