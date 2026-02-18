let ideas = [];

function login() {
    let role = document.getElementById("role").value;

    if (role === "explorer") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("explorerPage").classList.remove("hidden");
    }
    else if (role === "investor") {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("investorPage").classList.remove("hidden");
        showIdeas();
    }
    else {
        alert("Please select a role");
    }
}

function postIdea() {
    let idea = document.getElementById("ideaText").value;
    if (idea !== "") {
        ideas.push({ text: idea, feedback: [] });
        document.getElementById("ideaText").value = "";
        alert("Idea posted anonymously!");
    }
}

function showIdeas() {
    let list = document.getElementById("ideaList");
    list.innerHTML = "";

    ideas.forEach((idea, index) => {
        list.innerHTML += `
            <p><b>Idea ${index + 1}:</b> ${idea.text}</p>
        `;
    });
}

function sendFeedback() {
    let msg = document.getElementById("chatMsg").value;
    if (msg !== "") {
        document.getElementById("feedbackArea").innerHTML += 
            `<p><b>Investor:</b> ${msg}</p>`;
        document.getElementById("chatMsg").value = "";
    }
}