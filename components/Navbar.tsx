'use client';

import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Software', href: '#software' },
    { label: 'AI/ML', href: '#ai' },
    { label: 'Data', href: '#data' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={isScrolled || isOpen ? 'navbar scrolled' : 'navbar'}>
            <div className="navbarInner">
                <a className="brand" href="#top" onClick={() => setIsOpen(false)}>
                    UF<span>.</span>
                </a>

                <div className="navlinks">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <a className="resume small" href="/resumes/Umar_Farooque_Software_Engineer_Resume.pdf" download>
                    <Download size={15} />
                    Resume
                </a>

                <button
                    className="navToggle"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            <div className={isOpen ? 'mobileMenu open' : 'mobileMenu'}>
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.label}
                    </a>
                ))}
                <a
                    className="mobileResume"
                    href="/resumes/Umar_Farooque_Software_Engineer_Resume.pdf"
                    download
                    onClick={() => setIsOpen(false)}
                >
                    <Download size={15} />
                    Download Resume
                </a>
            </div>
        </nav>
    );
}
