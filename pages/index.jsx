import Head from "next/head";
import NewsletterRegistration from "../components/input/newsletter-registration";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps(context) {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

// You can add the Head tag from next.js anywhere inside the jsx code and it will add it to the top of the page
