$(() => {
    history.pushState(null, null);
    $(window).on("popstate", (e) => {
      location.href = "error.html"
    });
  }); 