'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapTo = () => {
    useGSAP(() => {
        gsap.to('#box-1', {
            x: 250,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'bounce.inOut',
        });
    }, []);
    return (
        <div>
            <div className="box-style" id="box-1"></div>
        </div>
    );
};

export default GsapTo;
