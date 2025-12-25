import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import LightPillar from '../components/ComponentUI/backgroud';
import Loader from '../components/Loader';
import Team from '../components/Team';

const Home = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate page load for Home
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const handleGetStarted = () => {
        setIsLoading(true);

        setTimeout(() => {
            navigate('/docs');
        }, 1500);
    };

    const handleGitHub = () => {
        window.open('https://github.com/Aruvili/Agam', '_blank');
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen text-zinc-50 font-sans selection:bg-blue-500/30 relative overflow-x-hidden">
            {/* 1. Solid Dark Background */}
            <div className="fixed inset-0 bg-zinc-950 -z-20" />

            {/* 2. Background Effect (Light Pillar) */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-70 mix-blend-screen">
                <LightPillar
                    topColor="#3b82f6"
                    bottomColor="#a855f7"
                    intensity={0.4}
                    pillarWidth={2.5}
                    rotationSpeed={0.7}
                />
            </div>

            <div className="relative w-full">
                <div className="max-w-4xl mx-auto px-6 pt-20 pb-12 lg:pt-32 lg:pb-16 w-full">
                    <Hero onGetStarted={handleGetStarted} onGitHub={handleGitHub} />
                </div>

                <div className="w-full">
                    <Team />
                </div>
            </div>
        </div>
    );
};

export default Home;
