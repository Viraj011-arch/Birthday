// Shared background music player for Riddhi's Birthday website
// Plays Ed Sheeran's "Perfect" and syncs state across page loads.

(function () {
  // Use unique keys to avoid namespace collisions on shared hosting like GitHub Pages
  const STORAGE_KEY_PLAYING = 'riddhi_bday_music_playing';
  const STORAGE_KEY_TIME = 'riddhi_bday_music_time';
  const AUDIO_SRC = 'https://archive.org/download/fave2/Ed%20Sheeran%20-%20Perfect.mp3';

  // Inject Styles for the widget and visualizer
  const styles = `
    @keyframes riddhi-bounce-1 {
      0%, 100% { height: 30%; }
      50% { height: 100%; }
    }
    @keyframes riddhi-bounce-2 {
      0%, 100% { height: 100%; }
      50% { height: 40%; }
    }
    @keyframes riddhi-bounce-3 {
      0%, 100% { height: 50%; }
      50% { height: 90%; }
    }
    .riddhi-music-bar {
      width: 3px;
      background-color: #70585b; /* Match theme primary color */
      border-radius: 9999px;
      transition: height 0.3s ease;
      height: 40%;
    }
    .dark .riddhi-music-bar {
      background-color: #fbdbde; /* Match dark theme primary-fixed */
    }
    .riddhi-bar-1.playing { animation: riddhi-bounce-1 0.8s ease-in-out infinite; }
    .riddhi-bar-2.playing { animation: riddhi-bounce-2 0.8s ease-in-out infinite 0.2s; }
    .riddhi-bar-3.playing { animation: riddhi-bounce-3 0.8s ease-in-out infinite 0.1s; }
    
    #music-player-widget {
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
    }
  `;

  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  // Create Audio Element
  const audio = document.createElement('audio');
  audio.id = 'riddhi-bday-audio';
  audio.src = AUDIO_SRC;
  audio.loop = true;
  audio.preload = 'auto';
  document.body.appendChild(audio);

  // Create Floating UI HTML
  const widget = document.createElement('div');
  widget.id = 'music-player-widget';
  // Positioned bottom-24 to avoid overlapping mobile navigation bar (h-20)
  widget.className = 'fixed bottom-24 right-4 md:right-6 z-[60] flex items-center gap-3 bg-white/60 dark:bg-black/60 border border-white/30 dark:border-white/10 p-2 pl-3 pr-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/80 dark:hover:bg-black/80';
  
  widget.innerHTML = `
    <!-- Small visualizer bars -->
    <div class="flex items-end gap-[3px] h-3.5 w-4" id="music-bars">
      <div class="riddhi-music-bar riddhi-bar-1" style="height: 35%;"></div>
      <div class="riddhi-music-bar riddhi-bar-2" style="height: 70%;"></div>
      <div class="riddhi-music-bar riddhi-bar-3" style="height: 45%;"></div>
    </div>
    <!-- Track Info -->
    <div class="flex flex-col select-none">
      <span class="text-[9px] font-bold text-primary/60 dark:text-primary-fixed/60 uppercase tracking-widest leading-none">Perfect</span>
      <span class="text-[11px] font-bold text-primary dark:text-primary-fixed leading-tight">Ed Sheeran</span>
    </div>
    <!-- Play/Pause Button -->
    <button id="music-play-btn" class="w-8 h-8 rounded-full bg-primary text-white dark:bg-primary-fixed dark:text-on-primary-fixed flex items-center justify-center shadow-md active:scale-95 transition-all hover:brightness-110">
      <span class="material-symbols-outlined text-lg font-bold" id="play-btn-icon" style="font-variation-settings: 'FILL' 1;">play_arrow</span>
    </button>
  `;
  document.body.appendChild(widget);

  // Selectors
  const playBtn = document.getElementById('music-play-btn');
  const playIcon = document.getElementById('play-btn-icon');
  const bars = document.querySelectorAll('.riddhi-music-bar');

  // UI state updater
  function updateUI(isPlaying) {
    if (isPlaying) {
      playIcon.textContent = 'pause';
      bars.forEach((bar, idx) => {
        bar.classList.add('playing');
      });
    } else {
      playIcon.textContent = 'play_arrow';
      bars.forEach((bar, idx) => {
        bar.classList.remove('playing');
        // Reset to initial heights
        if (idx === 0) bar.style.height = '35%';
        if (idx === 1) bar.style.height = '70%';
        if (idx === 2) bar.style.height = '45%';
      });
    }
  }

  // Play audio safely
  function playAudio() {
    audio.play().then(() => {
      localStorage.setItem(STORAGE_KEY_PLAYING, 'true');
      updateUI(true);
    }).catch(err => {
      console.log('Autoplay blocked. Waiting for user interaction.', err);
      // Keep UI paused but state set as playing in storage, so user interaction will play it
      updateUI(false);
    });
  }

  // Pause audio
  function pauseAudio() {
    audio.pause();
    localStorage.setItem(STORAGE_KEY_PLAYING, 'false');
    updateUI(false);
  }

  // Toggle play/pause
  playBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (audio.paused) {
      playAudio();
    } else {
      pauseAudio();
    }
  });

  // Track time update
  audio.addEventListener('timeupdate', () => {
    if (!audio.paused) {
      localStorage.setItem(STORAGE_KEY_TIME, audio.currentTime.toString());
    }
  });

  // Save state on page transition
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(STORAGE_KEY_TIME, audio.currentTime.toString());
  });

  // Initialize playback from localStorage
  // Default to playing on first load unless explicitly paused by the user ('false')
  const shouldPlay = localStorage.getItem(STORAGE_KEY_PLAYING) !== 'false';
  const savedTime = localStorage.getItem(STORAGE_KEY_TIME);

  if (savedTime) {
    audio.currentTime = parseFloat(savedTime);
  }

  if (shouldPlay) {
    // Attempt playback immediately
    playAudio();

    // Fallback interaction listener to start play if blocked by browser
    const startOnInteraction = () => {
      if (audio.paused && localStorage.getItem(STORAGE_KEY_PLAYING) !== 'false') {
        playAudio();
      }
      // Remove listeners once interacted
      document.removeEventListener('click', startOnInteraction);
      document.removeEventListener('touchstart', startOnInteraction);
      document.removeEventListener('keydown', startOnInteraction);
    };

    document.addEventListener('click', startOnInteraction);
    document.addEventListener('touchstart', startOnInteraction);
    document.addEventListener('keydown', startOnInteraction);
  }

  // Handle Home Page Candle Blow Integration
  function initCandleBlowListener() {
    const blowBtn = document.getElementById('blow-candles-btn');
    if (blowBtn) {
      blowBtn.addEventListener('click', () => {
        // Start playing when user blows candles (this is a definitive interaction gesture)
        playAudio();
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCandleBlowListener);
  } else {
    initCandleBlowListener();
  }

})();
