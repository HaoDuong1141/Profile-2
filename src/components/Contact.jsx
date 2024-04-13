import Heading from "./Heading";
import Section from "./Section";

const Contact = () => {
    return (
        <Section id="contact">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Contact" />
                <div className="flex flex-col items-center justify-between">
                    <p className="pb-8 h5">
                        Adress:{" "}
                        <span>4279 49th st, 92115 San Diego, Calfornia</span>
                    </p>
                    <p className="pb-8 h5">
                        Email: <span>haoduongwork@gmail.com</span>
                    </p>
                    <p className="pb-8 h5">
                        Phone: <span>619-359-7215</span>
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
