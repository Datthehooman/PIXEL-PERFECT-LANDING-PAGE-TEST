/* ==========================================================================
   CAROUSEL LOGIC
   ========================================================================== */

const mainViewport = document.getElementById("mainViewport");
const thumbViewport = document.getElementById("thumbViewport");

const mainPrev = document.getElementById("mainPrev");
const mainNext = document.getElementById("mainNext");

const thumbButtons = document.querySelectorAll(".embla__thumb");

/* -----------------------------
   INIT EMBLA
----------------------------- */

const mainEmbla = EmblaCarousel(mainViewport, {
  loop: true,
});

const thumbEmbla = EmblaCarousel(thumbViewport, {
  containScroll: "keepSnaps",
  dragFree: false,
  loop: true,
  align: "start",
});

/* -----------------------------
   SYNC MAIN → THUMB
----------------------------- */

const syncThumbs = () => {
  const index = mainEmbla.selectedScrollSnap();
  thumbEmbla.scrollTo(index);
};

mainEmbla.on("select", syncThumbs);

/* -----------------------------
   SYNC THUMB → MAIN
----------------------------- */

const syncMain = () => {
  const index = thumbEmbla.selectedScrollSnap();
  mainEmbla.scrollTo(index);
};

thumbEmbla.on("select", syncMain);

/* -----------------------------
   ARROWS
----------------------------- */

mainPrev.addEventListener("click", () => mainEmbla.scrollPrev());
mainNext.addEventListener("click", () => mainEmbla.scrollNext());

/* -----------------------------
   THUMB CLICK → MAIN
----------------------------- */

thumbButtons.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    mainEmbla.scrollTo(index);
    thumbEmbla.scrollTo(index);
  });
});

/* ==========================================================================
   NUTRITION MODAL LOGIC
   ========================================================================== */

const nutritionModal = document.getElementById("nutritionModal");
const nutritionModalContent = document.getElementById("nutritionModalContent");
const closeNutritionModal = document.getElementById("closeNutritionModal");
const closeNutritionModalCta = document.getElementById(
  "closeNutritionModalCta"
);

// Open Modal
document.addEventListener("click", (e) => {
  if (e.target.closest("#openNutritionModal")) {
    if (nutritionModal) {
      nutritionModal.classList.remove("hidden");
      // Trigger reflow/repaint so transition works
      requestAnimationFrame(() => {
        nutritionModal.classList.remove("opacity-0");
        if (nutritionModalContent) {
          nutritionModalContent.classList.remove("scale-95");
        }
      });
    }
  }
});

// Close Modal Function
const closeModal = () => {
  if (nutritionModal) {
    nutritionModal.classList.add("opacity-0");
    if (nutritionModalContent) {
      nutritionModalContent.classList.add("scale-95");
    }
    setTimeout(() => {
      nutritionModal.classList.add("hidden");
    }, 300);
  }
};

// Close Button Listener
if (closeNutritionModal) {
  closeNutritionModal.addEventListener("click", closeModal);
}

// Close CTA Button Listener
if (closeNutritionModalCta) {
  closeNutritionModalCta.addEventListener("click", closeModal);
}

// Background Click Listener
if (nutritionModal) {
  nutritionModal.addEventListener("click", (e) => {
    if (e.target === nutritionModal) {
      closeModal();
    }
  });
}

/* ==========================================================================
   BUNDLE SELECTION LOGIC
   ========================================================================== */

const options = [
  document.getElementById("option1"),
  document.getElementById("option2"),
  document.getElementById("option3"),
];

function selectOption(selectedOption) {
  // Get the option index (1, 2, or 3)
  const selectedIndex = options.indexOf(selectedOption) + 1;

  options.forEach((option) => {
    if (!option) return;

    // Elements
    const head = option.querySelector(".option-head");
    const banner = option.querySelector(".option-banner");
    const radioCircle = option.querySelector(".radio-circle");
    const radioDot = option.querySelector(".radio-dot");

    // Check if this is the selected one
    const isSelected = option === selectedOption;

    if (isSelected) {
      // Selected Styles
      if (banner) {
        banner.classList.remove("bg-emerald-500/60");
        banner.classList.add("bg-emerald-500");
      }
      if (radioDot) radioDot.classList.remove("hidden");
    } else {
      // Unselected Styles
      if (banner) {
        banner.classList.remove("bg-emerald-500");
        banner.classList.add("bg-emerald-500/60");
      }
      if (radioDot) radioDot.classList.add("hidden");
    }
  });

  // Toggle refill text based on selected option
  const refillTexts = document.querySelectorAll(".product_atc-refills");
  refillTexts.forEach((refillText) => {
    const refillData = refillText.getAttribute("data");
    if (refillData == selectedIndex) {
      refillText.classList.remove("hidden");
    } else {
      refillText.classList.add("hidden");
    }
  });
}

// Attach Listeners
options.forEach((option) => {
  if (option) {
    option.addEventListener("click", () => selectOption(option));
  }
});

// Initialize with option2 selected on page load
if (options[1]) {
  selectOption(options[1]);
}

/* ==========================================================================
   DELIVERY DATE LOGIC
   ========================================================================== */

const deliveryDateElement = document.getElementById("deliveryDate");

if (deliveryDateElement) {
  const today = new Date();
  const deliveryDate = new Date(today);
  deliveryDate.setDate(today.getDate() + 3);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayName = days[deliveryDate.getDay()];
  const day = deliveryDate.getDate();
  const monthName = months[deliveryDate.getMonth()];

  deliveryDateElement.textContent = `${dayName}, ${day} ${monthName}`;
}
