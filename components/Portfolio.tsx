'use client';

import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Download,
    Mail,
    Code2,
    Database,
    Server,
    BrainCircuit
} from 'lucide-react';

import {
    softwareProjects,
    aiProjects,
    dataProjects,
    skills
} from '../data/portfolio';


const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55 }
};


type Project = {
    title: string;
    tag: string;
    desc: string;
    github: string;
    stack: string[];
    points: string[];
};


function ProjectCard({
    project,
    featured = false
}: {
    project: Project;
    featured?: boolean;
}) {
    return (
        <motion.article
            {...reveal}
            className={featured ? 'project featured' : 'project'}
        >
            <div className="projectTop">
                <span>{project.tag}</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="chips">
                {project.stack.map((technology) => (
                    <em key={technology}>
                        {technology}
                    </em>
                ))}
            </div>

            <ul>
                {project.points.map((point) => (
                    <li key={point}>
                        {point}
                    </li>
                ))}
            </ul>

            {project.github && (
                <a
                    className="projectGithub"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub
                    <ArrowUpRight size={15} />
                </a>
            )}
        </motion.article>
    );
}


export default function Portfolio() {
    return (
        <main>

            {/* NAVIGATION */}

            <nav>
                <a className="brand" href="#top">
                    UF<span>.</span>
                </a>

                <div className="navlinks">
                    <a href="#about">About</a>
                    <a href="#software">Software</a>
                    <a href="#ai">AI/ML</a>
                    <a href="#data">Data</a>
                    <a href="#skills">Skills</a>
                    <a href="#contact">Contact</a>
                </div>

                <a
                    className="resume small"
                    href="/Umar_Farooque_Resume.pdf"
                    download
                >
                    <Download size={15} />
                    Resume
                </a>
            </nav>


            {/* HERO */}

            <section id="top" className="hero">

                <div className="orb one" />
                <div className="orb two" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="heroInner"
                >

                    <p className="eyebrow">
                        SOFTWARE DEVELOPMENT · AI/ML · DATA ANALYTICS
                    </p>

                    <h1>
                        I build systems,
                        <br />
                        <span>intelligence & insights.</span>
                    </h1>

                    <p className="lead">
                        Computer Science undergraduate building backend
                        systems, intelligent AI applications and
                        data-driven solutions — from infrastructure
                        and APIs to AI agents and analytics.
                    </p>


                    <div className="actions">

                        <a
                            className="primary"
                            href="#software"
                        >
                            Explore my work
                            <ArrowUpRight size={17} />
                        </a>

                        <a
                            className="secondary"
                            href="mailto:umar80643@gmail.com"
                        >
                            <Mail size={17} />
                            Get in touch
                        </a>

                    </div>


                    <div className="metrics">

                        <div>
                            <b>150+</b>
                            <span>LeetCode problems</span>
                        </div>

                        <div>
                            <b>2K+</b>
                            <span>Req/sec tested</span>
                        </div>

                        <div>
                            <b>2027</b>
                            <span>B.Tech graduation</span>
                        </div>

                    </div>

                </motion.div>

            </section>


            {/* ABOUT */}

            <section
                id="about"
                className="section"
            >

                <motion.div {...reveal}>

                    <p className="label">
                        01 / ABOUT
                    </p>

                    <div className="split">

                        <h2>
                            Engineering across
                            <br />
                            <span>three domains.</span>
                        </h2>

                        <div>

                            <p className="copy">
                                I’m Umar Farooque, a Computer Science
                                undergraduate at AllenHouse Institute
                                of Technology. I enjoy turning technical
                                problems into working software.
                            </p>

                            <p className="copy muted">
                                My work spans backend and systems
                                engineering, AI agents and machine
                                learning, and data analysis — combining
                                software engineering fundamentals with
                                practical problem solving.
                            </p>

                            <div className="iconrow">
                                <Code2 />
                                <Server />
                                <BrainCircuit />
                                <Database />
                            </div>

                        </div>

                    </div>

                </motion.div>

            </section>


            {/* SOFTWARE DEVELOPMENT */}

            <section
                id="software"
                className="section"
            >

                <motion.div {...reveal}>

                    <p className="label">
                        02 / SOFTWARE DEVELOPMENT
                    </p>

                    <h2>
                        Building systems that
                        <br />
                        <span>stay reliable.</span>
                    </h2>

                    <p className="sectionIntro">
                        Backend engineering, asynchronous networking,
                        APIs, testing, containerization and
                        production-oriented system design.
                    </p>

                </motion.div>


                <div className="projects">

                    {softwareProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            featured
                        />
                    ))}

                </div>

            </section>


            {/* AI / ML */}

            <section
                id="ai"
                className="section"
            >

                <motion.div {...reveal}>

                    <p className="label">
                        03 / AI & MACHINE LEARNING
                    </p>

                    <h2>
                        Building software that
                        <br />
                        <span>can reason & learn.</span>
                    </h2>

                    <p className="sectionIntro">
                        Multi-agent systems, LLM integration,
                        machine learning, NLP, semantic retrieval
                        and production-style AI applications.
                    </p>

                </motion.div>


                <div className="projects">

                    {aiProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                        />
                    ))}

                </div>

            </section>


            {/* DATA ANALYTICS */}

            <section
                id="data"
                className="section"
            >

                <motion.div {...reveal}>

                    <p className="label">
                        04 / DATA ANALYTICS
                    </p>

                    <h2>
                        Turning data into
                        <br />
                        <span>useful insights.</span>
                    </h2>

                    <p className="sectionIntro">
                        Data preparation, exploratory analysis,
                        visualization, SQL and statistical
                        machine-learning workflows.
                    </p>

                </motion.div>


                <div className="projects">

                    {dataProjects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            featured
                        />
                    ))}

                </div>

            </section>


            {/* SKILLS */}

            <section
                id="skills"
                className="section"
            >

                <motion.div {...reveal}>

                    <p className="label">
                        05 / TECHNICAL TOOLKIT
                    </p>

                    <div className="split">

                        <h2>
                            Technologies I
                            <br />
                            <span>work with.</span>
                        </h2>


                        <div className="skillgrid">

                            {Object.entries(skills).map(
                                ([category, values]) => (

                                    <div
                                        className="skill"
                                        key={category}
                                    >

                                        <h4>
                                            {category}
                                        </h4>

                                        <p>
                                            {values.join(' · ')}
                                        </p>

                                    </div>

                                )
                            )}

                        </div>

                    </div>

                </motion.div>

            </section>


            {/* EDUCATION */}

            <section className="section education">

                <motion.div {...reveal}>

                    <p className="label">
                        06 / EDUCATION & TRAINING
                    </p>


                    <div className="edu">

                        <div>

                            <span>
                                2023 — 2027
                            </span>

                            <h3>
                                B.Tech · Computer Science
                            </h3>

                            <p>
                                AllenHouse Institute of Technology,
                                Kanpur · CGPA 7.2
                            </p>

                        </div>


                        <div>

                            <span>
                                TRAINING
                            </span>

                            <h3>
                                Continuous learning
                            </h3>

                            <p>
                                Java — Scaler · Python — Udemy ·
                                Data Structures & Algorithms —
                                AllenHouse Institute of Technology
                            </p>

                        </div>

                    </div>

                </motion.div>

            </section>



            {/* CONTACT */}

            <section
                id="contact"
                className="contact"
            >
                <motion.div {...reveal}>

                    <p className="label">
                        07 / LET'S CONNECT
                    </p>

                    <h2>
                        Interested in working
                        <br />
                        <span>together?</span>
                    </h2>

                    <p>
                        I'm open to Software Development, AI/ML and Data Analytics
                        opportunities. If you think my skills could be a good fit
                        for your team, I'd be happy to connect and discuss the role.
                    </p>

                    <div className="contactActions">

                        <a
                            className="primary"
                            href="mailto:umar80643@gmail.com?subject=Opportunity%20for%20Umar%20Farooque"
                        >
                            <Mail size={17} />
                            Send me an email
                            <ArrowUpRight size={17} />
                        </a>

                        <a
                            className="secondary"
                            href="mailto:umar80643@gmail.com"
                        >
                            umar80643@gmail.com
                        </a>

                    </div>

                    <div className="availability">
                        <span className="statusDot"></span>
                        Open to opportunities
                    </div>

                </motion.div>
            </section>



            {/* FOOTER */}

            <footer>

                <span>
                    © 2026 Umar Farooque
                </span>

                <span>
                    Built with Next.js · TypeScript · Framer Motion
                </span>

            </footer>

        </main>
    );
}