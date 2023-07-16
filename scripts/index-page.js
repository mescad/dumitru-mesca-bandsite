const commentList = [
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Connor Walton",
    date: "02/17/2021",
    text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  
];

let comments = document.querySelector(".comments");


//comment creator

function commentCreator(comment) {
  const article = document.createElement("article");
  article.classList.add("comments__card");
  comments.appendChild(article);

  const imgDiv = document.createElement("div");
  imgDiv.classList.add("comments__image");
  article.appendChild(imgDiv);

  const commentWrapper = document.createElement("div");
  commentWrapper.classList.add("comments__wrapper");
  article.appendChild(commentWrapper);

  const commentSectionTop = document.createElement("div");
  commentSectionTop.classList.add("comments__top");
  commentWrapper.appendChild(commentSectionTop);

  const commentSectionBot = document.createElement("div");
  commentSectionBot.classList.add("comments__bot");
  commentWrapper.appendChild(commentSectionBot);

  const commentName = document.createElement("h4");
  commentName.classList.add("comments__name");
  commentSectionTop.appendChild(commentName);

  const commentDate = document.createElement("h5");
  commentDate.classList.add("comments__date");
  commentSectionTop.appendChild(commentDate);


  const commentText = document.createElement("p");
  commentText.classList.add("comments__text");
  commentSectionBot.appendChild(commentText);
  

 

  commentName.textContent = comment.name;
  commentDate.textContent = comment.date;
  commentText.textContent = comment.text;

  return article;
}




//comment submit function
const form = document.querySelector(".form__body");

const formSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  ///////validation

  if (form.name.value == "" || form.comment.value == "") {
    alert("Please fill in your name and comment");
    return false;
  }

  const newComment = {
    name: form.name.value,
    date: new Date().toLocaleDateString("en-GB"),
    text: form.comment.value,
  };    

  commentList.push(newComment);

 commentRender();
  form.reset();
};

form.addEventListener("submit", formSubmit);



// comment render function
const commentRender = () => {
  const commentStore = document.querySelector(".comments");
  commentStore.innerHTML="";

  for (let i = 0; i < commentList.length; i++) {
    const comment = commentList[i];
    const commentCard = commentCreator(comment);

    commentStore.prepend(commentCard);
  }
};

commentRender();



