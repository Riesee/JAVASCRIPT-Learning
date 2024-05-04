let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let currentDay;
let denemeid;

const day = document.querySelector(".calendar-dates");
const currdate = document.querySelector(".calendar-current-date");
const prenexIcons = document.querySelectorAll("#prevNextButton button");
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const modalInput = document.getElementById('modalInput');
const modalSubmit = document.getElementById("modalSubmit");




async function updateBadge(event) {
    return new Promise((resolve, reject) => {
        let date = event.split("_");
        let year = date[0];
        let month = date[1];
        let day = date[2];
        
        let badgeId = `badge${year}_${month}_${day}`;
        let badge = document.getElementById(badgeId);
        
        // Modal Submit button click event listener
        modalSubmit.addEventListener('click', () => {
            const inputValue = modalInput.value;
            badge.innerHTML = inputValue;
            document.getElementById('modalClose').click();
            modalInput.value = '';
            localStorage.setItem(badgeId, inputValue);

            // Modal body'sındaki div'i güncelle
            const modalBodyLabel = document.getElementById('exampleModalBodyLabel');
            modalBodyLabel.textContent = inputValue;

            resolve(); // Promise'i çöz
        }, { once: true }); // Event listener yalnızca bir kez çalışsın
        
        // Modal kapatıldığında Promise'i reddet
        document.getElementById('modalClose').addEventListener('click', () => {
            reject("Modal closed without submitting"); // Promise'i reddet
        }, { once: true }); // Event listener yalnızca bir kez çalışsın
    });
}




async function manipulate() {
    let dayone = new Date(year, month, 1).getDay();
    dayone = (dayone === 0) ? 6 : dayone - 1;

    let lastdate = new Date(year, month + 1, 0).getDate();

    let dayend = new Date(year, month, lastdate).getDay();
    dayend = (dayend === 0) ? 6 : dayend - 1;

    let monthlastdate = new Date(year, month, 0).getDate();

    let lit = "";

    for (let i = dayone; i > 0; i--) {
        const prevMonthDate = monthlastdate - i + 1;
        const badgeValue = localStorage.getItem(`badge${year}_${month}_${prevMonthDate}`);
        lit += `<li class="inactive list-group-item border-0" id="${year}_${month}_${prevMonthDate}">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-light m-2 p-0 border" style="height: 15vh; width: 25vh;">
                <h5>${prevMonthDate}</h5>
                <br />
                <span class="badge badge-success bg-success text-wrap" id ="badge${year}_${month}_${prevMonthDate}" style="max-height: 10vh; max-width:22vh">${badgeValue !== null ? badgeValue : ""}</span>
            </button>
        </li>`;
    }

    for (let i = 1; i <= lastdate; i++) {
        const currentDate = i;
        let isToday =
            i === date.getDate() &&
            month === new Date().getMonth() &&
            year === new Date().getFullYear()
            ? "active"
            : "";
        const badgeValue = localStorage.getItem(`badge${year}_${month+1}_${currentDate}`);
        lit += `<li class="list-group-item border-0" id="${year}_${month+1}_${currentDate}">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="${isToday} btn btn-light m-2 p-0 border" style="height: 15vh; width: 25vh;">
                <h5>${currentDate}</h5>
                <br />
                <span class="badge badge-success bg-success text-wrap" id ="badge${year}_${month+1}_${currentDate}" style="max-height: 10vh; max-width:22vh">${badgeValue !== null ? badgeValue : ""}</span>
            </button>
        </li>`;
    }

    for (let i = dayend; i < 6; i++) {
        const nextMonthDate = i - dayend + 1;
        const badgeValue = localStorage.getItem(`badge${year}_${month+2}_${nextMonthDate}`);
        lit += `<li class="inactive list-group-item border-0" id="${year}_${month+2}_${nextMonthDate}">
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-light m-2 p-0 border" style="height: 15vh; width: 25vh;">
                <h5>${nextMonthDate}</h5>
                <br />
                <span class="badge badge-success bg-success text-wrap" id ="badge${year}_${month+2}_${nextMonthDate}" style="max-height: 10vh; max-width:22vh">${badgeValue !== null ? badgeValue : ""}</span>
            </button>
        </li>`;
    }

    currdate.innerText = `${months[month]} ${year}`;
    day.innerHTML = lit;
    await second();
    // LocalStorage'tan verileri güncelle
    await updateLocalStorage();
}



async function second() {
    return new Promise((resolve, reject) => {
        const lists = document.querySelectorAll(".calendar-dates li");
        lists.forEach((dayElement, index) => {
            dayElement.addEventListener("click", () => {
                console.log("Tıklanan gün elementi:", dayElement);
                currentDay = index + 1;
                const idParts = dayElement.id.split("_");
                const dayId = idParts[2];
                const monthId = idParts[1];
                const yearId = idParts[0];
                const badgeId = `${yearId}_${monthId}_${dayId}`;
                console.log(badgeId);
                denemeid = badgeId;

                // Tıklanan günün tam tarihini oluştur
                const clickedDate = new Date(`${monthId}/${dayId}/${yearId}`);
                const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                const formattedDate = clickedDate.toLocaleDateString('en-EN', options);

                // Modal başlığına tarih bilgisini ekle
                const modalLabel = document.getElementById('exampleModalLabel');
                modalLabel.textContent = formattedDate;

               

                updateBadge(badgeId)
                    .then(() => resolve(badgeId))
                    .catch((error) => reject(error));
            });
        });
    });
}



async function first() {
    await manipulate();
}

first();
// Function to generate the calendar


// Attach a click event listener to each icon
prenexIcons.forEach((icon) => {
  // When an icon is clicked
  icon.addEventListener("click", () => {
    // Check if the icon is "calendar-prev"
    // or "calendar-next"
    month = icon.id === "calendar-prev" ? month - 1 : month + 1;

    // Check if the month is out of range
    if (month < 0 || month > 11) {
      // Set the date to the first day of the
      // month with the new year
      date = new Date(year, month, new Date().getDate());

      // Set the year to the new year
      year = date.getFullYear();

      // Set the month to the new month
      month = date.getMonth();
    } else {
      // Set the date to the current date
      date = new Date();
    }

    // Call the manipulate function to
    // update the calendar display
    manipulate();
  });
});

