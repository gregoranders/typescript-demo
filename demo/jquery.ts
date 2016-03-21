/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
/// <reference path="../typings/main/definitions/requirejs/index.d.ts" />

jQuery(document).ready((): void => {

  jQuery("[class='link']").each( (idx: number, element: Element) => {

    element.textContent = "Link " + idx;

  });

});
