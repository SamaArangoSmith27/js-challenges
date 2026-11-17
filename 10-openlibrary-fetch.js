/* 
Write a short program that fetches search results (books) from the Open Library API.
Console log the search results, but only show the following fields: author_name, title
Your program should console log an appropriate error message if the fetch fails.
Try different query parameters (ie. title, author) - see the docs here: https://openlibrary.org/dev/docs/api/search
For this task, use your choice of promise chaining or async/await
*/

async function searchBooks(query) {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://openlibrary.org/search.json?q=${encodedQuery}&limit=5`;

    console.log(`Searching Open Library for "${query}"...\n`);
}

//example usage
searchBooks("the lord of the rings");