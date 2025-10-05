'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    useGSAP(
        () => {
            if (!scrollRef.current) return;
            const boxes = gsap.utils.toArray(scrollRef.current.children);

            boxes.forEach((box) => {
                gsap.to(box as Element, {
                    x: 150 * (boxes.indexOf(box) + 5),
                    rotation: 360,
                    borderRadius: '100%',
                    scale: 1.5,
                    scrollTrigger: {
                        trigger: box as Element,
                        start: 'bottom bottom',
                        end: 'top 20%',
                        scrub: true,
                    },
                    ease: 'power1.inOut',
                });
            });
        },
        { scope: scrollRef },
    );

    return (
        <div className="min-h-[600px]">
            <div ref={scrollRef} className="ml-8 mt-256 bg-gray-300 p-8">
                <div className="h-12 w-12 bg-amber-600"></div>
                <div className="h-12 w-12 bg-amber-700"></div>
            </div>
        </div>
    );
};

export default GsapScrollTrigger;
