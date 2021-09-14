import Image from 'next/image'
import Link from 'next/link'
import Pral from '../public/pral_2.jpg'
import Occ from '../public/The_Organic_Crave_Company.jpg'
import Ti from '../public/Twelve_inch.jpg'
import ChefJen from '../public/ChefJen_placeholder.jpg'
import Tinekhome from '../public/Tinekhome_placeholder.jpg'
import Pernille from '../public/Pernille_albers.jpg'
import Stol from '../public/stol.jpg'
import Kron1 from '../public/Kron_1.jpg'
import Kron3 from '../public/Kron_3.jpg'
import Lustrup from '../public/lustrup.JPG'
import css from '../styles/cases.module.scss'
import React, { useState, useEffect } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Cases() {

    gsap.registerPlugin(ScrollTrigger);

    useEffect (() => {
        gsap.set('.tAnim', {
            yPercent: 120
        })

        ScrollTrigger.create({
            trigger: '.tAnim',
            start: 'top 85%',
            onEnter: () => {
                gsap.to('.tAnim', {
                    yPercent: 0,
                    duration: 1,
                    ease: 'Power3.easeOut',
                    stagger: .1
                })
            }
        })

        var fadeIn = gsap.utils.toArray('.imageAnim');
        fadeIn.forEach((fadeIn) => {
            gsap.from(fadeIn, {
            opacity: 0,
            duration: .6,
            delay: .6,
                scrollTrigger: {
                    trigger: fadeIn,
                    start: "top 80%",
                    end: "top center"
                }
            });
        });
    }, [])


    return (
        <>
            <section className={css.casesSection}>
                <div className={css.casesTitleWrapper}>
                    <h2 className={`${css.casesTitle} tAnim`}>
                        Nyeste opgaver<span className={css.casesTitleSpan}>.</span>
                    </h2>
                </div>
                <div className={css.casesMasonry} gutter="4rem">

                    <Link href='/' >
                        <div className={css.caseTeaser}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#F03C3C'}}>
                                    <Image src={Occ} layout='responsive' objectFit='cover' objectPosition='center' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong>The Organic Crave Company</strong> — Odenseansk start-up prøver at starte en revolution</p>
                            <span className={css.caseTasks}>Fotostil | Shopify Webshop | SoMe</span>
                        </div>
                    </Link>

                    <Link href='/' >
                        <div className={css.caseTeaser}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#FFD86E' }}>
                                <Image src={Ti} layout='responsive' objectFit='cover' objectPosition='center' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong>Twelve Inch</strong> — Hvordan kan vi hjælpe en en-mands-virksomhed med at vokse?</p>
                            <span className={css.caseTasks}>NEOS | Shopify | Webudvikling</span>
                        </div>
                    </Link>

                    <Link href='/' >
                        <div className={`${css.caseTeaser} ${css.teaserhigh}`}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#00A0D0' }}>
                                    <Image src={ChefJen} layout='responsive' objectFit='cover' objectPosition='center' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong>ChefJen</strong> — Nytænkning af hjemmeside til catering-koncept</p>
                            <span className={css.caseTasks}>Art Direction | Visuel identitet | Hjemmeside</span>
                        </div>
                    </Link>

                    <Link href='/' >
                        <div className={css.caseTeaser}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#ECECF4' }}>
                                    <Image src={Tinekhome} layout='responsive' objectFit='cover' objectPosition='center' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong>Tinekhome</strong> — Nyt visuelt univers på Tinekhomes netbutik</p>
                            <span className={css.caseTasks}>Visuel konceptudvikling | Frontend-udvikling</span>
                        </div>
                    </Link>

                    <Link href='/' >
                        <div className={`${css.caseTeaser} ${css.teaserhigh}`}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#CFD976' }}>
                                    <Image src={Pral} layout='responsive' objectFit='cover' objectPosition='center' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong>Pral</strong> — Ny netbutik til Odenseansk start-up</p>
                            <span className={css.caseTasks}>Shopify | Webdesign</span>
                        </div>
                    </Link>

                    <Link href='/' >
                        <div className={`${css.caseTeaser} ${css.teaserhigh}`}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#EFD5C1' }}>
                                    <Image src={Pernille} layout='responsive' objectFit='cover' objectPosition='center' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong>Pernille Albers</strong> — Nyt hjemmesideunivers til kendt indretningsstylist</p>
                            <span className={css.caseTasks}>Blog | Nextjs | Visuelt univers</span>
                        </div>
                    </Link>

                    <Link href='/' >
                        <div className={`${css.caseTeaser} ${css.teaserhigh}`}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#5FA6C8' }}>
                                    <Image src={Kron1} layout='responsive' objectFit='cover' objectPosition='center' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong> Stöj</strong> — Onlineportfolio til et kommercielt Odenseansk fotostudie</p>
                            <span className={css.caseTasks}>Nextjs | Visuel konceptudvikling</span>
                        </div>
                    </Link>

                    <Link href='/' >
                        <div className={css.caseTeaser}>
                            <div className={css.imageWrapper} style={{ backgroundColor: '#E59A62' }}>
                                    <Image src={Lustrup} layout='responsive' objectFit='cover' objectPosition='bottom' quality='100' className={`${css.image} imageAnim`}/>
                            </div>
                            <p><strong>Pral</strong> — Shopify web-shop</p>
                            <span className={css.caseTasks}>Art Direction | Visuel konceptudvikling</span>
                        </div>
                    </Link>

                </div>
            </section>
        </>
    )
}
