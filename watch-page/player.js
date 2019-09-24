$(document).ready(function() {
    function createPlaylistCard(obj, pos) {
        // <div id="card3" class="playlist-card">
        //     <img class="thumbnail" src="https://i.vimeocdn.com/video/726986673_390x220.webp" />
        //     <h3 class="video-card-title">The Heart of Soba</h3>
        // </div>

        var mainDiv = document.createElement('div');
        mainDiv.id = 'card' + obj.id;
        mainDiv.className = 'playlist-card';

        var thumbnail = document.createElement('img');
        thumbnail.src = obj.thumbnail;
        thumbnail.className = 'thumbnail';

        var title = document.createElement('h3');
        title.className = 'video-card-title';
        title.innerHTML = obj.title;

        mainDiv.appendChild(thumbnail);
        mainDiv.appendChild(title);

        return mainDiv;
    }
});