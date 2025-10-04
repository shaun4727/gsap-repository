'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapTo = () => {
    useGSAP(() => {
        gsap.fromTo(
            '#box-3',
            {
                x: 0,
                rotation: 0,
                duration: 4,
                borderRadius: '0%',
                ease: 'power1.inOut',
            },
            {
                x: 350,
                repeat: -1,
                yoyo: true,
                borderRadius: '100%',
                rotation: 360,
                duration: 3,
                ease: 'elastic',
            },
        );
    }, []);
    return (
        <div>
            <div className="box-style" id="box-3"></div>
        </div>
    );
};

export default GsapTo;
