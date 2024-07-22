const sounds = ['ah-ha', 'back-of-the-net', 'bangoutoforder', 'dan', 'emailoftheevening', 'hellopartridge', 'iateascotchegg', 'imconfused'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopPlaying();
        document.getElementById(sound),play();
    })

    document.getElementById('buttons').append(btn);
})


function stopPlaying() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime =0;
        
    })
}