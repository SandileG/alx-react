import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';  // Import the CSS file

$(document).ready(function () {
  // Add elements to the body
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Initialize count variable
  let count = 0;

  // Define updateCounter function
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind debounce to updateCounter function on button click
  $('button').on('click', _.debounce(updateCounter, 300));
});

