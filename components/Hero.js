import Image from 'next/image'
import Link from 'next/link'
import Instagram from '../public/instagram.svg'
import LinkedIn from '../public/linkedin.svg'
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import css from '../styles/hero.module.scss'

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
                    <span className={css.pAnim}><p className='pAnim'><strong>Kort om os</strong> — Vi hjælper start-ups og mellemstore </p></span>
                    <span className={css.pAnim}><p className='pAnim'>virksomheder med at udvikle deres forretninger. Vores </p></span>
                    <span className={css.pAnim}><p className='pAnim'>Web og SoMe løsninger skræddersyes til den enkelte</p></span>
                    <span className={css.pAnim}><p className='pAnim'>kunde, hvilket sikrer en positiv udvikling af brandet og</p></span>
                    <span className={css.pAnim}><p className='pAnim'>at alle behov opfyldes.</p></span>
                    <div className={css.socialWrapper}>
                        <div className='pAnim'>
                            <Link href='https://instagram.com/growupstudio.dk'><a target='_blank'><Image src={Instagram} /></a></Link>
                            <Link href='https://www.linkedin.com/company/growup-studio/'><a target='_blank'><Image src={LinkedIn} /></a></Link>
                            <span>__følg os her</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
