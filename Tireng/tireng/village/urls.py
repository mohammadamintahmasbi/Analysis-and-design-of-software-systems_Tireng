from django.urls import path
from .views import AddVillageViewset, ListVillageViewset, RemoveVillageViewset, UpdateVillageViewset, GetVillageViews


app_name = "village"

urlpatterns = [
    path(r"add/", view=AddVillageViewset.as_view(), name="add_village"),    
    path(r"list/", view=ListVillageViewset.as_view(), name="list_of_village"),
    path(r"remove/<slug:slug>", view=RemoveVillageViewset.as_view(), name="remove_village"),
    path(r"update/<slug:slug>", view=UpdateVillageViewset.as_view(), name="update_the_village"),
    path(r"list/<slug:slug>", view=GetVillageViews.as_view(), name="get_village_by_slug")
]