document.getElementById("callbackBtn").addEventListener("click", () => {
    const output = document.getElementById("callbackOutput");
    output.innerText = "Loading...";

    setTimeout(() => {
        fetch("https://dummyjson.com/posts")
            .then(response => response.json())
            .then(data => {
                output.innerHTML = "<strong>Fetched Data:</strong><br>";
                data.posts.forEach(post => {
                    output.innerHTML += `<p>${post.title}</p>`;
                });
            })
            .catch(error => output.innerText = "Error fetching data");
    }, 5000);
});
