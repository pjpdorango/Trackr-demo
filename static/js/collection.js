"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadSubjects() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("nc");
        let promise = fetch("http://127.0.0.1:8000/?usr='pj'")
            .then((response) => response.text()
            .then((text) => JSON.parse(text)));
        promise.then((collectionData) => {
            for (let i = 0; i < collectionData.length; i++) {
                generateSubject(collectionData[i]);
            }
        });
    });
}
function generateSubject(data) {
    let content = document.getElementById("content");
    // Subject container 
    let container = document.createElement('div');
    container.className += "subject";
    // Subject info
    let subjectName = document.createElement('h2');
    subjectName.className += "subjectName";
    subjectName.textContent = data["name"];
    container.appendChild(subjectName);
    let subjectGrade = document.createElement('h3');
    subjectGrade.className += "subjectGrade";
    subjectGrade.textContent = data["grade"].toFixed(2);
    container.appendChild(subjectGrade);
    content === null || content === void 0 ? void 0 : content.appendChild(container);
}
