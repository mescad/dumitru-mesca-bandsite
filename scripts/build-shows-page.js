

const getApi = ()=>{
   axios
   .get("https://project-1-api.herokuapp.com/showdates?api_key=64e600a2-dc89-422e-bd7a-a1fd3d78c44c").then((result)=>{
    console.log(result);
    showsRender(result.data)
   }
    
   )
}
getApi()


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

  dateUpdate= new Date(date).toLocaleDateString();

  dateInfo.textContent = dateUpdate;
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


const showsRender = (showsArray)=>{
showsArray.forEach ((show, i) =>{
        const first = i === 0;
        cardCreator(show.date, show.place, show.location, first);
    });

}
