async function loadSubjects() {
    console.log("nc");
    let promise: Promise<Array<Object>> = fetch("http://127.0.0.1:8000/?usr='pj'")
        .then((response: Response) => response.text() 
            .then((text) => JSON.parse(text)));

    promise.then((collectionData: Array<Object>) => {
        for (let i = 0; i < collectionData.length; i++) {
            generateSubject(collectionData[i]);
        }
    })
}

function generateSubject(data: Object) {
    let content = document.getElementById("content");

    // Subject container 
    let container: HTMLDivElement = document.createElement('div');
    container.className += "subject";
    // Subject info
    let subjectName: HTMLHeadingElement = document.createElement('h2');
    subjectName.className += "subjectName";
    subjectName.textContent = data["name" as keyof typeof data] as unknown as string;
    container.appendChild(subjectName);
    let subjectGrade: HTMLHeadingElement = document.createElement('h3');
    subjectGrade.className += "subjectGrade";
    subjectGrade.textContent = (data["grade" as keyof typeof data] as unknown as number).toFixed(2);
    container.appendChild(subjectGrade);

    content?.appendChild(container);
}