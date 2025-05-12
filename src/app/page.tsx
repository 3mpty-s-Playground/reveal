"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Home() {
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(imageRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: true,
            },
            height: 450,
        });
    }, []);

    return (
        <main ref={containerRef} className={styles.main}>
            <div className={styles.content}>
                <p>Frontend</p>
                <figure ref={imageRef}>
                    <Image
                        src={
                            "https://images.pexels.com/photos/31991424/pexels-photo-31991424/free-photo-of-young-photographer-holding-lumix-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        }
                        alt="Image"
                        fill
                    />
                </figure>
                <p>Developer</p>
            </div>
        </main>
    );
}
