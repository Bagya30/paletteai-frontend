// script.js — improved with spinner, status updates, graceful errors
const backendBase = "http://127.0.0.1:8000"; // local backend while testing; replace with deployed URL when ready

const styleInput = document.getElementById("styleImages");
const preview = document.getElementById("preview");
const generateBtn = document.getElementById("generateBtn");
const promptInput = document.getElementById("prompt");
const output = document.getElementById("output");
const spinner = document.getElementById("spinner");
const statusEl = document.getElementById("status");
const strengthEl = document.getElementById("strength");
const colorLockEl = document.getElementById("colorLock");
const downloadAll = document.getElementById("downloadAll");
const regenerate = document.getElementById("regenerate");

function setStatus(text){
  statusEl.textContent = text;
}

styleInput.addEventListener("change", e=>{
  preview.innerHTML = "";
  [...e.target.files].forEach(file=>{
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
  });
});

function showSpinner(show=true){
  spinner.classList.toggle("hidden", !show);
  setStatus(show ? "Generating..." : "Idle");
  generateBtn.disabled = show;
}

generateBtn.addEventListener("click", async ()=>{
  const files = styleInput.files;
  const prompt = promptInput.value.trim();
  if(!prompt || files.length === 0){
    alert("Please upload style images and enter a prompt.");
    return;
  }

  showSpinner(true);
  output.innerHTML = "";
  try{
    const fd = new FormData();
    fd.append("prompt", prompt);
    fd.append("strength", strengthEl.value);
    fd.append("color_lock", colorLockEl.checked ? "1" : "0");
    for(let i=0;i<files.length;i++) fd.append("style_images", files[i]);

    const res = await fetch(`${backendBase}/generate`, {
      method: "POST",
      body: fd
    });

    if(!res.ok) throw new Error("Server error: " + res.statusText);
    const data = await res.json();

    // Backend returns either data.output_image (single URL) or arrays
    const images = Array.isArray(data.output_image) ? data.output_image : [data.output_image];

    images.forEach(src=>{
      const img = document.createElement("img");
      img.src = src;
      output.appendChild(img);
    });
    setStatus("Completed");
  }catch(err){
    console.error(err);
    setStatus("Error");
    output.innerHTML = `<div style="color: #ff8383">Failed to generate: ${err.message}</div>`;
  }finally{
    showSpinner(false);
  }
});

// Small UX: regenerate uses previous prompt/files (if available)
regenerate.addEventListener("click", ()=> generateBtn.click());

// download all
downloadAll.addEventListener("click", ()=>{
  const imgs = output.querySelectorAll("img");
  imgs.forEach((img, idx)=>{
    const a = document.createElement("a");
    a.href = img.src;
    a.download = `paletteai_output_${idx+1}.jpg`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
});
