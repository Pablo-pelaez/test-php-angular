import requests 
from PIL import Image, ImageTk
import tkinter as tk
from io import BytesIO
import matplotlib.pyplot as plt

def get_list_pokemon():
    url = f"https://pokeapi.co/api/v2/pokemon/"
    response = requests.get(url)
    result = response.json()['results'][0:5]
    print(result)
    return result

def show_pokemon(img):
    root = tk.Tk()
    img = ImageTk.PhotoImage(img)
    panel = tk.Label(root, image=img)
    panel.pack(side="bottom", fill="both", expand="yes")
    root.mainloop()
    return None
    

def get_img_pokemon():
    list_pokemon = get_list_pokemon()
    for pokemon in list_pokemon:
        url = pokemon['url']
        request = requests.get(url)
        pokemon_image = request.json()['sprites']['front_default']
        img_byte = Image.open(BytesIO(requests.get(pokemon_image).content))
        show_pokemon(img_byte)
    return None



get_img_pokemon()