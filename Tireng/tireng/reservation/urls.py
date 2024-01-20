from django.urls import path
from .views import CreateReservationView, ListOfReservationsView

app_name = "reservation"

urlpatterns = [
    path(r"create/", view=CreateReservationView.as_view(), name="create_reservation"),
    path(r"list/", view=ListOfReservationsView.as_view(), name="list_of_reservations"),
]
