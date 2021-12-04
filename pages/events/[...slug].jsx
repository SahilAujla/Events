import { getFilteredEvents } from "../../dummy-data";
import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";

const FilteredEventsPage = () => {
  const router = useRouter();

  const lst = router.query.slug;

  if (!lst) {
    return <p className="center">Loading...</p>;
  }

  let year = lst[0];
  let month = lst[1];

  const numYear = +year;
  const numMonth = +month;

  if (
    isNaN(numMonth) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p className="center">Invalid Filter please adjust your values</p>;
  }

  const dateFilter = {
    year: numYear,
    month: numMonth,
  };

  const filteredEvents = getFilteredEvents(dateFilter);

  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No events found for the chosen filter.</p>;
  }

  return <EventList items={filteredEvents} />;
};

export default FilteredEventsPage;
