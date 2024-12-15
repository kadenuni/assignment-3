// When the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// Hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("submit-button");
    const contactPage = document.getElementById("contact-page"); // Assuming entire page is wrapped in this element
  
    submitButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      contactPage.innerHTML = '<p style="font-size: 24px; text-align: center;">Thank you for your message</p>';
    });
  });
  