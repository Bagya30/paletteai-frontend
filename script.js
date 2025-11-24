document.getElementById("styleImages").addEventListener("change", function() {
    const preview = document.getElementById("preview");
    preview.innerHTML = "";
    [...this.files].forEach(file => {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
    });
});

document.getElementById("generateBtn").addEventListener("click", async function() {
    const styleFiles = document.getElementById("styleImages").files;
    const prompt = document.getElementById("prompt").value;
    const output = document.getElementById("output");

    if (!prompt || styleFiles.length === 0) {
        alert("Upload style images + enter a prompt!");
        return;
    }

    output.innerHTML = "⏳ Generating... (please wait)";

    const formData = new FormData();
    formData.append("prompt", prompt);

    [...styleFiles].forEach((file, idx) => {
        formData.append("style_images", file);
    });

    const res = await fetch("YOUR_BACKEND_URL/generate", {
        method: "POST",
        body: formData
    });

    const data = await res.json();
    output.innerHTML = `<img src="${data.output_image}" />`;
});
