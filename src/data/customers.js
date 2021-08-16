async function getContent() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

export default getContent()