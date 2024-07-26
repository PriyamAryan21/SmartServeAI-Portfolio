import { useRef } from "react";
import "./Form.css";
import emailjs from '@emailjs/browser';
import image from "./Images/image.png"

function Form() {
      const form = useRef();

      const handelSubmit = (e) => {
            e.preventDefault();

            emailjs
                  .sendForm('service_6qdb7ra', 'template_n7g954n', form.current, {
                        publicKey: '5ZKs9U4ECXgbsDJiu',
                  })
                  .then(
                        () => {
                              console.log('SUCCESS!');
                              form.current.reset();
                        },
                        (error) => {
                              console.log('FAILED...', error.text);
                        },
                  );
      }

      return <>
            <div className="outerBox">
                  <div className="left">
                        <h1>Reach Out to Us for Cutting-Edge <span>Solutions</span></h1>
                        <p>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions</p>
                        <form ref={form} onSubmit={handelSubmit}>
                              <div>
                                    <input type="text" name="user_lastName" placeholder="Last Name" />
                                    <input type="text" name="user_firstName" placeholder="First Name" />
                              </div>
                              <input type="text" name="user_email" placeholder="Email" />
                              <textarea name="message" id="" placeholder="Message"></textarea>
                              <button>Send it</button>
                        </form>
                  </div>
                  <img src={image} alt="" placeholder="Send" />
            </div>
      </>
}
export default Form;
