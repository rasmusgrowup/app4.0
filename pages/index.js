import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Instagram from '../public/instagram.svg'
import LinkedIn from '../public/linkedin.svg'
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import css from '../styles/index.module.scss'

export default function Home() {

    useEffect(() =>{
        gsap.set('.titleAnim', {
            yPercent: 120
        })
        gsap.to('.titleAnim', {
            yPercent: 0,
            duration: 1,
            ease: 'Power3.easeOut',
            delay: 1,
            stagger: .1
        })
    }, []);

    return (
        <>
            <section className={css.heroSection}>
                <h1 className={css.heroTitle}>
                    <div className={css.titleAnim}><span className='titleAnim'>Odenseansk</span></div>
                    <div className={css.titleAnim}><span className='titleAnim'>design, web &</span></div>
                    <div className={css.titleAnim}><span className='titleAnim'>social content</span></div>
                    <div className={css.titleAnim}><span className='titleAnim'>bureau.</span></div>
                </h1>
                <p className={css.heroP}>
                    <div className={css.pAnim}><span className='pAnim'>Gennem nysgerrighed, grundighed</span></div>
                    <div className={css.pAnim}><span className='pAnim'>og kreativ tænkning udforsker vi,</span></div>
                    <div className={css.pAnim}><span className='pAnim'>hvordan sociale medier og moderne</span></div>
                      web-design kan hjælpe start-ups og mellemstore virksomheder med at vokse sig større.
                </p>
                <div className={css.socialWrapper}>
                    <Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><Image src={Instagram} /></a></Link>
                    <Link href='https://www.linkedin.com/company/growup-studio/'><a target='_blank'><Image src={LinkedIn} /></a></Link>
                    <span>__følg os her</span>
                </div>
            </section>
        </>
    )
}
