System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BlogEntry;
    return {
        setters:[],
        execute: function() {
            /**
             * Default blog entry implementation simulating an immutable object.
             */
            BlogEntry = (function () {
                /**
                 * Default constructor.
                 *
                 * @param __id blog entry id
                 * @param __title blog entry title
                 * @param __body blog entry text
                 * @param __created_at blog entry creation date
                 */
                function BlogEntry(__id, __title, __body, __created_at) {
                    this.__id = __id;
                    this.__title = __title;
                    this.__body = __body;
                    this.__created_at = __created_at;
                }
                Object.defineProperty(BlogEntry.prototype, "id", {
                    /**
                     * Returns the blog entry id.
                     *
                     * @returns blog entry id
                     */
                    get: function () {
                        var _this = this;
                        var func = function () {
                            return _this.__id;
                        };
                        return func();
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlogEntry.prototype, "title", {
                    /**
                     * Returns the blog entry title.
                     *
                     * @returns blog entry tile
                     */
                    get: function () {
                        return this.__title;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlogEntry.prototype, "body", {
                    /**
                     * Returns the blog entry text.
                     *
                     * @returns blog entry text
                     */
                    get: function () {
                        return this.__body;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(BlogEntry.prototype, "created_at", {
                    /**
                     * Returns the blog entry creation date.
                     *
                     * @returns blog entry creation date
                     */
                    get: function () {
                        return this.__created_at;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Returns the blog entry JSON representation.
                 *
                 * Without this method JSON representation of this object will contains keys
                 * prefixed with '__'. See constructor.
                 *
                 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#toJSON()_behavior
                 *
                 * @returns blog entry JSON representation
                 */
                BlogEntry.prototype.toJSON = function () {
                    return {
                        body: this.body,
                        created_at: this.created_at,
                        id: this.id,
                        title: this.title,
                    };
                };
                /**
                 * Returns the blog entry string representation.
                 *
                 * @returns blog entry as string
                 */
                BlogEntry.prototype.toString = function () {
                    return "title: " + this.title + " body: " + this.body.substring(0, 4) + "...";
                };
                return BlogEntry;
            }());
            exports_1("BlogEntry", BlogEntry);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9ibG9nL2Jsb2dlbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBR0E7O2VBRUc7WUFDSDtnQkFFRTs7Ozs7OzttQkFPRztnQkFDSCxtQkFBMkIsSUFBWSxFQUFVLE9BQWUsRUFBVSxNQUFjLEVBQVUsWUFBa0I7b0JBQXpGLFNBQUksR0FBSixJQUFJLENBQVE7b0JBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtvQkFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFNO2dCQUVwSCxDQUFDO2dCQU9ELHNCQUFXLHlCQUFFO29CQUxiOzs7O3VCQUlHO3lCQUNIO3dCQUFBLGlCQU9DO3dCQUxDLElBQUksSUFBSSxHQUFpQjs0QkFDdkIsTUFBTSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUM7d0JBQ25CLENBQUMsQ0FBQzt3QkFFRixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ2hCLENBQUM7OzttQkFBQTtnQkFPRCxzQkFBVyw0QkFBSztvQkFMaEI7Ozs7dUJBSUc7eUJBQ0g7d0JBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3RCLENBQUM7OzttQkFBQTtnQkFPRCxzQkFBVywyQkFBSTtvQkFMZjs7Ozt1QkFJRzt5QkFDSDt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDckIsQ0FBQzs7O21CQUFBO2dCQU9ELHNCQUFXLGlDQUFVO29CQUxyQjs7Ozt1QkFJRzt5QkFDSDt3QkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztvQkFDM0IsQ0FBQzs7O21CQUFBO2dCQUVEOzs7Ozs7Ozs7bUJBU0c7Z0JBQ0ksMEJBQU0sR0FBYjtvQkFDRSxNQUFNLENBQUM7d0JBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTt3QkFDM0IsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO3dCQUNYLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztxQkFDbEIsQ0FBQztnQkFDSixDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNJLDRCQUFRLEdBQWY7b0JBQ0UsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNoRixDQUFDO2dCQUNILGdCQUFDO1lBQUQsQ0FsRkEsQUFrRkMsSUFBQTtZQWxGRCxpQ0FrRkMsQ0FBQSIsImZpbGUiOiJtb2R1bGUvYmxvZy9ibG9nZW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZXh0ZXJuYWxcbmltcG9ydCB7SUVudHJ5fSBmcm9tIFwiLi9lbnRyeVwiO1xuXG4vKipcbiAqIERlZmF1bHQgYmxvZyBlbnRyeSBpbXBsZW1lbnRhdGlvbiBzaW11bGF0aW5nIGFuIGltbXV0YWJsZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBCbG9nRW50cnkgaW1wbGVtZW50cyBJRW50cnkge1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNvbnN0cnVjdG9yLlxuICAgKlxuICAgKiBAcGFyYW0gX19pZCBibG9nIGVudHJ5IGlkXG4gICAqIEBwYXJhbSBfX3RpdGxlIGJsb2cgZW50cnkgdGl0bGVcbiAgICogQHBhcmFtIF9fYm9keSBibG9nIGVudHJ5IHRleHRcbiAgICogQHBhcmFtIF9fY3JlYXRlZF9hdCBibG9nIGVudHJ5IGNyZWF0aW9uIGRhdGVcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIF9faWQ6IG51bWJlciwgcHJpdmF0ZSBfX3RpdGxlOiBzdHJpbmcsIHByaXZhdGUgX19ib2R5OiBzdHJpbmcsIHByaXZhdGUgX19jcmVhdGVkX2F0OiBEYXRlKSB7XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBibG9nIGVudHJ5IGlkLlxuICAgKlxuICAgKiBAcmV0dXJucyBibG9nIGVudHJ5IGlkXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XG5cbiAgICBsZXQgZnVuYzogKCkgPT4gbnVtYmVyID0gKCk6IG51bWJlciA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5fX2lkO1xuICAgIH07XG5cbiAgICByZXR1cm4gZnVuYygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJsb2cgZW50cnkgdGl0bGUuXG4gICAqXG4gICAqIEByZXR1cm5zIGJsb2cgZW50cnkgdGlsZVxuICAgKi9cbiAgcHVibGljIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9fdGl0bGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmxvZyBlbnRyeSB0ZXh0LlxuICAgKlxuICAgKiBAcmV0dXJucyBibG9nIGVudHJ5IHRleHRcbiAgICovXG4gIHB1YmxpYyBnZXQgYm9keSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9fYm9keTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBibG9nIGVudHJ5IGNyZWF0aW9uIGRhdGUuXG4gICAqXG4gICAqIEByZXR1cm5zIGJsb2cgZW50cnkgY3JlYXRpb24gZGF0ZVxuICAgKi9cbiAgcHVibGljIGdldCBjcmVhdGVkX2F0KCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl9fY3JlYXRlZF9hdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBibG9nIGVudHJ5IEpTT04gcmVwcmVzZW50YXRpb24uXG4gICAqXG4gICAqIFdpdGhvdXQgdGhpcyBtZXRob2QgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGlzIG9iamVjdCB3aWxsIGNvbnRhaW5zIGtleXNcbiAgICogcHJlZml4ZWQgd2l0aCAnX18nLiBTZWUgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvSlNPTi9zdHJpbmdpZnkjdG9KU09OKClfYmVoYXZpb3JcbiAgICpcbiAgICogQHJldHVybnMgYmxvZyBlbnRyeSBKU09OIHJlcHJlc2VudGF0aW9uXG4gICAqL1xuICBwdWJsaWMgdG9KU09OKCk6IElFbnRyeSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvZHk6IHRoaXMuYm9keSxcbiAgICAgIGNyZWF0ZWRfYXQ6IHRoaXMuY3JlYXRlZF9hdCxcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdGl0bGU6IHRoaXMudGl0bGUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBibG9nIGVudHJ5IHN0cmluZyByZXByZXNlbnRhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgYmxvZyBlbnRyeSBhcyBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcInRpdGxlOiBcIiArIHRoaXMudGl0bGUgKyBcIiBib2R5OiBcIiArIHRoaXMuYm9keS5zdWJzdHJpbmcoMCwgNCkgKyBcIi4uLlwiO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
