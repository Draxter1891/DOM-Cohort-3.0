let form = document.querySelector("form");
let inp1 = document.querySelector("#name");
let inp2 = document.querySelector("#age");
let inp3 = document.querySelector("#img");
let container = document.querySelector(".users-container");

// let randomColorGen = () => {
//   let colorArr = ["#7D1806", "#757D06", "#067D3C", "#06717D"];
//   let index = Math.floor(Math.random()*4)
//   return colorArr[index];
// };

let usersData = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    dob: "1998-04-15",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya.verma@example.com",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    dob: "1996-09-28",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    email: "rohan.mehta@example.com",
    image: "https://randomuser.me/api/portraits/men/35.jpg",
    dob: "2000-01-12",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    image: "https://randomuser.me/api/portraits/women/48.jpg",
    dob: "1997-07-03",
  },
  {
    id: 5,
    name: "Karan Malhotra",
    email: "karan.malhotra@example.com",
    image: "https://plus.unsplash.com/premium_photo-1761413376486-384d87a5b79c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2ZpbGUlMjBwaWMlMjBzcXVhcmV8ZW58MHx8MHx8fDA%3D",
  },
];

let ui = () => {
  container.innerHTML = "";
  usersData.forEach((val,index) => {
    container.innerHTML += `
    <div class="user">
            <img src="${val.image}" alt="user pfp">
            <h2>${val.name}</h2>
            <h3>${val.email}</h3>
            <div class="actions">
                <button>Edit</button>
                <button onClick = "deleteUser(${index})">Delete</button>
            </div>
        </div>
    `;
  });
};

ui();



form.addEventListener("submit", (event) => {
  event.preventDefault();

  // console.log(event.target[0]) alternate method
  if (inp1.value === "" || inp2.value === "" || inp3.value === "") return;

  usersData.push({
    name: inp1.value,
    email: inp2.value,
    image: inp3.value,
  });
  ui();
  // let cardBG = document.querySelector(".user")
  // console.log(cardBG)
  // cardBG.style.backgroundColor = randomColorGen()

  form.reset();
});


let deleteUser = (index) => {
  usersData.splice(index, 1);
  ui(); 
};
