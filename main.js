/* -----------------------------
   ELEMENTS
----------------------------- */

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
