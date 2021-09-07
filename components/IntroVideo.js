import css from '../styles/intro.module.scss'
import Player from '@vimeo/player';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';

export default function IntroVideo() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect (() => {
            const player = new Player('reel', {
                id: 599510553,
                background: true,
                responsive: true
            });

            player.pause()

            ScrollTrigger.create({
                trigger: '#reel',
                start: 'top 30%',
                end: 'center top',
                onEnter: () => player.play(),
                onLeave: () => player.pause(),
                onEnterBack: () => player.play(),
                onLeaveBack: () => player.pause()
            })

            gsap.set('.tAnim', {
                yPercent: 120
            })

            ScrollTrigger.create({
                trigger: '.introAnim',
                start: 'top 70%',
            //    markers: true,
                onEnter: () => {
                    gsap.to('.tAnim', {
                        yPercent: 0,
                        duration: 1,
                        ease: 'Power2.easeOut',
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
                    <div className={css.vimeoContainer}>
                        <div className={css.vimeoWrapper}>
                            <div className={css.vimeoVideo} id='reel'></div>
                        </div>
                        <p>@hallojstoj.dk</p>
                    </div>
                </div>
            </section>
        </>
    )
}
