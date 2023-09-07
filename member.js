function skillsMember() {
    var member = new Member();
    var skills = member.skills;
    var skillsList = document.getElementById("skills-list");
    var skillsListHtml = "";
    for (var i = 0; i < skills.length; i++) {
        skillsListHtml += "<li>" + skills[i] + "</li>";
    }
    skillsList.innerHTML = skillsListHtml;
}