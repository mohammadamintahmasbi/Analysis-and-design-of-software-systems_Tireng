from django.urls import reverse
from model_bakery import baker
from rest_framework.test import APITestCase, APIClient
from tireng.users.models import User
from tireng.village.models import Village
from rest_framework import status

class TestVillageApp(APITestCase):
    @classmethod
    def setUp(cls) -> None:
        cls.test_user = baker.make(User, is_owner = True)
        cls.test_village = baker.make(Village, owner=cls.test_user, price_per_day=100)
    
    def test_create_new_village(self):
        client = APIClient()
        client.force_authenticate(user=self.test_user)
        url = reverse("village:add_village")
        data = {
            "name": "test_house",
            "address": "baker 221B",
            "num_of_rooms": 1,
            "meterage": 27,
            "price_per_day": 8,
            "description": "nothig",
            "owner": self.test_user.id
        }
        response = client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
    def test_get_list_of_village(self):
        client = APIClient()
        urls = reverse("village:list_of_village")
        response = client.get(urls)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
    def test_delete_village_with_creator(self):
        client = APIClient()
        url = reverse("village:remove_village", args=[self.test_village.id])
        client.force_authenticate(user=self.test_user)
        response = client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        
    def test_update_village(self):
        client = APIClient()
        url = reverse("village:update_the_village", args=[self.test_village.id])
        client.force_authenticate(user=self.test_user)
        data = {
            "name": "updated",
            "address": "update"
        }
        response = client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
    
        