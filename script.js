// Ticket Class Buttons Event Handler
function handleTicketClass(ticket, isIncrease) {
  const ticketQuantity = getQuantityValue(ticket);
  let newTicketNumber = ticketQuantity;
  if (isIncrease == true) {
    newTicketNumber = newTicketNumber + 1;
  }

  if (isIncrease == false && ticketQuantity > 0) {
    newTicketNumber = newTicketNumber - 1;
  }

  document.getElementById(ticket + "-count").value = newTicketNumber;

  calculateTotalAmount();
}

// Ticket Quantity Input Value Count
function getQuantityValue(ticket) {
  const countTicket = document.getElementById(ticket + "-count");
  const countTicketNumber = parseInt(countTicket.value);
  return countTicketNumber;
}

// Calculate Total Amount For Tickets
function calculateTotalAmount() {
  const firstClassPrice = getQuantityValue("first");
  const economyClassPrice = getQuantityValue("economy");

  const total = firstClassPrice * 150 + economyClassPrice * 100;
  document.getElementById("total").innerText = "$" + total;

  const vat = Math.round(total * 0.1);
  document.getElementById("vat").innerText = "$" + vat;

  const grandTotal = total + vat;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}

// Set Default Values for First and Economy Class
document.getElementById("total").innerText = "$" + 0;
document.getElementById("vat").innerText = "$" + 0;
document.getElementById("grand-total").innerText = "$" + 0;

// After Clicking the Book Now Button Handler
const bookNowBtn = document.getElementById("book-now");
bookNowBtn.addEventListener("click", function () {
  const bookingForm = document.querySelector(".booking-form");
  const messageForUser = document.getElementById("message");
  const emptyFormSubmit = document.getElementById("empty-form");

  bookingForm.style.display = "none";

  const firstClassPrice = getQuantityValue("first");
  const economyClassPrice = getQuantityValue("economy");

  if (firstClassPrice == 0 && economyClassPrice == 0) {
    emptyFormSubmit.style.display = "block";
  } else {
    messageForUser.style.display = "block";
  }

  document.getElementById("first-class-qty").innerText = firstClassPrice;
  document.getElementById("economy-class-qty").innerText = economyClassPrice;

  document.getElementById("first-total-qty-price").innerText =
    "$" + firstClassPrice * 150;
  document.getElementById("economy-total-qty-price").innerText =
    "$" + economyClassPrice * 100;

  const total = firstClassPrice * 150 + economyClassPrice * 100;
  document.getElementById("total-msg").innerText = "$" + total;

  const vat = Math.round(total * 0.1);
  document.getElementById("vat-msg").innerText = "$" + vat;

  const grandTotal = total + vat;
  document.getElementById("grand-total-msg").innerText = "$" + grandTotal;
});
