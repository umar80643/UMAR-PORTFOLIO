'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1600);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                    className="preloader"
                >
                    <div className="preloaderLogo">
                        <div className="preloaderGhost">
                            UF<span>.</span>
                        </div>

                        <motion.div
                            className="preloaderFill"
                            initial={{ clipPath: 'inset(100% 0 0 0)' }}
                            animate={{ clipPath: 'inset(0% 0 0 0)' }}
                            transition={{ duration: 1.1, ease: 'easeInOut', delay: 0.15 }}
                        >
                            UF<span>.</span>
                        </motion.div>
                    </div>

                    <motion.p
                        className="preloaderTag"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        SOFTWARE · AI/ML · DATA
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
