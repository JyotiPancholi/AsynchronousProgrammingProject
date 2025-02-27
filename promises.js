document.getElementById("promiseBtn").addEventListener("click", () => {
    const output = document.getElementById("promiseOutput");
    output.innerText = "Loading...";

    new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("https://dummyjson.com/posts")
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(() => reject("Error fetching data"));
        }, 3000);

        setTimeout(() => {
            reject("Operation timed out");
        }, 5000);
    })
    .then(data => {
        output.innerHTML = "<strong>Fetched Data:</strong><br>";
        data.posts.forEach(post => {
            output.innerHTML += `<p>${post.title}</p>`;
        });
    })
    .catch(error => {
        output.innerText = error;
    });
});
