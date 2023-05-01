import CCFooter from "../../components/footer/CCFooter";
import CCNavbar from "../../components/navbar/navbar";

import classes from "./About.module.css";

const About = () => {
    return (
        <>
            <CCNavbar url={process.env.PUBLIC_URL} />
            <div
                className={
                    classes.title +
                    " bg-dark mx-auto py-2 px-5 my-5 rounded-4 shadow"
                }
            >
                <span>A</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
            </div>
            <div className="row g-0">
                <div
                    className={
                        "mb-5 mx-auto col-11 col-md-10 bg-dark p-3 p-md-5 rounded-4 shadow " +
                        classes.about
                    }
                >
                    <div className="d-flex flex-wrap flex-xxl-nowrap gap-md-5 gap-3 mb-3 mb-md-5">
                        <div className="text-white fs-4 text-eq bg-dark2 p-4 rounded-4 shadow">
                            <p>
                                Welcome to Comic Corner! My name is Jaydeep
                                Mithani, and I'm the solo developer behind this
                                website. As a lover of comic books myself, I
                                created this platform to bring together people
                                who share the same passion for comics.
                            </p>
                            <p>
                                At Comic Corner, you'll find a vast collection
                                of comics from all around the world, including
                                manga, American comics, bande dessinée, light
                                novels, and more. Whether you're a fan of
                                action-packed superhero stories or heartwarming
                                romance comics, you'll find something to enjoy
                                on our platform.
                            </p>
                        </div>
                        <img
                            src="./assets/author.jpg"
                            alt="author"
                            className="img-fluid rounded-4 shadow"
                        />
                    </div>
                    <div className="d-flex gap-md-5 gap-3 mb-3 mb-md-5">
                        <img
                            src="./assets/the-vertebrate.jpg"
                            alt="art-1"
                            className={
                                "img-fluid rounded-4 shadow " + classes.full
                            }
                        />
                    </div>
                    <div className="d-flex flex-wrap flex-xxl-nowrap gap-md-5 gap-3 mb-3 mb-md-5">
                        <img
                            src="./assets/art2.jpg"
                            alt="art-1"
                            className="img-fluid order-2 order-xxl-1 rounded-4 shadow"
                        />
                        <div className="text-white order-1 order-xxl-2 fs-4 text-eq bg-dark2 p-4 rounded-4 shadow">
                            <p>
                                As a comic book artist and writer myself, I'm
                                also thrilled to share my own creations with
                                you. You'll have exclusive access to my original
                                manga and comics, which I've been working on for
                                years. I hope my stories will captivate and
                                entertain you, and perhaps even inspire you to
                                create your own comics one day.
                            </p>
                            <p>
                                At Comic Corner, we're more than just a platform
                                for reading comics. We're also a community of
                                comic book enthusiasts who share our love for
                                this art form. You can join our forums to
                                discuss your favorite comics with fellow fans,
                                share your own artwork, and even collaborate
                                with other artists to create new stories.
                            </p>
                        </div>
                    </div>
                    <div className="d-flex gap-md-5 gap-3">
                        <div className="text-white fs-4 text-eq bg-dark2 p-4 rounded-4 shadow">
                            <p>
                                Thank you for visiting Comic Corner, and I hope
                                you'll enjoy your time on our website. If you
                                have any questions or feedback, please don't
                                hesitate to contact me.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <CCFooter />
        </>
    );
};

export default About;
