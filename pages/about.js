import Head from "next/head";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>coffeeroasters | About Us</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <div className={styles.introContainer}>
            <h2>About us</h2>
            <p className={styles.introParagraph}>
              Coffeeroasters began its journey of exotic discovery in 1999,
              highlighting stories of coffee from around the world. We have
              since been dedicated to bring the perfect cup - from bean to brew
              - in every shipment.
            </p>
          </div>
        </div>

        <div className={styles.commitment}>
          <h2>Our commitment</h2>
          <p>
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>

        <div className={styles.quality}>
          <h2>Uncompromising quality</h2>
          <p>
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>

        <div className={styles.headquarters}>
          <h4>Our headquarters</h4>

          <div className={styles.locations}>
            <div className={styles.location}>
              <h5>United Kingdom</h5>
              68 Asfordby Rd Alcaston SY6 1YA +44 1241 918425
            </div>

            <div className={styles.location}>
              <h5>Canada</h5>
              1528 Eglinton Avenue Toronto Ontario M4P 1A6 +1 416 485 2997
            </div>
            <div className={styles.location}>
              <h5>Australia</h5>
              36 Swanston Street Kewell Victoria +61 4 9928 3629
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
