/* Shared quiz widget — instant feedback retrieval practice.
   Usage: <div class="quiz" data-quiz='[{...}]'></div>
   Question schema:
   { "q": "...", "opts": ["A","B","C"], "answer": 1, "why": "解释" }
   Keep option lengths similar to avoid giving away answers. */
(function () {
  document.querySelectorAll(".quiz").forEach(function (host, qi) {
    var data;
    try { data = JSON.parse(host.dataset.quiz); } catch (e) { return; }
    data.forEach(function (item, idx) {
      var box = document.createElement("div");
      box.className = "quiz-q";
      var title = document.createElement("p");
      title.innerHTML = "<strong>Q" + (idx + 1) + ".</strong> " + item.q;
      box.appendChild(title);
      var name = "quiz" + qi + "q" + idx;
      item.opts.forEach(function (opt, oi) {
        var label = document.createElement("label");
        label.className = "opt";
        var input = document.createElement("input");
        input.type = "radio"; input.name = name; input.value = oi;
        label.appendChild(input);
        label.appendChild(document.createTextNode(" " + opt));
        box.appendChild(label);
      });
      var btn = document.createElement("button");
      btn.textContent = "检查答案";
      var fb = document.createElement("div");
      fb.className = "fb";
      btn.addEventListener("click", function () {
        var sel = box.querySelector("input:checked");
        fb.className = "fb";
        if (!sel) { fb.classList.add("bad"); fb.textContent = "先选一个答案再检查。"; return; }
        if (Number(sel.value) === item.answer) {
          fb.classList.add("ok");
          fb.textContent = "✓ 正确。" + (item.why || "");
        } else {
          fb.classList.add("bad");
          fb.textContent = "✗ 不对。" + (item.why || "");
        }
      });
      box.appendChild(btn);
      box.appendChild(fb);
      host.appendChild(box);
    });
  });
})();
