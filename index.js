$(".tab-pane").each((index, elem) => {
  let duration;
  $($(elem).find("video"))[0].onloadedmetadata = function () {
    duration = this.duration;
    const minute = Math.floor(duration / 60);
    const second = Math.floor(duration - minute * 60);

    $($($(".nav").find("li")[index]).find("a")).append(
      `<span class="d-block">${minute}:${second}</span>`
    );
  };
});
