export default async function getWikiResults(searchTerm) {

    // Ces paramètres de recherche sont utilisés pour effectuer 
    // une requête de recherche spécifique à l'API en question, 
    // en précisant les options de recherche et en spécifiant 
    // les propriétés des pages ( incluent les images des pages et les extraits de texte) à inclure dans les résultats.

    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrlimit: '20',
        prop: 'pageimages|extracts',
        exchars: '100',
        exintro: 'true',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
    })

    const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams)
    console.log("Wikiresult");
    return response.json()
}