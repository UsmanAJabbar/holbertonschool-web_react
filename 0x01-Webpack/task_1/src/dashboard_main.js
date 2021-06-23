import $ from 'jquery';

$(document).ready(
  $('body').append(
    $('<p>').text('Holberton Dashboard'),
    $('<p>').text('Dashboard data for the students'),
    $('<button>').text('Click here to get started'),
    $('<p>').attr('id', 'count'),
    $('<p>').text('Copyright - Holberton School'),
  )
)

function updateCounter() {
  let count = $('#count').html || 0;

}