

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    " learner does not exist in LMS and not added to the exception list": "\u5b66\u4e60\u8005\u4e0d\u5b58\u5728\u7cfb\u7edf\u4e2d\uff0c\u5c06\u4e0d\u52a0\u5230\u4f8b\u5916\u5217\u8868\u4e2d", 
    " learner is already white listed and not added to the exception list": "\u5b66\u4e60\u8005\u5df2\u88ab\u5217\u5165\u767d\u8272\u6e05\u5355\uff0c\u4f46\u5e76\u672a\u6dfb\u52a0\u5230\u4f8b\u5916\u5217\u8868\u4e2d", 
    " learner is not enrolled in course and not added to the exception list": "\u5b66\u4e60\u8005\u6ca1\u6709\u8fdb\u5165\u8bfe\u7a0b, \u4e5f\u6ca1\u6709\u6dfb\u52a0\u5230\u4f8b\u5916\u5217\u8868\u4e2d\u3002", 
    " learner is successfully added to the exception list": "\u5b66\u4e60\u8005\u5df2\u7ecf\u6210\u529f\u5730\u52a0\u5165\u5230\u4f8b\u5916\u5217\u8868", 
    " learners are already white listed and not added to the exception list": "\u5b66\u4e60\u8005\u5df2\u88ab\u5217\u4e3a\u767d\u8272\u6e05\u5355, \u672a\u6dfb\u52a0\u5230\u4f8b\u5916\u5217\u8868\u4e2d", 
    " learners are not enrolled in course and not added to the exception list": "\u5b66\u4e60\u8005\u4e0d\u4f1a\u5728\u8bfe\u7a0b\u4e2d\u6ce8\u518c, \u4e5f\u4e0d\u4f1a\u6dfb\u52a0\u5230\u4f8b\u5916\u5217\u8868\u4e2d\u3002", 
    " learners are successfully added to exception list": "\u5b66\u4e60\u8005\u5df2\u7ecf\u6210\u529f\u5730\u52a0\u5165\u5230\u4f8b\u5916\u5217\u8868", 
    " learners do not exist in LMS and not added to the exception list": "\u5b66\u4e60\u8005\u4e0d\u5b58\u5728\u4e8e LMS \u4e2d, \u4e5f\u6ca1\u6709\u6dfb\u52a0\u5230\u5f02\u5e38\u5217\u8868\u4e2d", 
    " record is not in correct format and not added to the exception list": "\u8bb0\u5f55\u7684\u683c\u5f0f\u4e0d\u6b63\u786e\u4e14\u672a\u6dfb\u52a0\u5230\u5f02\u5e38\u5217\u8868\u4e2d", 
    " records are not in correct format and not added to the exception list": "\u8bb0\u5f55\u7684\u683c\u5f0f\u4e0d\u6b63\u786e\u4e14\u672a\u6dfb\u52a0\u5230\u5f02\u5e38\u5217\u8868\u4e2d", 
    "#Replies": "\u56de\u590d", 
    "%(comments_count)s %(span_sr_open)scomments %(span_close)s": "%(comments_count)s %(span_sr_open)s\u8bc4\u8bba %(span_close)s", 
    "%(comments_count)s %(span_sr_open)scomments (%(unread_comments_count)s unread comments)%(span_close)s": "%(comments_count)s %(span_sr_open)s\u8bc4\u8bba (%(unread_comments_count)s \u672a\u8bfb\u8bc4\u8bba)%(span_close)s", 
    "%(download_link_start)sDownload this image (right-click or option-click, save as)%(link_end)s and then %(upload_link_start)supload%(link_end)s it to your backpack.</li>": "%(download_link_start)s\u4e0b\u8f7d\u6b64\u56fe\u50cf\uff08\u53f3\u51fb\u6216\u5355\u51fb\u9009\u9879\uff0c\u53e6\u5b58\u4e3a\uff09%(link_end)s\uff0c\u968f\u540e%(upload_link_start)s\u4e0a\u4f20%(link_end)s\u81f3\u4f60\u7684 backpack \u4e2d\u3002</li>", 
    "%(earned)s/%(possible)s point (graded)": [
      "%(earned)s/%(possible)s\u5206\uff08\u5206\u7ea7\uff09"
    ], 
    "%(earned)s/%(possible)s point (ungraded)": [
      "%(earned)s/%(possible)s\u5206\uff08\u8bc4\u5206\uff09"
    ], 
    "%(errorCount)s error found in form.": [
      "\u8868\u683c\u4e2d\u53d1\u73b0 %(errorCount)s \u4e2a\u9519\u8bef\u3002"
    ], 
    "%(field)s can only contain up to %(count)d characters.": "%(field)s \u6700\u591a\u53ea\u80fd\u6709 %(count)d \u4e2a\u5b57\u7b26\u3002", 
    "%(field)s must have at least %(count)d characters.": "%(field)s \u81f3\u5c11\u8981\u6709 %(count)d \u5b57\u7b26\u3002", 
    "%(memberCount)s / %(maxMemberCount)s Member": [
      "%(memberCount)s / %(maxMemberCount)s \u4e2a\u6210\u5458"
    ], 
    "%(num_points)s point possible (graded)": [
      "%(num_points)s\u53ef\u80fd\u7684\u5206 (\u5206\u7ea7)"
    ], 
    "%(num_points)s point possible (graded, results hidden)": [
      "%(num_points)s\u53ef\u80fd\u7684\u5206 (\u5206\u7ea7, \u7ed3\u679c\u9690\u85cf)"
    ], 
    "%(num_points)s point possible (ungraded)": [
      "%(num_points)s\u53ef\u80fd\u7684\u5206 (\u8bc4\u5206)"
    ], 
    "%(num_points)s point possible (ungraded, results hidden)": [
      "%(num_points)s\u53ef\u80fd\u7684\u5206 (\u8bc4\u5206, \u7ed3\u679c\u9690\u85cf)"
    ], 
    "%(num_questions)s question": [
      "%(num_questions)s \u4e2a\u95ee\u9898"
    ], 
    "%(num_students)s student": [
      "%(num_students)s \u4e2a\u5b66\u751f"
    ], 
    "%(num_students)s student opened Subsection": [
      "%(num_students)s \u4e2a\u5b66\u751f\u5df2\u6253\u5f00\u5206\u9879"
    ], 
    "%(programName)s Home Page.": "%(programName)s\u4e3b\u9875", 
    "%(team_count)s Team": [
      "%(team_count)s \u4e2a\u56e2\u961f"
    ], 
    "%(value)s hour": [
      "%(value)s \u5c0f\u65f6"
    ], 
    "%(value)s minute": [
      "%(value)s \u5206\u949f"
    ], 
    "%(value)s second": [
      "%(value)s \u79d2\u949f"
    ], 
    "%d day": [
      "%d \u5929"
    ], 
    "%d minute": [
      "%d \u5206\u949f"
    ], 
    "%d month": [
      "%d \u4e2a\u6708"
    ], 
    "%d year": [
      "%d \u5e74"
    ], 
    "%s ago": "%s \u4ee5\u524d", 
    "%s from now": "\u8ddd\u73b0\u5728:%s", 
    "(Caption will be displayed when you start playing the video.)": "(\u5f53\u89c6\u9891\u5f00\u59cb\u64ad\u653e\u65f6\u5c06\u663e\u793a\u5b57\u5e55)", 
    "<%= user %> already in exception list.": "<%= user %> \u5df2\u5728\u7279\u4f8b\u540d\u5355\u4e2d\u3002", 
    "<%= user %> has been successfully added to the exception list. Click Generate Exception Certificate below to send the certificate.": "\u5df2\u7ecf\u6210\u529f\u65b0\u589e<%= user %>\u5230\u7279\u4f8b\u540d\u5355\u4e2d\u3002\u8bf7\u70b9\u51fb\u4e0b\u9762\u7684\u4ea7\u751f\u7279\u4f8b\u8bc1\u4e66\u5e76\u53d1\u9001\u8bc1\u4e66\u3002", 
    "A name that identifies your team (maximum 255 characters).": "\u56e2\u961f\u540d\u79f0 (\u4e0d\u957f\u4e8e255\u4e2a\u5b57\u7b26)", 
    "A short description of the team to help other learners understand the goals or direction of the team (maximum 300 characters).": "\u7b80\u77ed\u7684\u56e2\u961f\u63cf\u8ff0\uff0c\u4ee5\u5e2e\u52a9\u5176\u4ed6\u5b66\u4e60\u8005\u4e86\u89e3\u6b64\u56e2\u961f\u7684\u76ee\u6807\u4e0e\u65b9\u5411 (\u6700\u5927\u4e3a300\u4e2a\u5b57\u7b26\u957f\u5ea6)", 
    "A valid email address is required": "\u9700\u8981\u4e00\u4e2a\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740", 
<<<<<<< HEAD
    "About Me": "\u4e2a\u4eba\u8d44\u6599", 
    "About me": "\u4e2a\u4eba\u7b80\u4ecb", 
    "Accomplishments": "\u6210\u7ee9", 
    "Accomplishments Pagination": "\u6210\u7ee9\u5206\u9875", 
=======
    "About You": "\u5173\u4e8e\u60a8", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Account Information": "\u5e10\u6237\u4fe1\u606f", 
    "Account Settings": "\u8d26\u6237\u8bbe\u7f6e", 
<<<<<<< HEAD
    "Account Settings page.": "\u8d26\u6237\u8bbe\u7f6e\u9875\u9762\u3002", 
=======
    "Action": "\u64cd\u4f5c", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Actions": "\u64cd\u4f5c", 
    "Activating a link in this group will skip to the corresponding point in the video.": "\u6fc0\u6d3b\u672c\u7ec4\u4e2d\u7684\u94fe\u63a5\u5c06\u8df3\u8f6c\u81f3\u89c6\u9891\u4e2d\u76f8\u5e94\u7684\u5730\u65b9\u3002", 
    "Add Cohort": "\u6dfb\u52a0\u7fa4\u7ec4", 
<<<<<<< HEAD
    "Add Country": "\u6dfb\u52a0\u56fd\u5bb6", 
    "Add a Post": "\u6dfb\u52a0\u4e00\u4e2a\u8ba8\u8bba\u5e16", 
    "Add a Response": "\u6dfb\u52a0\u56de\u590d", 
    "Add a comment": "\u6dfb\u52a0\u8bc4\u8bba", 
    "Add a response:": "\u6dfb\u52a0\u4e00\u6761\u56de\u590d\uff1a", 
    "Add a user to the whitelist for a course": "\u5c06\u7528\u6237\u6dfb\u52a0\u5230\u8bfe\u7a0b\u7684\u4f18\u826f\u540d\u5355\u4e2d", 
    "Add language": "\u6dfb\u52a0\u8bed\u8a00", 
    "Add to Dictionary": "\u52a0\u5165\u5230\u5b57\u5178", 
=======
    "Add a New Cohort": "\u6dfb\u52a0\u65b0\u7fa4\u7ec4", 
    "Add a Response": "\u6dfb\u52a0\u56de\u590d", 
    "Add a comment": "\u6dfb\u52a0\u8bc4\u8bba", 
    "Add a response:": "\u6dfb\u52a0\u4e00\u6761\u56de\u590d\uff1a", 
    "Add notes about this learner": "\u6dfb\u52a0\u5173\u4e8e\u6b64\u5b66\u5458\u7684\u5907\u6ce8", 
    "Add to Exception List": "\u6dfb\u52a0\u5230\u7279\u6b8a\u5904\u7406\u5217\u8868", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Adding": "\u6b63\u5728\u6dfb\u52a0", 
    "Adding the selected course to your cart": "\u6b63\u5728\u5c06\u60a8\u6240\u9009\u7684\u8bfe\u7a0b\u6dfb\u52a0\u5230\u60a8\u7684\u8d2d\u7269\u8f66", 
    "Additional Information": "\u5176\u4ed6\u4fe1\u606f", 
    "Additional posts could not be loaded. Refresh the page and try again.": "\u65e0\u6cd5\u52a0\u8f7d\u5176\u4ed6\u804c\u4f4d\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "Additional responses could not be loaded. Refresh the page and try again.": "\u65e0\u6cd5\u52a0\u8f7d\u5176\u4ed6\u54cd\u5e94\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "Adjust video speed": "\u8c03\u6574\u89c6\u9891\u64ad\u653e\u901f\u5ea6", 
    "Adjust video volume": "\u8c03\u6574\u89c6\u9891\u97f3\u91cf", 
    "Admin": "\u7ba1\u7406\u5458", 
    "All Groups": "\u6240\u6709\u5206\u7ec4", 
    "All Posts": "\u5168\u90e8\u5e16\u5b50", 
    "All Rights Reserved": "\u4fdd\u7559\u6240\u6709\u6743\u5229", 
    "All Time Zones": "\u5168\u90e8\u65f6\u533a", 
    "All Topics": "\u6240\u6709\u4e3b\u9898", 
    "All accounts were created successfully.": "\u6240\u6709\u8d26\u6237\u521b\u5efa\u6210\u529f\u3002", 
    "All flags have been removed. To undo, uncheck the box.": "\u6240\u6709\u6807\u8bb0\u5df2\u79fb\u9664\u3002\u53d6\u6d88\u9009\u4e2d\u6b64\u9009\u6846\u4ee5\u64a4\u9500\u3002", 
    "All groups must have a name.": "\u6240\u6709\u7ec4\u90fd\u5fc5\u987b\u6709\u540d\u79f0\u3002", 
    "All groups must have a unique name.": "\u6240\u6709\u7684\u7ec4\u7684\u540d\u5b57\u5fc5\u987b\u662f\u552f\u4e00\u7684\u3002", 
    "All learners in the {cohort_name} cohort": "{cohort_name} \u961f\u5217\u4e2d\u7684\u6240\u6709\u5b66\u4e60\u8005", 
    "All learners who are enrolled in this course": "\u6240\u6709\u5728\u672c\u8bfe\u7a0b\u4e2d\u6ce8\u518c\u7684\u5b66\u4e60\u8005", 
    "All payment options are currently unavailable.": "\u6240\u6709\u7684\u4ed8\u6b3e\u65b9\u5f0f\u76ee\u524d\u4e0d\u53ef\u7528\u3002", 
    "All subsections": "\u6240\u6709\u8282", 
    "All teams": "\u6240\u6709\u7fa4\u7ec4", 
    "All topics": "\u6240\u6709\u4e3b\u9898", 
    "All units": "\u6240\u6709\u5355\u5143", 
    "Allow students to generate certificates for this course?": "\u662f\u5426\u5141\u8bb8\u5b66\u751f\u751f\u6210\u8be5\u8bfe\u7a0b\u8bc1\u4e66\uff1f", 
    "Already a course team member": "\u5df2\u7ecf\u662f\u8bfe\u7a0b\u56e2\u961f\u6210\u5458", 
    "Already a library team member": "\u5df2\u7ecf\u662f\u77e5\u8bc6\u5e93\u56e2\u961f\u6210\u5458", 
    "Already a member": "\u5df2\u7ecf\u662f\u6210\u5458\u4e86", 
<<<<<<< HEAD
    "Alternative source": "\u5907\u7528\u6e90", 
    "Amount": "\u91cf", 
=======
    "Amount": "\u91d1\u989d", 
    "An email has been sent to {userEmail} with a link for you to activate your account.": "\u4e00\u5c01\u5e26\u6709\u6fc0\u6d3b\u5e10\u53f7\u94fe\u63a5\u7684\u90ae\u4ef6\u5df2\u53d1\u9001\u81f3{userEmail}\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "An error has occurred. Check your Internet connection and try again.": "\u9519\u8bef\u53d1\u751f\u3002\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\u60c5\u51b5\uff0c\u5e76\u4e14\u91cd\u8bd5\u4e00\u6b21\u3002", 
    "An error has occurred. Make sure that you are connected to the Internet, and then try refreshing the page.": "\u51fa\u73b0\u4e86\u4e00\u4e2a\u9519\u8bef\u3002\u8bf7\u786e\u4fdd\u60a8\u5df2\u8054\u7f51\uff0c\u7136\u540e\u5237\u65b0\u9875\u9762\u3002", 
    "An error has occurred. Please try again later.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002", 
    "An error has occurred. Please try again.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u672a\u77e5\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "An error has occurred. Please try reloading the page.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u9519\u8bef\u3002\u8bf7\u91cd\u65b0\u52a0\u8f7d\u8fd9\u4e2a\u9875\u9762\u3002", 
    "An error has occurred. Refresh the page, and then try again.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u540e\u91cd\u8bd5\u3002", 
    "An error has occurred. Try refreshing the page, or check your Internet connection.": "\u53d1\u751f\u9519\u8bef\u3002\u8bf7\u5c1d\u8bd5\u5237\u65b0\u9875\u9762\uff0c\u6216\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\u60c5\u51b5\u3002", 
    "An error occurred retrieving your email. Please try again later, and contact technical support if the problem persists.": "\u83b7\u53d6\u90ae\u4ef6\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002\u5982\u95ee\u9898\u6301\u7eed\u53d1\u751f\uff0c\u8bf7\u54a8\u8be2\u6280\u672f\u652f\u6301\u3002", 
    "An error occurred when signing you in to %s.": "\u5c06\u60a8\u7b7e\u5165%s \u65f6\u51fa\u9519\u3002", 
    "An error occurred while removing the member from the team. Try again.": "\u79fb\u9664\u6210\u5458\u65f6\u53d1\u751f\u9519\u8bef\u3002\u8bf7\u91cd\u8bd5\u4e00\u6b21\u3002", 
    "An error occurred.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u9519\u8bef\u3002", 
    "An error occurred. Make sure that the student's username or email address is correct and try again.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u8bf7\u786e\u8ba4\u5b66\u751f\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u6b63\u786e\u5e76\u518d\u6b21\u5c1d\u8bd5\u3002", 
    "An error occurred. Please reload the page.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u9519\u8bef\uff0c\u8bf7\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u3002", 
    "An error occurred. Please try again.": "\u53d1\u751f\u4e86\u4e00\u4e2a\u672a\u77e5\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "An error occurred. Try again.": "\u53d1\u751f\u9519\u8bef\u3002 \u518d\u8bd5\u4e00\u6b21\u3002", 
    "An unexpected error occurred.  Please try again.": "\u610f\u5916\u9519\u8bef\u53d1\u751f\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "Annotation": "\u6279\u6ce8", 
    "Annotation Text": "\u6279\u6ce8\u6587\u672c", 
    "Are you sure you want to delete the file ": "\u662f\u5426\u786e\u5b9e\u8981\u5220\u9664\u8be5\u6587\u4ef6", 
    "Are you sure you want to delete this comment?": "\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u6761\u8bc4\u8bba\u5417\uff1f", 
    "Are you sure you want to delete this page? This action cannot be undone.": "\u60a8\u786e\u8ba4\u8981\u5220\u9664\u8be5\u9875\u9762\u5417\uff1f\u8be5\u64cd\u4f5c\u65e0\u6cd5\u64a4\u9500\u3002", 
    "Are you sure you want to delete this post?": "\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u5e16\u5b50\uff1f", 
    "Are you sure you want to delete this response?": "\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u56de\u590d\u5417", 
    "Are you sure you want to delete this update?": "\u60a8\u786e\u5b9a\u8981\u5220\u9664\u6b64\u66f4\u65b0\u5417\uff1f", 
    "Are you sure you want to delete {email} from the course team for \u201c{container}\u201d?": "\u60a8\u786e\u5b9a\u8981\u4ece\u201c{container}\u201d\u7684\u8bfe\u7a0b\u56e2\u961f\u4e2d\u5220\u9664{email}\uff1f", 
    "Are you sure you want to delete {email} from the library \u201c{container}\u201d?": "\u60a8\u786e\u5b9a\u8981\u4ece\u77e5\u8bc6\u5e93\u201c{container}\u201d\u4e2d\u5220\u9664{email}\uff1f", 
    "Are you sure you want to restrict {email} access to \u201c{container}\u201d?": "\u60a8\u786e\u5b9a\u8981\u9650\u5236{email}\u5bf9\u201c{container}\u201d\u7684\u8bbf\u95ee\uff1f", 
    "Are you sure you want to revert to the last published version of the unit? You cannot undo this action.": "\u60a8\u786e\u5b9a\u8981\u6062\u590d\u5230\u8be5\u5355\u5143\u7684\u4e0a\u6b21\u53d1\u5e03\u7248\u672c\uff1f\u60a8\u65e0\u6cd5\u64a4\u6d88\u6b64\u64cd\u4f5c\u3002", 
    "Are you sure you wish to delete this item. It cannot be reversed!\n\nAlso any content that links/refers to this item will no longer work (e.g. broken images and/or links)": "\u5220\u9664\u7684\u9879\u76ee\u4e0d\u80fd\u6062\u590d\uff01\u60a8\u786e\u5b9a\u8981\u5220\u9664\u8fd9\u4e2a\u9879\u76ee\u5417?\n\n\n\u4e0e\u8fd9\u4e2a\u9879\u76ee\u76f8\u5173\u7684\u4e00\u5207\u4fe1\u606f\uff08\u5982\u76f8\u5e94\u7684\u56fe\u7247\u548c\u94fe\u63a5\uff09\u90fd\u4f1a\u4e22\u5931\u3002", 
<<<<<<< HEAD
    "Are you sure?": "\u60a8\u786e\u5b9a\u5417\uff1f", 
    "Assign students to cohorts by uploading a CSV file.": "\u4e0a\u4f20\u4e00\u4e2a CSV \u6587\u4ef6\u4ee5\u5c06\u5b66\u751f\u5206\u914d\u5230\u7fa4\u7ec4\u4e2d\u3002", 
    "Attribution": "\u5c5e\u6027", 
    "Author": "\u4f5c\u8005", 
=======
    "As part of the verification process, you take a photo of both your face and a government-issued photo ID. Our authorization service confirms your identity by comparing the photo you take with the photo on your ID.": "\u4f5c\u4e3a\u8ba4\u8bc1\u8fc7\u7a0b\u4e2d\u4e00\u90e8\u5206\uff0c\u60a8\u9700\u8981\u62cd\u6444\u4e24\u5f20\u7167\u7247\uff1a\u60a8\u7684\u9762\u90e8\u4ee5\u53ca\u60a8\u7684\u8eab\u4efd\u8bc1\u4ef6\uff08\u8be5\u8bc1\u4ef6\u987b\u7531\u653f\u5e9c\u7b7e\u53d1\u4e14\u6709\u60a8\u7684\u7167\u7247\uff09\u3002\u6211\u4eec\u7684\u6388\u6743\u670d\u52a1\u90e8\u5c06\u901a\u8fc7\u5bf9\u6bd4\u60a8\u7684\u9762\u90e8\u7167\u7247\u548c\u60a8\u7684\u8bc1\u4ef6\u4e0a\u7684\u7167\u7247\u6765\u786e\u8ba4\u60a8\u7684\u8eab\u4efd\u3002", 
    "Assign students to cohorts by uploading a CSV file.": "\u4e0a\u4f20\u4e00\u4e2a CSV \u6587\u4ef6\u4ee5\u5c06\u5b66\u751f\u5206\u914d\u5230\u7fa4\u7ec4\u4e2d\u3002", 
    "Associated Content Group": "\u5df2\u52a0\u5165\u7684\u5185\u5bb9\u7ec4", 
    "Automatic": "\u81ea\u52a8", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Average": "\u5e73\u5747", 
    "Back to sign in": "\u8fd4\u56de\u767b\u5f55", 
<<<<<<< HEAD
    "Background color": "\u80cc\u666f\u8272", 
    "Basic": "\u57fa\u672c", 
=======
    "Back to {platform} FAQs": "\u8fd4\u56de\u81f3 {platform} \u5e38\u89c1\u95ee\u9898\u89e3\u7b54", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Basic Account Information": "\u57fa\u672c\u8d26\u6237\u4fe1\u606f", 
    "Below is a list of accounts you have linked to your {platform_name} account.": "\u4e0b\u9762\u662f\u60a8\u94fe\u63a5\u5230 {platform_name} \u5e10\u6237\u7684\u5e10\u6237\u5217\u8868\u3002", 
    "Blockquote": "\u5f15\u7528", 
    "Blockquote (Ctrl+Q)": "\u5f15\u7528(Ctrl+Q)", 
    "Bold (Ctrl+B)": "\u7c97\u4f53(Ctrl+B)", 
    "Bookmark this page": "\u6536\u85cf\u672c\u9875", 
    "Bookmarked": "\u5df2\u6536\u85cf", 
    "Bookmarked on": "\u6807\u8bb0\u4e66\u7b7e", 
    "Browse": "\u6d4f\u89c8", 
    "Browse recently launched courses and see what\\'s new in your favorite subjects": "\u6d4f\u89c8\u6700\u65b0\u4e0a\u7ebf\u7684\u8bfe\u7a0b\u5e76\u67e5\u770b\u60a8\u6700\u559c\u7231\u79d1\u76ee\u7684\u66f4\u65b0\u60c5\u51b5", 
<<<<<<< HEAD
    "Bullet list": "\u9879\u76ee\u7b26\u53f7\u5217\u8868", 
=======
    "Bulk Exceptions": "\u6279\u91cf\u7279\u6b8a\u5904\u7406", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Bulleted List (Ctrl+U)": "\u7b26\u53f7\u5217\u8868(Ctrl+U)", 
    "Cancel": "\u53d6\u6d88", 
    "Cancel enrollment code": "\u53d6\u6d88\u9009\u8bfe\u7801", 
<<<<<<< HEAD
    "Caption": "\u6807\u9898", 
    "Cell": "\u5355\u5143\u683c", 
    "Cell padding": "\u5355\u5143\u683c\u8fb9\u8ddd", 
    "Cell properties": "\u5355\u5143\u683c\u5c5e\u6027", 
    "Cell spacing": "\u5355\u5143\u683c\u95f4\u8ddd", 
    "Cell type": "\u5355\u5143\u683c\u7c7b\u578b", 
    "Center": "\u5c45\u4e2d\u5bf9\u9f50", 
