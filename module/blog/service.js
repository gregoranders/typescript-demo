System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service;
    return {
        setters:[],
        execute: function() {
            /**
             * A simple Service.
             */
            Service = (function () {
                function Service() {
                }
                /**
                 * Persists entry.
                 */
                Service.prototype.persist = function (entry) {
                    var data = JSON.stringify(entry);
                    // debugger;
                    console.log("As JSON:", data);
                    console.log("As String:", entry.toString());
                };
                return Service;
            }());
            exports_1("Service", Service);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS9ibG9nL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUdBOztlQUVHO1lBQ0g7Z0JBQUE7Z0JBZUEsQ0FBQztnQkFiQzs7bUJBRUc7Z0JBQ0kseUJBQU8sR0FBZCxVQUFlLEtBQWE7b0JBRTFCLElBQUksSUFBSSxHQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBRXRDLFlBQVk7b0JBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUcsSUFBSSxDQUFDLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVILGNBQUM7WUFBRCxDQWZBLEFBZUMsSUFBQTtZQWZELDZCQWVDLENBQUEiLCJmaWxlIjoibW9kdWxlL2Jsb2cvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBleHRlcm5hbFxuaW1wb3J0IHtJRW50cnl9IGZyb20gXCIuL2VudHJ5XCI7XG5cbi8qKlxuICogQSBzaW1wbGUgU2VydmljZS5cbiAqL1xuZXhwb3J0IGNsYXNzIFNlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBQZXJzaXN0cyBlbnRyeS5cbiAgICovXG4gIHB1YmxpYyBwZXJzaXN0KGVudHJ5OiBJRW50cnkpOiB2b2lkIHtcblxuICAgIGxldCBkYXRhOiBhbnkgPSBKU09OLnN0cmluZ2lmeShlbnRyeSk7XG5cbiAgICAvLyBkZWJ1Z2dlcjtcblxuICAgIGNvbnNvbGUubG9nKFwiQXMgSlNPTjpcIiAsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKFwiQXMgU3RyaW5nOlwiICwgZW50cnkudG9TdHJpbmcoKSk7XG4gIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
