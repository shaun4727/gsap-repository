'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapTo = () => {
    useGSAP(() => {
        gsap.from('#box-2', {
            x: 350,
            repeat: -1,
            yoyo: true,
            rotation: 360,
            duration: 2,
            ease: 'elastic',
        });
    }, []);
    return (
        <div>
            <div className="box-style" id="box-2"></div>
        </div>
    );
};

export default GsapTo;
