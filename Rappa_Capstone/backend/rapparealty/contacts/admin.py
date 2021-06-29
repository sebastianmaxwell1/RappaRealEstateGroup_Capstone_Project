from django.contrib import admin
from .models import Contact

class ContactAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'phone', 'email', 'subject')
    list_display_links = ('id', 'name')
    search_fields = ('name', 'phone', 'email', 'subject')
    list_per_page = 25

admin.site.register(Contact, ContactAdmin)