=======
    "Cancel team creating.": "\u53d6\u6d88\u521b\u5efa\u56e2\u961f\u3002", 
    "Cancel team updating.": "\u53d6\u6d88\u56e2\u961f\u66f4\u65b0\u3002", 
    "Certificate Generated": "\u8bc1\u4e66\u5df2\u751f\u6210", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Certificate has been successfully invalidated for <%= user %>.": " <%= user %> \u7684\u8bc1\u4e66\u5df2\u6210\u529f\u5730\u8f6c\u4e3a\u5931\u6548", 
    "Certificate of <%= user %> has already been invalidated. Please check your spelling and retry.": " <%= user %> \u7684\u8bc1\u4e66\u5df2\u7ecf\u65e0\u6548\u3002\u8bf7\u786e\u8ba4\u60a8\u7684\u62fc\u5199\u5e76\u518d\u8bd5\u4e00\u6b21\u3002", 
    "Change Manually": "\u624b\u52a8\u66f4\u6539", 
    "Change My Email Address": "\u66f4\u6539\u6211\u7684\u7535\u5b50\u90ae\u4ef6", 
    "Change image": "\u4fee\u6539\u56fe\u7247", 
    "Changes to steps that are not selected as part of the assignment will not be saved.": "\u672a\u4f5c\u4e3a\u4f5c\u4e1a\u90e8\u5206\u7684\u6b65\u9aa4\u53d8\u66f4\u5c06\u4e0d\u4f1a\u88ab\u4fdd\u5b58\u3002", 
    "Check Your Email": "\u68c0\u67e5\u4f60\u7684\u7535\u5b50\u90ae\u4ef6", 
    "Check the box to remove %(count)s flag.": [
      "\u9009\u4e2d\u6b64\u9009\u6846\u4ee5\u79fb\u9664 %(count)s \u4e2a\u6807\u8bb0\u3002"
    ], 
    "Check the box to remove %(totalFlags)s flag.": [
      "\u9009\u4e2d\u6b64\u9009\u6846\u4ee5\u79fb\u9664\u6240\u6709 %(totalFlags)s \u4e2a\u6807\u8bb0\u3002"
    ], 
    "Check the box to remove all flags.": "\u9009\u4e2d\u6b64\u9009\u6846\u4ee5\u79fb\u9664\u6240\u6709\u6807\u8bb0", 
    "Check the highlighted fields below and try again.": "\u8bf7\u786e\u8ba4\u4e0b\u65b9\u63d0\u9192\u7684\u5b57\u6bb5\u5e76\u91cd\u65b0\u8f93\u5165\u3002", 
    "Check this box to receive an email digest once a day notifying you about new, unread activity from posts you are following.": "\u52fe\u9009\u6b64\u9879\uff0c\u6bcf\u5929\u63a5\u6536\u4e00\u5c01\u90ae\u4ef6\uff0c\u901a\u77e5\u60a8\u6240\u5173\u6ce8\u7684\u8ba8\u8bba\u5e16\u7684\u6700\u65b0\u672a\u8bfb\u60c5\u51b5\u3002", 
    "Checkout": "\u4ed8\u6b3e", 
    "Checkout with PayPal": "\u4f7f\u7528PayPal\u4ed8\u6b3e", 
    "Checkout with {processor}": "\u4f7f\u7528{processor}\u4ed8\u6b3e", 
    "Choose File": "\u9009\u62e9\u6587\u4ef6", 
    "Choose a .csv file": "\u9009\u62e9\u4e00\u4e2a.csv\u7684\u6587\u4ef6", 
    "Choose one": "\u8bf7\u9009\u62e9", 
    "Choose your institution from the list below:": "\u4ece\u4ee5\u4e0b\u5217\u8868\u4e2d\u9009\u62e9\u4f60\u7684\u673a\u6784\uff1a", 
    "Clear": "\u6e05\u9664", 
    "Clear All": "\u6e05\u9664\u6240\u6709", 
    "Clear search": "\u6e05\u7a7a\u641c\u7d22\u7ed3\u679c", 
    "Clear search results": "\u6e05\u7a7a\u641c\u7d22\u7ed3\u679c", 
    "Click OK to have your e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "\u5355\u51fb\u786e\u5b9a\uff0c\u5c06\u4f60\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u7ed9\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002\n\n\u5355\u51fb\u53d6\u6d88\uff0c\u53d6\u6d88\u53d1\u9001\u4fe1\u606f\u5e76\u8fd4\u56de\u672c\u9875\u3002", 
    "Click OK to have your username and e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "\u5355\u51fb\u786e\u5b9a\uff0c\u5c06\u60a8\u7684\u7528\u6237\u540d\u548c\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u7ed9\u7b2c\u4e09\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002\n\n\u5355\u51fb\u53d6\u6d88\uff0c\u53d6\u6d88\u53d1\u9001\u4fe1\u606f\u5e76\u8fd4\u56de\u672c\u9875\u3002", 
    "Click OK to have your username sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "\u5355\u51fb\u786e\u5b9a\uff0c\u5c06\u60a8\u7684\u7528\u6237\u540d\u53d1\u9001\u7ed9\u7b2c3\u65b9\u5e94\u7528\u7a0b\u5e8f\u3002\n\n\u5355\u51fb\u53d6\u6d88\uff0c\u53d6\u6d88\u53d1\u9001\u4fe1\u606f\u5e76\u8fd4\u56de\u672c\u9875\u3002", 
    "Click on this button to mute or unmute this video or press UP or DOWN buttons to increase or decrease volume level.": "\u8bf7\u70b9\u51fb\u6b64\u6309\u94ae\u4ee5\u5bf9\u8be5\u89c6\u9891\u9759\u97f3\uff0f\u53d6\u6d88\u9759\u97f3, \u6216\u8005\u4f7f\u7528\u952e\u76d8\u7684\u4e0a\u4e0b\u65b9\u5411\u952e\u589e\u5927\u6216\u51cf\u5c0f\u97f3\u91cf\u3002", 
    "Click to change": "\u70b9\u51fb\u66f4\u6539", 
    "Click to edit": "\u70b9\u51fb\u4ee5\u7f16\u8f91", 
    "Close": "\u5173\u95ed", 
    "Closed": "\u5df2\u5173\u95ed", 
    "Code": "\u4ee3\u7801", 
    "Code Sample (Ctrl+K)": "\u4ee3\u7801\u793a\u4f8b(Ctrl+K)", 
<<<<<<< HEAD
    "Code block": "\u4ee3\u7801\u5757", 
    "Cohorts": "\u7fa4\u7ec4", 
    "Cohorts Disabled": "\u7fa4\u7ec4\u5df2\u7981\u7528", 
    "Cohorts Enabled": "\u7fa4\u7ec4\u5df2\u542f\u7528", 
    "Collapse Instructions": "\u6298\u53e0\u8bf4\u660e", 
    "Color": "\u989c\u8272", 
    "Cols": "\u5217", 
    "Column": "\u5217", 
    "Column group": "\u5217\u7ec4", 
    "Coming Soon": "\u5373\u5c06\u4e0a\u7ebf", 
    "Commentary": "\u8bc4\u6ce8", 
    "Community TA": "\u793e\u533a\u52a9\u6559", 
    "Component": "\u7ec4\u4ef6", 
    "Confirm": "\u786e\u8ba4", 
    "Constrain proportions": "\u4fdd\u6301\u7eb5\u6a2a\u6bd4", 
    "Copy": "\u590d\u5236", 
=======
    "Cohort Assignment Method": "\u5206\u914d\u7fa4\u7ec4\u7684\u65b9\u6cd5", 
    "Cohort Name": "\u7fa4\u7ec4\u540d", 
    "Cohorts Disabled": "\u7fa4\u7ec4\u5df2\u7981\u7528", 
    "Cohorts Enabled": "\u7fa4\u7ec4\u5df2\u542f\u7528", 
    "Collapse All": "\u6298\u53e0\u5168\u90e8", 
    "Community TA": "\u793e\u533a\u52a9\u6559", 
    "Component": "\u7ec4\u4ef6", 
    "Confirm": "\u786e\u8ba4", 
    "Congratulations! You are now verified on %(platformName)s!": "\u606d\u559c\uff01\u60a8\u5728%(platformName)s\u4e0a\u8ba4\u8bc1\u6210\u529f\uff01", 
    "Content-Specific Discussion Topics": "\u7279\u5b9a\u5185\u5bb9\u7684\u8ba8\u8bba\u8bdd\u9898", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Copy Email To Editor": "\u590d\u5236\u90ae\u4ef6\u81f3\u7f16\u8f91\u5668", 
    "Correct failed component": "\u7ea0\u6b63\u5931\u8d25\u7684\u7ec4\u4ef6", 
    "Could not find Certificate Exception in white list. Please refresh the page and try again": "\u5728\u8bb8\u53ef\u540d\u5355\u4e2d\u627e\u4e0d\u5230\u8bc1\u4e66\u7279\u4f8b\u7684\u4eba\u3002\u8bf7\u91cd\u65b0\u8f7d\u5165\u9875\u9762\u6216\u518d\u8bd5\u4e00\u6b21\u3002", 
    "Could not find Certificate Invalidation in the list. Please refresh the page and try again": "\u65e0\u6cd5\u5728\u8fd9\u4efd\u5217\u8868\u4e2d\u627e\u5230\u8bc1\u4e66\u5931\u6548\u8bc1\u660e\u3002\u8bf7\u91cd\u65b0\u8f7d\u5165\u9875\u9762\u6216\u518d\u8bd5\u4e00\u6b21\u3002", 
<<<<<<< HEAD
    "Could not find a user with username or email address '<%- identifier %>'.": "\u627e\u4e0d\u5230\u5177\u6709\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6\u5730\u5740 \"<%-identifier%>\" \u7684\u7528\u6237\u3002", 
    "Could not find the specified string.": "\u65e0\u6cd5\u627e\u5230\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u3002", 
    "Could not find users associated with the following identifiers:": "\u672a\u80fd\u627e\u5230\u4e0e\u4ee5\u4e0b\u8bc6\u522b\u7801\u5173\u8054\u7684\u7528\u6237\uff1a", 
    "Could not grade your answer. The submission was aborted.": "\u65e0\u6cd5\u8bc4\u5206\u4f60\u7684\u7b54\u6848\u3002\u63d0\u4ea4\u5df2\u4e2d\u6b62\u3002", 
=======
    "Could not find users associated with the following identifiers:": "\u672a\u80fd\u627e\u5230\u4e0e\u4ee5\u4e0b\u8bc6\u522b\u7801\u5173\u8054\u7684\u7528\u6237\uff1a", 
    "Could not retrieve download url.": "\u4e0d\u80fd\u8bfb\u53d6\u4e0b\u8f7d\u94fe\u63a5\u5730\u5740", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Could not retrieve payment information": "\u65e0\u6cd5\u8bfb\u53d6\u652f\u4ed8\u4fe1\u606f", 
    "Could not retrieve upload url.": "\u4e0d\u80fd\u8bfb\u53d6\u4e0a\u4f20\u94fe\u63a5\u5730\u5740", 
    "Could not submit order": "\u8ba2\u5355\u63d0\u4ea4\u5931\u8d25", 
    "Could not submit photos": "\u7167\u7247\u63d0\u4ea4\u5931\u8d25", 
    "Couldn't Save This Assignment": "\u4fdd\u5b58\u4f5c\u4e1a\u5931\u8d25", 
    "Country": "\u56fd\u5bb6\uff0f\u5730\u533a", 
<<<<<<< HEAD
    "Country or Region": "\u56fd\u5bb6\u6216\u5730\u533a", 
=======
    "Country of residence": "\u5c45\u4f4f\u56fd\u5bb6", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Course End": "\u8bfe\u7a0b\u7ed3\u675f", 
    "Course Handouts": "\u8bfe\u7a0b\u8bb2\u4e49", 
    "Course ID": "\u8bfe\u7a0b\u7f16\u53f7", 
    "Course Index": "\u8bfe\u7a0b\u7d22\u5f15", 
    "Course Number": "\u8bfe\u7a0b\u4ee3\u7801", 
    "Course is not yet visible to students.": "\u8be5\u8bfe\u7a0b\u5c1a\u672a\u5bf9\u5b66\u751f\u516c\u5f00", 
    "Create": "\u521b\u5efa", 
    "Create Re-run": "\u521b\u5efa\u91cd\u542f", 
    "Create a %(link_start)sMozilla Backpack%(link_end)s account, or log in to your existing account": "\u521b\u5efa\u4e00\u4e2a %(link_start)sMozilla Backpack%(link_end)s \u5e10\u6237\uff0c\u6216\u767b\u5f55\u60a8\u5df2\u6709\u7684\u5e10\u6237", 
    "Create a New Team": "\u521b\u5efa\u65b0\u7684\u56e2\u961f", 
<<<<<<< HEAD
    "Create a new team if you can't find an existing team to join, or if you would like to learn with friends you know.": "\u5efa\u7acb\u4e00\u4e2a\u65b0\u7684\u56e2\u961f-- \u5982\u679c\u4f60\u627e\u4e0d\u5230\u73b0\u6709\u7684\u56e2\u961f\u52a0\u5165\uff0c\u6216\u8005\u4f60\u60f3\u548c\u4f60\u8ba4\u8bc6\u7684\u670b\u53cb\u7ec4\u961f\u3002", 
    "Create account using %(providerName)s.": "\u4f7f\u7528 %(providerName)s \u521b\u5efa\u5e10\u6237\u3002", 
    "Create an account using": "\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u521b\u5efa\u8d26\u6237", 
    "Creating missing groups": "\u6b63\u5728\u521b\u5efa\u7f3a\u5931\u7684\u7ec4\u3002", 
    "Creative Commons licensed content, with terms as follow:": "\u77e5\u8bc6\u5171\u4eab\u8bb8\u53ef\u5185\u5bb9\uff0c\u6761\u6b3e\u5982\u4e0b\uff1a", 
=======
    "Create a content group": "\u521b\u5efa\u4e00\u4e2a\u5185\u5bb9\u7ec4", 
    "Create a new team if you can't find an existing team to join, or if you would like to learn with friends you know.": "\u5efa\u7acb\u4e00\u4e2a\u65b0\u7684\u56e2\u961f-- \u5982\u679c\u4f60\u627e\u4e0d\u5230\u73b0\u6709\u7684\u56e2\u961f\u52a0\u5165\uff0c\u6216\u8005\u4f60\u60f3\u548c\u4f60\u8ba4\u8bc6\u7684\u670b\u53cb\u7ec4\u961f\u3002", 
    "Create account using %(providerName)s.": "\u4f7f\u7528 %(providerName)s \u521b\u5efa\u5e10\u6237\u3002", 
    "Create an account using": "\u4f7f\u7528\u4ee5\u4e0b\u65b9\u5f0f\u521b\u5efa\u8d26\u6237", 
    "Create team.": "\u521b\u5efa\u56e2\u961f\u3002", 
    "Creating missing groups": "\u6b63\u5728\u521b\u5efa\u7f3a\u5931\u7684\u7ec4\u3002", 
    "Criterion Added": "\u6807\u51c6\u5df2\u6dfb\u52a0", 
    "Criterion Deleted": "\u89c4\u8303\u5df2\u5220\u9664", 
    "Crossed out items have been refunded.": "\u5212\u6389\u7684\u9879\u76ee\u5df2\u9000\u6b3e\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Current conversation": "\u5f53\u524d\u5bf9\u8bdd", 
    "Current tab": "\u5f53\u524d\u6807\u7b7e", 
<<<<<<< HEAD
    "Custom color": "\u81ea\u5b9a\u4e49\u989c\u8272", 
    "Custom...": "\u81ea\u5b9a\u4e49\u2026", 
    "Cut": "\u526a\u5207", 
    "Cut row": "\u526a\u5207\u884c", 
    "Date Added": "\u6dfb\u52a0\u65e5\u671f", 
    "Date added": "\u6dfb\u52a0\u65e5\u671f", 
    "Date posted": "\u53d1\u8868\u65e5\u671f", 
    "De-whitelist a user": "\u53d6\u6d88\u4f18\u826f\u540d\u5355\u7528\u6237", 
    "Decrease indent": "\u51cf\u5c11\u7f29\u8fdb", 
    "Default": "\u9ed8\u8ba4", 
    "Default (Local Time Zone)": "\u9ed8\u8ba4\u503c (\u672c\u5730\u65f6\u533a)", 
    "Default Timed Transcript": "\u9ed8\u8ba4\u5b57\u5e55", 
    "Delete": "\u5220\u9664", 
    "Delete File Confirmation": "\u5220\u9664\u6587\u4ef6\u786e\u8ba4", 
    "Delete Page Confirmation": "\u786e\u8ba4\u5220\u9664\u9875\u9762", 
    "Delete column": "\u5220\u9664\u5217", 
    "Delete row": "\u5220\u9664\u884c", 
    "Delete student '<%- student_id %>'s state on problem '<%- problem_id %>'?": "\u662f\u5426\u5220\u9664\u5b66\u751f \"<%-student_id%> \u95ee\u9898\u7684\u72b6\u6001\" <%-problem_id%>\uff1f", 
    "Delete table": "\u5220\u9664\u8868\u683c", 
    "Delete this %(item_display_name)s?": "\u8981\u5220\u9664\u8be5%(item_display_name)s\u5417\uff1f", 
    "Delete this team?": "\u5220\u9664\u6b64\u56e2\u961f?", 
    "Delete \u201c<%= name %>\u201d?": "\u5220\u9664\u201c<%= name %>\u201d\uff1f", 
    "Deleting": "\u5220\u9664\u4e2d", 
=======
    "Date": "\u65e5\u671f", 
    "Date Added": "\u6dfb\u52a0\u65e5\u671f", 
    "Date added": "\u6dfb\u52a0\u65e5\u671f", 
    "Date posted": "\u53d1\u8868\u65e5\u671f", 
    "Delete": "\u5220\u9664", 
    "Delete File Confirmation": "\u5220\u9664\u6587\u4ef6\u786e\u8ba4", 
    "Delete Page Confirmation": "\u786e\u8ba4\u5220\u9664\u9875\u9762", 
    "Delete Team": "\u5220\u9664\u56e2\u961f", 
    "Delete this %(item_display_name)s?": "\u8981\u5220\u9664\u8be5%(item_display_name)s\u5417\uff1f", 
    "Delete this team?": "\u5220\u9664\u6b64\u56e2\u961f?", 
    "Deleted Content Group": "\u5220\u9664\u5185\u5bb9\u7ec4", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Deleting a team is permanent and cannot be undone. All members are removed from the team, and team discussions can no longer be accessed.": "\u5220\u9664\u56e2\u961f\u662f\u6c38\u4e45\u6027\u7684\uff0c\u65e0\u6cd5\u633d\u56de\u3002\u6240\u6709\u6210\u5458\u4f1a\u4ece\u56e2\u961f\u79fb\u9664\uff0c\u56e2\u961f\u8ba8\u8bba\u5c06\u65e0\u6cd5\u518d\u88ab\u9020\u8bbf\u3002", 
    "Deleting this %(item_display_name)s is permanent and cannot be undone.": "\u5c06\u6c38\u4e45\u5220\u9664\u8be5%(item_display_name)s\uff0c\u65e0\u6cd5\u64a4\u9500\u3002", 
    "Description": "\u63cf\u8ff0", 
    "Discard Changes": "\u653e\u5f03\u66f4\u6539", 
    "Discarding Changes": "\u6b63\u5728\u653e\u5f03\u66f4\u6539", 
    "Discussion": "\u8ba8\u8bba", 
    "Discussion Home": "\u8ba8\u8bba\u533a", 
<<<<<<< HEAD
    "Display Name": "\u663e\u793a\u540d\u79f0", 
    "Div": "Div \u6807\u7b7e", 
    "Do not show again": "\u4e0d\u518d\u663e\u793a", 
    "Do you want to allow this student ('{student_id}') to skip the entrance exam?": "\u60a8\u662f\u5426\u5141\u8bb8\u8be5\u5b66\u751f('{student_id}')\u8df3\u8fc7\u5165\u5b66\u8003\u8bd5\uff1f", 
    "Document properties": "\u6587\u6863\u5c5e\u6027", 
=======
    "Do not show again": "\u4e0d\u518d\u663e\u793a", 
    "Do you want to allow this student ('{student_id}') to skip the entrance exam?": "\u60a8\u662f\u5426\u5141\u8bb8\u8be5\u5b66\u751f('{student_id}')\u8df3\u8fc7\u5165\u5b66\u8003\u8bd5\uff1f", 
    "Do you want to upload your file before submitting?": "\u4f60\u786e\u5b9a\u5728\u63d0\u4ea4\u4e4b\u524d\u4e0a\u4f20\u4f60\u7684\u6587\u4ef6\u5417\uff1f", 
    "Does the name on your ID match your account name: %(fullName)s?": "\u4f60\u8eab\u4efd\u8bc1\u4ef6\u4e0a\u7684\u59d3\u540d\u548c\u4f60\u5728\u8d26\u6237\u4e2d\u586b\u5199\u7684\u59d3\u540d\u201c%(fullName)s\u201d\u76f8\u7b26\u5417\uff1f", 
    "Does the photo of you match your ID photo?": "\u8fd9\u5f20\u7167\u7247\u548c\u4f60\u8eab\u4efd\u8bc1\u4ef6\u4e0a\u7684\u7167\u7247\u76f8\u5339\u914d\u5417\uff1f", 
    "Does the photo of you show your whole face?": "\u8fd9\u5f20\u7167\u7247\u4e2d\u6709\u4f60\u7684\u6574\u5f20\u8138\u5417\uff1f", 
    "Don't see your picture? Make sure to allow your browser to use your camera when it asks for permission.": "\u6ca1\u6709\u770b\u5230\u4f60\u81ea\u5df1\uff1f\u8bf7\u786e\u8ba4\u5f53\u6d4f\u89c8\u5668\u8bf7\u6c42\u4f7f\u7528\u6444\u50cf\u5934\u6743\u9650\u7684\u65f6\u5019\u4f60\u9009\u62e9\u4e86\u5141\u8bb8\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Donate": "\u6350\u732e", 
    "Double-check that your webcam is connected and working to continue.": "\u7ee7\u7eed\u524d\u8bf7\u518d\u6b21\u786e\u8ba4\u60a8\u7684\u6444\u50cf\u5934\u5df2\u7ecf\u8fde\u63a5\u5e76\u4e14\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002", 
    "Drop target image": "\u62d6\u653e\u7684\u76ee\u6807\u56fe\u50cf", 
    "Due Date": "\u622a\u6b62\u65e5\u671f", 
    "Due date cannot be before start date.": "\u8bfe\u7a0b\u7684\u7ed3\u675f\u65e5\u671f\u4e0d\u80fd\u5728\u5f00\u59cb\u65e5\u671f\u4e4b\u524d\u3002", 
    "Duplicating": "\u6b63\u5728\u590d\u5236", 
    "Duration (sec)": "\u6301\u7eed\u65f6\u95f4(\u79d2)", 
    "Earned %(created)s.": "\u5df2\u83b7\u5f97 %(created)s\u3002", 
    "Edit": "\u7f16\u8f91", 
<<<<<<< HEAD
    "Edit HTML": "\u7f16\u8f91 HTML", 
=======
    "Edit Membership": "\u7f16\u8f91\u56e2\u961f\u6210\u5458\u4fe1\u606f", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Edit Team": "\u7f16\u8f91\u56e2\u961f", 
    "Edit your post below.": "\u7f16\u8f91\u4e0b\u9762\u7684\u5e16\u5b50\u3002", 
    "Editable": "\u53ef\u7f16\u8f91", 
    "Editing comment": "\u7f16\u8f91\u8bc4\u8bba", 
    "Editing post": "\u7f16\u8f91\u8ba8\u8bba\u5e16", 
    "Editing response": "\u7f16\u8f91\u56de\u590d", 
    "Editing: %(title)s": "\u7f16\u8f91\uff1a%(title)s", 
    "Editor": "\u7f16\u8f91\u5668", 
    "Education Completed": "\u6559\u80b2\u7a0b\u5ea6", 
    "Email": "\u7535\u5b50\u90ae\u4ef6", 
<<<<<<< HEAD
    "Email Address": "\u7535\u5b50\u90ae\u4ef6\u5730\u5740", 
    "Emails successfully sent. The following users are no longer enrolled in the course:": "\u90ae\u4ef6\u53d1\u9001\u6210\u529f\uff0c\u4ee5\u4e0b\u7528\u6237\u5df2\u4e0d\u518d\u9009\u4fee\u672c\u8bfe\u7a0b\uff1a", 
    "Embed": "\u5185\u5d4c", 
    "Emoticons": "\u8868\u60c5", 
    "Encoding": "\u7f16\u7801", 
=======
    "Email address": "\u7535\u5b50\u90ae\u4ef6", 
    "Emails successfully sent. The following users are no longer enrolled in the course:": "\u90ae\u4ef6\u53d1\u9001\u6210\u529f\uff0c\u4ee5\u4e0b\u7528\u6237\u5df2\u4e0d\u518d\u9009\u4fee\u672c\u8bfe\u7a0b\uff1a", 
    "Enable Cohorts": "\u542f\u7528\u7fa4\u7ec4", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "End": "\u7ed3\u675f", 
    "End My Exam": "\u7ed3\u675f\u6211\u7684\u8003\u8bd5", 
    "End of transcript. Skip to the start.": "\u5b57\u5e55\u7ed3\u5c3e\u3002\u8df3\u8f6c\u81f3\u5f00\u59cb\u3002", 
    "Endorse": "\u652f\u6301", 
    "Engage with posts": "\u53c2\u4e0e\u8ba8\u8bba", 
    "Enroll Now": "\u73b0\u5728\u9009\u8bfe", 
    "Enrolling you in the selected course": "\u5c06\u60a8\u52a0\u5165\u5230\u9009\u5b9a\u7684\u8bfe\u7a0b", 
    "Enrollment Date": "\u9009\u8bfe\u65e5\u671f", 
    "Enrollment Opens on": "\u9009\u8bfe\u5f00\u653e", 
    "Enter Due Date and Time": "\u8f93\u5165\u622a\u6b62\u65e5\u671f", 
    "Enter Start Date and Time": "\u8f93\u5165\u5f00\u59cb\u65e5\u671f\u4e0e\u65f6\u95f4", 
    "Enter a student's username or email address.": "\u8f93\u5165\u5b66\u751f\u7684\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002", 
    "Enter a username or email.": "\u8f93\u5165\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002", 
