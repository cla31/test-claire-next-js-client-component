import getWikiResults from "@/lib/getWikiResults"


export async function generateMetadata({ params: { searchTerm } }) {
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if (!data?.query?.pages) {
        return {
            title: `${displayTerm} Not Found`
        }
    }

    return {
        title: displayTerm,
        description: `Search results for ${displayTerm}`
    }
}


export default async function SearchResults({ params: { searchTerm } }) {
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData
    const results = data?.query?.pages
    console.log("fonction search result");

    const content = (
        <main>
            {results
                ? Object.values(results).map(result => {
                    return <p>{JSON.stringify(result)}</p>
                })
                : <h2>{`${searchTerm} Not Found`}</h2>
            }
        </main>
    )

    return content
}