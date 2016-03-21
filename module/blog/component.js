System.register(["./blogentry", "./service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var blogentry_1, service_1;
    var Blog;
    return {
        setters:[
            function (blogentry_1_1) {
                blogentry_1 = blogentry_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            /**
             * A simple Blog.
             */
            Blog = (function () {
                /**
                 * Default constructor.
                 *
                 * @param __service BlogService
                 */
                function Blog(__service) {
                    if (__service === void 0) { __service = new service_1.Service(); }
                    this.__service = __service;
                    /**
                     * Blog entries.
                     */
                    this.__entries = [];
                }
                /**
                 * Returns a created blog entry.
                 *
                 * @param title blog entry title
                 * @param text blog entry text
                 */
                Blog.prototype.create = function (title, text) {
                    var now = new Date(), id = this.entries.length + 1;
                    return this.add(new blogentry_1.BlogEntry(id, title, text, now));
                };
                Object.defineProperty(Blog.prototype, "entries", {
                    /**
                     * Returns blog entries.
                     *
                     * @returns {IEntry[]}
                     */
                    get: function () {
                        return this.__entries;
                    },
                    enumerable: true,
                    configurable: true
                });
                Blog.prototype.add = function (entry) {
                    this.__entries.push(entry);
                    this.__service.persist(entry);
                    return entry;
                };
                return Blog;
            }());
            exports_1("Blog", Blog);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9ibG9nL2NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUtBOztlQUVHO1lBQ0g7Z0JBT0U7Ozs7bUJBSUc7Z0JBQ0gsY0FBMkIsU0FBMEM7b0JBQWxELHlCQUFrRCxHQUFsRCxnQkFBcUMsaUJBQVcsRUFBRTtvQkFBMUMsY0FBUyxHQUFULFNBQVMsQ0FBaUM7b0JBVnJFOzt1QkFFRztvQkFDSyxjQUFTLEdBQWEsRUFBRSxDQUFDO2dCQVNqQyxDQUFDO2dCQUVEOzs7OzttQkFLRztnQkFDSSxxQkFBTSxHQUFiLFVBQWMsS0FBYSxFQUFFLElBQVk7b0JBRXZDLElBQUksR0FBRyxHQUFTLElBQUksSUFBSSxFQUFFLEVBQ3RCLEVBQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBRXpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUkscUJBQVMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxDQUFDO2dCQU9ELHNCQUFXLHlCQUFPO29CQUxsQjs7Ozt1QkFJRzt5QkFDSDt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDeEIsQ0FBQzs7O21CQUFBO2dCQUVPLGtCQUFHLEdBQVgsVUFBWSxLQUFhO29CQUV2QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFFM0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRTlCLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2YsQ0FBQztnQkFDSCxXQUFDO1lBQUQsQ0EvQ0EsQUErQ0MsSUFBQTtZQS9DRCx1QkErQ0MsQ0FBQSIsImZpbGUiOiJtb2R1bGUvYmxvZy9jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZXh0ZXJuYWxcbmltcG9ydCB7SUVudHJ5fSBmcm9tIFwiLi9lbnRyeVwiO1xuaW1wb3J0IHtCbG9nRW50cnl9IGZyb20gXCIuL2Jsb2dlbnRyeVwiO1xuaW1wb3J0IHtTZXJ2aWNlIGFzIEJsb2dTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlXCI7XG5cbi8qKlxuICogQSBzaW1wbGUgQmxvZy5cbiAqL1xuZXhwb3J0IGNsYXNzIEJsb2cge1xuXG4gIC8qKlxuICAgKiBCbG9nIGVudHJpZXMuXG4gICAqL1xuICBwcml2YXRlIF9fZW50cmllczogSUVudHJ5W10gPSBbXTtcblxuICAvKipcbiAgICogRGVmYXVsdCBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogQHBhcmFtIF9fc2VydmljZSBCbG9nU2VydmljZVxuICAgKi9cbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgX19zZXJ2aWNlOiBCbG9nU2VydmljZSA9IG5ldyBCbG9nU2VydmljZSgpKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY3JlYXRlZCBibG9nIGVudHJ5LlxuICAgKlxuICAgKiBAcGFyYW0gdGl0bGUgYmxvZyBlbnRyeSB0aXRsZVxuICAgKiBAcGFyYW0gdGV4dCBibG9nIGVudHJ5IHRleHRcbiAgICovXG4gIHB1YmxpYyBjcmVhdGUodGl0bGU6IHN0cmluZywgdGV4dDogc3RyaW5nKTogSUVudHJ5IHtcblxuICAgIGxldCBub3c6IERhdGUgPSBuZXcgRGF0ZSgpLFxuICAgICAgICBpZDogbnVtYmVyID0gdGhpcy5lbnRyaWVzLmxlbmd0aCArIDE7XG5cbiAgICByZXR1cm4gdGhpcy5hZGQobmV3IEJsb2dFbnRyeShpZCwgdGl0bGUsIHRleHQsIG5vdykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYmxvZyBlbnRyaWVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7SUVudHJ5W119XG4gICAqL1xuICBwdWJsaWMgZ2V0IGVudHJpZXMoKTogSUVudHJ5W10ge1xuICAgIHJldHVybiB0aGlzLl9fZW50cmllcztcbiAgfVxuXG4gIHByaXZhdGUgYWRkKGVudHJ5OiBJRW50cnkpOiBJRW50cnkge1xuXG4gICAgdGhpcy5fX2VudHJpZXMucHVzaChlbnRyeSk7XG5cbiAgICB0aGlzLl9fc2VydmljZS5wZXJzaXN0KGVudHJ5KTtcblxuICAgIHJldHVybiBlbnRyeTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
