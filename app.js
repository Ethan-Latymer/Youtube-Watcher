const IDform = document.getElementById("ID-form");
const iframeCont = document.getElementById("iframe-container");
const submitBtn = document.getElementById("submit-label");

IDform.addEventListener("submit", (event) => {
    const iframe = `<iframe src="http://www.youtube.com/embed/${IDform["ID"].value}" frameborder="0" allowfullscreen></iframe>`
    let iframeDiv = document.createElement("div");

    submitBtn.classList.add("selected");
    setTimeout(() => {
        submitBtn.classList.remove("selected");
    }, 500);

    if (iframeCont.classList.contains("used")) {
        iframeCont.innerHTML = '';
        iframeCont.classList.remove("used");
    }

    iframeCont.classList.add("used");
    iframeDiv.innerHTML = iframe;
    iframeCont.append(iframeDiv);
    event.preventDefault();
});