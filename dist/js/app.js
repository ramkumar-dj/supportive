(function (global) {
  "use strict";
  function initMetisMenu() {
    global("#menu").metisMenu({
      // enabled/disable the auto collapse.
      toggle: true,
      // prevent default event
      preventDefault: true,
      // default classes
      activeClass: "active",
      collapseClass: "collapse",
      collapseInClass: "in",
      collapsingClass: "collapsing",
      // .nav-link for Bootstrap 4
      triggerElement: "a",
      // .nav-item for Bootstrap 4
      parentTrigger: "li",
      // .nav.flex-column for Bootstrap 4
      subMenu: "ul",
    });
  }

  function initSidebarEnable() {
    global(document).on("click", ".menu_toggler", function (e) {
      e.preventDefault();
      global("body").toggleClass("side_enable");
    });
  }

  function initFullScreenMode() {
    global('[data-bs-toggle="fullscreen"]').on("click", function (e) {
      e.preventDefault();
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }

  function initSyntaxHighlight() {
    hljs.highlightAll();
  }

  function init() {
    initMetisMenu();
    initSidebarEnable();
    initFullScreenMode();
    initSyntaxHighlight();
  }

  init();
})(jQuery);
