!function(i){var e=function(i,e,s){var t=function template(n){var s=[],d={},t,a=n||{};return function(e,a,n){s.push('<div class="bt3-row"><div class="bt3-col-md-12"><div class="bt3-alert bt3-alert-info"><strong>'+i.escape(null==(t=e("This is a preview of your project."))?"":t)+"</strong>"+(null==(t=e("&nbsp;Changes have been saved but not submitted."))?"":t)+"</div>"),a||s.push('<div data-state="submit-error-unknown" class="bt3-alert bt3-alert-danger">'+i.escape(null==(t=e("Error submitting. Please try again."))?"":t)+"</div>"),s.push('<div data-state-not="submit-error-unknown" data-js="alerts"></div></div></div><div class="bt3-row"><div data-js="rubric-questions-area" class="bt3-col-md-4 bt3-col-md-offset-0 bt3-col-md-push-8 bt3-col-sm-10 bt3-col-sm-offset-1"><div class="c-peer-card card-rich-interaction"><div data-js="rubric-questions"></div></div></div><div data-js="display-area" class="bt3-col-md-8 bt3-col-md-offset-0 bt3-col-md-pull-4 bt3-col-sm-10 bt3-col-sm-offset-1"><div class="c-peer-card card-rich-interaction"><div data-js="submission-header"></div><div data-js="review"></div><div><div class="bt3-text-right"><span data-js="submitting" data-state="submitting"></span><span>&nbsp;&nbsp;</span><a data-js="open-course-link edit-button"'+i.attr("href",n,!0,!1)+' class="link-button secondary">'+i.escape(null==(t=e("Edit"))?"":t)+"</a>"),a||s.push('&nbsp;<button data-js="submit-button" class="primary">'+i.escape(null==(t=e("Submit for review"))?"":t)+"</button>"),s.push("</div></div>"),a&&s.push('<div data-js="verification-container" class="c-peer-review-verification"></div>'),s.push("</div></div></div>")}.call(this,"_t"in a?a._t:"undefined"!=typeof e?e:void 0,"isVerifiable"in a?a.isVerifiable:"undefined"!=typeof isVerifiable?isVerifiable:void 0,"editLink"in a?a.editLink:"undefined"!=typeof editLink?editLink:void 0),s.join("")};return function(i){return i&&"_t"in i&&(e=i._t.merge(e)),t(i)}};"function"==typeof define&&define.amd?define(["js/vendor/jade","i18n!pages/open-course/peerReview/views/nls/preview"],function(i,t){var s;return e(i,t,s)}):i.jade.templates["pages.open-course.peerReview.views.preview"]=e(i.jade.helpers)}(window);