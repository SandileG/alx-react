import $ from 'jquery';
import '../css/header.css';  // Import the header CSS

console.log('Init header');

// Add the logo and title to the header
$('body').prepend('<div id="logo"></div>');
$('body').prepend('<h1>Holberton Dashboard</h1>');
