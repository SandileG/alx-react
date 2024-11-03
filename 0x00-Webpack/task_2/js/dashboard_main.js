import $ from 'jquery';
import _ from 'lodash';
import '../css/main';

// Add logo element
$('body').prepend('<div id="logo"></div>');

// Add elements to the DOM
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="clickButton">Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Initialize click count
let count = 0;

// Function to update click count
function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// Debounce the updateCounter function and bind it to the button click
$('#clickButton').on('click', _.debounce(updateCounter, 500));
