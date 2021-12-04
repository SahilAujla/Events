import { Fragment } from "react";
import { useRouter } from "next/router";

import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = () => {
  const events = getAllEvents();

  const router = useRouter();

  const FindEventsHandler = (selectedYear, selectedMonth) => {
    router.push(`/events/${selectedYear}/${selectedMonth}`);
  };

  return (
    <Fragment>
      <EventsSearch onSearch={FindEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventsPage;
