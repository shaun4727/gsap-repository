'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapTo = () => {
    const timeline = gsap.timeline({
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
    });
    useGSAP(() => {
        timeline.to('#box-4', {
            x: 250,
            rotation: 360,
            duration: 2,
            borderRadius: '100%',
            ease: 'back.inOut',
        });
        timeline.to('#box-4', {
            y: 250,
            scale: 2,
            rotation: 360,
            borderRadius: '100%',
            duration: 2,
            ease: 'back.inOut',
        });
        timeline.to('#box-4', {
            x: 500,
            scale: 1,
            rotation: 360,
            borderRadius: '8px',
            duration: 2,
            ease: 'back.inOut',
        });
    }, []);
    return (
        <div>
            <div className="box-style" id="box-4"></div>
        </div>
    );
};

export default GsapTo;
