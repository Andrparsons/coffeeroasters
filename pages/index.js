import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>coffeeroasters | Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Great coffee made simple.</h1>
          <p>
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>

          <button>Create your plan</button>
        </div>

        <div className={styles.collection}>
          <h2>Our collection</h2>
          <div className={styles.collectionGroup}>
            <h3>Gran Espresso</h3>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>

            <h3>Planalto</h3>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>

            <h3>Piccollo</h3>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>

            <h3>Danche</h3>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>

        <div className={styles.features}>
          <h2>Why choose us?</h2>

          <p>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>

          <h3>Best quality</h3>
          <p>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>

          <h3>Exclusive benefits</h3>
          <p>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>

          <h3>Free shipping</h3>
          <p>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>

        <div className={styles.steps}>
          <h3>How it works</h3>

          <div className={styles.step}>
            <h4>01</h4>
            <h5>Pick your coffee</h5>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>

          <div className={styles.step}>
            <h4>02</h4>
            <h5>Choose the frequency</h5>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>

          <div className={styles.step}>
            <h4>03</h4>
            <h5>Receive and enjoy!</h5>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
          <button>Create your plan</button>
        </div>
      </main>
    </div>
  );
}
