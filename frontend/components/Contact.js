
export default function Contact() {
    return(
        <section id="contact">
            <h2>Contact Me</h2>
            <form className="form" action="#contact" method="post" name="sendmail" onsubmit="">
                <div className="form-container">
                    <div class="contact-info">
                        <div>
                            <label for='name'>Name</label><br/>
                            <input type="text" id="name" name="name" placeholder=" Name"/>
                        </div>
                        <div>
                            <label for='email'>Email</label><br/>
                            <input type="text" id="email" name="email" placeholder=" Email"/>
                        </div>
                        <div>    
                            <label for="subject">Subjet</label><br/>
                            <input type="text" id="subject" name="subject" placeholder=" Subjet"/>
                        </div>
                    </div>
                    <div class="contact-message">
                        <label for='message'>Your message</label>
                        <textarea id="message" name="message" placeholder=" Your message"></textarea> 
                    </div>
                </div>
                <button name="sendmail" value="sendmail" className="submit-message" type="submit">Send my message</button>
            </form>
        </section>
    )
}