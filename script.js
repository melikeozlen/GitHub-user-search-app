const search = document.querySelector(".search");
const name = document.querySelector(".name");
const user__name = document.querySelector(".user__name");
const avatar = document.querySelector(".avatar");
const join = document.querySelector(".join");
const bio = document.querySelector(".biografi");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const folowing = document.querySelector(".folowing");
const location__name = document.querySelector(".location__name");
const twitter = document.querySelector(".twitter");
const link = document.querySelector(".link");
const company = document.querySelector(".company");
const mode__button = document.querySelector(".mode__button");
const body = document.querySelector("body");
const container__search = document.querySelector(".container__search");
const input = document.querySelector(".input");
const container__bottom = document.querySelector(".container__bottom");
const act__info = document.querySelector(".act__info");
const mode__name = document.querySelector('.mode__name');
const mode__icon=document.querySelector('.mode__icon');

search.addEventListener("click", function () {
  const userName = document.getElementById("user").value;
  const monts = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  if (userName == "") {
    alert("Bir kullanıcı adı giriniz!");
  } else {
    console.log(userName.trim());
    fetch("https://api.github.com/users/" + userName)
      .then((data) => {
        return data.json();
      })
      .then((users) => {
        if (users.message == "Not Found") {
          alert("Geçersiz kullanıcı").transitionDuration = "1s";
        }

        console.log(users);
        name.innerHTML = users.name;
        user__name.innerHTML = "@" + users.login;
        avatar.src = users.avatar_url;

        var day = users.created_at.substr(8, 2);
        var mont = monts[Number(users.created_at.substr(5, 2))];
        var year = users.created_at.substr(0, 4);
        join.innerHTML = "Joinned " + day + " " + mont + " " + year;

        if (users.bio == null) {
          bio.innerHTML = "The profile has not bio";
        } else {
          bio.innerHTML = users.bio;
        }

        repos.innerHTML = users.public_repos;
        followers.innerHTML = users.followers;
        folowing.innerHTML = users.following;

        if (users.location == null) {
          location__name.innerHTML = "No location information";
        } else {
          location__name.innerHTML = users.location;
        }
        if (users.twitter_username == null) {
          twitter.innerHTML = "No avaible";
        } else {
          twitter.innerHTML = users.twitter_username;
        }
        if (users.blog == null) {
          link.innerHTML = "No avaible";
        } else {
          link.innerHTML = users.blog.substr(12);
        }
        if (users.company == null) {
          company.innerHTML = "No avaible";
        } else {
          company.innerHTML = users.company.company;
        }
      });
  }
});
mode__button.addEventListener("click", function () {
  if (body.classList == "dark") {
    body.classList.replace("dark", "light");
    act__info.classList.replace("dark", "light");

    container__search.classList.replace("dark-bg", "light-bg");
    container__bottom.classList.replace("dark-bg", "light-bg");
    search.classList.replace("black", "white");
    input.classList.replace("dark", "light");
    mode__name.innerHTML="DARK";
    mode__icon.src="img/icon-moon.svg";
  } else {
    body.classList.replace("light", "dark");
    act__info.classList.replace("light", "dark");
    search.classList.replace("white", "black");
    input.classList.replace("light", "dark");
    container__search.classList.replace("light-bg", "dark-bg");
    container__bottom.classList.replace("light-bg", "dark-bg");
    mode__name.innerHTML="LIGHT";
    mode__icon.src="img/icon-sun.svg";
  }
});