<<<<<<< HEAD
=======
    "Enter information to describe your team. You cannot change these details after you create the team.": "\u8f93\u5165\u63cf\u8ff0\u60a8\u7684\u56e2\u961f\u7684\u4fe1\u606f\uff0c\u4e00\u65e6\u56e2\u961f\u521b\u5efa\uff0c\u8fd9\u4e9b\u4fe1\u606f\u65e0\u6cd5\u66f4\u6539\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Enter team description.": "\u8f93\u5165\u56e2\u961f\u4ecb\u7ecd", 
    "Enter team name.": "\u8f93\u5165\u56e2\u961f\u540d", 
    "Enter the enrollment code.": "\u8f93\u5165\u9009\u8bfe\u7801\u3002", 
    "Enter the page number you'd like to quickly navigate to.": "\u8f93\u5165\u60a8\u9700\u8981\u5feb\u901f\u524d\u5f80\u7684\u9875\u7801\u3002", 
    "Enter username or email": "\u8f93\u5165\u7528\u6237\u540d\u6216\u8005\u7535\u5b50\u90ae\u4ef6\u5730\u5740", 
    "Entrance exam attempts is being reset for student '{student_id}'.": "\u6b63\u5728\u91cd\u7f6e\u5b66\u751f\u201c{student_id}\u201d\u7684\u5165\u5b66\u8003\u8bd5\u5c1d\u8bd5\u6b21\u6570\u3002", 
    "Entrance exam state is being deleted for student '{student_id}'.": "\u5b66\u751f'{student_id}'\u7684\u5165\u5b66\u8003\u8bd5\u7684\u72b6\u6001\u5df2\u88ab\u5220\u9664\u3002", 
    "Error": "\u9519\u8bef", 
    "Error adding user": "\u6dfb\u52a0\u7528\u6237\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef", 
    "Error adding/removing users as beta testers.": "\u6dfb\u52a0\uff0f\u5220\u9664beta\u6d4b\u8bd5\u7528\u6237\u51fa\u9519\u3002", 
    "Error changing user's permissions.": "\u66f4\u6539\u7528\u6237\u6743\u9650\u51fa\u9519\u3002", 
    "Error deleting entrance exam state for student '{student_id}'. Make sure student identifier is correct.": "\u5220\u9664\u5b66\u751f'{student_id}'\u7684\u5165\u5b66\u8003\u8bd5\u72b6\u6001\u65f6\u51fa\u9519\u4e86\uff0c\u8bf7\u786e\u8ba4\u5b66\u751f\u7f16\u53f7\u65e0\u8bef\u3002", 
    "Error deleting student '<%- student_id %>'s state on problem '<%- problem_id %>'. Make sure that the problem and student identifiers are complete and correct.": "\u5220\u9664\u5b66\u751f \"<%-student_id%> \u95ee\u9898\u7684\u72b6\u6001\" <%-problem_id%> \u65f6\u51fa\u9519\u3002\u8bf7\u786e\u4fdd\u95ee\u9898\u548c\u5b66\u751f\u6807\u8bc6\u7b26\u662f\u5b8c\u6574\u548c\u6b63\u786e\u7684\u3002", 
    "Error deleting the file ": "\u5220\u9664\u6587\u4ef6\u65f6\u51fa\u9519", 
    "Error enrolling/unenrolling users.": "\u7528\u6237\u9009\u8bfe\uff0f\u653e\u5f03\u9009\u8bfe\u65f6\u51fa\u9519\u3002", 
    "Error generating ORA data report. Please try again.": "\u4ea7\u751fORA\u6570\u636e\u62a5\u544a\u65f6\u53d1\u751f\u9519\u8bef\u3002\u8bf7\u91cd\u65b0\u518d\u8bd5\u3002", 
    "Error generating grades. Please try again.": "\u751f\u6210\u8bc4\u5206\u7ed3\u679c\u65f6\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "Error generating list of students who may enroll. Please try again.": "\u83b7\u53d6\u53ef\u80fd\u9009\u8bfe\u7684\u5b66\u751f\u5217\u8868\u65f6\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "Error generating problem grade report. Please try again.": "\u751f\u6210\u8bc4\u5206\u7ed3\u679c\u62a5\u544a\u65f6\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "Error generating proctored exam results. Please try again.": "\u4ea7\u751f\u8003\u8bd5\u6210\u7ee9\u9519\u8bef\u3002 \u8bf7\u518d\u8bd5\u4e00\u6b21\u3002", 
    "Error generating student profile information. Please try again.": "\u751f\u6210\u5b66\u751f\u6863\u6848\u4fe1\u606f\u65f6\u53d1\u751f\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "Error generating survey results. Please try again.": "\u4ea7\u751f\u8c03\u67e5\u7ed3\u679c\u65f6\u53d1\u751f\u9519\u8bef\u3002 \u8bf7\u518d\u8bd5\u4e00\u6b21\u3002", 
    "Error getting entrance exam task history for student '{student_id}'. Make sure student identifier is correct.": "\u83b7\u53d6\u5b66\u751f'{student_id}'\u7684\u5165\u5b66\u8003\u8bd5\u4efb\u52a1\u5386\u53f2\u65f6\u51fa\u9519\u4e86\uff0c\u8bf7\u786e\u8ba4\u5b66\u751f\u7f16\u53f7\u65e0\u8bef\u3002", 
    "Error getting forum csv": "\u83b7\u53d6\u8bba\u575b csv \u65f6\u51fa\u9519", 
    "Error getting issued certificates list.": "\u83b7\u53d6\u5df2\u9881\u53d1\u8bc1\u4e66\u7684\u5217\u8868\u65f6\u53d1\u751f\u9519\u8bef", 
    "Error getting student list.": "\u83b7\u53d6\u5b66\u751f\u5217\u8868\u65f6\u53d1\u751f\u9519\u8bef", 
<<<<<<< HEAD
    "Error getting student progress url for '<%- student_id %>'. Make sure that the student identifier is spelled correctly.": "\u83b7\u53d6 \"<%-student_id%>\" \u7684\u5b66\u751f\u8fdb\u5ea6 url \u65f6\u51fa\u9519\u3002\u8bf7\u786e\u4fdd\u5b66\u751f\u6807\u8bc6\u7b26\u62fc\u5199\u6b63\u786e\u3002", 
    "Error getting task history for problem '<%- problem_id %>' and student '<%- student_id %>'. Make sure that the problem and student identifiers are complete and correct.": "\u83b7\u53d6\u95ee\u9898 \"<%-problem_id%>\" \u548c \"\u5b66\u751f\" <%-student_id%> \u7684\u4efb\u52a1\u5386\u53f2\u8bb0\u5f55\u65f6\u51fa\u9519\u3002\u8bf7\u786e\u4fdd\u95ee\u9898\u548c\u5b66\u751f\u6807\u8bc6\u7b26\u662f\u5b8c\u6574\u548c\u6b63\u786e\u7684\u3002", 
=======
    "Error getting the number of ungraded responses": "\u83b7\u53d6\u672a\u8bc4\u5206\u56de\u590d\u6570\u91cf\u51fa\u73b0\u9519\u8bef", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Error listing task history for this student and problem.": "\u663e\u793a\u6b64\u5b66\u751f\u4e0e\u95ee\u9898\u7684\u4efb\u52a1\u5386\u53f2\u65f6\u53d1\u751f\u9519\u8bef\u3002", 
    "Error posting your message.": "\u53d1\u5e03\u90ae\u4ef6\u65f6\u51fa\u9519\u3002", 
    "Error removing user": "\u5220\u9664\u7528\u6237\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef", 
    "Error resetting entrance exam attempts for student '{student_id}'. Make sure student identifier is correct.": "\u91cd\u7f6e\u5b66\u751f'{student_id}'\u7684\u5165\u5b66\u8003\u8bd5\u5c1d\u8bd5\u6b21\u6570\u65f6\u51fa\u9519\u4e86\uff0c\u8bf7\u786e\u8ba4\u5b66\u751f\u7f16\u53f7\u65e0\u8bef\u3002", 
    "Error resetting problem attempts for problem '<%= problem_id %>' and student '<%- student_id %>'. Make sure that the problem and student identifiers are complete and correct.": "\u91cd\u7f6e\u95ee\u9898 \"<%= problem_id%>\" \u548c \"\u5b66\u751f\" <%-student_id%> \u95ee\u9898\u5c1d\u8bd5\u65f6\u51fa\u9519\u3002\u8bf7\u786e\u4fdd\u95ee\u9898\u548c\u5b66\u751f\u6807\u8bc6\u7b26\u662f\u5b8c\u6574\u548c\u6b63\u786e\u7684\u3002", 
    "Error retrieving grading configuration.": "\u53d6\u5f97\u8bc4\u5206\u6807\u51c6\u65f6\u9519\u8bef\u3002", 
    "Error sending email.": "\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u65f6\u51fa\u9519\u3002", 
    "Error starting a task to rescore entrance exam for student '{student_id}'. Make sure that entrance exam has problems in it and student identifier is correct.": "\u4e3a\u5b66\u751f'{student_id}'\u5f00\u59cb\u8fd0\u884c\u91cd\u65b0\u8ba1\u7b97\u5165\u5b66\u8003\u8bd5\u5206\u6570\u7684\u4efb\u52a1\u65f6\u51fa\u9519\u4e86\uff0c\u8bf7\u786e\u8ba4\u8be5\u5165\u5b66\u8003\u8bd5\u4e2d\u6709\u9898\u76ee\u5e76\u4e14\u5b66\u751f\u7f16\u53f7\u65e0\u8bef\u3002", 
    "Error starting a task to rescore problem '<%- problem_id %>' for student '<%- student_id %>'. Make sure that the the problem and student identifiers are complete and correct.": "\u542f\u52a8\u4efb\u52a1\u4ee5\u91cd\u65b0\u8bc4\u5206 \u95ee\u9898 \"<%-problem_id%>\" \u4e3a\u5b66\u751f \"<%-student_id%>\" \u65f6\u51fa\u9519\u3002\u8bf7\u786e\u4fdd\u95ee\u9898\u548c\u5b66\u751f\u6807\u8bc6\u7b26\u662f\u5b8c\u6574\u548c\u6b63\u786e\u7684\u3002", 
    "Error starting a task to rescore problem '<%- problem_id %>'. Make sure that the problem identifier is complete and correct.": "\u542f\u52a8\u4efb\u52a1\u4ee5 \u91cd\u65b0\u8bc4\u5206\u95ee\u9898 \"<%-problem_id%>\" \u65f6\u51fa\u9519\u3002\u8bf7\u786e\u4fdd\u95ee\u9898\u6807\u8bc6\u7b26\u662f\u5b8c\u6574\u7684\u548c\u6b63\u786e\u7684\u3002", 
    "Error starting a task to reset attempts for all students on problem '<%- problem_id %>'. Make sure that the problem identifier is complete and correct.": "\u542f\u52a8\u4efb\u52a1\u4ee5\u91cd\u7f6e\u95ee\u9898 \"<%-problem_id%>\" \u4e0a\u7684\u6240\u6709\u5b66\u751f\u7684\u5c1d\u8bd5\u65f6\u51fa\u9519\u3002\u8bf7\u786e\u4fdd\u95ee\u9898\u6807\u8bc6\u7b26\u662f\u5b8c\u6574\u7684\u548c\u6b63\u786e\u7684\u3002", 
    "Error while generating certificates. Please try again.": "\u751f\u6210\u8bc1\u4e66\u671f\u95f4\u51fa\u73b0\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5\u3002", 
    "Error while regenerating certificates. Please try again.": "\u4ea7\u751f\u9519\u8bef\u8bc1\u4e66\u3002 \u8bf7\u518d\u8bd5\u4e00\u6b21\u3002", 
    "Error:": "\u9519\u8bef\uff1a", 
    "Error: Choosing failed.": "\u9519\u8bef\uff1a\u9009\u62e9\u5931\u8d25\u3002", 
    "Error: Connection with server failed.": "\u9519\u8bef\uff1a\u8fde\u63a5\u670d\u52a1\u5668\u5931\u8d25\u3002", 
    "Error: Import failed.": "\u9519\u8bef\uff1a\u5bfc\u5165\u5931\u8d25\u3002", 
    "Error: Replacing failed.": "\u9519\u8bef\uff1a\u66ff\u6362\u5931\u8d25\u3002", 
    "Error: Uploading failed.": "\u9519\u8bef\uff1a\u4e0a\u4f20\u5931\u8d25\u3002", 
    "Error: User '<%- username %>' has not yet activated their account. Users must create and activate their accounts before they can be assigned a role.": "\u9519\u8bef: \u7528\u6237 \"<%-username%>\" \u5c1a\u672a\u6fc0\u6d3b\u5176\u5e10\u6237\u3002\u7528\u6237\u5fc5\u987b\u5148\u521b\u5efa\u5e76\u6fc0\u6d3b\u4ed6\u4eec\u7684\u5e10\u6237, \u7136\u540e\u624d\u80fd\u5206\u914d\u89d2\u8272\u3002", 
    "Error: You cannot remove yourself from the Instructor group!": "\u9519\u8bef\uff1a\u60a8\u4e0d\u53ef\u4ee5\u5c06\u81ea\u5df1\u4ece\u6559\u5e08\u7ec4\u4e2d\u5220\u9664\u3002", 
    "Errors": "\u9519\u8bef", 
    "Everyone who has staff privileges in this course": "\u5728\u672c\u8bfe\u7a0b\u4e2d\u62e5\u6709\u5458\u5de5\u7279\u6743\u7684\u6bcf\u4e2a\u4eba", 
    "Execute Command": "\u6267\u884c\u547d\u4ee4", 
    "Exit full browser": "\u9000\u51fa\u5168\u5c4f", 
<<<<<<< HEAD
    "Expand Instructions": "\u5c55\u5f00\u8bf4\u660e", 
    "Explanation": "\u89e3\u91ca", 
    "Explicitly Hiding from Students": "\u660e\u786e\u5bf9\u5b66\u751f\u9690\u85cf", 
    "Explore New Programs": "\u6d4f\u89c8\u65b0\u7a0b\u5e8f", 
    "Explore Programs": "\u6d4f\u89c8\u7a0b\u5e8f", 
    "Failed to delete student state for user.": "\u672a\u80fd\u5220\u9664\u7528\u6237\u7684\u5b66\u751f\u72b6\u6001\u3002", 
    "Failed to rescore problem for user.": "\u672a\u80fd\u4e3a\u7528\u6237\u91cd\u65b0\u8bc4\u5206\u95ee\u9898\u3002", 
    "Failed to rescore problem to improve score for user.": "\u672a\u80fd\u91cd\u65b0\u8bc4\u5206\u95ee\u9898\u4ee5\u63d0\u9ad8\u7528\u6237\u8bc4\u5206\u3002", 
    "Failed to reset attempts for user.": "\u65e0\u6cd5\u91cd\u7f6e\u7528\u6237\u7684\u5c1d\u8bd5\u3002", 
    "File": "\u6587\u4ef6", 
=======
    "Expand All": "\u5c55\u5f00\u5168\u90e8", 
    "Explain if other.": "\u5982\u5176\u4ed6\u539f\u56e0\uff0c\u8bf7\u89e3\u91ca\u3002", 
    "Explanation": "\u89e3\u91ca", 
    "Explicitly Hiding from Students": "\u660e\u786e\u5bf9\u5b66\u751f\u9690\u85cf", 
    "Explore your course!": "\u63a2\u7d22\u4f60\u7684\u8bfe\u7a0b\uff01", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "File Name": "\u6587\u4ef6\u540d", 
    "File type is not allowed.": "\u6587\u4ef6\u7c7b\u578b\u4e0d\u53ef\u7528\u3002", 
    "File types can not be empty.": "\u6587\u4ef6\u7c7b\u578b\u4e0d\u80fd\u4e3a\u7a7a\u3002", 
    "File {filename} exceeds maximum size of {maxFileSizeInMBs} MB": "\u6587\u4ef6 {filename} \u7684\u5927\u5c0f\u8d85\u8fc7\u4e86 {maxFileSizeInMBs} MB \u7684\u9650\u5236", 
    "Files must be in JPEG or PNG format.": "\u6587\u4ef6\u5fc5\u987b\u662fJPEG\u6216\u8005PNG\u683c\u5f0f\u3002", 
    "Fill browser": "\u5168\u5c4f", 
    "Filter and sort topics": "\u8fc7\u6ee4\u548c\u6574\u7406\u8bdd\u9898", 
    "Financial Assistance": "\u7ecf\u6d4e\u8865\u52a9", 
<<<<<<< HEAD
    "Find": "\u67e5\u627e", 
=======
    "Financial Assistance Application": "\u7ecf\u6d4e\u63f4\u52a9\u7533\u8bf7", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Find a course": "\u627e\u5230\u4e00\u4e2a\u8bfe\u7a0b", 
    "Find discussions": "\u641c\u7d22\u8ba8\u8bba\u5e16", 
<<<<<<< HEAD
    "Find next": "\u67e5\u627e\u4e0b\u4e00\u4e2a", 
    "Find previous": "\u67e5\u627e\u4e0a\u4e00\u4e2a", 
    "Finish": "\u5b8c\u6210", 
    "First Attempt": "\u7b2c\u4e00\u6b21\u5c1d\u8bd5", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Follow": "\u5173\u6ce8", 
    "Follow or unfollow posts": "\u5173\u6ce8\u6216\u53d6\u6d88\u5173\u6ce8\u53d1\u5e16", 
    "Following": "\u5173\u6ce8", 
    "Forgot password?": "\u5fd8\u8bb0\u5bc6\u7801\uff1f", 
<<<<<<< HEAD
    "Format": "\u683c\u5f0f", 
    "Formats": "\u683c\u5f0f", 
=======
    "Frequently Asked Questions": "\u5e38\u89c1\u95ee\u9898", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Full Name": "\u5168\u540d", 
    "Fullscreen": "\u5168\u5c4f", 
    "Gender": "\u6027\u522b", 
<<<<<<< HEAD
    "General": "\u4e00\u822c", 
    "Generate a single certificate": "\u751f\u6210\u5355\u4e2a\u8bc1\u4e66", 
=======
    "Generate": "\u751f\u6210", 
    "Generate Exception Certificates": "\u751f\u6210\u7279\u4f8b\u8bc1\u4e66", 
    "Generate the user's certificate": "\u751f\u6210\u7528\u6237\u8bc1\u4e66", 
    "Get Credit": "\u83b7\u5f97\u5b66\u5206", 
    "Go to Dashboard": "\u524d\u5f80\u8bfe\u7a0b\u9762\u677f", 
    "Go to your Dashboard": "\u524d\u5f80\u4f60\u7684\u63a7\u5236\u9762\u677f", 
    "Government-Issued Photo ID": "\u653f\u5e9c\u7b7e\u53d1\u7684\u5e26\u6709\u7167\u7247\u7684\u8eab\u4efd\u8bc1\u4ef6", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Grace period must be specified in HH:MM format.": "\u5bbd\u9650\u65f6\u95f4\u5fc5\u987b\u4ee5 HH:MM \u683c\u5f0f\u8bbe\u5b9a\u3002", 
    "Grade": "\u6210\u7ee9", 
    "Group %s": "%s\u7ec4", 
    "Group A": "A \u7ec4", 
    "Group B": "B \u7ec4", 
    "Group Configuration name is required.": "\u7ec4\u914d\u7f6e\u540d\u79f0\u662f\u5fc5\u9700\u7684\u3002", 
    "Group name is required": "\u7ec4\u540d\u79f0\u662f\u5fc5\u9700\u7684", 
<<<<<<< HEAD
    "H Align": "\u6c34\u5e73\u5bf9\u9f50", 
    "HTML preview of post": "\u5e16\u5b50\u7684 HTML \u9884\u89c8", 
    "HTML source code": "HTML \u6e90\u4ee3\u7801", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Header": "\u8868\u5934", 
    "Heading": "\u6807\u9898", 
    "Heading (Ctrl+H)": "\u6807\u9898(Ctrl+H)", 
<<<<<<< HEAD
    "Heading 1": "\u6807\u9898 1", 
    "Heading 2": "\u6807\u9898 2", 
    "Heading 3": "\u6807\u9898 3", 
    "Heading 4": "\u6807\u9898 4", 
    "Heading 5": "\u6807\u9898 5", 
    "Heading 6": "\u6807\u9898 6", 
    "Headings": "\u6807\u9898", 
    "Height": "\u9ad8\u5ea6", 
    "Hide Annotations": "\u9690\u85cf\u6279\u6ce8", 
=======
    "Help other learners decide whether to join your team by specifying some characteristics for your team. Choose carefully, because fewer people might be interested in joining your team if it seems too restrictive.": "\u4ecb\u7ecd\u4f60\u7684\u56e2\u961f\u7684\u7279\u70b9\uff0c\u5e2e\u52a9\u5176\u4ed6\u5b66\u5458\u51b3\u5b9a\u662f\u5426\u52a0\u5165\u4f60\u7684\u56e2\u961f\u3002\u8bf7\u4ed4\u7ec6\u9009\u62e9\uff0c\u5982\u679c\u770b\u8d77\u6765\u9650\u5236\u592a\u591a\uff0c\u5c31\u4f1a\u6709\u8f83\u5c11\u7684\u4eba\u613f\u610f\u52a0\u5165\u4f60\u7684\u56e2\u961f\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Hide Deprecated Settings": "\u9690\u85cf\u5df2\u8fc7\u65f6\u7684\u8bbe\u7f6e", 
    "Hide Discussion": "\u9690\u85cf\u8ba8\u8bba", 
    "Hide Previews": "\u9690\u85cf\u9884\u89c8", 
    "Hide closed captions": "\u9690\u85cfCC\u5b57\u5e55", 
    "Hide notes": "\u9690\u85cf\u6ce8\u91ca", 
    "Hiding from Students": "\u5bf9\u5b66\u751f\u9690\u85cf", 
    "High Definition": "\u9ad8\u7ea7\u5b9a\u4e49", 
    "Highlighted text": "\u9ad8\u4eae\u6587\u672c", 
    "Horizontal Rule (Ctrl+R)": "\u6c34\u5e73\u7ebf(Ctrl+R)", 
    "How to create useful text alternatives.": "\u5982\u4f55\u5efa\u7acb\u6709\u7528\u7684\u6587\u5b57\u66ff\u4ee3\u7269\u3002", 
    "How to use %(platform_name)s discussions": "\u5982\u4f55\u4f7f\u7528 %(platform_name)s \u8ba8\u8bba", 
    "Hyperlink (Ctrl+L)": "\u8d85\u94fe\u63a5(Ctrl+L)", 
    "ID": "ID", 
    "If the unit was previously published and released to students, any changes you made to the unit when it was hidden will now be visible to students. Do you want to proceed?": "\u5982\u679c\u6b64\u5355\u5143\u5148\u524d\u5df2\u88ab\u53d1\u5e03\u4e14\u5411\u5b66\u751f\u516c\u5f00\uff0c\u4efb\u4f55\u5728\u8be5\u5355\u5143\u5904\u4e8e\u9690\u85cf\u65f6\u7684\u6539\u52a8\u90fd\u5c06\u5bf9\u5b66\u751f\u53ef\u89c1\u3002\u60a8\u8981\u7ee7\u7eed\u5417\uff1f", 
    "If you do not yet have an account, use the button below to register.": "\u5982\u679c\u60a8\u5c1a\u65e0\u5e10\u6237\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u6309\u94ae\u8fdb\u884c\u6ce8\u518c\u3002", 
<<<<<<< HEAD
=======
    "If you don't verify your identity now, you can still explore your course from your dashboard. You will receive periodic reminders from %(platformName)s to verify your identity.": "\u5982\u679c\u4f60\u73b0\u5728\u4e0d\u9a8c\u8bc1\u4f60\u7684\u8eab\u4efd\uff0c\u4f60\u4ecd\u53ef\u4ee5\u901a\u8fc7\u63a7\u5236\u9762\u677f\u6d4f\u89c8\u8bfe\u7a0b\u3002\u4f46\u4f60\u4f1a\u5b9a\u671f\u4ece%(platformName)s\u6536\u5230\u8eab\u4efd\u9a8c\u8bc1\u63d0\u9192\u3002", 
    "If you leave this page without saving or submitting your response, you will lose any work you have done on the response.": "\u5982\u679c\u4f60\u4e0d\u4fdd\u5b58\u6216\u8005\u63d0\u4ea4\u7b54\u6848\u5c31\u79bb\u5f00\uff0c\u4f60\u53ef\u80fd\u4f1a\u4e22\u5931\u6389\u5199\u5b8c\u7684\u4e00\u5207\u3002", 
    "If you leave this page without submitting your peer assessment, you will lose any work you have done.": "\u5982\u679c\u4f60\u79bb\u5f00\u672c\u9875\u65f6\u6ca1\u6709\u63d0\u4ea4\u4f60\u7684\u540c\u5b66\u4e92\u8bc4\uff0c\u4f60\u5c06\u4e22\u5931\u4f60\u6240\u505a\u7684\u4e00\u5207\u3002", 
    "If you leave this page without submitting your self assessment, you will lose any work you have done.": "\u5982\u679c\u4f60\u672a\u63d0\u4ea4\u4f60\u7684\u81ea\u6211\u8bc4\u4f30\u5c31\u79bb\u5f00\u6b64\u9875\u9762\uff0c\u4f60\u5c06\u4e22\u5931\u6240\u505a\u7684\u4e00\u5207\u3002", 
    "If you leave this page without submitting your staff assessment, you will lose any work you have done.": "\u5982\u679c\u4f60\u672a\u63d0\u4ea4\u4f60\u7684\u5458\u5de5\u8bc4\u4f30\u5c31\u79bb\u5f00\u6b64\u9875\u9762\uff0c\u4f60\u5c06\u4e22\u5931\u6240\u505a\u7684\u4e00\u5207\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "If you leave, you can no longer post in this team's discussions. Your place will be available to another learner.": "\u5982\u679c\u4f60\u79bb\u5f00\u4e86\uff0c\u4f60\u4e0d\u80fd\u5728\u672c\u56e2\u961f\u7684\u8ba8\u8bba\u533a\u4e0a\u53d1\u8a00\u3002\u60a8\u7684\u4f4d\u7f6e\u5c06\u63d0\u4f9b\u7ed9\u5176\u5b83\u7684\u5b66\u4e60\u8005\u3002", 
    "If you make significant changes, make sure you notify members of the team before making these changes.": "\u5982\u679c\u4f60\u505a\u8f83\u5927\u66f4\u6539\uff0c\u8bf7\u786e\u4fdd\u60a8\u5728\u8fdb\u884c\u8fd9\u4e9b\u66f4\u6539\u4e4b\u524d\u901a\u77e5\u56e2\u961f\u6210\u5458\u3002", 
    "If you use the Advanced Editor, this problem will be converted to XML and you will not be able to return to the Simple Editor Interface.\n\nProceed to the Advanced Editor and convert this problem to XML?": "\u5982\u679c\u4f60\u4f7f\u7528\u9ad8\u7ea7\u7f16\u8f91\u5668\uff0c\u8be5\u95ee\u9898\u5c06\u8f6c\u4e3aXML\uff0c\u540c\u65f6\u60a8\u4e5f\u65e0\u6cd5\u518d\u56de\u5230\u7b80\u6613\u7f16\u8f91\u5668\u754c\u9762\u3002\n\n\u8981\u7ee7\u7eed\u4f7f\u7528\u9ad8\u7ea7\u7f16\u8f91\u5668\u5e76\u5c06\u8be5\u95ee\u9898\u8f6c\u4e3aXML\u5417\uff1f", 
    "Image": "\u56fe\u50cf", 
    "Image (Ctrl+G)": "\u56fe\u7247(Ctrl+G)", 
    "Image Description": "\u56fe\u7247\u63cf\u8ff0", 
    "Image Upload Error": "\u56fe\u7247\u4e0a\u4f20\u9519\u8bef", 
    "In Progress": "\u6b63\u5728\u8fdb\u884c\u4e2d", 
    "Incorrect url format.": "\u65e0\u6548\u7684 URL \u683c\u5f0f\u3002", 
