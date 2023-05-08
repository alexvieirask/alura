from django.urls import path
from galeria.views import index, imagem

''' Rotas relacionadas à galeria '''
urlpatterns = [
    path('', index, name='index'),
    path('imagem/', imagem, name='imagem')
]