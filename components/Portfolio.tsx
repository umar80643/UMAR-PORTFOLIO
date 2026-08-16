'use client';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    ArrowUpRight,
    Download,
    Mail,
    Code2,
    Database,
    Server,
    BrainCircuit,
    Award,
    ExternalLink,
    ChevronDown,
    Send
} from 'lucide-react';

import Preloader from './Preloader';
import Navbar from './Navbar';
import Expertise from './Expertise';

import {
    roles,
    softwareProjects,
    aiProjects,
    dataProjects,
    skills,
    certifications,
    type Project,
    type Role
} from '../data/portfolio';


const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.55 }
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


function RoleResumeBar({ role }: { role: Role }) {
    return (
        <motion.a
            {...reveal}
            className="roleResumeBar"
            href={role.resume}
            download
        >
            <span>
                <Award size={15} />
                Download my {role.resumeLabel}
            </span>
            <Download size={15} />
        </motion.a>
    );
}


const heroParticles = Array.from({ length: 14 }).map((_, i) => ({
    id: i,
    size: 2 + ((i * 7) % 5),
    top: (i * 13.7) % 100,
    left: (i * 23.3) % 100,
    duration: 4 + (i % 5),
    delay: (i % 6) * 0.4
}));


function ContactForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        permission: false
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setForm((prev) => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.permission) {
            alert('Please accept the contact permission checkbox.');
            return;
        }

        const subject = encodeURIComponent(
            `Opportunity for Umar Farooque — from ${form.firstName} ${form.lastName}`
        );
        const body = encodeURIComponent(
            `${form.message}\n\n— ${form.firstName} ${form.lastName} (${form.email})`
        );

        window.location.href = `mailto:umar80643@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <form onSubmit={handleSubmit}>

            <div className="contactGrid">

                <div>
                    <div className="formField">
                        <input
                            type="text"
                            id="firstName"
                            placeholder="First name"
                            value={form.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="formField">
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Last name"
                            value={form.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="formField">
                        <input
                            type="email"
                            id="email"
                            placeholder="Your email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div>
                    <div className="formField">
                        <textarea
                            id="message"
                            placeholder="Tell me about the role or project"
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="formCheckbox">
                        <input
                            type="checkbox"
                            id="permission"
                            checked={form.permission}
                            onChange={handleChange}
                        />
                        <label htmlFor="permission">
                            I give permission to be contacted at this email address.
                        </label>
                    </div>
                </div>

            </div>

            <button type="submit" className="formSubmit">
                Send message
                <Send size={15} />
            </button>

            <p className="formNote">
                This opens your email client with the message pre-filled to
                umar80643@gmail.com — nothing is sent through a third-party server.
            </p>

        </form>
    );
}


export default function Portfolio() {
    const [activeRole, setActiveRole] = useState<Role>(roles[0]);
    const contactRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress: contactProgress } = useScroll({
        target: contactRef,
        offset: ['start end', 'end start']
    });
    const contactY = useTransform(contactProgress, [0, 1], ['-15%', '15%']);

    return (
        <main>
            <Preloader />
            <Navbar />

            {/* HERO */}

            <section id="top" className="hero">

                <div className="heroGrid" />
                <div className="orb one" />
                <div className="orb two" />

                {heroParticles.map((p) => (
                    <motion.span
                        key={p.id}
                        className="heroParticle"
                        style={{
                            width: p.size,
                            height: p.size,
                            top: `${p.top}%`,
                            left: `${p.left}%`
                        }}
                        animate={{
                            y: [0, -18, 0],
                            opacity: [0.15, 0.6, 0.15]
                        }}
                        transition={{
                            duration: p.duration,
                            delay: p.delay,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        }}
                    />
                ))}

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
                    }}
                    className="heroInner"
                >

                    <motion.p
                        className="eyebrow"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                        {activeRole.eyebrow}
                    </motion.p>

                    <motion.h1
                        variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                    >
                        I build systems,
                        <br />
                        <span>intelligence & insights.</span>
                    </motion.h1>

                    <motion.p
                        className="lead"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                        Computer Science undergraduate building backend
                        systems, intelligent AI applications and
                        data-driven solutions — from infrastructure
                        and APIs to AI agents and analytics.
                    </motion.p>

                    {/* ROLE SWITCHER */}

                    <motion.div
                        className="roleTabs"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                        {roles.map((role) => (
                            <button
                                key={role.id}
                                type="button"
                                className={activeRole.id === role.id ? 'roleTab active' : 'roleTab'}
                                onClick={() => setActiveRole(role)}
                            >
                                {role.shortLabel}
                            </button>
                        ))}
                    </motion.div>

                    <motion.p
                        className="roleTagline"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >
                        {activeRole.tagline}
                    </motion.p>

                    <motion.div
                        className="actions"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >

                        <a
                            className="primary"
                            href={`#${activeRole.sectionId}`}
                        >
                            View {activeRole.shortLabel} projects
                            <ArrowUpRight size={17} />
                        </a>

                        <a
                            className="secondary"
                            href={activeRole.resume}
                            download
                        >
                            <Download size={17} />
                            Download resume
                        </a>

                    </motion.div>


                    <motion.div
                        className="metrics"
                        variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                    >

                        <div>
                            <b>200+</b>
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

                    </motion.div>

                </motion.div>

                <motion.div
                    className="scrollIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <span>SCROLL</span>
                    <ChevronDown size={18} className="bounce" />
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

                    <div className="aboutSplit">

                        <div className="badgeWrap">
                            <div className="badgeString" />
                            <div className="badgeClip" />

                            <motion.div
                                className="badgeCard"
                                initial={{ opacity: 0, rotate: -8 }}
                                whileInView={{ opacity: 1, rotate: -4 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="badgeCutout">
                                    <span />
                                </div>

                                <div className="badgeInner">
                                    <span className="badgeInitials">UF</span>
                                    <span className="badgeRole">
                                        SOFTWARE · AI/ML · DATA
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        <div>

                            <h2>
                                Engineering across
                                <br />
                                <span>three domains.</span>
                            </h2>

                            <p className="copy">
                                I&apos;m Umar Farooque, a Computer Science
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

                                <a
                                    href="https://github.com/umar80643"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub Profile"
                                >
                                    GitHub  🔗
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/umar---farooque/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn Profile"
                                >
                                    LinkedIn  🔗
                                </a>
                            </div>

                        </div>

                        <Award size={64} className="aboutStar" style={{ top: 0, right: '4%' }} />
                        <Award size={40} className="aboutStar" style={{ bottom: '10%', left: '18%' }} />

                    </div>

                    <svg className="tornDivider" viewBox="0 0 1200 60" preserveAspectRatio="none">
                        <path d="M0,30 C150,55 300,5 450,30 C600,55 750,5 900,30 C1000,45 1100,15 1200,30 L1200,60 L0,60 Z" />
                    </svg>

                </motion.div>

            </section>


            {/* EXPERTISE */}

            <Expertise />


            {/* SOFTWARE DEVELOPMENT */}

            <section
                id="software"
                className="section"
            >

                <motion.div {...reveal}>

                    <p className="label">
                        02 / SOFTWARE ENGINEER
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

                <RoleResumeBar role={roles[0]} />

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
                        03 / AI / ML ENGINEER
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

                <RoleResumeBar role={roles[1]} />

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
                        04 / DATA ANALYST
                    </p>

                    <h2>
                        Turning data into
                        <br />
                        <span>useful insights.</span>
                    </h2>

                    <p className="sectionIntro">
                        Data preparation, exploratory analysis,
                        visualization, SQL, forecasting and
                        statistical machine-learning workflows.
                    </p>

                </motion.div>

                <RoleResumeBar role={roles[2]} />

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


            {/* CERTIFICATIONS */}

            <section
                id="certifications"
                className="section"
            >

                <motion.div {...reveal}>

                    <p className="label">
                        05 / CERTIFICATIONS
                    </p>

                    <h2>
                        Verified learning,
                        <br />
                        <span>hands-on skills.</span>
                    </h2>

                    <p className="sectionIntro">
                        Certifications from Microsoft Learn and Udemy
                        covering data analysis, SQL, generative AI and
                        core engineering fundamentals.
                    </p>

                </motion.div>

                <div className="certMarquee">
                    <div className="certTrack">
                        {[...certifications, ...certifications].map((cert, i) => (
                            <a
                                key={`${cert.title}-${i}`}
                                className="certCard"
                                href={cert.file}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="certIcon">
                                    <Award size={20} />
                                </div>

                                <div className="certBody">
                                    <h4>{cert.title}</h4>
                                    <p>{cert.issuer} · {cert.date}</p>
                                </div>

                                <ExternalLink size={16} className="certLink" />
                            </a>
                        ))}
                    </div>
                </div>

            </section>


            {/* SKILLS */}

            <section
                id="skills"
                className="section skillsWrap"
            >

                <motion.div
                    className="skillOrb"
                    style={{ width: 260, height: 260, background: '#8ef0c5', top: '10%', right: '5%' }}
                    animate={{ y: [0, 20, 0], opacity: [0.06, 0.14, 0.06] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    className="skillOrb"
                    style={{ width: 200, height: 200, background: '#5d7cff', bottom: '5%', left: '2%' }}
                    animate={{ y: [0, -18, 0], opacity: [0.05, 0.12, 0.05] }}
                    transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                />

                <motion.div {...reveal} style={{ position: 'relative', zIndex: 1 }}>

                    <p className="label">
                        06 / TECHNICAL TOOLKIT
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

                                        <div className="skillPills">
                                            {values.map((value) => (
                                                <motion.span
                                                    key={value}
                                                    className="skillPill"
                                                    whileHover={{ scale: 1.08, y: -2 }}
                                                    transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                                                >
                                                    {value}
                                                </motion.span>
                                            ))}
                                        </div>

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
                        07 / EDUCATION & TRAINING
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
                                Java — Scaler · Python & Git — Udemy ·
                                Data Structures & Algorithms —
                                AllenHouse Institute of Technology ·
                                Data Analysis & Generative AI — Microsoft Learn
                            </p>

                        </div>

                    </div>

                </motion.div>

            </section>



            {/* CONTACT */}

            <section
                id="contact"
                className="contact"
                ref={contactRef}
            >

                <motion.div className="contactBigText" style={{ y: contactY }}>
                    <h2>Contact</h2>
                </motion.div>

                <div className="contactPanel">

                    <motion.div {...reveal}>

                        <p className="label">
                            08 / LET&apos;S CONNECT
                        </p>

                        <h2>
                            Interested in working
                            <br />
                            <span>together?</span>
                        </h2>

                        <p style={{ maxWidth: 650, color: '#9ca1a9', fontSize: 18, lineHeight: 1.7, marginBottom: 32 }}>
                            I&apos;m open to Software Engineering, AI/ML and Data Analyst
                            opportunities. If you think my skills could be a good fit
                            for your team, I&apos;d be happy to connect and discuss the role.
                        </p>

                        <ContactForm />

                        <div className="contactActions">

                            <a
                                className="secondary"
                                href="mailto:umar80643@gmail.com"
                            >
                                <Mail size={16} />
                                umar80643@gmail.com
                            </a>

                        </div>

                        <div className="availability">
                            <span className="statusDot"></span>
                            Open to opportunities
                        </div>

                    </motion.div>

                </div>

            </section>



            {/* FOOTER */}

            <footer>

                <div className="footerBig">
                    UMAR FAROOQUE
                </div>

                <div className="footerBottom">
                    <span>
                        © 2026 Umar Farooque
                    </span>

                    <span>
                        Built with Next.js · TypeScript · Framer Motion
                    </span>
                </div>

            </footer>

        </main>
    );
}