<<<<<<< HEAD
    "Increase indent": "\u589e\u52a0\u7f29\u8fdb", 
=======
    "Individual Exceptions": "\u4e2a\u522b\u7279\u6b8a\u5904\u7406", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Inheriting Student Visibility": "\u7ee7\u627f\u5b66\u751f\u53ef\u89c1\u6027", 
    "Insert Hyperlink": "\u63d2\u5165\u8d85\u94fe\u63a5", 
    "Insert Image (upload file or type URL)": "\u63d2\u5165\u56fe\u7247 (\u4e0a\u4f20\u6587\u4ef6\u6216\u8f93\u5165URL)", 
    "Instructor": "\u6559\u5e08", 
<<<<<<< HEAD
    "Is this OK?": "\u597d\u4e86\u5417", 
    "Italic": "\u659c\u4f53", 
=======
    "Instructor tools": "\u6559\u5e08\u5de5\u5177", 
    "Invalidate Certificate": "\u65e0\u6548\u8bc1\u4e66", 
    "Invalidated": "\u5df2\u8bbe\u5b9a\u4e3a\u65e0\u6548", 
    "Invalidated By": "\u65e0\u6548\u8bbe\u5b9a\u4eba", 
    "Is your name on your ID readable?": "\u4f60\u8eab\u4efd\u8bc1\u4ef6\u4e0a\u7684\u540d\u5b57\u662f\u5426\u6e05\u6670\u53ef\u89c1\uff1f", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Italic (Ctrl+I)": "\u659c\u4f53(Ctrl+I)", 
    "Joined %(date)s": "\u4e8e %(date)s \u52a0\u5165", 
    "KB": "KB", 
    "Key should only contain letters, numbers, _, or -": "\u5173\u952e\u5b57\u53ea\u80fd\u5305\u542b\u5b57\u6bcd\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u548c\u8fde\u5b57\u7b26\u3002", 
    "LEARN MORE": "\u4e86\u89e3\u66f4\u591a", 
    "Language": "\u8bed\u8a00", 
    "Large": "\u5927", 
    "Last Activity %(date)s": "\u4e0a\u4e00\u6b21\u6d3b\u52a8\u5728 %(date)s ", 
    "Last Attempt": "\u4e0a\u6b21\u5c1d\u8bd5", 
    "Last Edited:": "\u6700\u540e\u4fee\u6539\uff1a", 
    "Last activity %(date)s": "\u4e0a\u4e00\u6b21\u6d3b\u52a8\u5728 %(date)s ", 
    "Leave this team?": "\u79bb\u5f00\u8fd9\u4e2a\u56e2\u961f\uff1f", 
<<<<<<< HEAD
    "Left": "\u5de6\u5bf9\u9f50", 
    "Left to right": "\u4ece\u5de6\u5411\u53f3", 
=======
    "Legal name": "\u6cd5\u5b9a\u59d3\u540d", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Less": "\u6536\u8d77", 
    "Library User": "\u77e5\u8bc6\u5e93\u7528\u6237", 
    "Link Description": "\u94fe\u63a5\u7684\u63cf\u8ff0", 
    "Link Your Account": "\u5173\u8054\u60a8\u7684\u8d26\u6237", 
    "Link types should be unique.": "\u94fe\u63a5\u7c7b\u578b\u5e94\u5f53\u552f\u4e00\u3002", 
    "Link your {accountName} account": "\u5173\u8054\u60a8\u7684{accountName}\u5e10\u6237", 
    "Link your {accountName} account to your {platformName} account and use {accountName} to sign in to {platformName}.": "\u5c06 {accountName} \u5e10\u6237\u94fe\u63a5\u5230 {platformName} \u5e10\u6237, \u5e76\u4f7f\u7528 {accountName} \u767b\u5f55\u5230 {platformName}\u3002", 
    "Linked Accounts": "\u5173\u8054\u7684\u5e10\u6237", 
    "Linking": "\u5173\u8054\u4e2d", 
    "Links are generated on demand and expire within 5 minutes due to the sensitive nature of student information.": "\u7531\u4e8e\u5305\u542b\u6d89\u53ca\u5b66\u751f\u7684\u654f\u611f\u4fe1\u606f\uff0c\u751f\u6210\u7684\u94fe\u63a5\u5c06\u57285\u5206\u949f\u540e\u5931\u6548\u3002", 
    "Links should be unique.": "\u94fe\u63a5\u5e94\u5f53\u552f\u4e00\u3002", 
    "List item": "\u5217\u8868\u9879", 
    "Load Another File": "\u52a0\u8f7d\u5176\u4ed6\u6587\u4ef6", 
    "Load all responses": "\u8f7d\u5165\u6240\u6709\u7684\u56de\u590d", 
<<<<<<< HEAD
    "Load more": "\u52a0\u8f7d\u66f4\u591a", 
    "Load next {numResponses} responses": "\u52a0\u8f7d\u4e0b\u4e00\u4e2a {numResponses} \u54cd\u5e94", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Loading": "\u6b63\u5728\u52a0\u8f7d", 
    "Loading content": "\u6b63\u5728\u52a0\u8f7d\u5185\u5bb9", 
    "Loading data...": "\u8f7d\u5165\u6570\u636e\u4e2d......", 
    "Loading more threads": "\u8f7d\u5165\u66f4\u591a\u7684\u4e3b\u9898", 
    "Loading posts list": "\u52a0\u8f7d\u5e16\u5b50\u5217\u8868", 
    "Loading your courses": "\u6b63\u5728\u52a0\u8f7d\u60a8\u7684\u8bfe\u7a0b", 
    "Location in Course": "\u8bfe\u7a0b\u4e2d\u7684\u4f4d\u7f6e", 
    "Loud": "\u97f3\u91cf\u9ad8", 
    "Low": "\u4f4e", 
    "MB": "MB", 
    "Make Visible to Students": "\u5bf9\u5b66\u751f\u53ef\u89c1", 
    "Making Visible to Students": "\u6b63\u5728\u5bf9\u5b66\u751f\u53ef\u89c1", 
<<<<<<< HEAD
=======
    "Manual": "\u624b\u52a8", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Mark Exam As Completed": "\u6807\u8bb0\u8003\u8bd5\u5b8c\u6210", 
    "Mark as Answer": "\u6807\u8bb0\u4f5c\u4e3a\u7b54\u6848", 
    "Mark enrollment code as unused": "\u6807\u8bb0\u9009\u8bfe\u7801\u4e3a\u5c1a\u672a\u4f7f\u7528\u7684", 
    "Markdown Editing Help": "Markdown\u7f16\u8f91\u5e2e\u52a9", 
    "Max file size exceeded": "\u6587\u4ef6\u5927\u5c0f\u8d85\u51fa\u9650\u5236", 
    "Maximum": "\u6700\u5927\u6570\u503c", 
    "Membership": "\u4f1a\u5458\u8d44\u683c", 
    "Message:": "\u6d88\u606f\uff1a", 
    "Module state successfully deleted.": "\u5df2\u6210\u529f\u5220\u9664\u6a21\u5757\u72b6\u6001\u3002", 
    "More": "\u66f4\u591a", 
    "Mute": "\u9759\u97f3", 
    "Muted": "\u9759\u97f3", 
    "My Notes": "\u6211\u7684\u7b14\u8bb0", 
    "My Orders": "\u6211\u7684\u6307\u4ee4", 
    "My Team": "\u6211\u7684\u56e2\u961f", 
<<<<<<< HEAD
    "Name": "\u540d\u79f0", 
    "New Address": "\u65b0\u5730\u5740", 
    "New document": "\u65b0\u5efa\u6587\u6863", 
    "New window": "\u65b0\u5efa\u7a97\u53e3", 
    "Next": "\u4e0b\u4e00\u4e2a", 
    "No Derivatives": "\u65e0\u76f8\u5173\u6d3e\u751f", 
    "No Flash Detected": "\u6ca1\u6709\u53d1\u73b0Flash", 
    "No Webcam Detected": "\u6ca1\u6709\u68c0\u6d4b\u5230\u6444\u50cf\u5934", 
    "No color": "\u65e0\u989c\u8272", 
    "No posts matched your query.": "\u6ca1\u6709\u4e0e\u60a8\u7684\u67e5\u8be2\u5339\u914d\u7684\u5e16\u5b50\u3002", 
    "No results found for \"%(query_string)s\". Please try searching again.": "\u672a\u627e\u5230\u6709\u5173\"%(query_string)s\"\u7684\u4efb\u4f55\u7ed3\u679c\u3002\u8bf7\u91cd\u65b0\u641c\u7d22\u3002", 
    "No results found for {original_query}. Showing results for {suggested_query}.": "\u627e\u4e0d\u5230 {original_query} \u7684\u7ed3\u679c\u3002\u663e\u793a {suggested_query} \u7684\u7ed3\u679c\u3002", 
    "No sources": "\u6ca1\u6709\u6e90", 
    "No tasks currently running.": "\u6ca1\u6709\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1", 
    "Nonbreaking space": "\u4e0d\u95f4\u65ad\u7a7a\u683c", 
    "Noncommercial": "\u975e\u5546\u4e1a\u7684", 
    "None": "\u65e0", 
    "Not Currently Available": "\u5f53\u524d\u4e0d\u53ef\u7528", 
=======
    "N/A": "\u4e0d\u9002\u7528", 
    "Name": "\u59d3\u540d", 
    "New Address": "\u65b0\u5730\u5740", 
    "New enrollment mode:": "\u65b0\u9009\u8bfe\u6a21\u5f0f\uff1a", 
    "Next": "\u4e0b\u4e00\u6b65", 
    "Next Step: Confirm your identity": "\u4e0b\u4e00\u6b65\uff1a\u786e\u8ba4\u4f60\u7684\u8eab\u4efd", 
    "Next: %(nextStepTitle)s": "\u4e0b\u4e00\u6b65\uff1a%(nextStepTitle)s", 
    "No Content Group": "\u6ca1\u6709\u5185\u5bb9\u7ec4", 
    "No Flash Detected": "\u6ca1\u6709\u53d1\u73b0Flash", 
    "No Webcam Detected": "\u6ca1\u6709\u68c0\u6d4b\u5230\u6444\u50cf\u5934", 
    "No content-specific discussion topics exist.": "\u65e0\u7279\u5b9a\u5185\u5bb9\u7684\u8ba8\u8bba\u8bdd\u9898", 
    "No receipt available": "\u6ca1\u6709\u53ef\u63d0\u4f9b\u7684\u6536\u636e\u3002", 
    "No results": "\u6ca1\u6709\u7ed3\u679c", 
    "No results found for \"%(query_string)s\". Please try searching again.": "\u672a\u627e\u5230\u6709\u5173\"%(query_string)s\"\u7684\u4efb\u4f55\u7ed3\u679c\u3002\u8bf7\u91cd\u65b0\u641c\u7d22\u3002", 
    "No tasks currently running.": "\u6ca1\u6709\u6b63\u5728\u6267\u884c\u7684\u4efb\u52a1", 
    "Not Selected": "\u672a\u9009\u4e2d", 
    "Not available": "\u64cd\u4f5c\u6761\u4ef6\u4e0d\u6ee1\u8db3", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Not in Use": "\u672a\u4f7f\u7528", 
    "Note": "\u7b14\u8bb0", 
    "Noted in:": "\u6807\u8bb0\u4e8e\uff1a", 
    "Notes": "\u7b14\u8bb0", 
    "Notes hidden": "\u6ce8\u91ca\u5df2\u9690\u85cf", 
    "Notes visible": "\u6ce8\u91ca\u53ef\u89c1", 
    "Number Sent": "\u53d1\u9001\u6570\u76ee", 
    "Number of Students": "\u5b66\u751f\u6570\u76ee", 
    "Numbered List (Ctrl+O)": "\u6709\u5e8f\u5217\u8868(Ctrl+O)", 
    "OK": "\u662f\u7684", 
<<<<<<< HEAD
    "ORDER NAME": "\u8ba2\u5355\u540d\u79f0", 
    "ORDER NUMBER": "\u8ba2\u5355\u7f16\u53f7", 
    "ORDER PLACED": "\u8ba2\u5355\u653e\u7f6e", 
    "Ok": "\u786e\u5b9a", 
    "Only <%= fileTypes %> files can be uploaded. Please select a file ending in <%= fileExtensions %> to upload.": "\u53ea\u6709 <%= fileTypes %> \u683c\u5f0f\u7684\u6587\u4ef6\u53ef\u4ee5\u4e0a\u4f20\u3002\u8bf7\u9009\u62e9\u4e00\u4e2a\u4ee5 <%= fileExtensions %> \u7ed3\u5c3e\u7684\u6587\u4ef6\u4e0a\u4f20\u3002", 
=======
    "Once in position, use the camera button {icon} to capture your ID": "\u4e00\u65e6\u5c31\u4f4d\uff0c\u8bf7\u4f7f\u7528\u6444\u50cf\u5934\u6309\u94ae {icon} \u62cd\u6444\u60a8\u7684\u8eab\u4efd\u8bc1\u4ef6", 
    "Once in position, use the camera button {icon} to capture your photo": "\u4e00\u65e6\u5c31\u4f4d\uff0c\u8bf7\u4f7f\u7528\u6444\u50cf\u5934\u6309\u94ae {icon} \u62cd\u6444\u60a8\u7684\u7167\u7247", 
    "One or more rescheduling tasks failed.": "\u4e00\u9879\u6216\u51e0\u9879\u6539\u671f\u4efb\u52a1\u5931\u8d25\u4e86\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Only properly formatted .csv files will be accepted.": "\u53ea\u6709\u6807\u51c6\u7684CSV\u683c\u5f0f\u6587\u4ef6\u4f1a\u88ab\u63a5\u53d7\u3002", 
    "Open": "\u6253\u5f00", 
    "Open language menu": "\u5f00\u542f\u8bed\u8a00\u529f\u80fd\u83dc\u5355", 
    "OpenAssessment Save Error": "\u5f00\u653e\u5f0f\u8bc4\u4f30\u4fdd\u5b58\u9519\u8bef", 
<<<<<<< HEAD
    "Order Details": "\u8ba2\u5355\u7ec6\u8282", 
    "Order History": "\u8ba2\u5355\u8bb0\u5f55", 
    "Order Number": "\u8ba2\u5355\u53f7", 
    "Overall Score": "\u603b\u5206", 
    "Page break": "\u5206\u9875\u7b26", 
=======
    "Option Deleted": "\u9009\u9879\u5df2\u5220\u9664", 
    "Optional Characteristics": "\u53ef\u9009\u7279\u70b9", 
    "Order Details": "\u8ba2\u5355\u7ec6\u8282", 
    "Order History": "\u8ba2\u5355\u8bb0\u5f55", 
    "Order No.": "\u8ba2\u5355\u53f7\uff1a", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Page number out of %(total_pages)s": "\u9875\u7801\uff08\u5171 %(total_pages)s \u9875\uff09", 
    "Pagination": "\u9875\u7801", 
    "Password": "\u5bc6\u7801", 
    "Password assistance": "\u5bc6\u7801\u5e2e\u52a9", 
    "Pause": "\u6682\u505c", 
    "Photo Captured successfully.": "\u7167\u7247\u83b7\u53d6\u6210\u529f\uff01", 
    "Pin": "\u5904\u7406", 
    "Pinned": "\u5df2\u56fa\u5b9a", 
    "Placeholder": "\u5360\u4f4d\u7b26", 
    "Play": "\u5f00\u59cb", 
    "Play video": "\u64ad\u653e\u89c6\u9891", 
    "Please address the errors on this page first, and then save your progress.": "\u8bf7\u5148\u89e3\u51b3\u672c\u9875\u5b58\u5728\u7684\u9519\u8bef\uff0c\u7136\u540e\u4fdd\u5b58\u3002", 
    "Please correct the outlined fields.": "\u8bf7\u6539\u6b63\u753b\u51fa\u533a\u57df", 
    "Please describe this image or agree that it has no contextual value by checking the checkbox.": "\u8bf7\u63cf\u8ff0\u672c\u56fe\u7247\u6216\u52fe\u9009\u590d\u9009\u6846\u8868\u793a\u56fe\u7247\u4e0d\u542b\u4e0e\u5185\u5bb9\u76f8\u5173\u7684\u4ef7\u503c\u3002", 
    "Please do not use any spaces in this field.": "\u6b64\u5b57\u6bb5\u7684\u5185\u5bb9\u4e0d\u80fd\u5305\u542b\u7a7a\u683c\u3002", 
    "Please do not use any spaces or special characters in this field.": "\u6b64\u5b57\u6bb5\u7684\u5185\u5bb9\u4e0d\u80fd\u5305\u542b\u7a7a\u683c\u6216\u7279\u6b8a\u5b57\u7b26\u3002", 
    "Please enter a problem location.": "\u8bf7\u8f93\u5165\u95ee\u9898\u7684\u4f4d\u7f6e\u3002", 
    "Please enter a student email address or username.": "\u8bf7\u8f93\u5165\u5b66\u751f\u7684\u90ae\u4ef6\u5730\u5740\u6216\u7528\u6237\u540d\u3002", 
    "Please enter a term in the {anchorStart} search field{anchorEnd}.": "\u8bf7\u5728 {anchorStart} \u641c\u7d22\u5b57\u6bb5 {anchorEnd} \u3002", 
    "Please enter a username or email.": "\u8bf7\u8f93\u5165\u4e00\u4e2a\u7528\u6237\u540d\u6216\u8005\u7535\u5b50\u90ae\u4ef6\u3002", 
    "Please enter a valid donation amount.": "\u8bf7\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684\u6350\u52a9\u91d1\u989d\u3002", 
    "Please enter an integer between %(min)s and %(max)s.": "\u8bf7\u8f93\u5165\u4e00\u4e2a %(min)s \u5230 %(max)s \u4e4b\u95f4\u7684\u6574\u6570\u3002", 
    "Please enter an integer between 0 and 100.": "\u8bf7\u8f93\u5165\u4e00\u4e2a0\u5230100\u4e4b\u95f4\u7684\u6574\u6570\u3002", 
    "Please enter an integer greater than 0.": "\u8bf7\u8f93\u5165\u4e00\u4e2a\u5927\u4e8e0\u7684\u6574\u6570\u3002", 
    "Please enter non-negative integer.": "\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570\u3002", 
    "Please enter valid start date and time.": "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u5f00\u59cb\u65e5\u671f\u4e0e\u65f6\u95f4", 
    "Please enter your %(field)s.": "\u8bf7\u8f93\u5165\u60a8\u7684 %(field)s.", 
    "Please enter your email address below and we will send you instructions for setting a new password.": "\u8bf7\u5728\u4e0b\u9762\u8f93\u5165\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u4ee5\u4fbf\u6211\u4eec\u7ed9\u60a8\u53d1\u9001\u5982\u4f55\u8bbe\u7f6e\u65b0\u5bc6\u7801\u7684\u8bf4\u660e\u3002", 
    "Please follow the instructions here to upload a file elsewhere and link to it: {maxFileSizeRedirectUrl}": "\u8bf7\u6309\u7167\u8fd9\u91cc\uff08{maxFileSizeRedirectUrl}\uff09\u7684\u8bf4\u660e\u4e0a\u4f20\u6587\u4ef6\u5230\u522b\u5904\u540e\u94fe\u63a5\u5230\u8be5\u6587\u4ef6\u3002", 
    "Please provide a description of the link destination.": "\u8bf7\u63d0\u4f9b\u94fe\u63a5\u7684\u63cf\u8ff0\u3002", 
    "Please provide a valid URL.": "\u8bf7\u63d0\u4f9b\u4e00\u4e2a\u6709\u6548\u7684\u7f51\u5740\u3002", 
    "Please select a file in .srt format.": "\u8bf7\u9009\u62e9\u4e00\u4e2a .srt \u683c\u5f0f\u7684\u6587\u4ef6\u3002", 
    "Please specify a reason.": "\u8bf7\u8bf4\u660e\u539f\u56e0\u3002", 
    "Please verify that you have uploaded a valid image (PNG and JPEG).": "\u8bf7\u9a8c\u8bc1\u60a8\u5df2\u4e0a\u4f20\u4e86\u4e00\u5f20\u6709\u6548\u7684\u56fe\u7247(PNG\u6216JPEG\u683c\u5f0f)\u3002", 
    "Please verify that your webcam is connected and that you have allowed your browser to access it.": "\u8bf7\u68c0\u67e5\u60a8\u7684\u6444\u50cf\u5934\u5df2\u8fde\u63a5\u5e76\u4e14\u5141\u8bb8\u6d4f\u89c8\u5668\u4f7f\u7528\u5b83\u3002", 
<<<<<<< HEAD
    "Post body": "\u5e16\u5b50\u5185\u5bb9", 
    "Post type": "\u5e16\u5b50\u7c7b\u578b:", 
    "Poster": "\u5c01\u9762", 
    "Pre": "Pre \u6807\u7b7e", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Preferred Language": "\u9996\u9009\u8bed\u8a00", 
    "Press UP to enter the speed menu then use the UP and DOWN arrow keys to navigate the different speeds, then press ENTER to change to the selected speed.": "\u6309\u5411\u4e0a\u952e\u6253\u5f00\u901f\u5ea6\u83dc\u5355\uff0c\u518d\u6309\u4e0a\u4e0b\u65b9\u5411\u952e\u6765\u8c03\u6574\u901f\u5ea6\uff0c\u7136\u540e\u6309\u56de\u8f66\u952e\u5207\u6362\u5230\u9009\u5b9a\u901f\u5ea6\u3002", 
    "Press the UP arrow key to enter the language menu then use UP and DOWN arrow keys to navigate language options. Press ENTER to change to the selected language.": "\u6309\u5411\u4e0a\u952e\u6253\u5f00\u8bed\u8a00\u529f\u80fd\u83dc\u5355\uff0c\u7136\u540e\u4f7f\u7528\u4e0a\u4e0b\u65b9\u5411\u952e\u6765\u9009\u62e9\u8bed\u8a00\u9009\u9879\u3002\u6309\u56de\u8f66\u952e\u4ee5\u5207\u6362\u5230\u6240\u9009\u62e9\u7684\u8bed\u8a00\u3002", 
    "Prevent students from generating certificates in this course?": "\u662f\u5426\u963b\u6b62\u5b66\u751f\u751f\u6210\u8be5\u8bfe\u7a0b\u8bc1\u4e66\uff1f", 
<<<<<<< HEAD
    "Preview": "\u9884\u89c8", 
=======
    "Preview of uploaded image": "\u9884\u89c8\u5df2\u4e0a\u4f20\u7684\u56fe\u7247", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Preview this query": "\u9884\u89c8\u8be5\u67e5\u8be2", 
    "Previous": "\u4e0a\u4e00\u6b65", 
    "Processing Re-run Request": "\u6b63\u5728\u5904\u7406\u91cd\u542f\u8bf7\u6c42", 
    "Professional Education": "\u4e13\u4e1a\u6559\u80b2", 
    "Professional Education Verified Certificate": "\u4e13\u4e1a\u6559\u80b2\u8ba4\u8bc1\u8bc1\u4e66", 
<<<<<<< HEAD
    "Profile": "\u7528\u6237\u8d44\u6599", 
    "Profile Image": "\u8d44\u6599\u7167\u7247", 
    "Profile image for {username}": "{username} \u7684\u5934\u50cf", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Public": "\u516c\u5f00", 
    "Publish": "\u53d1\u5e03", 
    "Publishing": "\u6b63\u5728\u53d1\u5e03", 
    "Put a request on the queue to recreate the certificate for a particular user in a particular course": "\u5728\u961f\u5217\u4e2d\u653e\u7f6e\u4e00\u4e2a\u8bf7\u6c42, \u4ee5\u4fbf\u5728\u7279\u5b9a\u8bfe\u7a0b\u4e2d\u4e3a\u7279\u5b9a\u7528\u6237\u91cd\u65b0\u521b\u5efa\u8bc1\u4e66", 
    "Question": "\u95ee\u9898", 
    "Queued": "\u5df2\u6392\u961f", 
    "Reason field should not be left blank.": "\u539f\u56e0\u4e0d\u80fd\u4e3a\u7a7a\u3002", 
    "Receive updates": "\u63a5\u6536\u66f4\u65b0", 
    "Recent Activity": "\u8fd1\u671f\u6d3b\u52a8", 
    "Redo (Ctrl+Shift+Z)": "\u91cd\u505a(Ctrl+Shift+Z)", 
    "Redo (Ctrl+Y)": "\u91cd\u505a(Ctrl+Y)", 
    "Register through edX": "\u901a\u8fc7edX\u6ce8\u518c", 
    "Register with Institution/Campus Credentials": "\u4f7f\u7528\u673a\u6784/\u6821\u56ed\u5e10\u53f7\u6ce8\u518c", 
    "Related to: %(courseware_title_linked)s": "\u4e0e%(courseware_title_linked)s\u76f8\u5173", 
    "Removal is in progress. To avoid errors, stay on this page until the process is complete.": "\u6b63\u5728\u79fb\u9664\u3002\u4e3a\u907f\u514d\u53d1\u751f\u9519\u8bef\uff0c\u5728\u4e0a\u4f20\u5b8c\u6210\u524d\u8bf7\u4e0d\u8981\u79bb\u5f00\u672c\u9875\u3002", 
    "Remove": "\u79fb\u9664", 
