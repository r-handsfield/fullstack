"use strict";define("pages/open-course/peerReview/viewModels/preview",["require","exports","module","backbone","underscore","bundles/phoenix/lib/mixin","js/lib/fsm","pages/open-course/peerReview/models/errorTree"],function(require,exports,module){var Backbone=require("backbone"),_=require("underscore"),e=require("bundles/phoenix/lib/mixin"),n=require("js/lib/fsm"),r=require("pages/open-course/peerReview/models/errorTree"),i=Backbone.Model.extend({defaults:{state:"ready"},fsm:{states:["ready","submitting","submit-error-invalid-submission","submit-error-unknown"],transitions:{submitting:["ready","submit-error-unknown"],"submit-error-invalid-submission":["submitting"],"submit-error-unknown":["submitting"]}},initialize:function initialize(e,i){_(this).bindAll("onSubmitFailure"),_(this).extend(_(i).pick("alerts","api","errorTree","itemMetadata","submission","submissionSchema"))},submit:function submit(i){this.transition("submitting");var e=this.submissionSchema.get("assignmentVersion");return this.api.submit(this.itemMetadata,this.submission,e,i)["catch"](this.onSubmitFailure)},onSubmitFailure:function onSubmitFailure(n){if(n.responseJSON){var e=n.responseJSON;throw this.trigger("submitError",e),"InvalidSubmission"===e.errorCode?(this.errorTree.replace(e.details.errorTree),this.alerts.set("severity","error"),this.transition("submit-error-invalid-submission"),new i.InvalidSubmissionException):"StaleAssignmentVersion"===e.errorCode?(this.transition("submit-error-invalid-submission"),new i.StaleAssignmentVersionException):(this.transition("submit-error-unknown"),new i.UnknownServerErrorException)}throw this.transition("submit-error-unknown"),n}});i.InvalidSubmissionException=function(){},i.StaleAssignmentVersionException=function(){},i.UnknownServerErrorException=function(){},e(i.prototype,n.FiniteStateMachine),module.exports=i});