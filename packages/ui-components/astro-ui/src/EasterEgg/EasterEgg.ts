import { z } from 'astro/zod';

const regex = /^[/\w\s-]+\.(?:mp3|aac|m4a|ogg|opus|wav|aiff)$/i;

const clipsSchema = z.array(z.string().regex(regex));

class EasterEgg extends HTMLElement {
  clips: string[] = [];
  connectedCallback() {
    // Get clips from data attribute
    const clipsData = this.dataset.clips;

    const { data, success, error } = clipsSchema.safeParse(
      JSON.parse(clipsData!),
    );
    if (error) throw new Error(error.message);
    if (success) this.clips = data;

    const button = this.querySelector('#secret-sound');
    if (button) {
      // Remove any existing listeners to prevent duplicates
      button.removeEventListener('click', this.handleClick);
      // Add the event listener
      button.addEventListener('click', this.handleClick);
    }
  }

  private handleClick = () => {
    this.playRandomClip();
  };

  private playRandomClip() {
    // Select a random clip from the clips array
    const randomIndex = Math.floor(Math.random() * this.clips.length);
    const selectedClip = this.clips[randomIndex];

    console.log(`Playing random clip: ${selectedClip}`);

    // Get the single audio element
    const audio = this.querySelector('#easter-audio') as HTMLAudioElement;

    if (audio) {
      // Stop current playback if any
      audio.pause();
      audio.currentTime = 0;

      // Set the new audio source
      audio.src = selectedClip;

      // Play the selected audio
      audio.play().catch((error) => {
        console.error(`Error playing ${selectedClip} audio:`, error);
      });
    } else {
      console.error('Easter audio element not found');
    }
  }
}
customElements.define('easter-egg', EasterEgg);
