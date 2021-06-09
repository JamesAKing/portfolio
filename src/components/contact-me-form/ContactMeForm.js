import './ContactMeForm.scss';

function ContactMeForm() {

    const submitContactForm = (e) => {
        e.preventDefault();
        console.log(e.target)
        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const number = e.target.number.value;
        window.open(`mailto:james_andrew_king@hotmail.co.uk?subject=${fullName} has enquired about our services&body=email ${email} number ${number}`)
    }

    return (
        <form className="contact-form" onSubmit={submitContactForm}>
            <label htmlFor="fullName">
                <h3>Full Name</h3>
                <input type="text"name="fullName"/>
            </label>
            <label htmlFor="email">
                <h3>Email</h3>
                <input type="email" name="email"/>
            </label>
            <label htmlFor="number">
                <h3>Number</h3>
                <input type="number" name="number"/>
            </label>
            <label htmlFor="">
                <h3>How Can I help?</h3>
                <textarea></textarea>
            </label>
            <button className="btn" type="submit">SUBMIT</button>
        </form>
    );

}

export default ContactMeForm;