
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

    $('#tb-delete-btn').click((ev) => {
      let id = $(ev).data('time-block-id');
      $.ajax("/ajax/time_blocks" + "/" + id, {
        method: "delete",
        success: (resp) => {
          $("#time-block-"+id).remove();
          $('#time-blocks').load(location.href + ' #time-blocks tr');
        }
      });
    });

    // addTimeBlock(start, end, userId, taskId, (resp) => {
    //   $('#time-blocks').load(location.href + ' #time-blocks tr');
    //   $('#task-status').load(location.href + ' #task-status span')
    //   $('#total-time').load(location.href + ' #total-time span')
    // });
  });
  //
  // $('#time-block-button').click((ev) => {
  //   let rating = $('#rating-select').val();
  //   let user_id = $(ev.target).data('user-id');
  //   let product_id = $(ev.target).data('product-id');
  //
  //   let text = JSON.stringify({
  //     rating: {
  //       user_id: user_id,
  //       product_id: product_id,
  //       stars: rating,
  //     },
  //   });
  //
  //   $.ajax(rating_path, {
  //     method: "post",
  //     dataType: "json",
  //     contentType: "application/json; charset=UTF-8",
  //     data: text,
  //     success: (resp) => {
  //       $('#rating-form').text(`(your rating: ${resp.data.stars})`);
  //     },
  //   });
  // });
});
