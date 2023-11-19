// list of exhibitors
const mapElements = [["Testovací jízdy", 1], ["TVD-Technická výroba, a.s.", 2], ["PHOENIX CONTACT, s.r.o.", 2], ["Ejoin – nabíjecí stanice pro elektromobily", 2], ["SECTRON s.r.o.", 2], ["TPC CITY II – Komunální elektromobil N1/SS", 2], ["E.ON Energie, a.s.", 2], ["smart4smart s.r.o.", 2], ["ALUKOV a.s.", 2], ["X-scooters XS05 60V Li Extreme Dual 4000W", 2], ["LERA Motors s.r.o.", 2], ["Some company s.r.o.", 2], ["Some other company s.r.o.", 2], ["M Motors CZ s.r.o.", 3], ["Emil Frey ČR", 3], ["Užitkové elektromobily Goupil", 3], ["Volvo Group Czech Republic, s.r.o.", 3], ["Daimler Truck ČR", 3], ["Valeo", 3], ["Porsche Česká republika s.r.o.", 4], ["Škoda Auto", 4], ["Kia Czech s.r.o.", 4], ["Eco Rally", 5]];

mapElements.forEach((mapElement, index) => {
    let newMapELement = {
        name: mapElement[0],
        warehouseNumber: mapElement[1]
    };

    mapElements[index] = newMapELement;
})

const mapElementsGroups = document.querySelectorAll(".map-list-group");

mapElementsGroups.forEach((mapElementsGroup, index) => {
    console.log("hey")
    let newInnerHtml = "";
    mapElements.forEach((mapElement, mapElementIndex) => {
        if (mapElement.warehouseNumber == index+1) {
            newInnerHtml += `<section><p>${mapElementIndex+1}</p><p>${mapElement.name}</p></section>`
        }
    })

    mapElementsGroups[index].innerHTML = newInnerHtml;
})

// mobile navbar
const mobileNavbar = document.querySelector("#mobile-navbar");
const hamburgerButton = document.querySelector("#hamburger-button");

hamburgerButton.addEventListener("click", () => {
    if (mobileNavbar.style.visibility == "hidden") return mobileNavbar.style.visibility = "visible";
    mobileNavbar.style.visibility = "hidden";
})

addEventListener("resize", () => {
    mobileNavbar.style.visibility = "hidden";
})