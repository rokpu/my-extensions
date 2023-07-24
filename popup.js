window.onload = function() {
    const linksDiv = document.getElementById('links');

    // Fetch links from JSON
    fetch('links.json').then(response => response.json()).then(data => {
        if (!data.links) {
            const errorElement = document.createElement('div');
            errorElement.textContent = 'Error: Invalid JSON. Please makes sure it includes a links object and verify the structure of the object is JSON compatible';
            errorElement.classList.add('error');
            linksDiv.appendChild(errorElement);
            return;
        }

        const linksDict = data.links;
        const categoriesOrderList = data.categoriesOrderList || [];

        const categoriesDict = {};

        for (let key in linksDict) {
            const linkObj = linksDict[key];
            const category = linkObj.category || 'Other';
            if (!categoriesDict[category]) {
                categoriesDict[category] = [];
            }
            categoriesDict[category].push({ key, ...linkObj });
        }

        let orderedCategories = categoriesOrderList.filter(category => category in categoriesDict && categoriesDict[category].length > 0);
        let unorderedCategories = Object.keys(categoriesDict).filter(category => !categoriesOrderList.includes(category) && category !== 'Other' && categoriesDict[category].length > 0);
        let otherCategory = 'Other' in categoriesDict && categoriesDict['Other'].length > 0 ? ['Other'] : [];

        unorderedCategories.sort();
        let categories = [...orderedCategories, ...unorderedCategories, ...otherCategory];

        for (let category of categories) {
            // Only create a category element if there is more than one category and it has links
            if (categories.length > 1) {
                const categoryElement = document.createElement('div');
                categoryElement.textContent = category;
                categoryElement.classList.add('category');
                linksDiv.appendChild(categoryElement);
            }

            const sortedLinks = categoriesDict[category].sort((a, b) => a.key.localeCompare(b.key));

            for (let linkObj of sortedLinks) {
                const linkElement = document.createElement('a');
                linkElement.href = linkObj.link;
                linkElement.target = '_blank';
                linkElement.classList.add('link');

                if (linkObj.img) {
                    const imgElement = document.createElement('img');
                    imgElement.src = linkObj.img;
                    linkElement.appendChild(imgElement);
                } else {
                    linkElement.classList.add('no-image');
                }

                const descriptionElement = document.createElement('span');
                descriptionElement.textContent = linkObj.key;
                descriptionElement.classList.add('description');
                linkElement.appendChild(descriptionElement);

                linksDiv.appendChild(linkElement);
            }
        }
    })
    .catch(() => {
        const errorElement = document.createElement('div');
        errorElement.textContent = 'Error: Unable to fetch or parse the JSON file.';
        errorElement.classList.add('error');
        linksDiv.appendChild(errorElement);
    });
}
