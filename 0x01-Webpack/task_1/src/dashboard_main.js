import $ from 'jquery';

$('body').append(
  $('<p></p>').text('Holberton Dashboard'),
  $('<p></p>').text('Dashboard data for the students'),
  $('<button>').text('Click here to get started'),
  $('<p></p>').attr('id', 'count'),
  $('<p></p>').text('Copyright - Holberton School'),
)

function updateCounter() {
  let count = $('#count').html || 0;

}