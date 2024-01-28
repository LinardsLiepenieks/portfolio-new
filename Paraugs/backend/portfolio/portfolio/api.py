from rest_framework import routers
from landing import views

router = routers.DefaultRouter()
router.register(r'questions', views.QuestionViewSet)
