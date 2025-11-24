:root{
  --bg:#0f1013;
  --card:#0f1720;
  --muted:#98a0aa;
  --accent:#6EE7B7;
  --glass: rgba(255,255,255,0.04);
  --radius:12px;
  --container:1200px;
  font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

*{box-sizing:border-box}
html,body{height:100%;margin:0;background:linear-gradient(180deg,#071124 0%, #07142a 60%);color:#e6eef6}
a{color:inherit;text-decoration:none}

.topbar{
  display:flex;justify-content:space-between;align-items:center;padding:18px 32px;background:transparent;
}
.brand{display:flex;gap:14px;align-items:center}
.logo{width:56px;height:56px;border-radius:10px;object-fit:cover;border:1px solid rgba(255,255,255,0.06)}
.brand h1{margin:0;font-size:20px}
.brand .tag{margin:0;color:var(--muted);font-size:12px}

.container{
  width:95%;max-width:var(--container);margin:28px auto;display:grid;grid-template-columns:420px 1fr;gap:24px;
}

.left-panel, .right-panel{
  background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  padding:18px;border-radius:var(--radius);backdrop-filter: blur(6px);box-shadow: 0 6px 18px rgba(2,6,23,0.6)
}
.left-panel h2{margin-top:0}
.dropzone input[type=file]{width:100%;padding:10px;border-radius:10px;border:1px dashed rgba(255,255,255,0.06);background:transparent;color:var(--muted)}
.preview-grid{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.preview-grid img{width:92px;height:92px;object-fit:cover;border-radius:8px;border:1px solid rgba(255,255,255,0.04)}

textarea{width:100%;height:120px;padding:10px;border-radius:10px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit;resize:vertical}

.controls{display:flex;gap:12px;align-items:center;margin-top:10px;color:var(--muted)}
.controls label{font-size:13px}

button{cursor:pointer;border:0;padding:10px 14px;border-radius:10px}
.primary{background:linear-gradient(90deg,#4cc9f0,#6EE7B7);color:#022;box-shadow:0 6px 18px rgba(110,231,183,0.12);font-weight:600;width:100%}
.ghost{background:transparent;border:1px solid rgba(255,255,255,0.04);color:var(--muted);padding:8px 12px;border-radius:10px;margin-right:8px}

.output-header{display:flex;justify-content:space-between;align-items:center}
.status{font-size:13px;color:var(--muted)}

.spinner{display:flex;align-items:center;gap:12px;padding:18px;justify-content:center}
.hidden{display:none}
.loader{width:48px;height:48px;border-radius:50%;border:6px solid rgba(255,255,255,0.06);border-top:6px solid var(--accent);animation:spin 1s linear infinite}
.loader-text{color:var(--muted)}

@keyframes spin{to{transform:rotate(360deg)}}

.output-grid{display:flex;flex-direction:column;gap:14px;align-items:center;padding-top:12px}
.output-grid img{width:640px;border-radius:12px;box-shadow:0 10px 30px rgba(2,8,20,0.6);border:1px solid rgba(255,255,255,0.03)}

footer{text-align:center;color:var(--muted);padding:20px;margin-top:20px}
@media(max-width:980px){
  .container{grid-template-columns:1fr; padding:12px}
  .output-grid img{width:100%}
}
