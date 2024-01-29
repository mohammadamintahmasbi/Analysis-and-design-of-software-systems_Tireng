from django.urls import path
from .views import CreateReservationView, ListOfReservationsView, DeleteReservationView

app_name = "reservation"

urlpatterns = [
    path(r"create/", view=CreateReservationView.as_view(), name="create_reservation"),
    path(r"list/", view=ListOfReservationsView.as_view(), name="list_of_reservations"),
    path(r"delete/<int:id>", view=DeleteReservationView.as_view(), name="delete_reservation"),
]
