!function(e){var n=function(n,e,t){var i=function template(a){var t=[],r={},i,s=a||{};return function(e){t.push('<div><div data-js="title">'+n.escape(null==(i=e("Submitted!"))?"":i)+'</div><div data-js="text">'+n.escape(null==(i=e("You will receive an email when a classmate reviews it."))?"":i)+"\n"+(null==(i=e("<br>"))?"":i)+"\n"+n.escape(null==(i=e("Meanwhile, help your classmates by reviewing their projects."))?"":i)+"</div></div>")}.call(this,"_t"in s?s._t:"undefined"!=typeof e?e:void 0),t.join("")};return function(n){return n&&"_t"in n&&(e=n._t.merge(e)),i(n)}};"function"==typeof define&&define.amd?define(["js/vendor/jade","i18n!pages/open-course/peerReview/views/alerts/nls/submitSuccess.ungraded"],function(e,i){var t;return n(e,i,t)}):e.jade.templates["pages.open-course.peerReview.views.alerts.submitSuccess.ungraded"]=n(e.jade.helpers)}(window);