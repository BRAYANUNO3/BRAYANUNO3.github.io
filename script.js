document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".portfolio-filters button");
  const items = document.querySelectorAll(".portfolio-item");

  if (!buttons.length || !items.length) {
    console.warn("Portfolio script: elements not found");
    return;
  }

  buttons.forEach(button => {
    button.addEventListener("click", () => {+
      // Active state
      buttons.forEach(b => b.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");

      items.forEach(item => {
        if (filter === "all" || item.classList.contains(filter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".experience-tabs button");
  const tabPanels  = document.querySelectorAll(".experience-list");

  if (!tabButtons.length) {
    console.warn("Tabs: no .experience-tabs button found");
    return;
  }
  if (!tabPanels.length) {
    console.warn("Tabs: no .experience-list found");
    return;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.tab;

      // Safety check
      const targetPanel = document.getElementById(targetId);
      if (!targetPanel) {
        console.warn(`Tabs: panel with id="${targetId}" not found`);
        return;
      }

      // Remove active
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      // Activate selected
      button.classList.add("active");
      targetPanel.classList.add("active");
    });
  });
});
