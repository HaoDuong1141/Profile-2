import { Link } from "react-router-dom";
import Heading from "./Heading";
import Section from "./Section";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.webp";

const Socials = () => {
    return (
        <Section id="socials">
            <div className="container relative z-2">
                <Heading className="md:max-w-md lg:max-w-2xl" title="Socials" />
                <div className="flex flex-col items-center justify-between">
                    <Link
                        className="pb-8 flex flex-row items-center gap-2"
                        to="https://www.linkedin.com/in/haoduong1141/"
                    >
                        <img
                            src={linkedin}
                            alt="linkedin"
                            width={40}
                            height={20}
                            className="rounded-full"
                        />
                        <div className="h5">LinkedIn</div>
                    </Link>
                    <Link
                        className="pb-8 flex flex-row items-center gap-2"
                        to="https://github.com/HaoDuong1141"
                    >
                        <img
                            src={github}
                            alt="github"
                            width={40}
                            height={30}
                            className="bg-white p-[0.1rem] rounded-full"
                        />
                        <div className="h5">GitHub</div>
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default Socials;
