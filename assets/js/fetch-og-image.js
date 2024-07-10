// assets/js/fetch-og-image.js
async function fetchOgImage(doi, imgElementId) {
    const crossRefUrl = `https://api.crossref.org/works/${doi}`;
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

    try {
        console.log(`Fetching metadata for DOI: ${doi}`);
        const crossRefResponse = await fetch(proxyUrl + crossRefUrl);
        if (!crossRefResponse.ok) {
            throw new Error(`CrossRef API request failed: ${crossRefResponse.statusText}`);
        }
        const metadata = await crossRefResponse.json();
        const articleUrl = metadata.message.URL;
        console.log(`Article URL: ${articleUrl}`);

        // Fetch the article page HTML
        const articleResponse = await fetch(proxyUrl + articleUrl, { method: 'GET', mode: 'cors', credentials: 'omit' });
        if (!articleResponse.ok) {
            throw new Error(`Article page request failed: ${articleResponse.statusText}`);
        }
        const articleHtml = await articleResponse.text();

        // Parse HTML to find og:image meta tag
        const parser = new DOMParser();
        const doc = parser.parseFromString(articleHtml, 'text/html');
        const ogImageTag = doc.querySelector('meta[property="og:image"]');

        if (ogImageTag) {
            const imgUrl = ogImageTag.getAttribute('content');
            console.log(`Graphical Abstract URL: ${imgUrl}`);
            const imgElement = document.getElementById(imgElementId);
            if (imgElement) {
                imgElement.src = imgUrl;
                imgElement.alt = "Graphical Abstract";
            } else {
                console.error(`Image element with ID ${imgElementId} not found.`);
            }
        } else {
            console.error('Graphical abstract not found on the page.');
        }
    } catch (error) {
        console.error('Error fetching og:image:', error);
    }
}
