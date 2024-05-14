import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const [hasMounted, setHasMounted] = useState(false); // New state to track client-side mounting

    useEffect(() => {
        setHasMounted(true); // Set to true once the component has mounted
    }, []);

    const calculateEndTime = (): Date => {
        let currentYear = new Date().getFullYear();
        return new Date(currentYear, 4, 25); // April is month 3 (zero-indexed)
    };

    const calculateTimeLeft = (endTime: Date): Record<string, number> => {
        const now = new Date();
        const difference = endTime.getTime() - now.getTime();
        let timeLeft: Record<string, number> = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const endTime = calculateEndTime();
    const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(endTime));

    useEffect(() => {
        if (!hasMounted) return; // Only set up the interval after the component has mounted

        const timerInterval = setInterval(() => {
            setTimeLeft(calculateTimeLeft(endTime));
        }, 1000);

        return () => clearInterval(timerInterval);
    }, [hasMounted, endTime]);

    if (!hasMounted) {
        return <div></div>; // Render a placeholder or loader until the component has mounted
    }

    return (
        <div className="container mx-auto  pt-1 p-4">
            <h1 id="headline" className="text-3xl text-center mb-4">Launching in .....</h1>
            <div id="countdown" className="flex justify-center items-center space-x-2">
                {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="flex flex-col items-center">
                        <span className="text-4xl font-bold">{String(value).padStart(2, '0')}</span>
                        <span className="text-md uppercase">{unit}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timer;
