document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formValues = {};
  console.log(formData, formData.entries());
  for (const [key, value] of formData.entries()) {
    formValues[key] = value;
  }
  console.log("Form values: ", formValues);
});
