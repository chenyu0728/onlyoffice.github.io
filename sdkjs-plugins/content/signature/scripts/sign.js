/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function (window, undefined) {

    var oLangMap = {};
    oLangMap['sing1'] = "http://192.168.14.45:8000/sdkjs-plugins/ocr/resources/light/icon@2x.png";
    oLangMap['sing2'] = "http://192.168.14.45:8000/sdkjs-plugins/ocr/resources/light/icon@2x.png";

    window.oncontextmenu = function (e) {
        if (e.preventDefault)
            e.preventDefault();
        if (e.stopPropagation)
            e.stopPropagation();
        return false;
    };

    function escapeHtml(string) {
        var res = string;
        res = res.replace(/[\', \", \\,]/g, function (sSymbol) {
            return '\\' + sSymbol;
        });
        return res;
    }

    var arrParsedData = [];

    window.Asc.plugin.init = function () {
        $('#lang-select').select2({
            minimumResultsForSearch: Infinity
        });
        this.resizeWindow(300, 100, 300, 100, 300, 100);
        var nStartFilesCount = 0, arrImages;


    };

    window.Asc.plugin.button = function (id) {
        if (id == 0) {
            var url = "http://192.168.14.50:8090/6.4.2-6/sdkjs-plugins/ocr/resources/sign1.png";
            insertImage(url);
        }
        else {
            this.executeCommand("close", "");
        }
    };

    function insertImage(url) {
        Asc.scope.imageUrl = url;
        window.Asc.plugin.callCommand(function () {
            var oDocument = Api.GetDocument();
            var oParagraph, oRun, arrInsertResult = [], oImage;
            oParagraph = Api.CreateParagraph();
            arrInsertResult.push(oParagraph);
            var width = 40 * 36000;
            var height = 40 * 36000;
            oImage = Api.CreateImage(Asc.scope.imageUrl, width, width);
            oImage.SetWrappingStyle("inFront");
            oParagraph.AddDrawing(oImage);
            oDocument.InsertContent(arrInsertResult);
        }, false);
    };

})(window, undefined);
