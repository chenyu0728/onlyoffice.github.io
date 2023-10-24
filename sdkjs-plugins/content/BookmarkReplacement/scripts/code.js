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
  window.Asc.plugin.init = function () {};

  window.Asc.plugin.button = function (id) {
    this.executeCommand("close", "");
  };

  window.Asc.plugin.event_onDocumentContentReady = function () {
    //event document is ready
    //all events are specified in the config file in the "events" field
    var oDocument = Api.GetDocument();
    var aBookmarks = oDocument.GetAllBookmarksNames();
    var Bookmark = [
      {
        name: "settlement_count",
        text: null,
        type: "text",
      },
      {
        name: "project_contact_people",
        text: "黄圣",
        type: "text",
      },
      {
        name: "project_mof_agency_name",
        text: "经济建设处",
        type: "text",
      },
      {
        name: "item_type",
        text: "其他项目支出预算",
        type: "text",
      },
      {
        name: "project_name",
        text: "福建省城市运行管理服务平台（一期）",
        type: "text",
      },
      {
        name: "project_agency_name",
        text: "福建省大数据集团有限公司",
        type: "text",
      },
      {
        name: "project_name1",
        text: "福建省城市运行管理服务平台（一期）",
        type: "text",
      },
      {
        name: "review_amount",
        text: "498.23000",
        type: "text",
      },
      {
        name: "task_release_agency",
        text: "经济建设处",
        type: "text",
      },
      {
        name: "project_principal_name",
        text: "李孝东",
        type: "text",
      },
      {
        name: "actual_review_amount",
        text: "498.23000",
        type: "text",
      },
      {
        name: "project_name2",
        text: "福建省城市运行管理服务平台（一期）",
        type: "text",
      },
      {
        name: "business_agency_name",
        text: "项目评审一科",
        type: "text",
      },
      {
        name: "task_release_agency_user",
        text: "陈希翀",
        type: "text",
      },
      {
        name: "task_release_agency_phone",
        text: "87097396",
        type: "text",
      },
      {
        name: "review_lower_amount",
        text: "28.04000",
        type: "text",
      },
      {
        name: "review_lower_ratio",
        text: "5.63",
        type: "text",
      },
      {
        name: "estimate_approval_amount",
        text: "0.00000",
        type: "text",
      },
      {
        name: "project_agency_phone",
        text: "15396016523",
        type: "text",
      },
      {
        name: "principals",
        text: "李孝东",
        type: "text",
      },
      {
        name: "principals1",
        text: "李孝东",
        type: "text",
      },
      {
        name: "project_name3",
        text: "福建省城市运行管理服务平台（一期）",
        type: "text",
      },
      {
        name: "review_fixed_amount",
        text: "470.19000",
        type: "text",
      },
      {
        name: "civil_works_preliminary_review_names",
        text: "",
        type: "text",
      },
      {
        name: "installation_preliminary_review_names",
        text: "",
        type: "text",
      },
      {
        name: "finance_preliminary_review_names",
        text: "",
        type: "text",
      },
      {
        name: "civil_works_second_review_names",
        text: "",
        type: "text",
      },
      {
        name: "installation_second_review_names",
        text: "",
        type: "text",
      },
      {
        name: "finance_second_review_names",
        text: "",
        type: "text",
      },
      {
        name: "other_preliminary_review_names",
        text: "张建",
        type: "text",
      },
      {
        name: "other_second_review_names",
        text: "李孝东,陈士骏",
        type: "text",
      },
      {
        name: "civil",
        text: "",
        type: "text",
      },
      {
        name: "install",
        text: "",
        type: "text",
      },
      {
        name: "finance",
        text: "",
        type: "text",
      },
      {
        name: "civil2",
        text: "",
        type: "text",
      },
      {
        name: "install2",
        text: "",
        type: "text",
      },
      {
        name: "finance2",
        text: "",
        type: "text",
      },
      {
        name: "other",
        text: "张建",
        type: "text",
      },
      {
        name: "other2",
        text: "李孝东,陈士骏",
        type: "text",
      },
      {
        name: "project_type",
        text: "其他项目支出",
        type: "text",
      },
      {
        name: "project_agency_user",
        text: "黄圣",
        type: "text",
      },
      {
        name: "project_agency_phone",
        text: "15396016523",
        type: "text",
      },
      {
        name: "province_finance_amount",
        text: "按照评审结果的30%安排资金",
        type: "text",
      },
      {
        name: "review_date",
        text: "2023-05-31",
        type: "text",
      },
      {
        name: "funds_source",
        text: "按照评审结果的30%安排资金",
        type: "text",
      },
      {
        name: "project_no",
        text: "350000233010010000052",
        type: "text",
      },
      {
        name: "Sydate",
        text: "2023-10-24",
        type: "text",
      },
      {
        name: "project_agency",
        text: "福建省大数据集团有限公司",
        type: "text",
      },
      {
        name: "projectIntroduction",
        text: "",
        type: "text",
      },
      {
        name: "date",
        text: "2023年 10月 24日",
        type: "text",
      },
      {
        name: "reportFiles",
        text: "",
        type: "text",
      },
    ];
    console.log(aBookmarks);
    aBookmarks.forEach((a) => {
      Bookmark.forEach((b) => {
        if (a == b.name) {
          console.log(a);
          console.log(b);
          var oRange = oDocument.GetBookmarkRange(a);
          oRange.Delete();
          oRange.AddText(b.text);
        }
      });
    });
    // var oProperties = {
    //   searchString: "福建",
    //   replaceString: "建福",
    //   matchCase: false,
    // };
    //method for search and replace in documents
    // window.Asc.plugin.executeMethod(
    //   "SearchAndReplace",
    //   [oProperties],
    //   function () {
    //     window.Asc.plugin.executeCommand("close", "");
    //   }
    // );
  };
})(window, undefined);
