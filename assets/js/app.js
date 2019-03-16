
import css from "../css/app.scss";

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html";
import jQuery from 'jquery';
window.jQuery = window.$ = jQuery; // Bootstrap requires a global "$" object.
import "bootstrap";
// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
$(function () {

  let start = new Date();

  $('#start-btn').click((ev) => {
    start = new Date();

    $('#start-btn').hide();
    $('#stop-btn').show();
    $(this).parent().find("#current-start").html("<p>Task started at" + start + ".</p>");

    console.log("start", start);
  });

  $('#stop-btn').click((ev) => {
    let end = new Date();
    let taskId = $(ev.target).data('task-id');

    $('#stop-btn').hide();
    $('#start-btn').show();
    let text = JSON.stringify({
      time_block: {
        task_id: taskId,
        start: start,
        end: end
      },
    });
    $.ajax("/ajax/time_blocks", {
      method: "post",
      dataType: "json",
      contentType: "application/json; charset=UTF-8",
      data: text,
      success: (resp) => {
        // $('#rating-form').text(`(your rating: ${resp.data.stars})`);
      },
    });
  });
});
