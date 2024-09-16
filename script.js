var _a;
// script.ts  
(_a = document.getElementById("saveBtn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var resumeData = {
        name: document.getElementById("name").innerText,
        contact: document.getElementById("contact").innerText,
        experience: document.getElementById("experience").innerText,
        education: document.getElementById("education").innerText,
        skills: document.getElementById("skills").innerText.split('\n').filter(function (line) { return line.trim() !== ''; }).join(', ')
    };
    var blob = new Blob([JSON.stringify(resumeData)], { type: "application/json" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "resume.json";
    a.click();
    URL.revokeObjectURL(url);
});
