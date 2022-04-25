const ratingParent = document.querySelector(".ratings");
const ratings = ratingParent.querySelectorAll(".circle");
let rating;
const submitButton = document.querySelector("#submit");
const ratingState = document.querySelector(".rating-state");
const thanksState = document.querySelector(".thanks-state");
const displayedRating = document.querySelector("#submited-rating");
let state = "rating";
console.log(ratingState);

ratings.forEach((option) => {
  option.addEventListener("click", (event) => {
    rating = event.target.id;
    console.log(rating);
  })
});

submitButton.addEventListener("click", () => {
  console.log("clicked");
  console.log(rating);
  if(rating){
    displayedRating.textContent = rating;
    if(state === "rating"){
      state = "thanks";
      ratingState.style.display = "none";
      thanksState.style.display = "flex";
    } else {
      state = "rating";
      thanksState.style.display = "none";
      ratingState.style.display = "flex";
    }
  } else {
    alert("please select a rating");
  }
});



