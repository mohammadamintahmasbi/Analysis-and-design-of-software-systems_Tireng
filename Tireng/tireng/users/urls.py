from django.urls import path
from .views import CreateUserView, UpdateUserView, GetUserView, DeleteUserView, ListUserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = "users"

urlpatterns = [
    path(r"create/", view=CreateUserView.as_view(), name="user_create"),
    path(r"update/<int:id>", view=UpdateUserView.as_view(), name="update-user"),
    path(r"list/<int:id>", view=GetUserView.as_view(), name="get_user"),
    path(r"list/", view=ListUserView.as_view(), name="list_of_users"),
    path(r"delete/<int:id>", view=DeleteUserView.as_view(), name="delete_user"),
    path(r"token/", view=TokenObtainPairView.as_view(), name="user_token"),
    path(r"token/refresh/", view=TokenRefreshView.as_view(), name="user_token_refresh")
]