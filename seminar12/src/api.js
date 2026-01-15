export const deleteNoteAPI = async (id) => {
  // simulăm un DELETE request
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE"
  }).then(res => res.json());
};
