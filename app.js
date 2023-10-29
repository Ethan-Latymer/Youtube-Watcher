const IDform = document.getElementById("ID-form");
const iframeCont = document.getElementById("iframe-container");
const submitBtn = document.getElementById("submit-label");
var player = null;

IDform.addEventListener("submit", (event) => {
    event.preventDefault();
});


function onYouTubeIframeAPIReady() {
    IDform.addEventListener("submit", (event) => {   
        event.preventDefault();

        let ID = IDform["ID"].value;
        if (ID.includes("=")) {
            ID = ID.slice(ID.indexOf("=") + 1, ID.indexOf("=") + 12)
        }
        else if (ID.length > 12) {
            ID = ID.slice(0, 11);
        }
    
        if (player == null) {
            player = new YT.Player('player', {
                frameborder: 0,
                
                playerVars: {
                    'enablejsapi': 1,
                    'showinfo': 0,
                    'rel': 0,
                    'controls': 1
                },

                events: {
                    'onReady': onPlayerReady
                }
            });
            
            function onPlayerReady(event) {
                event.target.cueVideoById(ID);
            }
        }
        else {
            player.cueVideoById(ID);
        }
    
        submitBtn.classList.add("selected");
        setTimeout(() => {
            submitBtn.classList.remove("selected");
        }, 500);
    });
}