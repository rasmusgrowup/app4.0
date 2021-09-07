import Gruppe from '../public/pral.jpg'
import Image from 'next/image'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import css from '../styles/intro.module.scss'

export default function Intro() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect (() => {
            gsap.set('.tAnim', {
                yPercent: 120
            })

            ScrollTrigger.create({
                trigger: '.introAnim',
                start: 'top 70%',
                onEnter: () => {
                    gsap.to('.tAnim', {
                        yPercent: 0,
                        duration: 1,
                        ease: 'Power3.easeOut',
                        stagger: .1
                    })
                }
            })
        }, [])

    return (
        <>
            <section className={css.introSection}>
                <div className={css.introWrapper}>
                    <div className={`${css.introContent} introAnim`}>
                        <h2>
                            <div className={css.introTitle}><span className='tAnim'>Design.</span></div>
                            <div className={css.introTitle}><span className='tAnim'>SoMe.</span></div>
                            <div className={css.introTitle}><span className='tAnim'>Web.</span></div>
                        </h2>
                        <p className={css.introP}>
                            <span>
                                Gennem nysgerrighed, grundighed
                                og kreativ tænkning udforsker vi,
                                hvordan sociale medier og moderne
                                web-design kan hjælpe start-ups
                                og mellemstore virksomheder med at
                                vokse sig større.
                            </span>
                            <span style={{ opacity: '.5' }}>
                                Gennem nysgerrighed, grundighed
                                og kreativ tænkning udforsker vi,
                                hvordan sociale medier og moderne
                                web-design kan hjælpe start-ups
                                og mellemstore virksomheder med at
                                vokse sig større.
                            </span>
                        </p>
                    </div>
                    <div className={css.imgContainer}>
                        <Image src={Gruppe} layout='responsive' />
                    </div>
                </div>
            </section>
        </>
    )
}
