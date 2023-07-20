

const getComments = () => {
  axios
    .get(
      "https://project-1-api.herokuapp.com/comments?api_key=64e600a2-dc89-422e-bd7a-a1fd3d78c44c"
    )
    .then((response) => {
      console.log(response.data);
      
      // Give the comments array from the api as a argument to the function
      commentRender(response.data);
    });
};

getComments();



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

  let dateUpdate = new Date(comment.timestamp).toLocaleDateString();

  commentName.textContent = comment.name;
  commentDate.textContent = dateUpdate;
  commentText.textContent = comment.comment;

  return article;
}

//comment submit function
const form = document.querySelector(".form__body");

const formSubmit = (event) => {
  event.preventDefault();

  console.log(event);

  const form = event.target;

  ///////validation

  if (form.name.value == "" || form.comment.value == "") {
    alert("Please fill in your name and comment");
    return false;
  }



  // Sending a POST request to the api to create a new comment
  axios
    .post(
      "https://project-1-api.herokuapp.com/comments?api_key=64e600a2-dc89-422e-bd7a-a1fd3d78c44c",
      {
        name: form.name.value,
        comment: form.comment.value,
      }
    )
    .then((result) => {
      // At this poimt, the API has finished saving the comment in the DB
      // and now we need to update the DOM with the new comment
      console.log(result);

      // OLD WAY: push to a variable in our code - we now have a API for the data
      //commentList.push(newComment);
      // commentRender(); // this function now needs the api data to work

      // This function will do another GET request, with the new comment and
      // executes commentRender inside of it, with the API data 
      getComments();
      form.reset();
    });

  
};


form.addEventListener("submit", formSubmit);

// comment render function

// recieve the data as a parameter
const commentRender = (commentsArray) => {
  const commentStore = document.querySelector(".comments");
  commentStore.innerHTML = "";

  // 1. maybe use a commentsArray.forEach() instead of a for loop

  // 2. instead of prepend, we could .sort() thecommentsArray by timestamp (desc)

  // e.g of both: commentsArray.sort((a, b) => ...).forEach(() => ...)

// using the parameter
commentsArray.forEach((comment,i)=>{
  const commentCard = commentCreator(comment);

    commentStore.prepend(commentCard);
})
  
};


