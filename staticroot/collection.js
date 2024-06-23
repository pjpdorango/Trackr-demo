async function loadSubjects() {
    console.log("nc");
    fetch("http://127.0.0.1:8000/?usr='pj'")
        .then((response) => response.text()
            .then((text) => console.log(JSON.parse(text))))
}