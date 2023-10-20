// Define your projects using JSON data
const projects = [
    {
        title: "Project 1",
        description: "Description of Project 1",
        link: "https://example.com/project1",
    },
    {
        title: "Project 2",
        description: "Description of Project 2",
        link: "https://example.com/project2",
    },
    // Add more projects as needed
];

// AngularJS application
var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.projects = projects;
});

// jQuery for dynamically populating the projects section
$(document).ready(function () {
    const projectList = $("#project-list");
    projects.forEach((project) => {
        projectList.append(`
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <a href="${project.link}" class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        `);
    });
});
