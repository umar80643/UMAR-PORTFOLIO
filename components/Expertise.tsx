'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent, type MotionValue } from 'framer-motion';

type Card = {
    number: string;
    title: string;
    text: string;
    align: 'left' | 'right';
};

const cards: Card[] = [
    {
        number: '01',
        title: 'Backend & Systems',
        text: 'Asynchronous networking, distributed data infrastructure, and production-grade APIs built from scratch.',
        align: 'right'
    },
    {
        number: '02',
        title: 'AI Agents & LLMs',
        text: 'Multi-agent orchestration, evidence-grounded retrieval, and LLM-integrated applications across Gemini, OpenAI and Ollama.',
        align: 'left'
    },
    {
        number: '03',
        title: 'Data & Analytics',
        text: 'SQL, forecasting, causal inference and dashboarding that turn raw data into decision-ready insight.',
        align: 'right'
    },
    {
        number: '04',
        title: 'DevOps & Testing',
        text: 'Docker, CI/CD, observability and disciplined testing so what ships stays reliable in production.',
        align: 'left'
    }
];

function TagCard({
    card,
    index,
    pathLength,
    containerRef
}: {
    card: Card;
    index: number;
    pathLength: MotionValue<number>;
    containerRef: React.RefObject<HTMLDivElement | null>;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    useMotionValueEvent(pathLength, 'change', (latest) => {
        if (!ref.current || !containerRef.current) return;

        const cardRect = ref.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const cardTop = cardRect.top - containerRect.top;
        const containerHeight = containerRect.height;

        const triggerY = cardTop + 50;
        const lineTipY = latest * containerHeight;

        if (lineTipY >= triggerY && !isActive) {
            setIsActive(true);
        } else if (lineTipY < triggerY && isActive) {
            setIsActive(false);
        }
    });

    return (
        <div
            ref={ref}
            className={`expertiseCard ${card.align} ${isActive ? 'active' : ''}`}
            style={{ ['--i' as string]: index }}
        >
            <div className="expertiseHole" />

            <div className="expertiseInner">
                <span className="expertiseNumber">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
            </div>
        </div>
    );
}

export default function Expertise() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center']
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 60,
        damping: 20,
        restDelta: 0.001
    });

    return (
        <section id="expertise" className="section expertiseSection">

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55 }}
            >
                <p className="label">
                    HOW I WORK
                </p>

                <h2>
                    Four disciplines,
                    <br />
                    <span>one problem-solving approach.</span>
                </h2>
            </motion.div>

            <div className="expertiseTrack" ref={containerRef}>

                <svg
                    className="expertiseLine"
                    viewBox="0 0 100 1000"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M 50,0 L 50,1000"
                        fill="none"
                        stroke="#ffffff14"
                        strokeWidth="2"
                        strokeDasharray="6 10"
                    />

                    <mask id="expertise-mask">
                        <motion.path
                            d="M 50,0 L 50,1000"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="10"
                            style={{ pathLength }}
                            vectorEffect="non-scaling-stroke"
                        />
                    </mask>

                    <path
                        d="M 50,0 L 50,1000"
                        fill="none"
                        stroke="#8ef0c5"
                        strokeWidth="2"
                        strokeDasharray="6 10"
                        mask="url(#expertise-mask)"
                    />
                </svg>

                <div className="expertiseCards">
                    {cards.map((card, index) => (
                        <TagCard
                            key={card.title}
                            card={card}
                            index={index}
                            pathLength={pathLength}
                            containerRef={containerRef}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
}
