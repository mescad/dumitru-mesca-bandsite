// let show1 = {
//     Date: "Mon Sept 06 2021",
//     Venue: "Ronald Lane",
//     Location: "San Francisco, CA",
// }

// let show2 = {
//     Date: "Tue Sept 21 2021",
//     Venue: "Pier 3 East",
//     Location: "San Francisco, CA",
// }

// let show3 = {
//     Date: "Fri Oct 15 2021",
//     Venue: "View Lounge",
//     Location: "San Francisco, CA",
// }

// let show4 = {
//     Date: "Sat Nov 06 2021",
//     Venue: "Hyatt Agency",
//     Location: "San Francisco, CA",
// }

// let show5 = {
//     Date: "Fri Nov 26 2021",
//     Venue: "Moscow Center",
//     Location: "San Francisco, CA",
// }


// let show6 = {
//     Date: "Wed Dec 15 2021",
//     Venue: "Press Club",
//     Location: "San Francisco, CA",
// }



// let showLibrary={
//     Date: "Wed Dec 15 2021",
//     Venue: "Press Club",
//     Location: "San Francisco, CA",
// }


//////////////////////////////////////////////////////////////////////////////

// function show(date, venue, location){
//     this.date= date;
//     this.venue=venue;
//     this.location=location;
// }

// const show1= new show("Mon Sept 06 2021","Ronald Lane","San Francisco, CA")
// const show2= new show("Tue Sept 21 2021","Pier 3 East","San Francisco, CA")
// const show3= new show("Fri Oct 15 2021","View Lounge","San Francisco, CA")
// const show4= new show("Sat Nov 06 2021","Hyatt Agency","San Francisco, CA")
// const show5= new show("Fri Nov 26 2021","Moscow Center","San Francisco, CA")
// const show6= new show("Wed Dec 15 2021","Press Club","San Francisco, CA")


const showlist=[
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
    }

]


let shows=document.querySelector(".shows")

const sectionHeader= document.createElement("h2")
sectionHeader.classList.add("shows__headertitle")
shows.appendChild(sectionHeader)
sectionHeader.textContent="Shows";

const sectionWrapper= document.createElement("div")
sectionWrapper.classList.add("shows__wrapper")
shows.appendChild(sectionWrapper)











function cardCreator(date, venue, location, first){

    const article= document.createElement("article")
    article.classList.add("shows__article")
    sectionWrapper.appendChild(article);



    const dateDiv = document.createElement("div")
    dateDiv.classList.add("shows__group--date")

    const venueDiv = document.createElement("div")
    venueDiv.classList.add("shows__group--venue")

    const locationDiv = document.createElement("div")
    locationDiv.classList.add("shows__group--location")


    article.appendChild(dateDiv);
    article.appendChild(venueDiv);
    article.appendChild(locationDiv);


    const dateTitle= document.createElement("p")
    const venueTitle= document.createElement("p")
    const locationTitle= document.createElement("p")

    dateTitle.classList.add("shows__title--date")
    venueTitle.classList.add("shows__title--venue")
    locationTitle.classList.add("shows__title--location")

    if (first){
        dateTitle.classList.add("shows__title--date-modified");
        venueTitle.classList.add("shows__title--venue-modified");
        locationTitle.classList.add("shows__title--location-modified");
    }

    dateDiv.appendChild(dateTitle);
    venueDiv.appendChild(venueTitle);
    locationDiv.appendChild(locationTitle);

    dateTitle.textContent= "DATE";
    venueTitle.textContent= "VENUE";
    locationTitle.textContent="LOCATION";

    const dateInfo= document.createElement("p")
    const venueInfo= document.createElement("p")
    const locationInfo= document.createElement("p")

    dateInfo.classList.add("shows__info--date")
    venueInfo.classList.add("shows__info--venue")
    locationInfo.classList.add("shows__info--location")

    dateInfo.textContent = date
    venueInfo.textContent= venue
    locationInfo.textContent= location

    dateDiv.appendChild(dateInfo)
    venueDiv.appendChild(venueInfo)
    locationDiv.appendChild(locationInfo)

    const button = document.createElement("button")
    button.classList.add("shows__button")
    button.textContent="BUY TICKETS";
    article.appendChild(button)
}


//create a function to make a card
//repeate the function to iterate over the array of items



//console.log(cardCreator(showlist[0].date,showlist[0].venue,showlist[0].location));



for (let i=0; i<showlist.length;i++){
    const first = i === 0;
    cardCreator(showlist[i].date, showlist[i].venue, showlist[i].location, first)
}










