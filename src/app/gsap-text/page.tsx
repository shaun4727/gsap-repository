'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const gsapTextPage = () => {
    useGSAP(() => {
        gsap.to('#text', {
            ease: 'power1.inOut',
            opacity: 1,
            y: 0,
        });

        gsap.fromTo(
            '.para',
            {
                opacity: 0,
                y: 20,
            },
            {
                opacity: 1,
                y: 0,
                delay: 1,
                stagger: 0.1,
            },
        );
    }, []);

    return (
        <main>
            <h1
                id="text"
                className="opacity-0 translate-y-10 text-6xl font-extrabold"
            >
                Gsap Text
            </h1>

            <p className="para mt-4 ml-2 text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor.
            </p>
            <p className="para mt-4 ml-2 text-xl">
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                hendrerit semper vel class aptent taciti sociosqu. Ad litora
                torquent per conubia nostra inceptos himenaeos.
            </p>
            <p className="para mt-4 ml-2 text-xl">
                Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                hendrerit semper vel class aptent taciti sociosqu. Ad litora
                torquent per conubia nostra inceptos himenaeos.
            </p>
            <p className="para mt-4 ml-2 text-xl">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                faucibus ex sapien vitae pellentesque sem placerat. In id cursus
                mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
                urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
                egestas. Iaculis massa nisl malesuada lacinia integer nunc
                posuere. Ut hendrerit semper vel class aptent taciti sociosqu.
                Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>
        </main>
    );
};

export default gsapTextPage;
