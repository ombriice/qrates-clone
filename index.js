// submenu navigation

const subgridBtn = document.querySelectorAll(".subgrid-nav__btn");

subgridBtn.forEach((btn) => {
  btn.addEventListener("click", function (ev) {
    closeSubgrid(this);
    this.ariaExpanded = this.ariaExpanded === "true" ? false : true;
  });
});

function closeSubgrid(current) {
  for (let x of subgridBtn) {
    if (x === current) continue;
    x.ariaExpanded = false;
  }
}

// menu
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", showMenu);

function showMenu(ev) {
  this.ariaExpanded = this.ariaExpanded === "true" ? false : true;
}

// tabs
const tablist = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const tabPanel = document.querySelectorAll('[role="tabpanel"]');
const container = document.querySelector(".artists__container");

tabs.forEach((tab) => tab.addEventListener("click", handleTab));

function handleTab(ev) {
  const tab = ev.target;
  if (tab.ariaSelected === "true") return;

  const prevTab = tablist.querySelector('[aria-selected="true"]');
  prevTab.ariaSelected = false;
  tab.ariaSelected = true;
  showContent(
    `#${tab.getAttribute("aria-controls")}`,
    `#${tab.getAttribute("data-img")}`
  );
  hideContent(
    `#${prevTab.getAttribute("aria-controls")}`,
    `#${prevTab.getAttribute("data-img")}`
  );

  const clr = ev.target.getAttribute("data-clr");
  changeBgClr(clr);
}

function showContent(content, img) {
  document.querySelector(content).removeAttribute("hidden");
  document.querySelector(img).classList.remove("hidden");
}

function hideContent(content, img) {
  document.querySelector(content).setAttribute("hidden", true);
  document.querySelector(img).classList.add("hidden");
}

function changeBgClr(clr) {
  container.classList.replace(
    container.classList[1],
    `artists__container--bg-${clr}`
  );
}
