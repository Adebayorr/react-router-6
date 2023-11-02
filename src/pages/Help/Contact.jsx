import { Form, redirect, useActionData } from "react-router-dom";


const Contact = () => {
    const error = useActionData()
    console.log(error)
    return ( 
        <div className="contact">
            <h3>Contact Us</h3>
            <Form method="post" action="/help/contact">
                <label>
                <span>Your email:</span>
                <input type="email" name="email" required />
                </label>
                <label>
                <span>Your message:</span>
                <textarea name="message" required></textarea>
                </label>
                <button>Submit</button>
            </Form>
            {error && error.error && <div>{error.error}</div>}
        </div>
     );
}
 

// eslint-disable-next-line react-refresh/only-export-components
export const contactAction = async ({ request }) => {
  const data = await request.formData()

  const submission = {
    email: data.get("email"),
    message: data.get("message")
  }

  console.log(submission)

  if (submission.message.length < 10) {
    return {error: "The length of the message should be longer than ten characters"}
  }

  return redirect("/")
}
export default Contact;