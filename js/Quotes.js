var MYquotes = [
    "Look in the mirror. Are you living your true potential?",
    "Never regret anything that made you smile. - Mark Twain",
    "Die with memories, not dreams. ",
    "Whatever you do, do it well.- Walt Disney",
    "What we think, we become.   -Buddha",
    "All limitations are self-imposed. - Oliver Wendell Holmes",
    "Have enough courage to start and enough heart to finish. - Jessica N.S Tourko",
    "Yesterday you said tomorrow. Just Do It - Nike",
    "Nothing lasts forever but atleast we got those memories.  - J.cole",
    "Don't love them when they are memories, love them now - Ali Garigo.",
    "There's no substitute for Hard work. - Thomas Edison",
    "A happy soul is the best shield for a cruel world. - Atticius",
    "If the whole world was blind how many people world you impress?",
  ];
  var Daily = document.getElementById("quotes");
  var random = Math.floor(Math.random() * 13);
  Daily.innerHTML = MYquotes[random];

  Daily.style.fontSize = "12px";
  Daily.style.width = "180px";