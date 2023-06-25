// infiniteScroll.js

export function fetchNextData(page, container, gridContainer, loader) {
    // Simulacija učitavanja sledećih 9 kontejnera
    setTimeout(() => {
      for (let i = 0; i < 9; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.textContent = `Kontejner ${page * 9 + i + 1}`;
        gridContainer.appendChild(gridItem);
      }
      loader.style.display = 'none'; // Sakrijemo loader nakon učitavanja
      page++; // Povećamo broj trenutne stranice
    }, 1000);
  }
  
  export function handleScroll(page, container, gridContainer, loader) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.offsetHeight;
  
    if (scrollTop + windowHeight >= documentHeight - 100) {
      // Kada dođemo do kraja stranice
      loader.style.display = 'block'; // Prikazujemo loader
      fetchNextData(page, container, gridContainer, loader); // Učitavamo sledeće podatke
    }
  }
  