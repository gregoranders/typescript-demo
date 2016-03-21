System.register(["./blog/component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var component_1;
    var blog, codeView, title, body, jsonView, stringView, submit, clear;
    function persist() {
        var titleText = title.value, bodyText = body.value;
        if (titleText.length && bodyText.length) {
            var entry = blog.create(titleText, bodyText);
            stringView.parentElement.classList.remove("hidden");
            jsonView.parentElement.classList.remove("hidden");
            stringView.textContent = String(entry);
            jsonView.textContent = JSON.stringify(entry);
            // noinspection TypeScriptUnresolvedFunction
            Prism.highlightElement(jsonView);
        }
        return false;
    }
    function listen(id) {
        var element = document.querySelector('[id="' + id + '"]');
        if (element) {
            element.onclick = function () {
                System.import("demo/" + id + ".ts!text")
                    .then(function (data) {
                    codeView.parentElement.classList.remove("hidden");
                    codeView.textContent = data;
                    // noinspection TypeScriptUnresolvedFunction
                    Prism.highlightElement(codeView);
                })
                    .catch(console.error.bind(console));
            };
        }
    }
    return {
        setters:[
            function (component_1_1) {
                component_1 = component_1_1;
            }],
        execute: function() {
            blog = new component_1.Blog();
            codeView = document.querySelector('[id="codeView"]');
            title = document.querySelector('[id="title"]');
            body = document.querySelector('[id="body"]');
            jsonView = document.querySelector('[id="jsonView"]');
            stringView = document.querySelector('[id="stringView"]');
            submit = document.querySelector('[id="persist"]');
            clear = document.querySelector('[id="clear"]');
            if (submit) {
                submit.onclick = function () {
                    return persist();
                };
            }
            if (clear) {
                clear.onclick = function () {
                    jsonView.textContent = "";
                    stringView.textContent = "";
                    codeView.textContent = "";
                };
            }
            listen("types");
            listen("interfaces");
            listen("classes");
            listen("decorators");
            listen("destructuring");
            listen("typeguards");
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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Z0JBQ1YsS0FBSyxDQUFDLE9BQU8sR0FBRztvQkFDZCxRQUFRLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFDMUIsVUFBVSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7b0JBQzVCLFFBQVEsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUM1QixDQUFDLENBQUM7WUFDSixDQUFDO1lBMkJELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDckIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6Im1vZHVsZS9ib290LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgUHJpc206IGFueTtcblxuaW1wb3J0IHtJRW50cnl9IGZyb20gXCIuL2Jsb2cvZW50cnlcIjtcbmltcG9ydCB7QmxvZ30gZnJvbSBcIi4vYmxvZy9jb21wb25lbnRcIjtcblxubGV0IGJsb2c6IEJsb2cgPSBuZXcgQmxvZygpO1xuXG5sZXQgY29kZVZpZXc6IEhUTUxFbGVtZW50ID0gPEhUTUxFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cImNvZGVWaWV3XCJdJyk7XG5cbmxldCB0aXRsZTogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cInRpdGxlXCJdJyk7XG5sZXQgYm9keTogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cImJvZHlcIl0nKTtcbmxldCBqc29uVmlldzogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cImpzb25WaWV3XCJdJyk7XG5sZXQgc3RyaW5nVmlldzogSFRNTElucHV0RWxlbWVudCA9IDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cInN0cmluZ1ZpZXdcIl0nKTtcbmxldCBzdWJtaXQ6IEhUTUxCdXR0b25FbGVtZW50ID0gPEhUTUxCdXR0b25FbGVtZW50PmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cInBlcnNpc3RcIl0nKTtcbmxldCBjbGVhcjogSFRNTEJ1dHRvbkVsZW1lbnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkPVwiY2xlYXJcIl0nKTtcblxuZnVuY3Rpb24gcGVyc2lzdCgpOiBib29sZWFuIHtcblxuICBsZXQgdGl0bGVUZXh0OiBzdHJpbmcgPSB0aXRsZS52YWx1ZSxcbiAgICBib2R5VGV4dDogc3RyaW5nID0gYm9keS52YWx1ZTtcblxuICBpZiAodGl0bGVUZXh0Lmxlbmd0aCAmJiBib2R5VGV4dC5sZW5ndGgpIHtcblxuICAgIGxldCBlbnRyeTogSUVudHJ5ID0gYmxvZy5jcmVhdGUodGl0bGVUZXh0LCBib2R5VGV4dCk7XG5cbiAgICBzdHJpbmdWaWV3LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBqc29uVmlldy5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgICBzdHJpbmdWaWV3LnRleHRDb250ZW50ID0gU3RyaW5nKGVudHJ5KTtcbiAgICBqc29uVmlldy50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGVudHJ5KTtcblxuICAgIC8vIG5vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXG4gICAgUHJpc20uaGlnaGxpZ2h0RWxlbWVudChqc29uVmlldyk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmlmIChzdWJtaXQpIHtcbiAgc3VibWl0Lm9uY2xpY2sgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIHBlcnNpc3QoKTtcbiAgfTtcbn1cblxuaWYgKGNsZWFyKSB7XG4gIGNsZWFyLm9uY2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAganNvblZpZXcudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHN0cmluZ1ZpZXcudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvZGVWaWV3LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbGlzdGVuKGlkOiBzdHJpbmcpOiB2b2lkIHtcblxuICBsZXQgZWxlbWVudDogSFRNTEJ1dHRvbkVsZW1lbnQgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2lkPVwiJyArIGlkICsgJ1wiXScpO1xuXG4gIGlmIChlbGVtZW50KSB7XG5cbiAgICBlbGVtZW50Lm9uY2xpY2sgPSAoKTogdm9pZCA9PiB7XG5cbiAgICAgIFN5c3RlbS5pbXBvcnQoXCJkZW1vL1wiICsgaWQgKyBcIi50cyF0ZXh0XCIpXG4gICAgICAgIC50aGVuKChkYXRhOiBzdHJpbmcpID0+IHtcblxuICAgICAgICAgIGNvZGVWaWV3LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICAgICAgICAgIGNvZGVWaWV3LnRleHRDb250ZW50ID0gZGF0YTtcblxuICAgICAgICAgIC8vIG5vaW5zcGVjdGlvbiBUeXBlU2NyaXB0VW5yZXNvbHZlZEZ1bmN0aW9uXG4gICAgICAgICAgUHJpc20uaGlnaGxpZ2h0RWxlbWVudChjb2RlVmlldyk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IuYmluZChjb25zb2xlKSk7XG5cbiAgICB9O1xuICB9XG59XG5cbmxpc3RlbihcInR5cGVzXCIpO1xubGlzdGVuKFwiaW50ZXJmYWNlc1wiKTtcbmxpc3RlbihcImNsYXNzZXNcIik7XG5saXN0ZW4oXCJkZWNvcmF0b3JzXCIpO1xubGlzdGVuKFwiZGVzdHJ1Y3R1cmluZ1wiKTtcbmxpc3RlbihcInR5cGVndWFyZHNcIik7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
