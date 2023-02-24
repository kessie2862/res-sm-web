// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
const notification_popup = document.querySelector(".notification-popup");
const notification_count = document.querySelector(".notification-count");

// remove active class from all menu items
const changeActiveItems = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};

// add active class to clicked menu item
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItems();
    item.classList.add("active");

    // 1. show the notification popup
    if (item.id != "notifications") {
      notification_popup.style.display = "none";
    } else {
      notification_popup.style.display = "block";

      // 2. remove the notification count
      notification_count.style.display = "none";
    }
  });
});

// MESSAGE NOTIFICATION
const messages_notification = document.querySelector("#messages-notifications");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");

// Search chat
const searchMessage = () => {
  // get text typed in the search bar
  const val = messageSearch.value.toLowerCase();

  // getting the name in each iteration
  message.forEach((chat) => {
    // finding and converting the first name and getting it's content
    let name = chat.querySelector("h5").textContent.toLowerCase();

    // checks if the value of val (the search input value)
    // can be found in the name variable (the lowercase name of the
    // current chat element). The .indexOf() method is called on
    // the name variable to check if val is a substring of name.
    // If val is found in name, the condition is true.
    if (name.indexOf(val) !== -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};

// const searchMessage = () => {
//   const val = messageSearch.value.toLowerCase();
//   message.forEach((chat) => {
//     let name = chat.querySelectorAll("h5").textContent.toLowerCase();
//     if (name.indexOf(val) != -1) {
//       chat.style.display = "flex";
//     } else {
//       chat.style.display = "none";
//     }
//   });
// };

// SEARCH CHAT
messageSearch.addEventListener("keyup", searchMessage);

// highlight messages card when messages menu item s clicked
messages_notification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 0.5rem var(--color-primary)";

  // removing the message count
  messages_notification.querySelector(".notification-count").style.display =
    "none";

  // removing the box shadow after 2 seconds
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

//////////THEME CUSTOMIZATION ///////////////////////
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");

// Open theme modal
theme.addEventListener("click", () => {
  themeModal.style.display = "grid";
});

// close theme modal
themeModal.addEventListener("click", (e) => {
  // checks if the clicked element has the class name "customize-theme".
  // classList property is an array-like object that contains all the CSS classes of the element.
  // The contains method is used to check if the array contains a certain class.
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
});

// Font sizes
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");

// remove active class from span or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  // change size and styles when span elements are clicked
  size.addEventListener("click", () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle("active");

    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("----sticky-top-left", "5.4rem");
      root.style.setProperty("----sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("----sticky-top-left", "-2rem");
      root.style.setProperty("----sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("----sticky-top-left", "-5rem");
      root.style.setProperty("----sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("----sticky-top-left", "-10rem");
      root.style.setProperty("----sticky-top-right", "-35rem");
    }

    // change font size of root elements
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// 2:29:48
