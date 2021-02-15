import Head from "next/head";
import styles from "../styles/About.module.css";

import {
  IllustrationUk,
  IllustrationCanada,
  IllustrationAustralia,
} from "../components/SvgComponents/about";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>coffeeroasters | About Us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <h2>About us</h2>
            <p className={styles.introParagraph}>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </section>

        <section className={styles.commitmentSection}>
          <picture>
            <source
              media="(min-width:1100px)"
              srcSet="/about/desktop/image-commitment.jpg"
            />
            <source
              media="(min-width:450px)"
              srcSet="/about/tablet/image-commitment.jpg"
            />

            <img
              className={styles.commitmentImage}
              src="/about/mobile/image-commitment.jpg"
              alt="Barista"
            />
          </picture>
          <div className={styles.commitmentContent}>
            <h2 className={styles.commitmentTitle}>Our commitment</h2>
            <p>
              We’re built on a simple mission and a commitment to doing good
              along the way. We want to make it easy for you to discover and
              brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly
              60 days a year trying to understand the challenges and
              opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of
              farmers through with well above fair-trade benchmarks. We also
              offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast
              each lot to highlight tasting profiles distinctive to their native
              growing region.
            </p>
          </div>
        </section>

        <section className={styles.qualitySection}>
          <div className={styles.qualityBackground} />
          <div className={styles.qualitySectionContainer}>
            <picture>
              <source
                media="(min-width:1150px)"
                srcSet="/about/desktop/image-quality.jpg"
              />
              <source
                media="(min-width:550px)"
                srcSet="/about/tablet/image-quality.jpg"
              />

              <img
                className={styles.qualityImage}
                src="/about/mobile/image-quality.jpg"
                alt="Great cup of Coffee"
              />
            </picture>
            <div className={styles.qualityContent}>
              <h2 className={styles.qualityTitle}>Uncompromising quality</h2>
              <p className={styles.qualityText}>
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.locationSection}>
          <h4 className={styles.locationSectionTitle}>Our headquarters</h4>

          <div className={styles.locations}>
            <div className={styles.location}>
              <IllustrationUk />
              <h3 className={styles.locationCountry}>United Kingdom</h3>
              <div className={styles.addressGroup}>
                <p className={styles.addressLine}>68 Asfordby Rd</p>
                <p className={styles.addressLine}>Alcaston</p>
                <p className={styles.addressLine}>SY6 1YA</p>
                <p className={styles.addressLine}>+44 1241 918425</p>
              </div>
            </div>

            <div className={styles.location}>
              <IllustrationCanada />
              <h3 className={styles.locationCountry}>Canada</h3>
              <div className={styles.addressGroup}>
                <p className={styles.addressLine}>1528 Eglinton Avenue</p>
                <p className={styles.addressLine}>Toronto</p>
                <p className={styles.addressLine}>Ontario M4P 1A6</p>
                <p className={styles.addressLine}>+1 416 485 2997</p>
              </div>
            </div>

            <div className={styles.location}>
              <IllustrationAustralia />
              <h3 className={styles.locationCountry}>Australia</h3>
              <div className={styles.addressGroup}>
                <p className={styles.addressLine}>36 Swanston Street</p>
                <p className={styles.addressLine}>Kewell</p>
                <p className={styles.addressLine}>Victoria</p>
                <p className={styles.addressLine}>+61 4 9928 3629</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
