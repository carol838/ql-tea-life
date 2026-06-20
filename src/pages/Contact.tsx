export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