<<<<<<< HEAD
    "Remove a user from the whitelist for a course": "\u4ece\u4f18\u826f\u540d\u5355\u4e2d\u5220\u9664\u8bfe\u7a0b\u7684\u7528\u6237", 
    "Remove link": "\u79fb\u9664\u94fe\u63a5", 
=======
    "Remove chapter %(chapterDisplayName)s": "\u5220\u9664\u7ae0\u8282 %(chapterDisplayName)s", 
    "Remove from Invalidation Table": "\u4ece\u65e0\u6548\u8868\u683c\u4e2d\u5220\u9664", 
    "Remove from List": "\u4ece\u5217\u8868\u4e2d\u5220\u9664", 
    "Remove subsection %(subsectionDisplayName)s": "\u5220\u9664\u8282 %(subsectionDisplayName)s", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Remove this team member?": "\u79fb\u9664\u6b64\u6210\u5458?", 
    "Removing": "\u79fb\u9664\u4e2d", 
    "Reply": "\u56de\u590d", 
    "Report": "\u62a5\u544a", 
    "Report abuse": "\u62a5\u544a\u8fb1\u9a82", 
    "Report abuse, topics, and responses": "\u4e3e\u62a5\u6ee5\u7528\u3001\u8bdd\u9898\u548c\u56de\u590d", 
    "Report annotation as inappropriate or offensive.": "\u62a5\u544a\u6b64\u6279\u6ce8\u4e0d\u6070\u5f53\u6216\u5177\u6709\u653b\u51fb\u6027\u3002", 
    "Reported": "\u5df2\u62a5\u544a", 
    "Requester": "\u8bf7\u6c42\u8005", 
    "Required field.": "\u5fc5\u586b\u5b57\u6bb5\u3002", 
    "Rescore problem '<%- problem_id %>' for all students?": "\u5bf9\u6240\u6709\u5b66\u751f\u91cd\u65b0\u8bc4\u5206\u95ee\u9898 \"<%-problem_id%>\"\uff1f", 
    "Reset Password": "\u91cd\u8bbe\u5bc6\u7801", 
    "Reset Your Password": "\u91cd\u7f6e\u60a8\u7684\u5bc6\u7801", 
    "Reset attempts for all students on problem '<%- problem_id %>'?": "\u662f\u5426\u5728\u95ee\u9898 \"<%-problem_id%>\" \u4e0a\u5c1d\u8bd5\u91cd\u7f6e\u6240\u6709\u5b66\u751f\uff1f", 
    "Reset my password": "\u91cd\u8bbe\u6211\u7684\u5bc6\u7801", 
    "Responses could not be loaded. Refresh the page and try again.": "\u65e0\u6cd5\u52a0\u8f7d\u54cd\u5e94\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "Restore enrollment code": "\u6062\u590d\u9009\u8bfe\u7801", 
<<<<<<< HEAD
    "Restore last draft": "\u6062\u590d\u4e0a\u4e00\u7248\u8349\u7a3f", 
=======
    "Retake Photo": "\u91cd\u65b0\u62cd\u7167", 
    "Retake Your Photos": "\u91cd\u62cd\u4f60\u7684\u7167\u7247", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Return and add email address": "\u8fd4\u56de\u5e76\u6dfb\u52a0\u7535\u5b50\u90ae\u4ef6\u5730\u5740", 
    "Return to Export": "\u8fd4\u56de\u81f3\u5bfc\u51fa\u9875\u9762", 
    "Return to team listing": "\u8fd4\u56de\u56e2\u961f\u5217\u8868", 
    "Review your info": "\u5ba1\u6838\u60a8\u7684\u4fe1\u606f", 
    "Revoke access": "\u53d6\u6d88\u6388\u6743", 
<<<<<<< HEAD
    "Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help": "\u4e30\u5bcc\u6587\u672c\u533a\u57df\u3002\u6309 ALT-F9 \u6253\u5f00\u83dc\u5355\uff0c\u6309 ALT-F10 \u6253\u5f00\u5de5\u5177\u680f\uff0c\u6309 ALT-0 \u67e5\u770b\u5e2e\u52a9", 
    "Right": "\u53f3\u5bf9\u9f50", 
    "Right to left": "\u4ece\u53f3\u5411\u5de6", 
    "Robots": "\u673a\u5668\u4eba", 
    "Row": "\u884c", 
    "Row actions are found here: ie. Deletion.": "\u5728\u8fd9\u91cc\u627e\u5230\u884c\u64cd\u4f5c ie\u3002\u5220\u9664.", 
    "Row group": "\u884c\u7ec4", 
    "Row properties": "\u884c\u5c5e\u6027", 
    "Row type": "\u884c\u7c7b\u578b", 
    "Rows": "\u884c", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Save": "\u4fdd\u5b58", 
    "Save Changes": "\u4fdd\u5b58\u66f4\u6539", 
    "Save changes": "\u4fdd\u5b58\u4fee\u6539", 
    "Saved cohort": "\u5df2\u4fdd\u5b58\u7684\u7fa4\u7ec4", 
    "Saving": "\u6b63\u5728\u4fdd\u5b58", 
    "Saving your email preference": "\u6b63\u5728\u4fdd\u5b58\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u504f\u597d", 
    "Saving...": "\u6b63\u5728\u4fdd\u5b58\u2026", 
    "Search": "\u641c\u7d22", 
    "Search Results": "\u641c\u7d22\u7ed3\u679c", 
    "Search all posts": "\u641c\u7d22\u6240\u6709\u5e16\u5b50", 
    "Search teams": "\u641c\u7d22\u56e2\u961f", 
    "Section": "\u7ae0", 
    "See all teams in your course, organized by topic. Join a team to collaborate with other learners who are interested in the same topic as you are.": "\u5728\u4f60\u7684\u8bfe\u7a0b\u4e2d\u67e5\u770b\u4ee5\u4e3b\u9898\u7ec4\u7ec7\u7684\u6240\u6709\u56e2\u961f\u3002\u52a0\u5165\u4e00\u4e2a\u56e2\u961f\uff0c\u4e0e\u5176\u4ed6\u5fd7\u540c\u9053\u5408\u7684\u5b66\u4e60\u8005\u5408\u4f5c\u3002", 
    "Select a chapter": "\u9009\u62e9\u4e00\u7ae0", 
<<<<<<< HEAD
    "Select all": "\u5168\u9009", 
    "Select the time zone for displaying course dates. If you do not specify a time zone, course dates, including assignment deadlines, will be displayed in your browser's local time zone.": "\u9009\u62e9\u7528\u4e8e\u663e\u793a\u8bfe\u7a0b\u65e5\u671f\u7684\u65f6\u533a\u3002\u5982\u679c\u672a\u6307\u5b9a\u65f6\u533a, \u5219\u8bfe\u7a0b\u65e5\u671f (\u5305\u62ec\u5de5\u4f5c\u5206\u914d\u622a\u6b62\u65f6\u95f4) \u5c06\u663e\u793a\u5728\u6d4f\u89c8\u5668\u7684\u672c\u5730\u65f6\u533a\u4e2d\u3002", 
=======
    "Select a cohort": "\u9009\u62e9\u4e00\u4e2a\u7fa4\u7ec4", 
    "Select a cohort to manage": "\u9009\u62e9\u8981\u7ba1\u7406\u7684\u7fa4\u7ec4", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Selected tab": "\u9009\u4e2d\u7684\u6807\u7b7e", 
    "Send to:": "\u53d1\u81f3\uff1a", 
    "Sent By": "\u53d1\u9001\u4eba", 
    "Sent By:": "\u53d1\u4ef6\u4eba", 
    "Sent To": "\u53d1\u9001\u5230", 
    "Sent To:": "\u53d1\u9001\u81f3", 
    "Sequence error! Cannot navigate to %(tab_name)s in the current SequenceModule. Please contact the course staff.": "\u5e8f\u5217\u9519\u8bef\uff01 \u65e0\u6cd5\u5bfc\u822a\u5230\u5f53\u524d\u5e8f\u5217\u6a21\u5757\u4e2d\u7684%(tab_name)s\uff0c\u8bf7\u8054\u7cfb\u8bfe\u7a0b\u5de5\u4f5c\u4eba\u5458\u3002", 
    "Server Error, Please refresh the page and try again.": "\u670d\u52a1\u5668\u9519\u8bef\u3002\u8bf7\u5237\u65b0\u9875\u9762\u5e76\u518d\u8bd5\u4e00\u6b21\u3002", 
    "Settings": "\u8bbe\u7f6e", 
    "Share": "\u5206\u4eab", 
    "Share Alike": "\u76f8\u540c\u65b9\u5f0f\u5171\u4eab", 
    "Share on Mozilla Backpack": "\u5206\u4eab\u5230 Mozilla Backpack \u4e0a", 
    "Share your \"%(display_name)s\" award": "\u5206\u4eab\u60a8\u7684 \"%(display_name)s\" \u5956\u52b1", 
    "Short explanation": "\u7b80\u8981\u8bf4\u660e", 
    "Show Comment (%(num_comments)s)": [
      "\u663e\u793a\u8bc4\u8bba (%(num_comments)s)"
    ], 
    "Show Deprecated Settings": "\u663e\u793a\u5df2\u8fc7\u65f6\u7684\u8bbe\u7f6e", 
    "Show Discussion": "\u663e\u793a\u8ba8\u8bba", 
    "Show Previews": "\u663e\u793a\u9884\u89c8", 
    "Show me other ways to sign in or register": "\u4e3a\u6211\u663e\u793a\u5176\u4ed6\u767b\u5f55\u6216\u6ce8\u518c\u65b9\u5f0f", 
    "Show notes": "\u663e\u793a\u6ce8\u91ca", 
    "Show posts by {username}.": "\u6309 {username} \u663e\u793a\u5e16\u5b50\u3002", 
    "Showing all responses": "\u663e\u793a\u6240\u6709\u7684\u56de\u590d", 
    "Showing first response": [
      "\u663e\u793a\u7b2c\u4e00\u4e2a {numResponses} \u54cd\u5e94"
    ], 
    "Showing {firstIndex} out of {numItems} total": "\u663e\u793a {firstIndex} \u51fa {numItems} \u603b\u8ba1", 
    "Showing {firstIndex}-{lastIndex} out of {numItems} total": "\u663e\u793a{firstIndex}-{lastIndex} \u51fa {numItems} \u603b\u8ba1", 
    "Sign In": "\u7b7e\u540d", 
    "Sign in": "\u767b\u5f55", 
    "Sign in here using your email address and password, or use one of the providers listed below.": "\u4f7f\u7528\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u548c\u5bc6\u7801\u6216\u4f7f\u7528\u4ee5\u4e0b\u5217\u51fa\u7684\u4e00\u4e2a\u65b9\u5f0f\u5728\u6b64\u5904\u767b\u5f55\u3002", 
    "Sign in here using your email address and password.": "\u5728\u8fd9\u91cc\u4f7f\u7528\u4f60\u7684\u7535\u5b50\u90ae\u4ef6\u548c\u5bc6\u7801\u767b\u5f55\u3002", 
    "Sign in using %(providerName)s": "\u4f7f\u7528 %(providerName)s \u767b\u5f55", 
    "Sign in with %(providerName)s": "\u4f7f\u7528 %(providerName)s \u767b\u5f55", 
    "Sign in with Institution/Campus Credentials": "\u4f7f\u7528\u673a\u6784/\u6821\u56ed\u5e10\u53f7\u767b\u5f55", 
    "Skip": "\u8df3\u8fc7", 
    "Some Rights Reserved": "\u4fdd\u7559\u90e8\u5206\u6743\u5229", 
    "Some images in this post have been omitted": "\u8fd9\u7bc7\u6587\u7ae0\u4e2d\u7684\u4e00\u4e9b\u56fe\u7247\u5df2\u88ab\u7701\u7565", 
    "Something went wrong changing this enrollment. Please try again.": "\u5728\u53d8\u66f4\u8fd9\u9879\u6ce8\u518c\u65f6\u51fa\u73b0\u4e86\u4e00\u4e9b\u95ee\u9898\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002", 
    "Sorry, no results were found.": "\u5bf9\u4e0d\u8d77\uff0c\u672a\u627e\u5230\u641c\u7d22\u7ed3\u679c\u3002", 
    "Sorry, there was an error parsing the subtitles that you uploaded. Please check the format and try again.": "\u5bf9\u4e0d\u8d77\uff0c\u60a8\u4e0a\u4f20\u7684\u5b57\u5e55\u6587\u4ef6\u5b58\u5728\u683c\u5f0f\u9519\u8bef\uff0c\u8bf7\u68c0\u67e5\u5e76\u91cd\u65b0\u4e0a\u4f20\u3002", 
    "Sorted by": "\u6392\u5217", 
<<<<<<< HEAD
    "Source": "\u6e90", 
    "Source code": "\u6e90\u4ee3\u7801", 
    "Special character": "\u7279\u6b8a\u5b57\u7b26", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Speed": "\u901f\u5ea6", 
    "Staff": "\u6559\u5458", 
    "Start": "\u5f00\u59cb", 
    "Start generating certificates for all students in this course?": "\u662f\u5426\u5f00\u59cb\u4e3a\u8be5\u8bfe\u7a0b\u7684\u6240\u6709\u5b66\u751f\u751f\u6210\u8bc1\u4e66\uff1f", 
    "Start of transcript. Skip to the end.": "\u5b57\u5e55\u5f00\u59cb\u3002\u8df3\u8f6c\u81f3\u7ed3\u5c3e\u3002", 
    "Start regenerating certificates for students in this course?": "\u786e\u5b9a\u91cd\u65b0\u4ea7\u751f\u6b64\u8bfe\u7a0b\u6240\u6709\u5b66\u751f\u7684\u8bc1\u4e66\uff1f", 
    "Start working toward your next learning goal.": "\u5f00\u59cb\u5411\u60a8\u7684\u4e0b\u4e00\u4e2a\u5b66\u4e60\u76ee\u6807\u8fc8\u8fdb\u3002", 
    "Started entrance exam rescore task for student '{student_id}'. Click the 'Show Task Status' button to see the status of the task.": "\u5f00\u59cb\u5165\u5b66\u8003\u8bd5\u91cd\u65b0\u8bc4\u5206\u5b66\u751f \"{student_id}\" \u7684\u4efb\u52a1\u3002\u5355\u51fb \"\u663e\u793a\u4efb\u52a1\u72b6\u6001\" \u6309\u94ae\u4ee5\u67e5\u770b\u4efb\u52a1\u7684\u72b6\u6001\u3002", 
    "Started rescore problem task for problem '<%- problem_id %>' and student '<%- student_id %>'. Click the 'Show Task Status' button to see the status of the task.": "\u5df2\u5f00\u59cb\u91cd\u65b0\u8bc4\u5206\u95ee\u9898 \"<%-problem_id%>\" \u548c \"\u5b66\u751f\" <%-student_id%> \u7684\u95ee\u9898\u4efb\u52a1\u3002\u5355\u51fb \"\u663e\u793a\u4efb\u52a1\u72b6\u6001\" \u6309\u94ae\u4ee5\u67e5\u770b\u4efb\u52a1\u7684\u72b6\u6001\u3002", 
    "Starts": "\u5f00\u59cb", 
    "Starts: %(start_date)s": "\u5f00\u59cb\u4e8e\uff1a%(start_date)s", 
    "State": "\u72b6\u6001", 
    "Status": "\u72b6\u6001", 
    "Status of Your Response": "\u4f60\u7684\u7b54\u6848\u7684\u72b6\u6001", 
    "Student": "\u5b66\u751f", 
    "Student Removed from certificate white list successfully.": "\u5b66\u751f\u5df2\u4ece\u8bc1\u4e66\u8bb8\u53ef\u540d\u5355\u4e2d\u79fb\u9664\u6210\u529f\u3002", 
<<<<<<< HEAD
    "Student username/email field is required and can not be empty. Kindly fill in username/email and then press \"Add to Exception List\" button.": "\u5b66\u751f\u7528\u6237\u540d/\u7535\u5b50\u90ae\u4ef6\u5b57\u6bb5\u662f\u5fc5\u9700\u7684, \u4e0d\u80fd\u4e3a\u7a7a\u3002\u8bf7\u586b\u5199\u7528\u6237\u540d/\u7535\u5b50\u90ae\u4ef6, \u7136\u540e\u6309 \"\u6dfb\u52a0\u5230\u4f8b\u5916\u5217\u8868 \" \u6309\u94ae\u3002", 
    "Student username/email field is required and can not be empty. Kindly fill in username/email and then press \"Invalidate Certificate\" button.": "\u5b66\u751f\u7528\u6237\u540d/\u7535\u5b50\u90ae\u4ef6\u5b57\u6bb5\u662f\u5fc5\u9700\u7684, \u4e0d\u80fd\u4e3a\u7a7a\u3002\u8bf7\u586b\u5199\u7528\u6237\u540d/\u7535\u5b50\u90ae\u4ef6, \u7136\u540e\u6309 \"\u65e0\u6548\u8bc1\u4e66 \" \u6309\u94ae\u3002", 
    "Style": "\u6837\u5f0f", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Subject": "\u6807\u9898", 
    "Subject:": "\u6807\u9898", 
    "Submission aborted! Sorry, your browser does not support file uploads. If you can, please use Chrome or Safari which have been verified to support file uploads.": "\u63d0\u4ea4\u4e2d\u6b62\uff01\u62b1\u6b49\uff0c\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u3002\u5982\u679c\u53ef\u4ee5\uff0c\u8bf7\u4f7f\u7528\u5df2\u9a8c\u8bc1\u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u7684Chrome\u6216Safari\u3002", 
    "Submit": "\u63d0\u4ea4", 
    "Submitted": "\u5df2\u63d0\u4ea4", 
    "Subsection": "\u8282", 
    "Success": "\u6210\u529f", 
    "Success! Problem attempts reset for problem '<%- problem_id %>' and student '<%- student_id %>'.": "\u6210\u529f!\u95ee\u9898\u5c1d\u8bd5\u91cd\u7f6e\u4e3a\u95ee\u9898 \"<%-problem_id%>\" \u548c \"\u5b66\u751f\" <%-student_id%> \"\u3002", 
    "Successfully deleted student state for user {user}": "\u6210\u529f\u5220\u9664\u5b66\u751f{user}\u7684\u72b6\u6001", 
    "Successfully enrolled and sent email to the following users:": "\u4ee5\u4e0b\u7528\u6237\u5df2\u6210\u529f\u9009\u8bfe\uff0c\u5e76\u5411\u4ed6\u4eec\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\uff1a", 
    "Successfully enrolled the following users:": "\u4ee5\u4e0b\u7528\u6237\u5df2\u7ecf\u6210\u529f\u9009\u8bfe\uff1a", 
    "Successfully rescored problem for user {user}": "\u6210\u529f\u91cd\u8bc4\u7528\u6237 {user}\u5f97\u5206", 
    "Successfully rescored problem to improve score for user {user}": "\u6210\u529f\u91cd\u65b0\u8bc4\u5206\u95ee\u9898\u4ee5\u63d0\u9ad8\u7528\u6237 {user} \u7684\u8bc4\u5206", 
    "Successfully reset the attempts for user {user}": "\u6210\u529f\u91cd\u7f6e\u7528\u6237{user}\u7684\u8bf7\u6c42", 
    "Successfully sent enrollment emails to the following users. They will be allowed to enroll once they register:": "\u9009\u8bfe\u90ae\u4ef6\u5df2\u6210\u529f\u53d1\u9001\u81f3\u4ee5\u4e0b\u7528\u6237\uff0c\u4ed6\u4eec\u6ce8\u518c\u540e\u5373\u53ef\u9009\u8bfe\uff1a", 
    "Successfully sent enrollment emails to the following users. They will be enrolled once they register:": "\u9009\u8bfe\u90ae\u4ef6\u5df2\u6210\u529f\u53d1\u9001\u81f3\u8fd9\u4e9b\u7528\u6237\uff0c\u4ed6\u4eec\u6ce8\u518c\u540e\u5373\u5df2\u9009\u8bfe\uff1a", 
    "Successfully started task to rescore problem '<%- problem_id %>' for all students. Click the 'Show Task Status' button to see the status of the task.": "\u5df2\u6210\u529f\u542f\u52a8\u4efb\u52a1\u4ee5\u91cd\u65b0\u8bc4\u5206\u6240\u6709\u5b66\u751f\u7684\u95ee\u9898 \"<%-problem_id%>\"\u3002\u5355\u51fb \"\u663e\u793a\u4efb\u52a1\u72b6\u6001\" \u6309\u94ae\u4ee5\u67e5\u770b\u4efb\u52a1\u7684\u72b6\u6001\u3002", 
    "Successfully started task to reset attempts for problem '<%- problem_id %>'. Click the 'Show Task Status' button to see the status of the task.": "\u5df2\u6210\u529f\u542f\u52a8\u4efb\u52a1\u4ee5\u91cd\u7f6e\u95ee\u9898 \"<%-problem_id%>\" \u7684\u5c1d\u8bd5\u3002\u5355\u51fb \"\u663e\u793a\u4efb\u52a1\u72b6\u6001\" \u6309\u94ae\u4ee5\u67e5\u770b\u4efb\u52a1\u7684\u72b6\u6001\u3002", 
    "Successfully unlinked.": "\u89e3\u7ed1\u6210\u529f\u3002", 
<<<<<<< HEAD
    "Superscript": "\u4e0a\u6807", 
    "TOTAL": "\u603b\u8ba1", 
    "Table": "\u8868\u683c", 
    "Table properties": "\u8868\u683c\u5c5e\u6027", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Tags": "\u6807\u7b7e", 
    "Tags:": "\u6807\u7b7e\uff1a", 
    "Take a photo of your ID": "\u62cd\u6444\u4e00\u5f20\u60a8\u7684\u8eab\u4efd\u8bc1\u4ef6\u7684\u7167\u7247", 
    "Take me to the main course page": "\u8df3\u8f6c\u81f3\u8bfe\u7a0b\u4e3b\u9875", 
    "Take me to the main library page": "\u8df3\u8f6c\u81f3\u77e5\u8bc6\u5e93\u4e3b\u9875", 
    "Task ID": "\u4efb\u52a1ID", 
    "Task Progress": "\u4efb\u52a1\u8fdb\u5ea6", 
    "Task Status": "\u4efb\u52a1\u72b6\u6001", 
    "Task Type": "\u4efb\u52a1\u7c7b\u578b", 
    "Task inputs": "\u4efb\u52a1\u8f93\u5165", 
    "Teaching Assistant": "\u52a9\u6559", 
    "Team \"{team}\" successfully deleted.": "\u56e2\u961f \"{team}\" \u5df2\u6210\u529f\u5220\u9664\u3002", 
    "Team Description (Required) *": "\u56e2\u961f\u4ecb\u7ecd(\u5fc5\u9700)*", 
    "Team Name (Required) *": "\u56e2\u961f\u540d(\u5fc5\u9700)*", 
    "Team Search": "\u641c\u7d22\u56e2\u961f", 
    "Team description cannot have more than 300 characters.": "\u56e2\u961f\u63cf\u8ff0\u4e0d\u80fd\u8d85\u8fc7 300 \u4e2a\u5b57\u7b26\u3002", 
    "Team name cannot have more than 255 characters.": "\u56e2\u961f\u540d\u79f0\u4e0d\u80fd\u8d85\u8fc7 255 \u4e2a\u5b57\u7b26", 
    "Teams": "\u56e2\u961f", 
    "Teams Pagination": "\u56e2\u961f\u5206\u9875", 
<<<<<<< HEAD
    "Tell other learners a little about yourself: where you live, what your interests are, why you're taking courses, or what you hope to learn.": "\u5411\u5176\u4ed6\u7528\u6237\u7b80\u5355\u4ecb\u7ecd\u4e0b\u4f60\u81ea\u5df1\uff1a\u5982\u5c45\u4f4f\u5730\u3001\u5174\u8da3\u7231\u597d\u3001\u4e3a\u4ec0\u4e48\u9009\u62e9\u8fd9\u4e9b\u8bfe\u7a0b\uff0c\u53ca\u4f60\u5e0c\u671b\u5b66\u4e60\u54ea\u65b9\u9762\u7684\u77e5\u8bc6", 
    "Templates": "\u6a21\u677f", 
    "Terms of Service and Honor Code": "\u670d\u52a1\u6761\u6b3e\u548c\u8bda\u4fe1\u51c6\u5219", 
    "Text": "\u6587\u672c", 
    "Text color": "\u6587\u672c\u989c\u8272", 
    "Text to display": "\u8981\u663e\u793a\u7684\u6587\u5b57", 
    "The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?": "\u8f93\u5165\u7684URL\u4f3c\u4e4e\u662f\u4e00\u4e2a\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0c\u60a8\u60f3\u52a0\u4e0a\u5fc5\u8981\u7684\u201cmailto:\u201d\u524d\u7f00\u5417\uff1f", 
    "The URL you entered seems to be an external link. Do you want to add the required http:// prefix?": "\u8f93\u5165\u7684 URL \u4f3c\u4e4e\u662f\u4e00\u4e2a\u5916\u90e8\u94fe\u63a5\uff0c\u60a8\u60f3\u52a0\u4e0a\u5fc5\u8981\u7684 http:// \u524d\u7f00\u5417\uff1f", 
