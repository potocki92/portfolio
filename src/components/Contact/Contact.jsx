import { SectionTitle } from "../Section/Section.styled";
import { ContactForm, ContactInput, ContactSection, ContactTextArea } from "./Contact.styled";

const Contact = () => {
    return (
        <ContactSection id="contact" className="container">
            <SectionTitle>Contact</SectionTitle>
            <ContactForm>
                <ContactInput type="text" placeholder="Name" />
                <ContactInput type="email" placeholder="Email" />
                <ContactTextArea placeholder="Message"/>
            </ContactForm>
        </ContactSection>
    )
}

export default Contact;