import Lottie from "lottie-react";
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';
import doneAnimation  from "../../../src/components/animation/Animation - 1741912715852.json";
import emailAnimation from "../../../src/components/animation/Animation Email.json";
const Contact = () => {
    const [state, handleSubmit] = useForm("mrbpgdzb");



    return (
        <section className='contact-uc'>
            <h1 className='title'>
                <samp className='icon-envelope'></samp>
                Contact Uc
            </h1>
            <p className='sub-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis cumque distinctio id culpa eligendi! Modi, aliquam laborum cupiditate </p>
            <div style={{justifyContent:"space-between"}} className='flex'>
                <form onSubmit={handleSubmit}>
                     <div className='flex'>
                       <label htmlFor="email">Email Address:</label>
                       <input required type="email" name="email" id="email" />
                       <ValidationError 
                          prefix="Email" 
                          field="email"
                          errors={state.errors}
                        />
                     </div>
                     <div className='flex' style={{marginTop: "24px"}}>
                       <label htmlFor="message">Your message:</label>
                       <textarea required name="message" id="message"></textarea>
                       <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                        />
                     </div>
                    <button type="submit" disabled={state.submitting} className='submit'>
                        {state.submitting ? "submitting..." : "submit" }
                    </button>
                    {state.succeeded && (
                        <p className="flex" style={{fontSize: "18px" , marginTop:"1.7rem"}}>
                             <Lottie loop={false} style={{height: "44px"}} animationData={doneAnimation} />
                            Yor massge has been sent successfully</p>
                    )}
                </form>
                <div className='animation'>
                <Lottie className="contact-Animation"  style={{height: 355}} animationData={emailAnimation} />
                     </div>
            </div>
        </section>
    );
}

export default Contact;
