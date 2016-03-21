declare var Prism: any;

import {IEntry} from "./blog/entry";
import {Blog} from "./blog/component";

let blog: Blog = new Blog();

let codeView: HTMLElement = <HTMLElement>document.querySelector('[id="codeView"]');

let title: HTMLInputElement = <HTMLInputElement>document.querySelector('[id="title"]');
let body: HTMLInputElement = <HTMLInputElement>document.querySelector('[id="body"]');
let jsonView: HTMLInputElement = <HTMLInputElement>document.querySelector('[id="jsonView"]');
let stringView: HTMLInputElement = <HTMLInputElement>document.querySelector('[id="stringView"]');
let submit: HTMLButtonElement = <HTMLButtonElement>document.querySelector('[id="persist"]');
let clear: HTMLButtonElement = <HTMLButtonElement>document.querySelector('[id="clear"]');

function persist(): boolean {

  let titleText: string = title.value,
    bodyText: string = body.value;

  if (titleText.length && bodyText.length) {

    let entry: IEntry = blog.create(titleText, bodyText);

    stringView.parentElement.classList.remove("hidden");
    jsonView.parentElement.classList.remove("hidden");

    stringView.textContent = String(entry);
    jsonView.textContent = JSON.stringify(entry);

    // noinspection TypeScriptUnresolvedFunction
    Prism.highlightElement(jsonView);
  }

  return false;
}

if (submit) {
  submit.onclick = (): boolean => {
    return persist();
  };
}

if (clear) {
  clear.onclick = (): void => {
    jsonView.textContent = "";
    stringView.textContent = "";
    codeView.textContent = "";
  };
}

function listen(id: string): void {

  let element: HTMLButtonElement = <HTMLButtonElement>document.querySelector('[id="' + id + '"]');

  if (element) {

    element.onclick = (): void => {

      System.import("demo/" + id + ".ts!text")
        .then((data: string) => {

          codeView.parentElement.classList.remove("hidden");

          codeView.textContent = data;

          // noinspection TypeScriptUnresolvedFunction
          Prism.highlightElement(codeView);

        })
        .catch(console.error.bind(console));

    };
  }
}

listen("types");
listen("interfaces");
listen("classes");
listen("decorators");
listen("destructuring");
listen("typeguards");
