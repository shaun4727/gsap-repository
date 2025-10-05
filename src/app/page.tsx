import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Button className="btn-custom">
                <Link href="/gsap-to">GSAP To</Link>
            </Button>
            <Button>
                <Link href="/gsap-from">GSAP From</Link>
            </Button>
            <Button>
                <Link href="/gsap-from-to">GSAP From To</Link>
            </Button>
            <Button>
                <Link href="/gsap-timeline">GSAP Timeline</Link>
            </Button>
            <Button>
                <Link href="/gsap-stagger">GSAP Stagger</Link>
            </Button>
            <Button>
                <Link href="/gsap-scroll-trigger">GSAP Scroll Trigger</Link>
            </Button>
            <Button>
                <Link href="/gsap-text">GSAP Text</Link>
            </Button>
        </div>
    );
}
