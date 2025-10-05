'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const GsapTo = () => {
    useGSAP(() => {
        gsap.to('.box-stagger', {
            y: 250,
            rotation: 360,
            borderRadius: '100%',
            repeat: -1,
            yoyo: true,
            stagger: {
                amount: 1.5, //time
                grid: [2, 1],
                axis: 'y',
                ease: 'circ.inOut',
                from: 'center',
            },
        });
    }, []);
    return (
        <div className="flex">
            <div
                className="box-stagger-style box-stagger bg-indigo-100"
                id="box-4"
            ></div>
            <div
                className="box-stagger-style box-stagger bg-indigo-200"
                id="box-4"
            ></div>
            <div
                className="box-stagger-style box-stagger bg-indigo-400"
                id="box-4"
            ></div>
            <div
                className="box-stagger-style box-stagger bg-indigo-500"
                id="box-4"
            ></div>
            <div
                className="box-stagger-style box-stagger bg-indigo-600"
                id="box-4"
            ></div>
            <div
                className="box-stagger-style box-stagger bg-indigo-700"
                id="box-4"
            ></div>
            <div
                className="box-stagger-style box-stagger bg-indigo-800"
                id="box-4"
            ></div>
        </div>
    );
};

export default GsapTo;
