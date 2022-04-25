const search = document.getElementById("search");
const results = document.getElementById("results");

async function get() {
    if (search.value.length < 3) {
        results.innerHTML = "<p>Begin met typen om te zoeken...</p>";
        return;
    }
    const response = await fetch(`https://inventory.djoamersfoort.nl/api/v1/items/search/${search.value}`);
    const data = await response.json();
    const { items } = data;

    results.innerHTML = "";
    for (const i in items) {
        const item = items[i];
        const e = document.createElement("div");
        e.classList.add("result");
        const { id, name, description, properties, location_id, location_description } = item;

        const title = document.createElement("h1");
        title.classList.add("title");
        title.innerText = name;
        e.appendChild(title);

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("description");
        descriptionElement.innerText = description;
        e.appendChild(descriptionElement);

        const propertiesTitle = document.createElement("h3");
        propertiesTitle.classList.add("properties-title");
        propertiesTitle.innerText = "Eigenschappen";
        if (properties.length > 0) e.appendChild(propertiesTitle);

        const propertiesElement = document.createElement("ul");
        propertiesElement.classList.add("properties");
        for (const property in properties) {
            const propertyElement = document.createElement("li");
            propertyElement.innerText = properties[property];
            propertiesElement.appendChild(propertyElement);
        }
        if (properties.length > 0) e.appendChild(propertiesElement);

        results.append(e);

        const check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("expand");
        check.id = id;
        e.appendChild(check);

        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.classList.add("location");
        label.innerText = "Waar ligt dit?";
        e.appendChild(label);

        const info = document.createElement("div");
        info.classList.add("info");

        const img = document.createElement("img");
        img.src = `https://inventory.djoamersfoort.nl/api/v1/location/${location_id}/photo`;
        img.classList.add("photo")
        info.appendChild(img);

        const location = document.createElement("p");
        location.innerText = location_description;
        info.appendChild(location);

        e.appendChild(info);
    }
}

let request = false;
setInterval(async () => {
    if (request) await get();
    request = false;
}, 500);

search.addEventListener("input", () => {
    request = true;
});