const box = document.getElementById("alerts");

const alerts = [
  { id: 1, ip: "203.0.113.99", attempts: 45, severity: "high", user: "admin", time: "03:12" },
  { id: 2, ip: "192.168.1.100", attempts: 30, severity: "medium", user: "user1", time: "02:15" },
  { id: 3, ip: "10.0.0.5", attempts: 15, severity: "low", user: "user2", time: "01:20" },
  { id: 4, ip: "127.0.0.1", attempts: 5, severity: "low", user: "root", time: "03:25" },
  { id: 5, ip: "192.168.1.101", attempts: 25, severity: "medium", user: "user3", time: "04:30" },
  { id: 6, ip: "192.168.1.102", attempts: 100, severity: "high", user: "user4", time: "06:35" }
];

let high = 0;
let medium = 0;
let low = 0;

for (let i = 0; i < alerts.length; i++) {
  if (alerts[i].severity === "high") {
    high++;
  } else if (alerts[i].severity === "medium") {
    medium++;
  } else {
    low++;
  }
}

document.getElementById("high-count").innerHTML = high;
document.getElementById("medium-count").innerHTML = medium;
document.getElementById("low-count").innerHTML = low;

function displayAlerts(list) {
  if (list.length === 0) {
    box.innerHTML = "<p>No alerts to display.</p>";
  } else {
    let alertHtml = "";
    for (let i = 0; i < list.length; i++) {
      alertHtml += `
        <a class="card ${list[i].severity}" href="details.html?id=${list[i].id}">
          <span class="card-ip">${list[i].ip}</span>
          <span>${list[i].attempts} failed logins</span>
          <span class="card-level">${list[i].severity}</span>
        </a>
      `;
    }
    box.innerHTML = alertHtml;
  }
}

displayAlerts(alerts);

function filterAlerts(severity) {
  if (severity === "all") {
    displayAlerts(alerts);
    return;
  }

  const filtered = [];

  for (let i = 0; i < alerts.length; i++) {
    if (alerts[i].severity === severity) {
      filtered.push(alerts[i]);
    }
  }

  displayAlerts(filtered);
}

const buttons = document.querySelectorAll(".filter-button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    filterAlerts(buttons[i].dataset.level);
  });
}