=======
    "Text": "\u6587\u672c", 
    "Thank you %(full_name)s! We have received your payment for %(course_name)s.": "\u8c22\u8c22\u60a8\uff0c%(full_name)s\uff01\u6211\u4eec\u5df2\u7ecf\u6536\u5230\u4e86\u60a8\u4e3a%(course_name)s\u7684\u4ed8\u6b3e\u3002", 
    "Thank you for submitting your financial assistance application for {course_name}! You can expect a response in 2-4 business days.": "\u611f\u8c22\u60a8\u63d0\u4ea4 {course_name} \u7684\u7ecf\u6d4e\u63f4\u52a9\u7533\u8bf7\uff01\u60a8\u5c06\u5728 2 \u81f3 4 \u4e2a\u5de5\u4f5c\u65e5\u5185\u5f97\u5230\u56de\u590d\u3002", 
    "Thank you for submitting your photos. We will review them shortly. You can now sign up for any %(platformName)s course that offers verified certificates. Verification is good for one year. After one year, you must submit photos for verification again.": "\u611f\u8c22\u63d0\u4ea4\u60a8\u7684\u7167\u7247\uff0c\u6211\u4eec\u5c06\u4e8e\u7a0d\u540e\u8fdb\u884c\u5ba1\u6838\u3002\u60a8\u73b0\u5728\u5c31\u53ef\u4ee5\u6ce8\u518c%(platformName)s\u4e0a\u4efb\u4e00\u63d0\u4f9b\u8ba4\u8bc1\u8bc1\u4e66\u7684\u8bfe\u7a0b\u3002\u8ba4\u8bc1\u6709\u6548\u671f\u4e3a\u4e00\u5e74\u3002\u4e00\u5e74\u540e\uff0c\u60a8\u5fc5\u987b\u8981\u63d0\u4ea4\u7167\u7247\u91cd\u65b0\u8ba4\u8bc1\u3002", 
    "Thank you! We have received your payment for {courseName}.": "\u8c22\u8c22\uff01\u6211\u4eec\u5df2\u7ecf\u6536\u5230\u4f60\u7684 {courseName} \u4ed8\u6b3e\u3002", 
    "Thanks for returning to verify your ID in: {courseName}": "\u611f\u8c22\u4f60\u8fd4\u56de\u8ba4\u8bc1\u60a8\u5728 {courseName} \u4e2d\u7684 ID", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "The certificate for this learner has been re-validated and the system is re-running the grade for this learner.": "\u8fd9\u540d\u5b66\u751f\u7684\u8bc1\u4e66\u5df2\u7ecf\u91cd\u65b0\u9a8c\u8bc1\u53ca\u7cfb\u7edf\u91cd\u65b0\u8ba1\u7b97\u8be5\u540d\u5b66\u751f\u7684\u6210\u7ee9\u3002", 
    "The cohort cannot be added": "\u8be5\u7fa4\u7ec4\u4e0d\u80fd\u6dfb\u52a0", 
    "The cohort cannot be saved": "\u8be5\u7fa4\u7ec4\u4e0d\u80fd\u4fdd\u5b58", 
    "The combined length of the organization and library code fields cannot be more than <%=limit%> characters.": "\u673a\u6784\u548c\u77e5\u8bc6\u5e93\u7f16\u53f7\u5b57\u6bb5\u5408\u5728\u4e00\u8d77\u4e0d\u80fd\u8d85\u8fc7 <%=limit%> \u4e2a\u5b57\u7b26", 
    "The combined length of the organization, course number, and course run fields cannot be more than <%=limit%> characters.": "\u673a\u6784\u3001\u8bfe\u7a0b\u7f16\u53f7\u548c\u5f00\u8bfe\u65f6\u95f4\u5b57\u6bb5\u5408\u5728\u4e00\u8d77\u4e0d\u80fd\u8d85\u8fc7 <%=limit%> \u4e2a\u5b57\u7b26\u3002", 
    "The country that team members primarily identify with.": "\u591a\u6570\u56e2\u961f\u6210\u5458\u6765\u81ea\u7684\u56fd\u5bb6", 
    "The course must have an assigned start date.": "\u8bfe\u7a0b\u5fc5\u987b\u6307\u5b9a\u5f00\u59cb\u65e5\u671f\u3002", 
    "The display of ungraded and checked out responses could not be loaded.": "\u672a\u6253\u5206\u53ca\u5df2\u901a\u8fc7\u56de\u7b54\u7684\u7a97\u53e3\u65e0\u6cd5\u52a0\u8f7d\u3002", 
    "The email address you've provided isn't formatted correctly.": "\u60a8\u6240\u63d0\u4f9b\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u7684\u683c\u5f0f\u4e0d\u6b63\u786e\u3002", 
    "The enrollment end date cannot be after the course end date.": "\u9009\u8bfe\u622a\u6b62\u65e5\u671f\u5e94\u5728\u8bfe\u7a0b\u7ed3\u675f\u65e5\u671f\u4e4b\u524d\u3002", 
    "The enrollment start date cannot be after the enrollment end date.": "\u9009\u8bfe\u5f00\u59cb\u65e5\u671f\u5e94\u8be5\u65e9\u4e8e\u9009\u8bfe\u622a\u6b62\u65e5\u671f\u3002", 
    "The file ": "\u8be5\u6587\u4ef6", 
    "The file must be at least {size} in size.": "\u6587\u4ef6\u5fc5\u987b\u5927\u4e8e {size}", 
    "The file must be smaller than {size} in size.": "\u6587\u4ef6\u5fc5\u987b\u5c0f\u4e8e {size} ", 
    "The following email addresses and/or usernames are invalid:": "\u4ee5\u4e0b\u7535\u5b50\u90ae\u4ef6\u5730\u5740\uff0f\u7528\u6237\u540d\u65e0\u6548\uff1a", 
    "The following errors were generated:": "\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef\uff1a", 
<<<<<<< HEAD
=======
    "The following file types are not allowed: ": "\u4e0b\u5217\u6587\u4ef6\u7c7b\u578b\u4e0d\u53ef\u7528\uff1a", 
    "The following information is already a part of your {platform} profile. We\\'ve included it here for your application.": "\u4ee5\u4e0b\u4fe1\u606f\u5df2\u7ecf\u662f\u60a8\u7684 {platform} \u7b80\u8ff0\u7684\u4e00\u90e8\u5206\u3002\u6211\u4eec\u5df2\u5c06\u5176\u5217\u5165\u60a8\u7684\u7533\u8bf7\u4e2d\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "The following users are no longer enrolled in the course:": "\u4ee5\u4e0b\u7528\u6237\u5df2\u4e0d\u518d\u9009\u4fee\u672c\u8bfe\u7a0b\uff1a", 
    "The following warnings were generated:": "\u51fa\u73b0\u4ee5\u4e0b\u8b66\u544a\uff1a", 
    "The grading process is still running. Refresh the page to see updates.": "\u8bc4\u5206\u8fc7\u7a0b\u4ecd\u5728\u8fdb\u884c\uff0c\u8bf7\u5237\u65b0\u9875\u9762\u67e5\u770b\u66f4\u65b0\u3002", 
    "The language that team members primarily use to communicate with each other.": "\u56e2\u961f\u6210\u5458\u4e3b\u8981\u4f7f\u7528\u7684\u4ea4\u6d41\u8bed\u8a00\u3002", 
<<<<<<< HEAD
    "The language used throughout this site. This site is currently available in a limited number of languages.": "\u6574\u4e2a\u7f51\u7ad9\u663e\u793a\u7684\u8bed\u8a00\u3002\u76ee\u524d\u4ec5\u9650\u4e8e\u51e0\u79cd\u8bed\u8a00\u3002", 
    "The name that appears on your Statements of Accomplishment. Other learners never see your full name.": "\u51fa\u73b0\u5728\u60a8\u7684\u7ed3\u4e1a\u8bc1\u660e\u4e2d\u7684\u540d\u79f0\u3002\u5176\u4ed6\u5b66\u4e60\u8005\u6c38\u8fdc\u770b\u4e0d\u60a8\u7684\u5168\u540d\u3002", 
    "The name that identifies you throughout {platform_name}. You cannot change your username.": "\u8be5\u540d\u79f0\u4e3a\u60a8\u5728\u6574\u4e2a {platform_name}\u7684\u6807\u8bc6\u3002\u786e\u8ba4\u540e\u65e0\u6cd5\u66f4\u6539\u60a8\u7684\u7528\u6237\u540d\u3002", 
    "The post you selected has been deleted.": "\u60a8\u9009\u62e9\u7684\u5e16\u5b50\u5df2\u88ab\u5220\u9664\u3002", 
=======
    "The photo of your face matches the photo on your ID.": "\u60a8\u7684\u9762\u90e8\u7167\u7247\u4e0e\u60a8\u8eab\u4efd\u8bc1\u4ef6\u4e0a\u7684\u7167\u7247\u76f8\u7b26\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "The raw error message is:": "\u539f\u59cb\u7684\u9519\u8bef\u4fe1\u606f\u662f\uff1a", 
    "The selected content group does not exist": "\u9009\u53d6\u7684\u5185\u5bb9\u7ec4\u4e0d\u5b58\u5728\u3002", 
    "The server could not be contacted.": "\u65e0\u6cd5\u8054\u7cfb\u670d\u52a1\u5668\u3002", 
    "The staff assessment form could not be loaded.": "\u5de5\u4f5c\u4eba\u5458\u8bc4\u6d4b\u8868\u683c\u65e0\u6cd5\u52a0\u8f7d\u3002", 
    "The submission could not be removed from the grading pool.": "\u8be5\u63d0\u4ea4\u65e0\u6cd5\u4ece\u8bc4\u5206\u6c60\u4e2d\u5220\u9664\u3002", 
    "The {cohortGroupName} cohort has been created. You can manually add students to this cohort below.": "{cohortGroupName}\u7fa4\u7ec4\u5df2\u7ecf\u521b\u5efa\uff0c\u60a8\u53ef\u4ee5\u624b\u52a8\u6dfb\u52a0\u5b66\u751f\u5230\u8fd9\u4e2a\u7fa4\u7ec4\u3002", 
    "There are invalid keywords in your email. Check the following keywords and try again.": "\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u4e2d\u6709\u65e0\u6548\u7684\u5173\u952e\u8bcd\u3002\u8bf7\u68c0\u67e5\u4ee5\u4e0b\u5173\u952e\u5b57\u5e76\u91cd\u8bd5\u3002", 
    "There are invalid keywords in your email. Please check the following keywords and try again:": "\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u4e2d\u6709\u65e0\u6548\u7684\u5173\u952e\u5b57\u3002\u8bf7\u68c0\u67e5\u4ee5\u4e0b\u5173\u952e\u5b57\u5e76\u91cd\u8bd5\uff1a", 
    "There has been an error processing your survey.": "\u5728\u5904\u7406\u60a8\u7684\u8c03\u67e5\u65f6\u51fa\u73b0\u4e86\u4e00\u4e2a\u9519\u8bef\u3002", 
    "There has been an error while exporting.": "\u5bfc\u51fa\u65f6\u51fa\u9519\u4e86\u3002", 
    "There has been an error with your export.": "\u5bfc\u51fa\u65f6\u53d1\u751f\u4e86\u9519\u8bef\u3002", 
    "There is no email history for this course.": "\u672c\u8bfe\u7a0b\u5c1a\u65e0\u53d1\u9001\u7535\u5b50\u90ae\u4ef6\u8bb0\u5f55\u3002", 
    "There must be at least one group.": "\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u4e2a\u7ec4\u3002", 
    "There must be one cohort to which students can automatically be assigned.": "\u5fc5\u987b\u5b58\u5728\u4e00\u4e2a\u53ef\u4ee5\u5c06\u5b66\u751f\u81ea\u52a8\u5206\u914d\u8fdb\u53bb\u7684\u7fa4\u7ec4\u3002", 
    "There was a problem creating the report. Select \"Create Executive Summary\" to try again.": "\u521b\u5efa\u62a5\u544a\u65f6\u53d1\u751f\u95ee\u9898\uff0c\u8bf7\u9009\u62e9\u201c\u521b\u5efa\u6267\u884c\u6458\u8981\u201d\u91cd\u65b0\u5c1d\u8bd5\u3002", 
    "There was an error changing the user's role": "\u66f4\u6539\u7528\u6237\u89d2\u8272\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9519\u8bef", 
    "There was an error obtaining email content history for this course.": "\u5b58\u5728\u80fd\u83b7\u53d6\u8be5\u8bfe\u7a0b\u90ae\u4ef6\u5185\u5bb9\u5386\u53f2\u8bb0\u5f55\u7684\u9519\u8bef", 
    "There was an error obtaining email task history for this course.": "\u83b7\u53d6\u8be5\u8bfe\u7a0b\u7684\u90ae\u4ef6\u4efb\u52a1\u5386\u53f2\u8bb0\u5f55\u65f6\u53d1\u751f\u9519\u8bef\u3002", 
<<<<<<< HEAD
=======
    "There was an error retrieving preview results for this catalog. Please check that your query is correct and try again.": "\u5728\u83b7\u53d6\u8fd9\u4e2a\u76ee\u5f55\u7684\u9884\u89c8\u7ed3\u679c\u65f6\u53d1\u751f\u9519\u8bef\u3002\u8bf7\u68c0\u67e5\u60a8\u7684\u6307\u4ee4\u662f\u5426\u6b63\u786e\u5e76\u91cd\u8bd5\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "There was an error, try searching again.": "\u51fa\u9519\u4e86\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u65b0\u641c\u7d20\u3002", 
    "There were errors reindexing course.": "\u91cd\u5efa\u8bfe\u7a0b\u7d22\u5f15\u65f6\u51fa\u9519\u4e86\u3002", 
    "There's already another assignment type with this name.": "\u5df2\u7ecf\u6709\u53e6\u4e00\u4e2a\u4f5c\u4e1a\u7c7b\u578b\u4f7f\u7528\u4e86\u8fd9\u4e2a\u540d\u5b57\u3002", 
    "These users were not added as beta testers:": "\u8fd9\u4e9b\u7528\u6237\u672a\u6dfb\u52a0\u4e3abeta\u6d4b\u8bd5\u8005\uff1a", 
    "These users were not affiliated with the course so could not be unenrolled:": "\u8fd9\u4e9b\u7528\u6237\u5e76\u4e0d\u5c5e\u4e8e\u672c\u8bfe\u7a0b\u5b66\u5458\uff0c\u56e0\u6b64\u65e0\u6cd5\u4f7f\u5176\u653e\u5f03\u9009\u4fee\uff1a", 
    "These users were not removed as beta testers:": "\u8fd9\u4e9b\u7528\u6237\u672a\u4ecebeta\u6d4b\u8bd5\u8005\u4e2d\u5220\u9664\uff1a", 
    "These users were successfully added as beta testers:": "\u8fd9\u4e9b\u7528\u6237\u5df2\u7ecf\u6dfb\u52a0\u4e3abeta\u6d4b\u8bd5\u8005\uff1a", 
    "These users were successfully removed as beta testers:": "\u8fd9\u4e9b\u7528\u6237\u4e0d\u518d\u662fbeta\u6d4b\u8bd5\u8005\uff1a", 
    "These users will be allowed to enroll once they register:": "\u8fd9\u4e9b\u7528\u6237\u4e00\u65e6\u6ce8\u518c\u5373\u53ef\u9009\u8bfe\uff1a", 
    "These users will be enrolled once they register:": "\u8fd9\u4e9b\u7528\u6237\u6ce8\u518c\u540e\u5373\u5df2\u9009\u8bfe\uff1a", 
    "This action cannot be undone.": "\u8fd9\u4e2a\u52a8\u4f5c\u65e0\u6cd5\u53d6\u6d88\u3002", 
    "This annotation has %(count)s flag.": [
      "\u6b64\u6ce8\u91ca\u5e26\u6709 %(count)s \u4e2a\u6807\u8bb0\u3002"
    ], 
    "This assessment could not be submitted.": "\u8fd9\u4efd\u8bc4\u6d4b\u65e0\u6cd5\u63d0\u4ea4\u3002", 
    "This browser cannot play .mp4, .ogg, or .webm files.": "\u5f53\u524d\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u64ad\u653e MP4\u3001OGG \u6216 WEBM \u683c\u5f0f\u7684\u6587\u4ef6\u3002", 
    "This comment could not be deleted. Refresh the page and try again.": "\u65e0\u6cd5\u5220\u9664\u6b64\u6ce8\u91ca\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This component has validation issues.": "\u8be5\u7ec4\u4ef6\u5b58\u5728\u9a8c\u8bc1\u95ee\u9898\u3002", 
    "This course has automatic cohorting enabled for verified track learners, but cohorts are disabled. You must enable cohorts for the feature to work.": "\u8fd9\u95e8\u8bfe\u7a0b\u4e3a\u8981\u83b7\u53d6\u8ba4\u8bc1\u8bc1\u4e66\u7684\u5b66\u751f\u81ea\u52a8\u5206\u7ec4\uff0c\u4f46\u662f\u7fa4\u7ec4\u529f\u80fd\u88ab\u7981\u6b62\u3002\u4e3a\u4e86\u4f7f\u8be5\u529f\u80fd\u6b63\u5e38\u8fd0\u884c\uff0c\u60a8\u5fc5\u987b\u542f\u7528\u7fa4\u7ec4\u529f\u80fd\uff0c", 
    "This course has automatic cohorting enabled for verified track learners, but the required cohort does not exist. You must create a manually-assigned cohort named '{verifiedCohortName}' for the feature to work.": "\u8fd9\u95e8\u8bfe\u7a0b\u4e3a\u8981\u83b7\u53d6\u8ba4\u8bc1\u8bc1\u4e66\u7684\u5b66\u751f\u81ea\u52a8\u5206\u7ec4\uff0c\u4f46\u8981\u6c42\u7684\u7fa4\u7ec4\u4e0d\u5b58\u5728\u3002\u4e3a\u4e86\u4f7f\u8be5\u529f\u80fd\u6b63\u5e38\u8fd0\u884c\uff0c\u60a8\u5fc5\u987b\u624b\u52a8\u8bbe\u7f6e\u4e00\u4e2a\u7fa4\u7ec4\uff0c\u540d\u4e3a'{verifiedCohortName}'\u3002", 
    "This course uses automatic cohorting for verified track learners. You cannot disable cohorts, and you cannot rename the manual cohort named '{verifiedCohortName}'. To change the configuration for verified track cohorts, contact your edX partner manager.": "\u8fd9\u95e8\u8bfe\u7a0b\u4e3a\u8981\u83b7\u53d6\u8ba4\u8bc1\u8bc1\u4e66\u7684\u5b66\u751f\u81ea\u52a8\u5206\u7ec4\u3002\u60a8\u65e0\u6cd5\u53d6\u6d88\u5206\u7ec4\uff0c\u4e5f\u65e0\u6cd5\u91cd\u65b0\u547d\u540d\u624b\u52a8\u8bbe\u7f6e\u7684\u7fa4\u7ec4'{verifiedCohortName}'\u3002\u5982\u8981\u6539\u53d8\u8ba4\u8bc1\u7ec4\u7684\u5206\u7ec4\u8bbe\u7f6e\uff0c\u8bf7\u8054\u7cfb\u60a8\u7684edX \u5408\u4f5c\u7ecf\u7406\u3002", 
<<<<<<< HEAD
    "This discussion could not be loaded. Refresh the page and try again.": "\u65e0\u6cd5\u52a0\u8f7d\u6b64\u8ba8\u8bba\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This image is for decorative purposes only and does not require a description.": "\u6b64\u56fe\u7247\u4ec5\u4f5c\u88c5\u9970\u7528\uff0c\u65e0\u9700\u63cf\u8ff0\u3002", 
    "This learner is currently sharing a limited profile.": "\u8be5\u5b66\u751f\u5f53\u524d\u516c\u5f00\u90e8\u5206\u4e2a\u4eba\u4fe1\u606f\u3002", 
    "This learner will be removed from the team, allowing another learner to take the available spot.": "\u6b64\u6210\u5458\u5c06\u88ab\u79fb\u9664\uff0c\u91ca\u51fa\u540d\u989d\u540e\u5176\u4ed6\u6210\u5458\u53ef\u52a0\u5165\u3002", 
    "This link will open in a modal window": "\u8be5\u94fe\u63a5\u5c06\u5728\u4e00\u4e2a\u6a21\u5f0f\u7a97\u53e3\u4e2d\u6253\u5f00", 
    "This page contains information about orders that you have placed with {platform_name}.": "\u672c\u9875\u5305\u542b\u6709\u5173\u60a8\u5df2\u653e\u7f6e\u5728 {platform_name} \u4e0a\u7684\u8ba2\u5355\u7684\u4fe1\u606f\u3002", 
    "This post could not be closed. Refresh the page and try again.": "\u65e0\u6cd5\u5173\u95ed\u6b64\u5e16\u5b50\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This post could not be flagged for abuse. Refresh the page and try again.": "\u8fd9\u4e2a\u5e16\u5b50\u4e0d\u80fd\u88ab\u6807\u8bb0\u4e3a\u6ee5\u7528\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This post could not be pinned. Refresh the page and try again.": "\u65e0\u6cd5\u9501\u5b9a\u6b64\u5e16\u5b50\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This post could not be reopened. Refresh the page and try again.": "\u65e0\u6cd5\u91cd\u65b0\u6253\u5f00\u6b64\u5e16\u5b50\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This post could not be unflagged for abuse. Refresh the page and try again.": "\u8fd9\u7bc7\u6587\u7ae0\u4e0d\u80fd\u53d6\u6d88\u6807\u8bb0\u6ee5\u7528\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This post could not be unpinned. Refresh the page and try again.": "\u8fd9\u7bc7\u6587\u7ae0\u4e0d\u80fd\u53d6\u6d88\u9501\u5b9a\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This post is visible only to %(group_name)s.": "\u6b64\u5e16\u53ea\u5bf9%(group_name)s\u7ec4\u53ef\u89c1\u3002", 
    "This post is visible to everyone.": "\u6b64\u5e16\u5bf9\u6240\u6709\u4eba\u53ef\u89c1\u3002", 
    "This problem has been reset.": "\u6b64\u95ee\u9898\u5df2\u88ab\u91cd\u7f6e\u3002", 
    "This response could not be marked as an answer. Refresh the page and try again.": "\u65e0\u6cd5\u5c06\u6b64\u54cd\u5e94\u6807\u8bb0\u4e3a\u7b54\u6848\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This response could not be marked as endorsed. Refresh the page and try again.": "\u65e0\u6cd5\u5c06\u6b64\u54cd\u5e94\u6807\u8bb0\u4e3a\u5df2\u6279\u51c6\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5", 
    "This response could not be unendorsed. Refresh the page and try again.": "\u6b64\u54cd\u5e94\u65e0\u6cd5\u88ab\u51c6\u8bb8\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "This response could not be unmarked as an answer. Refresh the page and try again.": "\u65e0\u6cd5\u5c06\u6b64\u54cd\u5e94\u53d6\u6d88\u6807\u8bb0\u7b54\u6848\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
=======
    "This feedback could not be submitted.": "\u8fd9\u6761\u53cd\u9988\u65e0\u6cd5\u63d0\u4ea4\u3002", 
    "This image is for decorative purposes only and does not require a description.": "\u6b64\u56fe\u7247\u4ec5\u4f5c\u88c5\u9970\u7528\uff0c\u65e0\u9700\u63cf\u8ff0\u3002", 
    "This learner is currently sharing a limited profile.": "\u8be5\u5b66\u751f\u5f53\u524d\u516c\u5f00\u90e8\u5206\u4e2a\u4eba\u4fe1\u606f\u3002", 
    "This learner will be removed from the team, allowing another learner to take the available spot.": "\u6b64\u6210\u5458\u5c06\u88ab\u79fb\u9664\uff0c\u91ca\u51fa\u540d\u989d\u540e\u5176\u4ed6\u6210\u5458\u53ef\u52a0\u5165\u3002", 
    "This post is visible only to %(group_name)s.": "\u6b64\u5e16\u53ea\u5bf9%(group_name)s\u7ec4\u53ef\u89c1\u3002", 
    "This post is visible to everyone.": "\u6b64\u5e16\u5bf9\u6240\u6709\u4eba\u53ef\u89c1\u3002", 
    "This problem could not be saved.": "\u8be5\u95ee\u9898\u65e0\u6cd5\u4fdd\u5b58\u3002", 
    "This problem has already been released. Any changes will apply only to future assessments.": "\u6b64\u95ee\u9898\u5df2\u53d1\u5e03\u3002\u4efb\u4f55\u66f4\u6539\u90fd\u53ea\u9002\u7528\u4e8e\u672a\u6765\u7684\u8bc4\u4f30\u3002", 
    "This problem has been reset.": "\u6b64\u95ee\u9898\u5df2\u91cd\u7f6e\u3002", 
    "This response could not be saved.": "\u8be5\u7b54\u6848\u65e0\u6cd5\u4fdd\u5b58\u3002", 
    "This response could not be submitted.": "\u8be5\u7b54\u6848\u65e0\u6cd5\u63d0\u4ea4\u3002", 
    "This response has been saved but not submitted.": "\u8be5\u7b54\u6848\u5df2\u7ecf\u4fdd\u5b58\u4e86\uff0c\u4f46\u4ecd\u672a\u63d0\u4ea4\u3002", 
    "This response has not been saved.": "\u8be5\u7b54\u6848\u8fd8\u6ca1\u6709\u88ab\u4fdd\u5b58\u3002", 
    "This section could not be loaded.": "\u8fd9\u4e2a\u90e8\u5206\u65e0\u6cd5\u52a0\u8f7d\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "This team does not have any members.": "\u672c\u56e2\u961f\u6ca1\u6709\u6210\u5458\u3002", 
    "This team is full.": "\u8fd9\u4e2a\u56e2\u961f\u5df2\u7ecf\u6ee1\u4e86\u3002", 
    "This thread is closed.": "\u8fd9\u4e2a\u5e16\u5b50\u5df2\u7ecf\u5173\u95ed\u3002", 
    "This vote could not be processed. Refresh the page and try again.": "\u65e0\u6cd5\u5904\u7406\u6b64\u9879\u6295\u7968\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "Time Sent": "\u53d1\u9001\u65f6\u95f4", 
    "Time Sent:": "\u53d1\u9001\u65f6\u95f4", 
<<<<<<< HEAD
    "Time Zone": "\u65f6\u533a", 
    "Timer has expired": "\u8ba1\u65f6\u5668\u5df2\u8fc7\u671f", 
    "Title": "\u6807\u9898", 
    "To receive credit for problems, you must select \"Submit\" for each problem before you select \"End My Exam\".": "\u8981\u63a5\u6536\u95ee\u9898, \u60a8\u5fc5\u987b\u5728\u9009\u62e9 \"\u7ed3\u675f\u6211\u7684\u8003\u8bd5 \" \u4e4b\u524d\u4e3a\u6bcf\u4e2a\u95ee\u9898\u9009\u62e9 \"\u63d0\u4ea4 \"\u3002", 
