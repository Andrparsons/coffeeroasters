import Head from "next/head";
import styles from "../styles/Plan.module.css";
import Button from "../components/Button/Button";
import Accordion from "../components/Accordion/Accordion";
import RadioInput from "../components/RadioInput/RadioInput";

import { useState, useEffect } from "react";

export default function Plan() {
  const [style, setStyle] = useState("_____");
  const [type, setType] = useState("_____");
  const [amount, setAmount] = useState("_____");
  const [grind, setGrind] = useState("_____");
  const [freq, setFreq] = useState("_____");
  const [isNotValid, setIsNotValid] = useState(true);

  //check if all options in plan have been selected
  useEffect(() => {
    if (
      style !== "_____" &&
      type !== "_____" &&
      amount !== "_____" &&
      grind !== "_____" &&
      freq !== "_____"
    ) {
      setIsNotValid(false);
    } else {
      setIsNotValid(true);
    }
  }, [style, type, amount, grind, freq]);

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
          <div className={styles.steps}>
            <hr className={styles.stepBorder} />
            <div className={styles.step}>
              <div className={styles.circle} />
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Pick your coffee</h3>
                <p className={styles.stepText}>
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
                <p className={styles.stepText}>
                  Customize your order frequency, quantity, even your roast
                  style and grind type. Pause, skip or cancel your subscription
                  with no commitment through our online portal.
                </p>
              </div>
            </div>

            <div className={styles.step}>
              <div className={styles.circle} />
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>Receive and enjoy!</h3>
                <p className={styles.stepText}>
                  We ship your package within 48 hours, freshly roasted. Sit
                  back and enjoy award-winning world-class coffees curated to
                  provide a distinct tasting experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.optionSection}>
          <div className={styles.optionStatus}>
            01 Preferences 02 Bean type 03 Quantity 04 Grind option 05
            Deliveries
          </div>

          <div className={styles.options}>
            <Accordion title="How do you drink your coffee?">
              <div className={styles.radioGroup}>
                <RadioInput
                  id="style1"
                  name="style"
                  value="capsule"
                  changed={(e) => setStyle(e.target.value)}
                >
                  <h4>Capsule</h4>
                  <p>Compatible with Nespresso systems and similar brewers</p>
                </RadioInput>

                <RadioInput
                  id="style2"
                  name="style"
                  value="filter"
                  changed={(e) => setStyle(e.target.value)}
                >
                  <h4>Filter</h4>
                  <p>
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </RadioInput>

                <RadioInput
                  id="style3"
                  name="style"
                  value="espresso"
                  changed={(e) => setStyle(e.target.value)}
                >
                  <h4> Espresso</h4>
                  <p>
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </RadioInput>
              </div>
            </Accordion>

            <Accordion title="What type of coffee?">
              <div className={styles.radioGroup}>
                <RadioInput
                  id="type1"
                  name="type"
                  value="single origin"
                  changed={(e) => setType(e.target.value)}
                >
                  <h4>Single origin</h4>
                  <p>
                    Distinct, high quality coffee from a specific family-owned
                    farm
                  </p>
                </RadioInput>

                <RadioInput
                  id="type2"
                  name="type"
                  value="decaf"
                  changed={(e) => setType(e.target.value)}
                >
                  <h4>Decaf</h4>
                  <p>
                    Just like regular coffee, except the caffeine has been
                    removed
                  </p>
                </RadioInput>

                <RadioInput
                  id="type3"
                  name="type"
                  value="blended"
                  changed={(e) => setType(e.target.value)}
                >
                  <h4>Blended</h4>
                  <p>
                    Combination of two or three dark roasted beans of organic
                    coffees
                  </p>
                </RadioInput>
              </div>
            </Accordion>

            <Accordion title="How much would you like?">
              <div className={styles.radioGroup}>
                <RadioInput
                  id="amount1"
                  name="amount"
                  value="250g"
                  changed={(e) => setAmount(e.target.value)}
                >
                  <h4>250g</h4>
                  <p>
                    Perfect for the solo drinker. Yields about 12 delicious
                    cups.
                  </p>
                </RadioInput>

                <RadioInput
                  id="amount2"
                  name="amount"
                  value="500g"
                  changed={(e) => setAmount(e.target.value)}
                >
                  <h4>500g</h4>
                  <p>
                    Perfect option for a couple. Yields about 40 delectable
                    cups.
                  </p>
                </RadioInput>

                <RadioInput
                  id="amount3"
                  name="amount"
                  value="1000g"
                  changed={(e) => setAmount(e.target.value)}
                >
                  <h4>1000g</h4>
                  <p>
                    Perfect for offices and events. Yields about 90 delightful
                    cups.
                  </p>
                </RadioInput>
              </div>
            </Accordion>

            <Accordion title=" Want us to grind them? ">
              <div className={styles.radioGroup}>
                <RadioInput
                  id="grind1"
                  name="grind"
                  value="wholebean"
                  changed={(e) => setGrind(e.target.value)}
                >
                  <h4>Wholebean</h4>
                  <p>Best choice if you cherish the full sensory experience</p>
                </RadioInput>

                <RadioInput
                  id="grind2"
                  name="grind"
                  value="Filter"
                  changed={(e) => setGrind(e.target.value)}
                >
                  <h4>Filter</h4>
                  <p>
                    For drip or pour-over coffee methods such as V60 or
                    Aeropress
                  </p>
                </RadioInput>

                <RadioInput
                  id="grind3"
                  name="grind"
                  value="cafetiere"
                  changed={(e) => setGrind(e.target.value)}
                >
                  <h4> Cafetiére</h4>
                  <p>
                    Course ground beans specially suited for french press coffee
                  </p>
                </RadioInput>
              </div>
            </Accordion>

            <Accordion title="How often should we deliver?">
              <div className={styles.radioGroup}>
                <RadioInput
                  id="freq1"
                  name="freq"
                  value="every week"
                  changed={(e) => setFreq(e.target.value)}
                >
                  <h4>Every week</h4>
                  <p>
                    $14.00 per shipment. Includes free first-class shipping.
                  </p>
                </RadioInput>

                <RadioInput
                  id="freq2"
                  name="freq"
                  value="every two weeks"
                  changed={(e) => setFreq(e.target.value)}
                >
                  <h4>Every 2 weeks</h4>
                  <p>$17.25 per shipment. Includes free priority shipping.</p>
                </RadioInput>

                <RadioInput
                  id="freq3"
                  name="freq"
                  value="every month"
                  changed={(e) => setFreq(e.target.value)}
                >
                  <h4>Every month</h4>
                  <p>$22.50 per shipment. Includes free priority shipping.</p>
                </RadioInput>
              </div>
            </Accordion>

            <div className={styles.summary}>
              <h5>Order Summary</h5>
              <p className={styles.summaryContent}>
                “I drink may coffee as{" "}
                <span className={styles.summaryOption}>{style}</span>, with a{" "}
                <span className={styles.summaryOption}>{type}</span> type of
                bean. <span className={styles.summaryOption}>{amount}</span>{" "}
                ground ala <span className={styles.summaryOption}>{grind}</span>
                , sent to me{" "}
                <span className={styles.summaryOption}>{freq}</span>
                .”
              </p>
            </div>
            <div className={styles.buttonContainer}>
              <Button disabled={isNotValid}>Create my plan!</Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
