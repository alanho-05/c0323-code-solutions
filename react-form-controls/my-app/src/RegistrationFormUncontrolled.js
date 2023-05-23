export default function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const userInput = Object.fromEntries(formData.entries());
    console.log('Uncontrolled:', userInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input name="username" type="name" />
      </label>
      <label>
        Password:
        <input name="password" type="password" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}