=======
    "Tips on taking a successful photo": "\u6210\u529f\u62cd\u6444\u7684\u5c0f\u6280\u5de7", 
    "To finalize course credit, %(display_name)s requires %(platform_name)s learners to submit a credit request.": "\u8981\u5b8c\u6210\u8bfe\u7a0b\u5b66\u5206\uff0c%(display_name)s \u8981\u6c42 %(platform_name)s \u5b66\u5458\u63d0\u4ea4\u4e00\u4efd\u5b66\u5206\u7533\u8bf7\u3002", 
    "To invalidate a certificate for a particular learner, add the username or email address below.": "\u8981\u8bbe\u5b9a\u67d0\u4e2a\u7279\u5b9a\u5b66\u5458\u7684\u8bc1\u4e66\u65e0\u6548\uff0c\u8bf7\u5728\u4e0b\u9762\u6dfb\u52a0\u76f8\u5e94\u7684\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u7bb1\u5730\u5740\u3002", 
    "To receive a certificate, you must also verify your identity.": "\u8981\u83b7\u5f97\u8bc1\u4e66\uff0c\u4f60\u5fc5\u987b\u9a8c\u8bc1\u4f60\u7684\u8eab\u4efd\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "To share your certificate on Mozilla Backpack, you must first have a Backpack account. Complete the following steps to add your certificate to Backpack.": "\u8981\u5728 Mozilla Backpack \u4e0a\u5206\u4eab\u60a8\u7684\u8bc1\u4e66\uff0c\u60a8\u5fc5\u987b\u9996\u5148\u62e5\u6709\u4e00\u4e2a Backpack \u5e10\u6237\u3002\u901a\u8fc7\u5b8c\u6210\u4ee5\u4e0b\u6b65\u9aa4\u5c06\u60a8\u7684\u8bc1\u4e66\u6dfb\u52a0\u81f3 Backpack\u3002", 
    "Toggle Notifications Setting": "\u5207\u6362\u901a\u77e5\u8bbe\u7f6e", 
    "Topic": "\u4e3b\u9898", 
    "Topic area": "\u4e3b\u9898\u533a\u57df:", 
    "Topics": "\u4e3b\u9898", 
    "Total": "\u603b\u8ba1", 
    "Transcript will be displayed when you start playing the video.": "\u5f53\u4f60\u5f00\u59cb\u64ad\u653e\u89c6\u9891\u65f6\u5c06\u663e\u793a\u5b57\u5e55\u3002", 
    "Try the transaction again in a few minutes.": "\u8bf7\u7b49\u5f85\u51e0\u5206\u949f\u540e\u518d\u5c1d\u8bd5\u3002", 
    "Try using a different browser, such as Google Chrome.": "\u8bf7\u8bd5\u7740\u66f4\u6362\u4e00\u4e2a\u6d4f\u89c8\u5668\uff0c\u5982\u8c37\u6b4c\u7684 Chrome \u6d4f\u89c8\u5668\u3002", 
    "Turn off transcripts": "\u5173\u95ed\u5b57\u5e55", 
    "Turn on closed captioning": "\u6253\u5f00CC\u5b57\u5e55", 
    "Turn on transcripts": "\u6253\u5f00\u5b57\u5e55", 
    "Type": "\u7c7b\u578b", 
    "Type in a URL or use the \"Choose File\" button to upload a file from your machine. (e.g. 'http://example.com/img/clouds.jpg')": "\u8f93\u5165\u4e00\u4e2a\u7f51\u5740\uff0c\u6216\u6309\u4e0b\u201c\u9009\u62e9\u6587\u4ef6\u201d\u6309\u94ae\u6765\u4e0a\u4f20\u6587\u4ef6\u3002(\u4f8b\u5982'http://example.com/img/clouds.jpg')", 
    "URL": "URL", 
<<<<<<< HEAD
    "Unable to submit application": "\u65e0\u6cd5\u63d0\u4ea4\u7533\u8bf7", 
    "Underline": "\u4e0b\u5212\u7ebf", 
    "Undo": "\u64a4\u9500", 
=======
    "Unable to load": "\u4e0d\u80fd\u52a0\u8f7d", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Undo (Ctrl+Z)": "\u64a4\u9500(Ctrl+Z)", 
    "Undo Changes": "\u64a4\u9500\u66f4\u6539", 
    "Unendorse": "\u53d6\u6d88\u652f\u6301", 
    "Unexpected server error.": "\u670d\u52a1\u5668\u5f02\u5e38\u9519\u8bef\u3002", 
    "Unfollow": "\u53d6\u6d88\u5173\u6ce8", 
    "Unit": "\u5355\u5143", 
    "Unknown": "\u672a\u77e5", 
<<<<<<< HEAD
    "Unknown Error Occurred.": "\u672a\u77e5\u9519\u8bef\u3002", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Unlink This Account": "\u89e3\u7ed1\u6b64\u8d26\u6237", 
    "Unlink your {accountName} account": "\u89e3\u7ed1\u60a8\u7684{accountName}\u5e10\u6237", 
    "Unlinking": "\u89e3\u7ed1\u4e2d", 
    "Unmark as Answer": "\u53d6\u6d88\u6807\u8bb0\u4f5c\u4e3a\u7b54\u6848", 
    "Unmute": "\u53d6\u6d88\u9759\u97f3", 
    "Unnamed Option": "\u672a\u547d\u540d\u9009\u9879", 
    "Unpin": "\u4e0d\u505a\u5904\u7406", 
    "Unreport": "\u53d6\u6d88\u62a5\u544a", 
    "Update": "\u66f4\u65b0", 
    "Update certificate status": "\u66f4\u65b0\u8bc1\u4e66\u72b6\u6001", 
    "Update comment": "\u66f4\u65b0\u8bc4\u8bba", 
    "Update post": "\u66f4\u65b0\u8ba8\u8bba\u5e16", 
    "Update response": "\u66f4\u65b0\u56de\u590d", 
    "Update the status of a certificate for a particular user in a particular course": "\u5728\u7279\u5b9a\u8bfe\u7a0b\u4e2d\u66f4\u65b0\u7279\u5b9a\u7528\u6237\u7684\u8bc1\u4e66\u72b6\u6001", 
    "Updating with latest library content": "\u66f4\u65b0\u6700\u65b0\u7684\u5e93\u5185\u5bb9", 
    "Upgrade Deadline": "\u5347\u7ea7\u7684\u622a\u6b62\u65e5\u671f", 
<<<<<<< HEAD
    "Upload": "\u4e0a\u4f20", 
    "Upload File": "\u4e0a\u4f20\u6587\u4ef6", 
    "Upload File and Assign Students": "\u4e0a\u4f20\u6587\u4ef6\u5e76\u4e3a\u5b66\u751f\u5206\u7ec4", 
    "Upload New File": "\u4e0a\u4f20\u65b0\u6587\u4ef6", 
    "Upload a new PDF to \u201c<%= name %>\u201d": "\u4e0a\u4f20\u4e00\u4e2a\u65b0\u7684PDF\u6587\u4ef6\u81f3\u201c<%= name %>\u201d", 
=======
    "Upgrade to a Verified Certificate for {courseName}": "\u5347\u7ea7\u5230 {courseName} \u7684\u9a8c\u8bc1\u8bc1\u4e66", 
    "Upload File": "\u4e0a\u4f20\u6587\u4ef6", 
    "Upload File and Assign Students": "\u4e0a\u4f20\u6587\u4ef6\u5e76\u4e3a\u5b66\u751f\u5206\u7ec4", 
    "Upload New File": "\u4e0a\u4f20\u65b0\u6587\u4ef6", 
    "Upload a comma separated values (.csv) file that contains the usernames or email addresses of learners who have been given exceptions. Include the username or email address in the first comma separated field. You can include an optional note describing the reason for the exception in the second comma separated field.": "\u4e0a\u4f20\u4e00\u4e2a\u7528\u9017\u53f7\u9694\u5f00\u7684\u503c (.csv) \u6587\u4ef6\uff0c\u6587\u4ef6\u8981\u5305\u542b\u83b7\u5f97\u7279\u4f8b\u7684\u5b66\u5458\u7684\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u7bb1\u5730\u5740\u3002\u5c06\u7528\u6237\u540d\u6216\u7535\u5b50\u90ae\u7bb1\u5730\u5740\u5217\u5165\u7b2c\u4e00\u4e2a\u9017\u53f7\u9694\u5f00\u7684\u5b57\u6bb5\u4e2d\u3002\u4f60\u53ef\u4ee5\u5728\u7b2c\u4e8c\u4e2a\u7528\u9017\u53f7\u9694\u5f00\u7684\u5b57\u6bb5\u4e2d\u5217\u5165\u63cf\u8ff0\u7279\u6b8a\u5904\u7406\u539f\u56e0\u7684\u53ef\u9009\u5907\u6ce8\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Upload an image": "\u4e0a\u4f20\u56fe\u7247", 
    "Upload completed": "\u4e0a\u4f20\u5b8c\u6210", 
    "Upload failed": "\u4e0a\u4f20\u5931\u8d25", 
    "Upload is in progress. To avoid errors, stay on this page until the process is complete.": "\u6b63\u5728\u4e0a\u4f20\u3002\u4e3a\u907f\u514d\u53d1\u751f\u9519\u8bef\uff0c\u5728\u4e0a\u4f20\u5b8c\u6210\u524d\u8bf7\u4e0d\u8981\u79bb\u5f00\u672c\u9875\u3002", 
    "Upload translation": "\u4e0a\u4f20\u8bd1\u6587", 
    "Upload your course image.": "\u4e0a\u4f20\u60a8\u7684\u8bfe\u7a0b\u56fe\u7247\u3002", 
    "Uploaded file issues. Click on \"+\" to view.": "\u4e0a\u4f20\u6587\u4ef6\u6709\u95ee\u9898\u3002\u70b9\u51fb \u201c+\u201d \u6765\u68c0\u89c6\u3002", 
    "Uploading": "\u4e0a\u4f20\u4e2d", 
    "Upset Learner": "\u611f\u5230\u4e0d\u6ee1\u610f\u7684\u5b66\u751f", 
    "Use my institution/campus credentials": "\u4f7f\u7528\u6211\u7684\u673a\u6784/\u6821\u56ed\u5e10\u53f7", 
    "Use the All Topics menu to find specific topics.": "\u4f7f\u7528 \"\u5168\u90e8\u4e3b\u9898\" \u83dc\u5355\u67e5\u627e\u7279\u5b9a\u4e3b\u9898\u3002", 
    "User": "\u7528\u6237", 
    "Username": "\u7528\u6237\u540d", 
    "Users": "\u7528\u6237", 
    "Users must create and activate their account before they can be promoted to beta tester.": "\u6210\u4e3abeta\u6d4b\u8bd5\u8005\u4e4b\u524d\uff0c\u9700\u8981\u521b\u5efa\u5e76\u6fc0\u6d3b\u8d26\u6237\u3002", 
<<<<<<< HEAD
    "V Align": "\u5782\u76f4\u5bf9\u9f50", 
=======
    "Valid": "\u6709\u6548", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Validation Error": "\u9a8c\u8bc1\u9519\u8bef", 
    "Validation Error While Saving": "\u5728\u4fdd\u5b58\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u9a8c\u8bc1\u9519\u8bef", 
    "Verification Deadline": "\u8ba4\u8bc1\u622a\u6b62\u65e5\u671f", 
    "Verified Certificate": "\u8ba4\u8bc1\u8bc1\u4e66", 
    "Verified Certificate upgrade": "\u8ba4\u8bc1\u8bc1\u4e66\u5347\u7ea7", 
<<<<<<< HEAD
    "Verify Now": "\u8ba4\u8bc1", 
    "Vertical space": "\u5782\u76f4\u95f4\u8ddd", 
=======
    "Verified Status": "\u9a8c\u8bc1\u72b6\u6001", 
    "Verified mode price": "\u901a\u8fc7\u9a8c\u8bc1\u7684\u6a21\u5f0f\u4ef7\u683c", 
    "Verify Now": "\u73b0\u5728\u8ba4\u8bc1", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Very loud": "\u97f3\u91cf\u5f88\u9ad8", 
    "Very low": "\u5f88\u4f4e", 
    "Video": "\u89c6\u9891", 
    "Video Capture Error": "\u89c6\u9891\u6355\u83b7\u5931\u8d25", 
    "Video ID": "\u89c6\u9891 ID", 
    "Video ended": "\u89c6\u9891\u7ed3\u675f", 
    "Video position": "\u89c6\u9891\u4f4d\u7f6e", 
    "Video speed: ": "\u89c6\u9891\u64ad\u653e\u901f\u5ea6:", 
    "Video transcript": "\u89c6\u9891\u5b57\u5e55", 
    "View": "\u89c6\u56fe", 
    "View %(span_start)s %(team_name)s %(span_end)s": "\u67e5\u770b%(span_start)s %(team_name)s %(span_end)s", 
    "View Archived Course": "\u67e5\u770b\u5b58\u6863\u7684\u8bfe\u7a0b", 
    "View Course": "\u67e5\u770b\u8bfe\u7a0b", 
    "View Teams in the %(topic_name)s Topic": "\u67e5\u770b %(topic_name)s\u4e3b\u9898\u4e0b\u7684\u56e2\u961f", 
    "View all errors": "\u67e5\u770b\u6240\u6709\u9519\u8bef", 
    "View discussion": "\u67e5\u770b\u8ba8\u8bba", 
    "View the list of whitelisted users for a course": "\u67e5\u770b\u8bfe\u7a0b\u7684\u5217\u5165\u4f18\u826f\u540d\u5355\u7528\u6237\u5217\u8868", 
    "View user whitelist": "\u67e5\u770b\u7528\u6237\u4f18\u826f\u540d\u5355", 
    "Viewing %s course": [
      "\u67e5\u770b %s \u4e2a\u8bfe\u7a0b"
    ], 
<<<<<<< HEAD
    "Visible to": "\u53ef\u89c1\u5230", 
    "Visual aids": "\u7f51\u683c\u7ebf", 
=======
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Volume": "\u97f3\u91cf", 
    "Vote for good posts and responses": "\u4e3a\u51fa\u8272\u7684\u53d1\u5e16\u548c\u56de\u590d\u6295\u7968", 
    "Vote for this post,": "\u4e3a\u8be5\u5e16\u6295\u7968", 
    "Warning": "\u8b66\u544a", 
    "Warnings": "\u8b66\u544a", 
    "We couldn't create your account.": "\u6211\u4eec\u65e0\u6cd5\u521b\u5efa\u60a8\u7684\u8d26\u6237\u3002", 
    "We couldn't find any results for \"%s\".": "\u6211\u4eec\u627e\u4e0d\u5230\u6709\u5173\u201c%s\u201d\u7684\u4efb\u4f55\u7ed3\u679c\u3002", 
<<<<<<< HEAD
    "We couldn't sign you in.": "\u767b\u5f55\u5931\u8d25\u3002", 
    "We just need a little more information before you start learning with %(platformName)s.": "\u60a8\u53ea\u9700\u518d\u591a\u63d0\u4f9b\u4e00\u70b9\u4fe1\u606f\u5c31\u53ef\u4ee5\u5f00\u59cb\u5728%(platformName)s\u5b66\u4e60\u4e86\u3002", 
    "We weren't able to send you a password reset email.": "\u5bc6\u7801\u91cd\u7f6e\u90ae\u4ef6\u53d1\u9001\u5931\u8d25\u3002", 
    "We're sorry, there was an error": "\u5f88\u62b1\u6b49\uff0c\u51fa\u73b0\u9519\u8bef", 
=======
    "We have received your information and are verifying your identity. You will see a message on your dashboard when the verification process is complete (usually within 1-2 days). In the meantime, you can still access all available course content.": "\u6211\u4eec\u5df2\u7ecf\u6536\u5230\u4f60\u7684\u4fe1\u606f\u5e76\u6b63\u5728\u9a8c\u8bc1\u4f60\u7684\u8eab\u4efd\u3002\u9a8c\u8bc1\u6d41\u7a0b\u7ed3\u675f\u540e(\u4e00\u822c\u5728 1-2 \u5929\u5185)\uff0c\u4f60\u5c06\u5728\u4f60\u7684\u63a7\u5236\u9762\u677f\u4e0a\u6536\u5230\u4e00\u6761\u6d88\u606f\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u8bbf\u95ee\u6240\u6709\u7684\u8bfe\u7a0b\u5185\u5bb9\u3002", 
    "We use the highest levels of security available to encrypt your photo and send it to our authorization service for review. Your photo and information are not saved or visible anywhere on %(platformName)s after the verification process is complete.": "\u6211\u4eec\u4f1a\u91c7\u7528\u6700\u9ad8\u7ea7\u522b\u7684\u5b89\u5168\u6280\u672f\u6765\u52a0\u5bc6\u4f60\u7684\u7167\u7247\u5e76\u53d1\u9001\u5230\u6211\u4eec\u7684\u6388\u6743\u670d\u52a1\u7528\u4e8e\u5ba1\u6838\u76ee\u7684\uff1b\u4e00\u65e6\u5b8c\u6210\u4e86\u8ba4\u8bc1\u8fc7\u7a0b\uff0c%(platformName)s\u4e0d\u4f1a\u7ee7\u7eed\u4fdd\u5b58\u8fd9\u4e9b\u7167\u7247\u548c\u4fe1\u606f\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "We've encountered an error. Refresh your browser and then try again.": "\u6211\u4eec\u9047\u5230\u4e86\u4e00\u4e2a\u9519\u8bef\u3002\u8bf7\u5237\u65b0\u60a8\u7684\u6d4f\u89c8\u5668\u5e76\u91cd\u8bd5\u3002", 
    "We've sent a confirmation message to {new_email_address}. Click the link in the message to update your email address.": "\u6211\u4eec\u5df2\u4f1a\u53d1\u9001\u4e00\u4e2a\u9a8c\u8bc1\u8baf\u606f\u81f3 {new_email_address}\u3002\u70b9\u51fb\u8baf\u606f\u4e2d\u7684\u94fe\u63a5\u4ee5\u66f4\u65b0\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u4fe1\u7bb1\u3002", 
    "What's Your Next Accomplishment?": "\u60a8\u7684\u4e0b\u4e00\u4e2a\u76ee\u6807\u662f\u4ec0\u4e48\uff1f", 
<<<<<<< HEAD
    "When you select \"Reset Your Password\", a message will be sent to the email address for your {platform_name} account. Click the link in the message to reset your password.": "\u5f53\u60a8\u9009\u62e9 \"\u91cd\u7f6e\u5bc6\u7801 \" \u65f6, \u5c06\u4f1a\u5411 {platform_name} \u5e10\u6237\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u4e00\u6761\u6d88\u606f\u3002\u5355\u51fb\u90ae\u4ef6\u4e2d\u7684\u94fe\u63a5\u91cd\u7f6e\u5bc6\u7801\u3002", 
    "Whitelist a user": "\u4f18\u826f\u540d\u5355\u7528\u6237", 
    "Whole words": "\u5168\u5b57\u5339\u914d", 
    "Width": "\u5bbd", 
    "Words: {0}": "\u5b57\u6570\uff1a {0}", 
=======
    "When your face is in position, use the camera button {icon} below to take your photo.": "\u5f53\u4f60\u6446\u597d\u8138\u90e8\u4f4d\u7f6e\u540e\uff0c\u4f7f\u7528\u4ee5\u4e0b\u7684\u6444\u50cf\u5934\u6309\u94ae {icon} \u8fdb\u884c\u62cd\u7167\u3002", 
    "Why activate?": "\u4e3a\u4ec0\u4e48\u8981\u6fc0\u6d3b\uff1f", 
    "Why does %(platformName)s need my photo?": "\u4e3a\u4ec0\u4e48%(platformName)s\u9700\u8981\u6211\u7684\u7167\u7247\uff1f", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Would you like to sign in using your %(providerName)s credentials?": "\u60a8\u662f\u5426\u60f3\u4f7f\u7528 %(providerName)s \u767b\u5f55\uff1f", 
    "Year of Birth": "\u51fa\u751f\u5e74\u4efd", 
    "You already belong to another team.": "\u4f60\u5df2\u7ecf\u5c5e\u4e8e\u53e6\u4e00\u4e2a\u56e2\u961f\u3002", 
    "You are currently sharing a limited profile.": "\u60a8\u5f53\u524d\u516c\u5f00\u90e8\u5206\u4e2a\u4eba\u4fe1\u606f\u3002", 
<<<<<<< HEAD
=======
    "You are enrolling in: {courseName}": "\u60a8\u6b63\u5728\u9009\u62e9\uff1a{courseName}", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "You are not currently a member of any team.": "\u4f60\u76ee\u524d\u4e0d\u662f\u4efb\u4f55\u56e2\u961f\u4e2d\u7684\u4e00\u5458\u3002", 
    "You are not enrolled in any programs yet.": "\u60a8\u8fd8\u6ca1\u6709\u6ce8\u518c\u4efb\u4f55\u7a0b\u5e8f\u3002", 
    "You are sending an email message with the subject {subject} to the following recipients.": "\u60a8\u6b63\u5728\u5411\u4e0b\u5217\u6536\u4ef6\u4eba\u53d1\u9001\u7535\u5b50\u90ae\u4ef6, \u4e3b\u9898\u4e3a \"{subjest}\"\u3002", 
    "You can remove members from this team, especially if they have not participated in the team's activity.": "\u60a8\u53ef\u4ee5\u4ece\u6b64\u7ec4\u4e2d\u5220\u9664\u6210\u5458\uff0c\u5c24\u5176\u662f\u8fd8\u6ca1\u6709\u53c2\u52a0\u56e2\u961f\u6d3b\u52a8\u7684\u6210\u5458\u3002", 
<<<<<<< HEAD
    "You can use your {accountName} account to sign in to your {platformName} account.": "\u60a8\u53ef\u4ee5\u4f7f\u7528 {accountName} \u5e10\u6237\u767b\u5f55\u5230\u60a8\u7684 {platformName} \u5e10\u6237\u3002", 
=======
    "You can upload files with these file types: ": "\u4f60\u53ef\u4ee5\u4e0a\u4f20\u7684\u6587\u4ef6\u7c7b\u578b\uff1a", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "You cannot view the course as a student or beta tester before the course release date.": "\u5728\u6b64\u8bfe\u7a0b\u516c\u5f00\u4e4b\u524d\uff0c\u60a8\u65e0\u6cd5\u4ee5\u5b66\u751f\u6216\u6d4b\u8bd5\u8005\u8eab\u4efd\u67e5\u770b\u8be5\u8bfe\u7a0b\u3002", 
    "You commented...": "\u4f60\u8bc4\u8bba\u7684\u2026", 
    "You could not be subscribed to this post. Refresh the page and try again.": "\u60a8\u65e0\u6cd5\u8ba2\u9605\u6b64\u5e16\u5b50\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "You could not be unsubscribed from this post. Refresh the page and try again.": "\u60a8\u65e0\u6cd5\u53d6\u6d88\u8ba2\u9605\u6b64\u5e16\u5b50\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "You currently have no cohorts configured": "\u60a8\u76ee\u524d\u6ca1\u6709\u5df2\u914d\u7f6e\u7684\u7fa4\u7ec4", 
    "You did not select a content group": "\u60a8\u672a\u9009\u53d6\u5185\u5bb9\u7ec4\u3002", 
<<<<<<< HEAD
    "You did not select any files to submit.": "\u60a8\u6ca1\u6709\u9009\u62e9\u8981\u63d0\u4ea4\u7684\u4efb\u4f55\u6587\u4ef6\u3002", 
    "You did not submit the required files: {requiredFiles}.": "\u60a8\u6ca1\u6709\u63d0\u4ea4\u6240\u9700\u7684\u6587\u4ef6: {requiredFiles}\u3002", 
=======
    "You did not select any files to submit.": "\u60a8\u672a\u9009\u62e9\u4efb\u4f55\u8981\u4e0a\u4f20\u7684\u6587\u4ef6\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "You don't seem to have Flash installed. Get Flash to continue your verification.": "\u60a8\u4f3c\u4e4e\u5e76\u672a\u5b89\u88c5Flash\u8f6f\u4ef6\u3002\u4e3a\u80fd\u7ee7\u7eed\u8fdb\u884c\u8ba4\u8bc1\uff0c\u8bf7\u5b89\u88c5Flash\u3002", 
    "You don't seem to have a webcam connected.": "\u60a8\u4f3c\u4e4e\u6ca1\u6709\u8fde\u63a5\u4e00\u4e2a\u6444\u50cf\u5934\u3002", 
    "You have added a criterion. You will need to select an option for the criterion in the Learner Training step. To do this, click the Settings tab.": "\u4f60\u5df2\u7ecf\u6dfb\u52a0\u4e86\u4e00\u4e2a\u6807\u51c6\u3002\u4f60\u5c06\u9700\u8981\u4e3a\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u4e2d\u7684\u6807\u51c6\u9009\u62e9\u4e00\u4e2a\u9009\u9879\u3002\u8981\u6267\u884c\u6b64\u64cd\u4f5c\uff0c\u8bf7\u5355\u51fb\u201c\u8bbe\u7f6e\u201d\u9009\u9879\u5361\u3002", 
    "You have already reported this annotation.": "\u60a8\u5df2\u7ecf\u62a5\u544a\u8fc7\u4e86\u6b64\u6279\u6ce8\u3002", 
