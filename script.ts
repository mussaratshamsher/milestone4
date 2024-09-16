

// script.ts  
document.getElementById("saveBtn")?.addEventListener("click", () => {  
    const resumeData: { [key: string]: string } = {  
        name: (document.getElementById("name") as HTMLElement).innerText,  
        contact: (document.getElementById("contact") as HTMLElement).innerText,  
      
        experience: (document.getElementById("experience") as HTMLElement).innerText,  
        education: (document.getElementById("education") as HTMLElement).innerText,  
        skills: (document.getElementById("skills") as HTMLElement).innerText.split('\n').filter(line => line.trim() !== '').join(', ')  
    };  

    const blob = new Blob([JSON.stringify(resumeData)], { type: "application/json" });  
    const url = URL.createObjectURL(blob);  
    const a = document.createElement("a");  
    a.href = url;  
    a.download = "resume.json";  
    a.click();  
    URL.revokeObjectURL(url);  
});