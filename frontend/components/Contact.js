
export default function Contact() {

    function test() {

    }

    return(
        <section id="contact">
            <h2>Contact Me</h2>
            <form className="form" action="#contact" method="post" name="sendmail" onSubmit={test()}>
                <div className="form-container">
                    <div className="contact-info">
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type="text" id="name" name="name" placeholder=" Name"/>
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type="text" id="email" name="email" placeholder=" Email"/>
                        </div>
                    </div>
                    <div className="contact-message">
                        <label htmlFor='message'>Your message</label>
                        <textarea id="message" name="message" placeholder=" Your message"></textarea> 
                    </div>
                </div>
                <button value="sendmail" className="submit-message" type="submit">Send my message</button>
            </form>
        </section>
    )
}