<<<<<<< HEAD
    "You have been logged out of your edX account. Click Okay to log in again now. Click Cancel to stay on this page (you must log in again to save your work).": "\u60a8\u5df2\u6ce8\u9500\u60a8\u7684 edX \u5e10\u6237\u3002\u5355\u51fb \"ok\" \u7acb\u5373\u767b\u5f55\u3002\u5355\u51fb \"\u53d6\u6d88\" \u4fdd\u7559\u5728\u6b64\u9875\u4e0a (\u5fc5\u987b\u518d\u6b21\u767b\u5f55\u624d\u80fd\u4fdd\u5b58\u60a8\u7684\u5de5\u4f5c)\u3002", 
    "You have not created any content groups yet.": "\u60a8\u8fd8\u6ca1\u6709\u521b\u5efa\u4efb\u4f55\u5185\u5bb9\u7ec4\u3002", 
    "You have not created any group configurations yet.": "\u60a8\u8fd8\u6ca1\u6709\u521b\u5efa\u4efb\u4f55\u7ec4\u914d\u7f6e\u3002", 
    "You have successfully signed into %(currentProvider)s, but your %(currentProvider)s account does not have a linked %(platformName)s account. To link your accounts, sign in now using your %(platformName)s password.": "\u60a8\u5df2\u6210\u529f\u767b\u5f55 %(currentProvider)s\uff0c\u4f46\u662f\u60a8\u7684 %(currentProvider)s \u5e10\u6237\u5c1a\u65e0\u5df2\u94fe\u63a5\u7684 %(platformName)s \u5e10\u6237\u3002\u8981\u94fe\u63a5\u5230\u60a8\u7684\u8d26\u6237\uff0c\u8bf7\u4f7f\u7528\u60a8\u7684 %(platformName)s \u5bc6\u7801\u767b\u5f55\u3002", 
    "You have unsaved changes are you sure you want to navigate away?": "\u6709\u672a\u4fdd\u5b58\u7684\u66f4\u6539\uff0c\u786e\u5b9a\u8981\u79bb\u5f00\u5417\uff1f", 
    "You have unsaved changes. Do you really want to leave this page?": "\u60a8\u5c1a\u6709\u672a\u4fdd\u5b58\u7684\u4fee\u6539\uff0c\u786e\u5b9a\u8981\u79bb\u6b64\u9875\u9762\u5417\uff1f", 
    "You must be over 13 to share a full profile. If you are over 13, make sure that you have specified a birth year on the {account_settings_page_link}": "13\u5c81\u4ee5\u4e0a\u7684\u7528\u6237\u624d\u80fd\u5206\u4eab\u5b8c\u6574\u8d44\u6599\u3002\u5982\u679c\u60a8\u572813\u5c81\u4ee5\u4e0a\uff0c\u8bf7\u786e\u8ba4\u5df2\u5728 {account_settings_page_link} \u9875\u9762\u4e2d\u586b\u5199\u4e86\u51fa\u751f\u5e74\u4efd\u3002", 
=======
    "You have already verified your ID!": "\u60a8\u5df2\u7ecf\u6210\u529f\u9a8c\u8bc1\u4e86\u60a8\u7684\u8eab\u4efd\u8bc1\u4ef6\uff01", 
    "You have deleted a criterion. The criterion has been removed from the example responses in the Learner Training step.": "\u4f60\u5df2\u5220\u9664\u4e86\u4e00\u4e2a\u6807\u51c6\u3002\u6b64\u6807\u51c6\u5df2\u4ece\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u7684\u56de\u590d\u793a\u4f8b\u4e2d\u64a4\u9500\u3002", 
    "You have deleted all the options for this criterion. The criterion has been removed from the sample responses in the Learner Training step.": "\u4f60\u5df2\u5220\u9664\u6b64\u6807\u51c6\u7684\u6240\u6709\u9009\u9879\u3002\u6b64\u6807\u51c6\u5df2\u4ece\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u7684\u56de\u590d\u793a\u4f8b\u4e2d\u5220\u9664\u3002", 
    "You have deleted an option. That option has been removed from its criterion in the sample responses in the Learner Training step. You might have to select a new option for the criterion.": "\u4f60\u5df2\u5220\u9664\u4e00\u4e2a\u9009\u9879\u3002\u6b64\u9009\u9879\u5df2\u4ece\u201c\u5b66\u5458\u8bad\u7ec3\u201d\u6b65\u9aa4\u4e2d\u7684\u56de\u590d\u793a\u4f8b\u6807\u51c6\u4e2d\u5220\u9664\u3002\u4f60\u53ef\u80fd\u5fc5\u987b\u4e3a\u6b64\u6807\u51c6\u9009\u62e9\u4e00\u4e2a\u65b0\u9009\u9879\u3002", 
    "You have not created any content groups yet.": "\u60a8\u8fd8\u6ca1\u6709\u521b\u5efa\u4efb\u4f55\u5185\u5bb9\u7ec4\u3002", 
    "You have not created any group configurations yet.": "\u60a8\u8fd8\u6ca1\u6709\u521b\u5efa\u4efb\u4f55\u7ec4\u914d\u7f6e\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "You must enter a valid email address in order to add a new team member": "\u60a8\u5fc5\u987b\u8f93\u5165\u4e00\u4e2a\u6709\u6548\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4ee5\u4fbf\u6dfb\u52a0\u4e00\u4e2a\u65b0\u7684\u56e2\u961f\u6210\u5458", 
    "You must provide a learner name.": "\u4f60\u5fc5\u987b\u63d0\u4f9b\u4e00\u4e2a\u5b66\u751f\u59d3\u540d\u3002", 
    "You must sign out and sign back in before your language changes take effect.": "\u8bed\u8a00\u8bbe\u7f6e\u5c06\u5728\u60a8\u91cd\u65b0\u767b\u5f55\u540e\u751f\u6548", 
    "You must specify a name for the cohort": "\u60a8\u5fc5\u987b\u4e3a\u8be5\u7fa4\u7ec4\u547d\u540d\u3002", 
<<<<<<< HEAD
    "You must specify your birth year before you can share your full profile. To specify your birth year, go to the {account_settings_page_link}": "\u60a8\u5fc5\u987b\u586b\u5199\u51fa\u751f\u5e74\u4efd\u624d\u80fd\u5206\u4eab\u5b8c\u6574\u8d44\u6599\u3002\u70b9\u51fb {account_settings_page_link} \u586b\u5199", 
    "You submitted {filename}; only {allowedFiles} are allowed.": "\u60a8\u63d0\u4ea4\u4e86 {filename};\u4ec5\u5141\u8bb8 {allowedFiles}\u3002", 
    "You've made some changes": "\u60a8\u5df2\u66f4\u6539", 
    "You've made some changes, but there are some errors": "\u60a8\u6240\u4f5c\u53d8\u66f4\u5b58\u5728\u9519\u8bef", 
    "You've successfully signed into %(currentProvider)s.": "\u60a8\u5df2\u6210\u529f\u767b\u5f55%(currentProvider)s\u3002", 
    "Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.": "\u60a8\u7684\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u76f4\u63a5\u8bbf\u95ee\u526a\u8d34\u677f\uff0c\u8bf7\u4f7f\u7528\u5feb\u6377\u952e Ctrl+X/C/V \u4ee3\u66ff\u3002", 
=======
    "You need a computer that has a webcam. When you receive a browser prompt, make sure that you allow access to the camera.": "\u60a8\u9700\u8981\u4e00\u4e2a\u5177\u6709\u6444\u50cf\u5934\u7684\u7535\u8111\u3002\u5f53\u60a8\u6536\u5230\u6d4f\u89c8\u5668\u5f39\u7a97\u65f6\uff0c\u786e\u4fdd\u5b83\u6709\u6743\u9650\u4f7f\u7528\u6444\u50cf\u5934\u3002", 
    "You need a driver's license, passport, or other government-issued ID that has your name and photo.": "\u60a8\u9700\u8981\u9a7e\u7167\u3001\u62a4\u7167\u6216\u8005\u5176\u4ed6\u7531\u653f\u5e9c\u7b7e\u53d1\u7684\u5e26\u6709\u60a8\u59d3\u540d\u548c\u7167\u7247\u7684\u8eab\u4efd\u8bc1\u4ef6\u3002", 
    "You need an ID with your name and photo. A driver's license, passport, or other government-issued IDs are all acceptable.": "\u60a8\u9700\u8981\u4e00\u4efd\u5e26\u6709\u60a8\u59d3\u540d\u548c\u7167\u7247\u7684\u8eab\u4efd\u8bc1\u4ef6\uff0c\u6211\u4eec\u53ef\u4ee5\u63a5\u53d7\u9a7e\u7167\u3001\u62a4\u7167\u4ee5\u53ca\u5176\u4ed6\u7531\u653f\u5e9c\u7b7e\u53d1\u7684\u8eab\u4efd\u8bc1\u4ef6\u3002", 
    "You need to activate your account before you can enroll in courses. Check your inbox for an activation email.": "\u5728\u9009\u8bfe\u4e4b\u524d\u4f60\u9700\u8981\u5148\u6fc0\u6d3b\u4f60\u7684\u8d26\u6237\uff0c\u8bf7\u68c0\u67e5\u6536\u4ef6\u7bb1\u4e2d\u7684\u6fc0\u6d3b\u90ae\u4ef6\u3002", 
    "You need to activate your account before you can enroll in courses. Check your inbox for an activation email. After you complete activation you can return and refresh this page.": "\u5728\u9009\u8bfe\u4e4b\u524d\u4f60\u9700\u8981\u5148\u6fc0\u6d3b\u4f60\u7684\u8d26\u6237\uff0c\u8bf7\u68c0\u67e5\u6536\u4ef6\u7bb1\u4e2d\u7684\u6fc0\u6d3b\u90ae\u4ef6\u3002\u5f53\u4f60\u5b8c\u6210\u6fc0\u6d3b\u540e\uff0c\u4f60\u53ef\u4ee5\u8fd4\u56de\u5e76\u5237\u65b0\u672c\u9875\u9762\u3002", 
    "You still need to visit the %(display_name)s website to complete the credit process.": "\u4f60\u4ecd\u7136\u9700\u8981\u8bbf\u95ee\u7f51\u7ad9 %(display_name)s \u4ee5\u5b8c\u6210\u83b7\u53d6\u5b66\u5206\u6d41\u7a0b\u3002", 
    "You submitted {filename}; only {allowedFiles} are allowed.": "\u60a8\u63d0\u4ea4\u4e86 {filename}\uff1b\u4ec5\u652f\u6301\u63d0\u4ea4 {allowedFiles} \u683c\u5f0f\u7684\u6587\u4ef6\u3002", 
    "You will not receive notification for emails that bounce, so double-check your spelling.": "\u60a8\u4e0d\u4f1a\u6536\u5230\u90ae\u4ef6\u672a\u9001\u8fbe\u7684\u901a\u77e5\uff0c\u56e0\u6b64\u8bf7\u4ed4\u7ec6\u68c0\u67e5\u4ee5\u786e\u4fdd\u62fc\u5199\u65e0\u8bef\u3002", 
    "You will use your webcam to take a picture of your face and of your government-issued photo ID.": "\u4f60\u5c06\u4f7f\u7528\u4f60\u7684\u7f51\u7edc\u6444\u50cf\u5934\u62cd\u6444\u4e00\u5f20\u540c\u65f6\u663e\u793a\u4f60\u7684\u8138\u90e8\u548c\u653f\u5e9c\u7b7e\u53d1\u7684\u6709\u7167\u7247\u7684\u8eab\u4efd\u8bc1\u4ef6\u7684\u7167\u7247\u3002", 
    "You're about to submit your response for this assignment. After you submit this response, you can't change it or submit a new response.": "\u4f60\u5c06\u4f1a\u63d0\u4ea4\u5bf9\u672c\u6b21\u4f5c\u4e1a\u7684\u7b54\u6848\u3002\u63d0\u4ea4\u540e\uff0c\u4f60\u5c06\u65e0\u6cd5\u4fee\u6539\u6216\u8005\u63d0\u4ea4\u65b0\u7684\u7b54\u6848\u3002", 
    "You've made some changes": "\u60a8\u5df2\u66f4\u6539", 
    "You've made some changes, but there are some errors": "\u60a8\u6240\u4f5c\u53d8\u66f4\u5b58\u5728\u9519\u8bef", 
    "Your ID must be a government-issued photo ID that clearly shows your face.": "\u4f60\u7684\u8eab\u4efd\u8bc1\u4ef6\u5fc5\u987b\u662f\u653f\u5e9c\u7b7e\u53d1\u7684\u6709\u7167\u7247\u7684\u8eab\u4efd\u8bc1\u4ef6\uff0c\u5e76\u53ef\u4ee5\u6e05\u6670\u663e\u793a\u4f60\u7684\u8138\u90e8\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "Your changes have been saved.": "\u60a8\u6240\u4f5c\u7684\u53d8\u66f4\u5df2\u4fdd\u5b58\u3002", 
    "Your changes will not take effect until you save your progress.": "\u60a8\u6240\u4f5c\u53d8\u66f4\u5728\u4fdd\u5b58\u540e\u624d\u80fd\u751f\u6548\u3002", 
    "Your changes will not take effect until you save your progress. Take care with key and value formatting, as validation is not implemented.": "\u53d8\u66f4\u5728\u4fdd\u5b58\u4e4b\u540e\u751f\u6548\u3002\u7531\u4e8e\u7cfb\u7edf\u6682\u65f6\u4e0d\u652f\u6301\u6821\u9a8c\u529f\u80fd\uff0c\u8bf7\u4ed4\u7ec6\u68c0\u67e5\u7b56\u7565\u952e\u503c\u5bf9\u8bbe\u7f6e\u3002", 
    "Your donation could not be submitted.": "\u60a8\u7684\u6350\u6b3e\u65e0\u6cd5\u63d0\u4ea4\u3002", 
    "Your email message was successfully queued for sending. In courses with a large number of learners, email messages to learners might take up to an hour to be sent.": "\u60a8\u7684\u7535\u5b50\u90ae\u4ef6\u5df2\u6210\u529f\u6392\u961f\u53d1\u9001\u3002\u5728\u6709\u5927\u91cf\u5b66\u4e60\u8005\u7684\u8bfe\u7a0b\u4e2d, \u7535\u5b50\u90ae\u4ef6\u7ed9\u5b66\u4e60\u8005\u53ef\u80fd\u9700\u8981\u4e00\u4e2a\u5c0f\u65f6\u7684\u65f6\u95f4\u6765\u53d1\u9001\u3002", 
    "Your file '{file}' has been uploaded. Allow a few minutes for processing.": "\u4f60\u7684\u6587\u4ef6'{file}'\u5df2\u7ecf\u4e0a\u4f20\u3002\u9700\u8981\u51e0\u5206\u949f\u65f6\u95f4\u8fdb\u884c\u5904\u7406\u3002", 
    "Your file could not be uploaded": "\u60a8\u7684\u6587\u4ef6\u65e0\u6cd5\u4e0a\u4f20\u3002", 
    "Your file has been deleted.": "\u60a8\u7684\u6587\u4ef6\u5df2\u7ecf\u88ab\u5220\u9664", 
    "Your file {filename} is too large (max size: {maxSize}MB).": "\u6587\u4ef6 {filename} \u592a\u5927 (\u6700\u5927\u5927\u5c0f: {maxSize} MB)", 
    "Your message cannot be blank.": "\u60a8\u7684\u6d88\u606f\u4e0d\u80fd\u4e3a\u7a7a\u3002", 
    "Your message must have a subject.": "\u60a8\u7684\u6d88\u606f\u5fc5\u987b\u6709\u4e00\u4e2a\u6807\u9898\u3002", 
    "Your message must have at least one target.": "\u60a8\u7684\u90ae\u4ef6\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u4e2a\u76ee\u6807\u3002", 
    "Your policy changes have been saved.": "\u60a8\u7684\u7b56\u7565\u53d8\u66f4\u5df2\u4fdd\u5b58\u3002", 
    "Your post will be discarded.": "\u60a8\u7684\u5e16\u5b50\u5c06\u88ab\u64a4\u9500\u3002", 
    "Your request could not be completed. Reload the page and try again.": "\u60a8\u7684\u8bf7\u6c42\u65e0\u6cd5\u5b8c\u6210\u3002\u5237\u65b0\u9875\u9762\uff0c\u7136\u540e\u91cd\u8bd5\u3002", 
    "Your request could not be completed. Reload the page and try again. If the issue persists, click the Help tab to report the problem.": "\u60a8\u7684\u8bf7\u6c42\u65e0\u6cd5\u5b8c\u6210\u3002\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u5e76\u91cd\u8bd5\u3002\u5982\u679c\u95ee\u9898\u4ecd\u7136\u5b58\u5728\uff0c\u70b9\u51fb\u201c\u5e2e\u52a9\u201d\u9009\u9879\u62a5\u544a\u95ee\u9898\u3002", 
    "Your request could not be processed. Refresh the page and try again.": "\u65e0\u6cd5\u5904\u7406\u60a8\u7684\u8bf7\u6c42\u3002\u8bf7\u5237\u65b0\u8be5\u9875\u5e76\u91cd\u8bd5\u3002", 
    "Your upload of '{file}' failed.": "\u60a8\u7684\u6587\u4ef6'{file}'\u4e0a\u4f20\u5931\u8d25\u3002", 
    "Your upload of '{file}' succeeded.": "\u60a8\u7684\u6587\u4ef6'{file}'\u4e0a\u4f20\u6210\u529f\u3002", 
    "Yourself": "\u4f60\u672c\u4eba", 
    "Zoom In": "\u653e\u5927", 
    "Zoom Out": "\u7f29\u5c0f", 
    "[no tags]": "[\u65e0\u6807\u7b7e]", 
    "a day": "\u4e00\u5929", 
    "about %d hour": [
      "\u5927\u7ea6 %d \u5c0f\u65f6"
    ], 
    "about a minute": "\u5927\u7ea6\u4e00\u5206\u949f", 
    "about a month": "\u5927\u7ea6\u4e00\u4e2a\u6708", 
    "about a year": "\u5927\u7ea6\u4e00\u5e74", 
    "about an hour": "\u5927\u7ea6\u4e00\u5c0f\u65f6", 
    "and others": "\u5176\u4ed6", 
    "anonymous": "\u533f\u540d", 
    "answer": "\u7b54\u6848", 
    "answered question": "\u5df2\u56de\u590d\u7684\u95ee\u9898", 
    "bytes": "\u5b57\u8282", 
    "content group": "\u5185\u5bb9\u7ec4", 
    "correct": "\u6b63\u786e", 
    "course_id": "\u8bfe\u7a0bID", 
    "designation": "\u6307\u5b9a", 
    "discussion": "\u8ba8\u8bba", 
    "dragging": "\u62d6\u62fd", 
    "dragging out of slider": "\u62d6\u62fd\u51fa\u6ed1\u5757\u533a\u57df", 
    "dropped in slider": "\u5728\u6ed1\u5757\u4e2d\u653e\u4e0b", 
    "dropped on target": "\u5728\u76ee\u6807\u4e0a\u653e\u4e0b", 
    "e.g. 'Sky with clouds'. The description is helpful for users who cannot see the image.": "\u4f8b\u5982\u201c\u5929\u7a7a\u6709\u4e91\u201d\u3002\u8be5\u63cf\u8ff0\u5bf9\u4e8e\u65e0\u6cd5\u770b\u89c1\u56fe\u7247\u7684\u4f7f\u7528\u8005\u662f\u6709\u5e2e\u52a9\u7684\u3002", 
    "e.g. 'google'": "\u4f8b\u5982'google'", 
    "e.g. 'http://google.com'": "e.g. 'http://google.com'", 
    "emphasized text": "\u5f3a\u8c03\u6587\u5b57", 
    "endorsed %(time_ago)s": "%(time_ago)s\u524d\u83b7\u5f97\u652f\u6301", 
    "endorsed %(time_ago)s by %(user)s": "%(time_ago)s\u524d\u83b7\u5f97%(user)s\u7684\u652f\u6301", 
    "enter code here": "\u6b64\u5904\u8f93\u5165\u4ee3\u7801", 
    "enter link description here": "\u6b64\u5904\u8f93\u5165\u94fe\u63a5\u7684\u63cf\u8ff0", 
    "follow this post": "\u5173\u6ce8\u8fd9\u4e2a\u5e16\u5b50", 
    "grade": "\u7ea7", 
    "group configuration": "\u7ec4\u914d\u7f6e", 
    "image omitted": "\u56fe\u50cf\u88ab\u7701\u7565", 
    "incorrect": "\u4e0d\u6b63\u786e", 
    "last activity": "\u6700\u540e\u6d3b\u52a8", 
    "less than a minute": "\u5c11\u4e8e\u4e00\u5206\u949f", 
    "marked as answer %(time_ago)s": "%(time_ago)s\u524d\u88ab\u6807\u8bb0\u4e3a\u7b54\u6848 ", 
    "marked as answer %(time_ago)s by %(user)s": "%(time_ago)s \u524d\u88ab%(user)s\u6807\u8bb0\u4e3a\u7b54\u6848", 
    "name": "\u540d\u79f0", 
    "off": "\u5173\u95ed", 
    "on": "\u5f00\u542f", 
    "open slots": "\u5f00\u653e\u7684\u65f6\u6bb5", 
    "or": "\u6216\u8005", 
    "or create a new one here": "\u6216\u5728\u6b64\u521b\u5efa\u4e00\u4e2a\u65b0\u8d26\u6237", 
    "or sign in with": "\u6216\u8005\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u767b\u5f55", 
    "post anonymously": "\u533f\u540d\u53d1\u5e16", 
    "post anonymously to classmates": "\u5411\u540c\u5b66\u533f\u540d\u53d1\u5e16", 
    "posted %(time_ago)s by %(author)s": "%(author)s\u5728%(time_ago)s\u524d\u53d1\u8868", 
    "section": "\u7ae0", 
    "status (defaults to `unavailable`)": "\u72b6\u6001 (\u9ed8\u8ba4\u4e3a \"\u4e0d\u53ef\u7528\")", 
    "strong text": "\u52a0\u7c97\u6587\u5b57", 
    "subsection": "\u8282", 
    "team count": "\u56e2\u961f\u8ba1\u6570", 
    "template": "\u6a21\u677f", 
    "there is currently {numVotes} vote": [
      "\u5f53\u524d\u6709 {numVotes} \u4e2a\u9009\u7968"
    ], 
    "timed": "\u5b9a\u65f6", 
    "unanswered question": "\u5f85\u56de\u590d\u7684\u95ee\u9898", 
    "unit": "\u5355\u5143", 
    "unsubmitted": "\u672a\u63d0\u4ea4", 
    "username": "\u7528\u6237\u540d", 
    "username or email": "\u7528\u6237\u540d\u79f0/\u7535\u5b50\u90ae\u4ef6", 
    "{browse_span_start}Browse teams in other topics{span_end} or {search_span_start}search teams{span_end} in this topic. If you still can't find a team to join, {create_span_start}create a new team in this topic{span_end}.": "{browse_span_start} \u7528\u5176\u4ed6\u6807\u9898\u6d4f\u89c8\u56e2\u961f {span_end} \u6216 {search_span_start} \u641c\u7d22\u56e2\u961f{span_end} \u65bc\u6b64\u6807\u9898\u3002 \u5982\u679c\u4f60\u4ecd\u7136\u65e0\u6cd5\u627e\u5230\u56e2\u961f\u6765\u52a0\u5165\uff0c {create_span_start} \u5728\u6b64\u6807\u9898\u65b0\u521b\u4e00\u4e2a\u56e2\u961f{span_end}\u3002", 
    "{email} is already on the {container} team. Recheck the email address if you want to add a new member.": "{email}\u5df2\u5728{container}\u56e2\u961f\u4e2d\u3002\u5982\u679c\u60a8\u60f3\u6dfb\u52a0\u65b0\u6210\u5458\uff0c\u8bf7\u518d\u6b21\u68c0\u67e5\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u3002", 
    "{label}: {status}": "{label}: {status}", 
<<<<<<< HEAD
    "{numResponses} other response": [
      "{numResponses} \u5176\u4ed6\u54cd\u5e94"
    ], 
    "{numResponses} response": [
      "{numResponses} \u54cd\u5e94"
    ], 
    "{numVotes} Vote": [
      " {numVotes} \u4e2a\u9009\u7968"
    ], 
    "{organization}\\'s logo": "{organization}\\'s \u7684\u6807\u8bc6", 
    "{paragraphStart}You entered {boldStart}{email}{boldEnd}. If this email address is associated with your {platform_name} account, we will send a message with password reset instructions to this email address.{paragraphEnd}{paragraphStart}If you do not receive a password reset message, verify that you entered the correct email address, or check your spam folder.{paragraphEnd}{paragraphStart}If you need further assistance, {anchorStart}contact technical support{anchorEnd}.{paragraphEnd}": "{paragraphStart}\u60a8\u8f93\u5165\u4e86 {boldStart} {\u7535\u5b50\u90ae\u4ef6} {boldEnd}\u3002\u5982\u679c\u6b64\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u4e0e\u60a8\u7684 {platform_name} \u5e10\u6237\u76f8\u5173\u8054, \u6211\u4eec\u5c06\u5411\u6b64\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u53d1\u9001\u5e26\u6709\u5bc6\u7801\u91cd\u8bbe\u6307\u4ee4\u7684\u90ae\u4ef6\u3002{paragraphEnd}{paragraphStart}\u5982\u679c\u60a8\u6ca1\u6709\u6536\u5230\u5bc6\u7801\u91cd\u8bbe\u90ae\u4ef6, \u8bf7\u786e\u8ba4\u60a8\u8f93\u5165\u7684\u662f\u6b63\u786e\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740, \u6216\u8005\u68c0\u67e5\u60a8\u7684\u5783\u573e\u90ae\u4ef6\u6587\u4ef6\u5939\u3002{paragraphEnd}{paragraphStart}\u5982\u679c\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u5e2e\u52a9, {anchorStart} \u8bf7\u8054\u7cfb\u6280\u672f\u652f\u6301 {anchorEnd}\u3002{paragraphEnd}", 
    "{platform_name} learners can see my:": "\u5bf9{platform_name}\u7528\u6237\u53ef\u89c1\uff1a", 
    "{unread_comments_count} new": "{unread_comments_count} \u65b0\u7684", 
=======
    "{organization}\\'s logo": "{organization}\\'s \u7684\u6807\u8bc6", 
    "{screen_reader_start}Warning:{screen_reader_end} No content groups exist.": "{screen_reader_start}\u8b66\u544a\uff1a{screen_reader_end}\u4e0d\u5b58\u5728\u5185\u5bb9\u7ec4\u3002", 
    "{screen_reader_start}Warning:{screen_reader_end} The previously selected content group was deleted. Select another content group.": "{screen_reader_start}\u8b66\u544a\uff1a{screen_reader_end}\u4e4b\u524d\u9009\u62e9\u7684\u5185\u5bb9\u7ec4\u5df2\u88ab\u5220\u9664\u3002\u8bf7\u9009\u62e9\u53e6\u4e00\u4e2a\u5185\u5bb9\u7ec4\u3002", 
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
    "\u2026": "\u2026"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "N j, Y, P", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y"
    ], 
    "DATE_FORMAT": "N j, Y", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "m/d/Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

