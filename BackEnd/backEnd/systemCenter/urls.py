from django.urls import path

from .views import CreateUser, Authentication, CreateRoom, RetrieveRoom, CreateExam, RetrieveExam, \
    RetrieveUserRooms, RetrieveRoomExams, JoinRoom, RetrieveUser, AddAdminToRoom , RetriveExamQuestions,submitExam,retrieveSubmittedExams,submitAnswer

urlpatterns = [
    path('user/create/', CreateUser.as_view()),
    path('user/login/', Authentication.as_view()),
    path('user/<int:user_id>/', RetrieveUser.as_view()),

    path('room/create/', CreateRoom.as_view()),
    path('room/<int:room_id>/', RetrieveRoom.as_view()),
    path('room/<slug:room_link>/user/<int:user_id>/join/', JoinRoom.as_view()),
    #path('room/<int:room_id>/user/<int:user_id>/join/', JoinRoom.as_view()),
    path('room/<int:room_id>/user/<int:user_id>/admin/', AddAdminToRoom.as_view()),
    path('rooms/<int:user_id>/', RetrieveUserRooms.as_view()),
    #path('answer/create/', CreateAnswers.as_view()),
    path('exam/create/', CreateExam.as_view()),
    path('exam/<int:exam_id>/', RetrieveExam.as_view()),
    path('exams/<int:room_id>/', RetrieveRoomExams.as_view()),
    path('questions/<int:exam_id>/', RetriveExamQuestions.as_view()),
    path('answer/submit/<int:exam_id>/<int:user_id>', submitExam.as_view()),
    path('answer/retrieve/', retrieveSubmittedExams.as_view()),
    path('answer/submitA/<int:question_id>/<slug:answer_text>', submitAnswer.as_view()),
]