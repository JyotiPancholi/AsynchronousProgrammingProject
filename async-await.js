document.getElementById("asyncBtn").addEventListener("click", async () => {
    const output = document.getElementById("asyncOutput");
    output.innerText = "Loading...";

    try {
        const data = await fetchDataWithTimeout(5000);
        output.innerHTML = "<strong>Fetched Data:</strong><br>";
        data.posts.forEach(post => {
            output.innerHTML += `<p>${post.title}</p>`;
        });
    } catch (error) {
        output.innerText = error;
    }
});

async function fetchDataWithTimeout(timeout) {
    const controller = new AbortController();
    const signal = controller.signal;

    setTimeout(() => controller.abort(), timeout);

    try {
        const response = await fetch("https://dummyjson.com/posts", { signal });
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        throw "Operation timed out or failed to fetch data";
    }
}
