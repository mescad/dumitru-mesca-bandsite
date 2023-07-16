
const showlist = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

let shows = document.querySelector(".shows");

const sectionHeader = document.createElement("h2");
sectionHeader.classList.add("shows__headertitle");
shows.appendChild(sectionHeader);
sectionHeader.textContent = "Shows";

const sectionWrapper = document.createElement("div");
sectionWrapper.classList.add("shows__wrapper");
shows.appendChild(sectionWrapper);

function cardCreator(date, venue, location, first) {
  const article = document.createElement("article");
  article.classList.add("shows__article");
  sectionWrapper.appendChild(article);

  const dateDiv = document.createElement("div");
  dateDiv.classList.add("shows__group--date");

  const venueDiv = document.createElement("div");
  venueDiv.classList.add("shows__group--venue");

  const locationDiv = document.createElement("div");
  locationDiv.classList.add("shows__group--location");

  article.appendChild(dateDiv);
  article.appendChild(venueDiv);
  article.appendChild(locationDiv);

  const dateTitle = document.createElement("p");
  const venueTitle = document.createElement("p");
  const locationTitle = document.createElement("p");

  dateTitle.classList.add("shows__title--date");
  venueTitle.classList.add("shows__title--venue");
  locationTitle.classList.add("shows__title--location");

  if (first) {
    dateTitle.classList.add("shows__title--date-modified");
    venueTitle.classList.add("shows__title--venue-modified");
    locationTitle.classList.add("shows__title--location-modified");
  }

  dateDiv.appendChild(dateTitle);
  venueDiv.appendChild(venueTitle);
  locationDiv.appendChild(locationTitle);

  dateTitle.textContent = "DATE";
  venueTitle.textContent = "VENUE";
  locationTitle.textContent = "LOCATION";

  const dateInfo = document.createElement("p");
  const venueInfo = document.createElement("p");
  const locationInfo = document.createElement("p");

  dateInfo.classList.add("shows__info--date");
  venueInfo.classList.add("shows__info--venue");
  locationInfo.classList.add("shows__info--location");

  dateInfo.textContent = date;
  venueInfo.textContent = venue;
  locationInfo.textContent = location;

  dateDiv.appendChild(dateInfo);
  venueDiv.appendChild(venueInfo);
  locationDiv.appendChild(locationInfo);

  const button = document.createElement("button");
  button.classList.add("shows__button");
  button.textContent = "BUY TICKETS";
  article.appendChild(button);
}

for (let i = 0; i < showlist.length; i++) {
  const first = i === 0;
  cardCreator(showlist[i].date, showlist[i].venue, showlist[i].location, first);
}
