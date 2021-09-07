import Image from 'next/image'
import Link from 'next/link'
import Instagram from '../public/instagram.svg'
import LinkedIn from '../public/linkedin.svg'
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import css from '../styles/index.module.scss'

export default function Hero() {

    useEffect(() =>{
        gsap.set('.titleAnim', {
            yPercent: 120
        })
        gsap.set('.pAnim', {
            yPercent: 120
        })
        gsap.to('.titleAnim', {
            yPercent: 0,
            duration: 1,
            ease: 'Power2.easeOut',
            delay: 1,
            stagger: .1
        })
        gsap.to('.pAnim', {
            yPercent: 0,
            duration: 1.2,
            ease: 'Power2.easeOut',
            delay: 1.5,
            stagger: .1
        })
    }, []);

    return (
        <>
            <section className={`${css.heroSection} hero`}>
                <h1 className={css.heroTitle}>
                    <div className={css.titleAnim}><span className='titleAnim'>Odenseansk</span></div>
                    <div className={css.titleAnim}><span className='titleAnim'>design, web &</span></div>
                    <div className={css.titleAnim}><span className='titleAnim'>social content</span></div>
                    <div className={css.titleAnim}><span className='titleAnim'>bureau.</span></div>
                </h1>
                <div className={css.heroP}>
                    <span className={css.pAnim}><p className='pAnim'>Gennem nysgerrighed, grundighed og</p></span>
                    <span className={css.pAnim}><p className='pAnim'>kreativ tænkning udforsker vi, hvordan</p></span>
                    <span className={css.pAnim}><p className='pAnim'>sociale medier og moderne web-design</p></span>
                    <span className={css.pAnim}><p className='pAnim'>kan hjælpe start-ups og mellemstore</p></span>
                    <span className={css.pAnim}><p className='pAnim'>virksomheder med at vokse sig</p></span>
                    <span className={css.pAnim}><p className='pAnim'>større.</p></span>
                </div>
                <div className={css.socialWrapper}>
                    <Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><Image src={Instagram} /></a></Link>
                    <Link href='https://www.linkedin.com/company/growup-studio/'><a target='_blank'><Image src={LinkedIn} /></a></Link>
                    <span>__følg os her</span>
                </div>
            </section>
        </>
    )
}
