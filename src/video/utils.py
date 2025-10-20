import requests
from pathlib import Path
from moviepy.editor import VideoFileClip

def generate_preview_from_url(url, preview_path):
    
    temp_path = Path("temp_video.mp4")
    r = requests.get(url)
    with open(temp_path, "wb") as f:
        f.write(r.content)
    
    clip = VideoFileClip(str(temp_path))
    frame = clip.get_frame(1)  
    from PIL import Image
    im = Image.fromarray(frame)
    im.save(preview_path)
    
    temp_path.unlink() 