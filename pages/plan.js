import Head from "next/head";
import styles from "../styles/Plan.module.css";
import Button from "../components/Button/Button";

export default function Plan() {
  return (
    <div className={styles.container}>
      <Head>
        <title>coffeeroasters | Create a Plan</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <h1>Create a plan</h1>
            <p className={styles.introParagraph}>
              Build a subscription plan that best fits your needs. We offer an
              assortment of the best artisan coffees from around the globe
              delivered fresh to your door.
            </p>
          </div>
        </section>

        <section className={styles.stepSection}>
          <h4 className={styles.stepSectionTitle}>How it works</h4>
          <div className={styles.steps}>
            <div className={styles.step}>
              <div className={styles.circle} />
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Pick your coffee</h3>
                <p>
                  Select from our evolving range of artisan coffees. Our beans
                  are ethically sourced and we pay fair prices for them. There
                  are new coffees in all profiles every month for you to try
                  out.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.circle} />
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Choose the frequency</h3>
                <p>
                  Customize your order frequency, quantity, even your roast
                  style and grind type. Pause, skip or cancel your subscription
                  with no commitment through our online portal.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.circle} />
              <div className={styles.borderCover} />
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Receive and enjoy!</h3>
                <p>
                  We ship your package within 48 hours, freshly roasted. Sit
                  back and enjoy award-winning world-class coffees curated to
                  provide a distinct tasting experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className={styles.sidebar}>
          01 Preferences 02 Bean type 03 Quantity 04 Grind option 05 Deliveries
        </div>

        <div className={styles.options}>
          <div className={styles.option}>
            How do you drink your coffee? Capsule Compatible with Nespresso
            systems and similar brewers Filter For pour over or drip methods
            like Aeropress, Chemex, and V60 Espresso Dense and finely ground
            beans for an intense, flavorful experience
          </div>

          <div className={styles.option}>
            What type of coffee? Single origin Distinct, high quality coffee
            from a specific family-owned farm Decaf Just like regular coffee,
            except the caffeine has been removed Blended Combination of two or
            three dark roasted beans of organic coffees
          </div>

          <div className={styles.option}>
            How much would you like? 250g Perfect for the solo drinker. Yields
            about 12 delicious cups. 500g Perfect option for a couple. Yields
            about 40 delectable cups. 1000g Perfect for offices and events.
            Yields about 90 delightful cups.
          </div>
          <div className={styles.option}>
            Want us to grind them? Wholebean Best choice if you cherish the full
            sensory experience Filter For drip or pour-over coffee methods such
            as V60 or Aeropress Cafetiére Course ground beans specially suited
            for french press coffee
          </div>

          <div className={styles.option}>
            How often should we deliver? Every week $14.00 per shipment.
            Includes free first-class shipping. Every 2 weeks $17.25 per
            shipment. Includes free priority shipping. Every month $22.50 per
            shipment. Includes free priority shipping.
          </div>
        </div>

        <div className={styles.summary}>
          Order Summary “I drink coffee _____, with a _____ type of bean. _____
          ground ala _____, sent to me _____.”
        </div>

        <Button>Create my plan!</Button>
      </main>
    </div>
  );
}
