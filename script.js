const projectOneButton = document.getElementById('project-one');
const projectTwoButton = document.getElementById('project-two');
const projectThreeButton = document.getElementById('project-three');
const projectMessage = document.getElementById('project-message');
const currentYear = document.getElementById('current-year');

currentYear.textContent = new Date().getFullYear();

function showProject(projectName, projectDescription) {
    projectMessage.textContent = projectName + ': ' + projectDescription;

    projectOneButton.classList.remove('is-selected');
    projectTwoButton.classList.remove('is-selected');
    projectThreeButton.classList.remove('is-selected');
}

projectOneButton.addEventListener('click', function () {
    showProject('Personal Portfolio', 'Hii ni website yangu binafsi. Nilitumia HTML kwa muundo, CSS kwa muonekano, na JavaScript kufanya buttons zijibu click.');
    projectOneButton.classList.add('is-selected');
});

projectTwoButton.addEventListener('click', function () {
    showProject('Student Task Planner', 'Hii ni idea ya project ya kupanga assignments na tarehe za mwisho. Unaweza kuijenga baadaye kwa HTML, CSS, na JavaScript.');
    projectTwoButton.classList.add('is-selected');
});

projectThreeButton.addEventListener('click', function () {
    showProject('University Information Page', 'Hii ni idea ya website yenye taarifa muhimu kwa wanafunzi wa chuo. Unaweza kuongeza kozi, matangazo, na mawasiliano.');
    projectThreeButton.classList.add('is-selected');
});
