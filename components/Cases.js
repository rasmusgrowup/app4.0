import Image from 'next/image'
import Pral from '../public/pral_2.jpg'
import Stol from '../public/stol.jpg'
import Kron1 from '../public/Kron_1.jpg'
import Kron3 from '../public/Kron_3.jpg'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import css from '../styles/cases.module.scss'

export default function Cases() {
    return (
        <>
            <section className={css.casesSection}>
                <ResponsiveMasonry columnsCountBreakPoints={{414: 1, 750: 2, 900: 3}}>
                    <Masonry gutter="4rem">
                        <div className={css.imageCaption}>
                            <Image src={Stol} layout='responsive' quality='100'/>
                            <p><strong>J. Hansen</strong> — Art Direction</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Stol} layout='responsive' quality='100'/>
                            <p><strong>J. Hansen</strong> — Art Direction</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Kron1} layout='responsive' quality='100'/>
                            <p><strong> Stöj</strong> — Portfolio</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Stol} layout='responsive' quality='100'/>
                            <p><strong>J. Hansen</strong> — Art Direction</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Pral} layout='responsive' quality='100'/>
                            <p><strong>Pral</strong> — Shopify web-shop</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Kron3} layout='responsive' quality='100'/>
                            <p><strong> Stöj</strong> — Portfolio</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Stol} layout='responsive' quality='100'/>
                            <p><strong>J. Hansen</strong> — Art Direction</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Kron1} layout='responsive' quality='100'/>
                            <p><strong> Stöj</strong> — Portfolio</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Stol} layout='responsive' quality='100'/>
                            <p><strong>J. Hansen</strong> — Art Direction</p>
                        </div>
                        <div className={css.imageCaption}>
                            <Image src={Pral} layout='responsive' quality='100'/>
                            <p><strong>Pral</strong> — Shopify web-shop</p>
                        </div>
                    </Masonry>
                </ResponsiveMasonry>
            </section>
        </>
    )
}
