import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import css from '../styles/line.module.scss'

export default function Line() {

    gsap.registerPlugin(ScrollTrigger);
    useEffect (() => {
        gsap.set('.lineAnim', {width:'0%'})

        gsap.to('.lineAnim', {
            width: '100%',
            scrollTrigger: {
                trigger: 'main',
                scrub: true,
                start: 'top top',
                end: 'bottom bottom',
                ease: 'Linear.easeNone'
            }
        })
    }, [])

    return (
        <div className={`${css.lineContainer} lineAnim`}></div>
    )
}
