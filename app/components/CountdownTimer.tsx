import { useEffect, useState } from "react";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

interface CountdownTimerProps {
    targetDate: Date;
    eventName?: string;
}

function calculateTimeLeft(targetDate: Date): TimeLeft {
    const difference = targetDate.getTime() - Date.now();
    if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
}

export default function CountdownTimer({ targetDate, eventName }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => clearInterval(timer);
    }, [targetDate]);

    const units = [
        { label: "Jours", value: timeLeft.days },
        { label: "Heures", value: timeLeft.hours },
        { label: "Minutes", value: timeLeft.minutes },
        { label: "Secondes", value: timeLeft.seconds },
    ];

    return (
        <div className="text-center">
            {eventName && (
                <p className="text-secondary font-medium uppercase tracking-widest text-sm mb-4">
                    {eventName}
                </p>
            )}
            <div className="flex justify-center gap-2 sm:gap-4">
                {units.map(({ label, value }) => (
                    <div key={label} className="flex flex-col items-center">
                        <div className="bg-neutral text-neutral-content rounded-xl w-16 sm:w-20 h-16 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold border border-primary/30 shadow-lg">
                            {String(value).padStart(2, "0")}
                        </div>
                        <span className="text-xs mt-2 text-neutral-content/70 uppercase tracking-wider">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
