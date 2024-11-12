import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';  // Import the body CSS

let count = 0;

// Add button and counter
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count">0 clicks</p>');

// Update counter function
function updateCounter() {
  count++;
  $('#count').text(`${count} clicks`);
}

$('button').on('click', _.debounce(updateCounter, 300));  // Debounce the counter updates

