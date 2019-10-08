/**
 * Name: Diana Dai
 * Date: Aug 10, 2019
 * Section: CSE 154 AB
 * TA: Tal Wolman
 * This is the index.js page for my e-commerce store LOL store: index.html page.
 * This page provides functionality to interact with the LOL store service on different views
 * including products view, specific product detail view, contact us view, loyal member view,
 * Frequently asked Questions and answers view, and a shopping cart view as well.
 */

"use strict";
(function() {

  window.addEventListener("load", init);

  const DELAY_TIME = 500; // the delay time in miliseconds
  const COST_STR = "Cost : $"; // the string in front of the number for cost

  /**
   * When the window loads, initialize the store with filters, all items, and the questions
   * and answers.
   * When the buttons in the navigation bar are clicked
   * - change the views: display the selcted ones, and hide others
   * When the "all" in the filter is clicked
   * - display all the items on the "all-item" page
   * When the "add to cart" button is clicked
   * - add the displayed item to the shopping cart
   * When the buying number changes
   * - update the total cost for that item according to the new buying number
   * When the submit button on the contact form is clicked
   * - submit the contact information and messages to store
   * When the submit button on the loyal member form is clicked
   * - submit the member information to the store
   */
  function init() {
    initFilter();
    initItems();
    initQa();

    let buttons = qsa("nav button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", getView);
    }

    id("all").addEventListener("change", displayAllItems);
    qs("#basic-info button").addEventListener("click", addCart);

    id("buy-num").addEventListener("change", function() {
      let cost = parseInt(id("cost-num").textContent.substring(1));
      let num = parseInt(id("buy-num").value);
      updateCost(cost, num, qs("#basic-info p.cost"));
    });

    id("contact-form").addEventListener("submit", (evt) => {
      evt.preventDefault();
      postMessage();
    });

    id("sign-up-form").addEventListener("submit", (evt) => {
      evt.preventDefault();
      postUsers();
    });
  }

  /**
   * Initialize and display filters on the main-view by fetching types.
   */
  function initFilter() {
    fetch("/types")
      .then(checkStatus)
      .then(resp => resp.json())
      .then(displayFilter)
      .catch(handleError);
  }

  /**
   * Initialize and display all items on the main-view by fetching types.
   */
  function initItems() {
    fetch("/items")
      .then(checkStatus)
      .then(resp => resp.json())
      .then(displayItems)
      .catch(handleError);
  }

  /**
   * Initialize and display all questions and answers on the qa-view.
   */
  function initQa() {
    fetch("/qa")
      .then(checkStatus)
      .then(resp => resp.json())
      .then(displayQa)
      .catch(handleError);
  }

  /**
   * Display all the items in the store.
   */
  function displayAllItems() {
    let allItems = qsa(".product");
    for (let i = 0; i < allItems.length; i++) {
      allItems[i].classList.remove("hidden");
    }
  }

  /**
   * Get the selected view and hide other views.
   */
  function getView() {
    hideAll(".view");
    let viewId = this.id.substring(0, this.id.indexOf("-")) + "-view";
    id(viewId).classList.remove("hidden");
  }

  /**
   * Display filters on the main-view.
   * @param {response} response - response about the filter types
   */
  function displayFilter(response) {
    let filters = response.type;
    for (let i = 0; i < filters.length; i++) {
      let newFilter = gen("div");
      let newInput = gen("input");
      let newLabel = gen("label");

      newInput.type = "radio";
      newInput.name = "type";
      newInput.value = filters[i].toLowerCase();
      newLabel.for = newInput.value;
      newLabel.textContent = filters[i];
      newFilter.id = filters[i].toLowerCase().replace(" ", "-");

      newFilter.appendChild(newInput);
      newFilter.appendChild(newLabel);
      newFilter.addEventListener("change", filter);
      qs("aside").appendChild(newFilter);
    }
  }

  /**
   * Filter the items based on the type and hide other products.
   */
  function filter() {
    hideAll(".product");
    fetch("/items/category/" + this.id)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(displayMatch)
      .catch(handleError);
  }

  /**
   * Display the items that fall into a particular type on the main-view, and hide others.
   * @param {response} response - response about the matching items.
   */
  function displayMatch(response) {
    let matchItems = response.match;
    for (let i = 0; i < matchItems.length; i++) {
      id(matchItems[i]).classList.remove("hidden");
    }
  }

  /**
   * Send the customer contact information and the message to the LOL store.
   * Notify customer that the message has been successfully sent by displaying a message below.
   */
  function postMessage() {
    let data = new FormData(id("contact-form"));
    fetch("/contactMsg", {method: "POST", body: data})
      .then(checkStatus)
      .then(resp => resp.text())
      .then(showStatus)
      .catch(handleError);
  }

  /**
   * Send loyal member information with name, email, phone, address, and password to the store.
   * Notify customer that they have become loyal member successfully by displaying a message below.
   */
  function postUsers() {
    let data = new FormData(id("sign-up-form"));
    fetch("/signUp", {method: "POST", body: data})
      .then(checkStatus)
      .then(resp => resp.text())
      .then(showStatus)
      .catch(handleError);
  }

  /**
   * Show the status of whether the data has been sent to the store or not.
   * @param {response} response - response telling whether the data has been sent successfully
   */
  function showStatus(response) {
    id("response").classList.remove("hidden");
    id("response").textContent = response;
  }

  /**
   * Display the total cost of buying multiple specific item.
   * @param {int} cost - the cost of an item
   * @param {int} num - the number that a customer wants to buy
   * @param {object} costObj - the total cost for that single item
   */
  function updateCost(cost, num, costObj) {
    if (num > 0) {
      costObj.textContent = COST_STR + num * cost;
    } else {
      costObj.textContent = "Please enter a valid number!";
    }
  }

  /**
   * Changes the text on the button to "Added" for certain delay time. Then add the item with
   * selected number into the shopping cart. If the item already exists in the cart, add the new
   * buying number onto the previous one. Otherwise, create a new item in cart.
   */
  function addCart() {
    this.textContent = "Added!";
    setTimeout(function() {
      qs("#basic-info button").textContent = "Add to Cart";
    }, DELAY_TIME);

    let name = qs("#detail-view h2").textContent;
    let idName = qs("#detail-view h2").id;
    let shortname = idName.substring(0, idName.indexOf("-"));

    if (!id(shortname + "-cart")) {
      displayAddedItem(name, shortname);
    } else {
      id(shortname + "-buy-num").value = parseInt(id(shortname + "-buy-num").value) +
          parseInt(id("buy-num").value);
      let totalCost = id(shortname + "-buy-num").value *
          parseInt(id("cost-num").textContent.substring(1));
      qs("#" + shortname + "-cart p.cost").textContent = COST_STR + totalCost;
    }
  }

  /**
   * Add the selected item into the shopping cart, with information including the image, name, and
   * total cost. Also allow customers to remove the item from the cart.
   * When the "remove" button is clicked
   * - the user can remove the selected item from the shopping cart.
   * @param {string} name - the name of an item
   * @param {string} shortname - the shortened name of an item
   */
  function displayAddedItem(name, shortname) {
    let addedItem = gen("div");
    let itemImg = gen("img");
    let itemName = gen("p");
    let newCost = gen("p");
    let itemRemove = gen("button");

    addedItem.id = shortname + "-cart";
    itemImg.src = "img/items/" + shortname + ".png";
    itemImg.alt = name + " image";
    itemName.textContent = name;
    newCost.textContent = qs("#basic-info p.cost").textContent;
    newCost.classList.add("cost");

    let total = newCost.textContent.substring(COST_STR.length);
    let buyNum = parseInt(id("buy-num").value);
    let cost = parseInt(total / buyNum);
    let itemNum = setUpItemNum(shortname, cost);

    itemRemove.textContent = "remove";
    itemRemove.addEventListener("click", removeItem);

    addedItem.appendChild(itemImg);
    addedItem.appendChild(itemName);
    addedItem.appendChild(itemNum);
    addedItem.appendChild(newCost);
    addedItem.appendChild(itemRemove);

    id("cart-view").appendChild(addedItem);
  }

  /**
   * Sets up and returns the item number input element on the shopping cart view.
   * @param {string} shortname - the shortname of an item
   * @param {int} cost - the cost of an item
   * @returns {object} an object with labels and number input for buying number
   */
  function setUpItemNum(shortname, cost) {
    let itemNum = gen("div");
    let newLabel = gen("label");
    let newInput = gen("input");

    newLabel.textContent = "Number: ";
    newInput.type = "number";
    newInput.name = "buy-num";
    newInput.min = 1;
    newInput.id = shortname + "-buy-num";
    newInput.value = id("buy-num").value;

    itemNum.appendChild(newLabel);
    itemNum.appendChild(newInput);
    newInput.addEventListener("change", function() {
      let num = parseInt(id(shortname + "-buy-num").value);
      updateCost(cost, num, qs("#" + shortname + "-cart p.cost"));
    });

    return itemNum;
  }

  /**
   * Remove an item from the shopping cart view once the user clicked remove button.
   */
  function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
  }

  /**
   * Display the basic information of all items, including a name and an image of each item.
   * @param {response} response - response about the basic information of all items.
   */
  function displayItems(response) {
    let names = response.name;
    for (let i = 0; i < names.length; i++) {
      let itemName = names[i];
      let newItem = gen("div");
      let image = gen("img");
      let name = gen("p");

      newItem.classList.add("product");
      newItem.id = response[itemName].shortname;
      image.src = "img/items/" + response[itemName].shortname + ".png";
      image.alt = itemName + " image";
      name.textContent = itemName;

      newItem.appendChild(image);
      newItem.appendChild(name);
      newItem.addEventListener("click", getProduct);
      qs("#products-view section").appendChild(newItem);
    }
  }

  /**
   * Display the item-deails view and hide others.
   * Get and display the details information of an item.
   */
  function getProduct() {
    hideAll(".view");
    id("detail-view").classList.remove("hidden");
    fetch("/items/" + this.id)
      .then(checkStatus)
      .then(resp => resp.json())
      .then(displayDetail)
      .catch(handleError);
  }

  /**
   * Display the details information on the item-detail view, including name, shortname,
   *    cost, type and effect.
   * @param {response} response - response about the details of an item.
   */
  function displayDetail(response) {
    id("type-list").innerHTML = "";
    id("effect-list").innerHTML = "";

    qs("#detail-view h2").textContent = response.name;
    qs("#detail-view h2").id = response.shortname + "-details";
    id("cost-num").textContent = "$" + response.cost;
    qs("#item-detail img").src = "img/items/" + response.shortname + ".png";
    qs("#item-detail img").alt = response.name + " image";
    updateCost(parseInt(response.cost), parseInt(id("buy-num").value), qs("#basic-info p.cost"));

    for (let i = 0; i < response.type.length; i++) {
      let newType = gen("li");
      newType.textContent = response.type[i];
      id("type-list").appendChild(newType);
    }

    for (let j = 1; j < response.effect.length; j++) {
      let newEffect = gen("li");
      newEffect.textContent = response.effect[j];
      id("effect-list").appendChild(newEffect);
    }
  }

  /**
   * Get and display all the questions and answers on the FAQ view.
   * @param {response} response - response abou the FAQ with questions and corresponding answers
   */
  function displayQa(response) {
    let qaList = response.QA;
    for (let i = 0; i < qaList.length; i++) {
      let newQ = qaList[i].Question;
      let newA = qaList[i].Answer;
      let qa = gen("div");
      let question = gen("p");
      let answer = gen("p");

      question.textContent = "Question: " + newQ;
      question.classList.add("question");
      answer.textContent = "Answer: " + newA;
      answer.classList.add("answer");
      qa.classList.add("qa");

      qa.appendChild(question);
      qa.appendChild(answer);

      id("qa-view").appendChild(qa);
    }
  }

  /**
   * Hide all the DOM elements with the given classname, as well as the response.
   * @param {string} className - a string representing the name of a class
   */
  function hideAll(className) {
    id("response").classList.add("hidden");
    let views = qsa(className);
    for (let i = 0; i < views.length; i++) {
      views[i].classList.add("hidden");
    }
  }

  /**
   * This function is called when an error occurs in the fetch call chain (e.g. the request
   * returns a non-200 error code, such as when the LOL store service is down).
   * Displays a user-friendly error message on the page.
   */
  function handleError() {
    hideAll("view");
    id("response").textContent = "There was an error on the store. Please try again later. ";
  }

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response; // a Response object
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} name - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(name) {
    return document.getElementById(name);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query (empty if none).
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector string.
   * @returns {object} first element matching the selector in the DOM tree (null if none)
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  /**
   * Returns a new element with the given tagname.
   * @param {string} tagName - name of element to create and return.
   * @returns {object} new DOM element with the given tagname.
   */
  function gen(tagName) {
    return document.createElement(tagName);
  }
})();
