"""
URLs for the Enrollment API

"""
from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import include
from django.conf.urls import patterns, url
=======
from django.conf.urls import url
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e

from .views import EnrollmentCourseDetailView, EnrollmentListView, EnrollmentView, UnenrollmentView

urlpatterns = [
    url(r'^enrollment/{username},{course_key}$'.format(
        username=settings.USERNAME_PATTERN,
        course_key=settings.COURSE_ID_PATTERN),
        EnrollmentView.as_view(), name='courseenrollment'),
    url(r'^enrollment/{course_key}$'.format(course_key=settings.COURSE_ID_PATTERN),
        EnrollmentView.as_view(), name='courseenrollment'),
    url(r'^enrollment$', EnrollmentListView.as_view(), name='courseenrollments'),
<<<<<<< HEAD
    url(
        r'^course/{course_key}$'.format(course_key=settings.COURSE_ID_PATTERN),
        EnrollmentCourseDetailView.as_view(),
        name='courseenrollmentdetails'
    ),
)
urlpatterns += (
    url(r'', include('openedx.stanford.common.djangoapps.enrollment.urls')),
)
=======
    url(r'^course/{course_key}$'.format(course_key=settings.COURSE_ID_PATTERN),
        EnrollmentCourseDetailView.as_view(), name='courseenrollmentdetails'),
    url(r'^unenroll/$', UnenrollmentView.as_view(), name='unenrollment'),
]
>>>>>>> 896e66f8fcc1d2828d9c8299da0187ba96e8156e
