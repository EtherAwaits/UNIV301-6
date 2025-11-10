document.addEventListener("DOMContentLoaded", () => {

  const tabs = document.querySelectorAll(".tab-button");
  const display = document.getElementById("display");
  let currentTab = "";

  updateDisplay("dashboard"); // Begin at home tab

  // Handle tab switching.
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const tabName = tab.getAttribute("tab-data");
      updateDisplay(tabName);
      // Close drawer on mobile after selection
      const drawer = document.getElementById("my-drawer-2");
      if (drawer) drawer.checked = false;
    });
  });

  // Toast Alerts, accepts background colors.
  function showToast(message, color = "bg-info") {
    const toast = document.createElement("div");
    toast.className = `toast toasty fixed bottom-1 right-1 p-3 text-white rounded-lg shadow-lg ${color}`;
    toast.style.transition = "opacity 0.5s ease";
    toast.textContent = message;

    // Remove previous toast if needed.
    const prior = document.querySelector(".toasty");
    if (prior) prior.remove();
    document.body.appendChild(toast);

    // Fade out
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }

  // Handle unfinished and unneeded features
  function clickEvents() {
    const clicks = document.querySelectorAll(".clickevent");
    clicks.forEach((click) => {
      click.addEventListener("click", () => {
        showToast("Sorry! Content is not included in this Demo.", "bg-error");
      });
    });
  }

  // --- Tooltip helpers for the chart ---
  function createChartTooltip() {
    let tip = document.querySelector(".chart-tip");
    if (!tip) {
      tip = document.createElement("div");
      tip.className = "chart-tip";
      tip.style.position = "fixed";
      tip.style.pointerEvents = "none";
      tip.style.background = "#ffffff";
      tip.style.color = "#0f2742";
      tip.style.border = "1px solid rgba(0,0,0,.08)";
      tip.style.boxShadow = "0 10px 24px rgba(0,0,0,.15)";
      tip.style.borderRadius = "10px";
      tip.style.padding = "10px 12px";
      tip.style.fontSize = "12px";
      tip.style.lineHeight = "1.35";
      tip.style.zIndex = "9999";
      tip.style.display = "none";
      tip.style.maxWidth = "260px";
      tip.style.transform = "translate(-50%, -120%)";
      document.body.appendChild(tip);
    }
    return tip;
  }

  function positionTooltip(tip, x, y) {
    const pad = 12;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = tip.getBoundingClientRect();
    let tx = x;
    let ty = y - 12; // above cursor

    // Keep within viewport bounds
    if (tx - rect.width / 2 < pad) tx = rect.width / 2 + pad;
    if (tx + rect.width / 2 > vw - pad) tx = vw - rect.width / 2 - pad;
    if (ty - rect.height < pad) ty = y + rect.height + 20;

    tip.style.left = `${tx}px`;
    tip.style.top = `${ty}px`;
  }

  // Build the bar chart (compact: 240px tall) and add hover + tooltip
  function hydrateLeaderboardChart() {
    const cols = Array.from(document.querySelectorAll(".leaderboard .col"));
    if (!cols.length) return;

    // Data set for top 3 contributors per region
    const DATA = {
      "Illinois": {
        total: 25500,
        top: [
          { name: "Alex Rivera", points: 8700 },
          { name: "Morgan Lee", points: 6300 },
          { name: "Priya Shah", points: 4100 }
        ]
      },
      "New York": {
        total: 21350,
        top: [
          { name: "Jordan Kim", points: 7200 },
          { name: "Taylor Brooks", points: 5600 },
          { name: "Chris Patel", points: 3300 }
        ]
      },
      "Colorado": {
        total: 20010,
        top: [
          { name: "Avery Johnson", points: 6900 },
          { name: "Elena Garcia", points: 5200 },
          { name: "Noah Chen", points: 3100 }
        ]
      },
      "California": {
        total: 19470,
        top: [
          { name: "Isabella Rossi", points: 6400 },
          { name: "Ethan Nguyen", points: 5000 },
          { name: "Maya Thompson", points: 3200 }
        ]
      },
      "Florida": {
        total: 18120,
        top: [
          { name: "Liam Martinez", points: 5900 },
          { name: "Olivia Perez", points: 4600 },
          { name: "Daniel White", points: 2800 }
        ]
      },
      "Texas": {
        total: 16200,
        top: [
          { name: "Sophia Hernandez", points: 5400 },
          { name: "Benjamin Clark", points: 4200 },
          { name: "Emma Davis", points: 2600 }
        ]
      },
      "Virginia": {
        total: 13200,
        top: [
          { name: "William Scott", points: 4600 },
          { name: "Harper Moore", points: 3600 },
          { name: "Zoe Adams", points: 2100 }
        ]
      },
      "Other States": {
        total: 11000,
        top: [
          { name: "Riley Cooper", points: 3800 },
          { name: "Jackson Ward", points: 2900 },
          { name: "Ava Bennett", points: 1900 }
        ]
      }
    };

    const H = 240; // chart height must match CSS
    const max = Math.max(...cols.map(c => +c.dataset.val || 0));
    const tip = createChartTooltip();

    cols.forEach(c => {
      const v = +c.dataset.val || 0;
      const bar = c.querySelector(".bar");
      const name = c.querySelector(".col-name")?.textContent?.trim() || "";
      const norm = max ? (v / max) : 0;        // 0..1
      const curved = Math.pow(norm, 1.45);     // emphasize differences
      const pct = 5 + 95 * curved;             // baseline so small values still visible
      bar.style.height = (H * pct / 100) + "px";

      // Hover interactions
      const regionData = DATA[name];

      function buildTipHTML() {
        if (!regionData) return "";
        const total = regionData.total || v || 1;
        const rows = regionData.top.slice(0, 3).map((t, i) => {
          const share = Math.min(100, (t.points / total) * 100);
          return `<div style="display:flex;justify-content:space-between;gap:12px;">
                    <span><strong>${i + 1}.</strong> ${t.name}</span>
                    <span style="font-weight:700">${t.points.toLocaleString()} pts</span>
                  </div>
                  <div style="height:6px;border-radius:999px;background:rgba(15,39,66,.08);overflow:hidden;margin:6px 0 8px;">
                    <div style="height:100%;width:${share.toFixed(1)}%;background:${getComputedStyle(c).getPropertyValue('--color')};opacity:.75"></div>
                  </div>`;
        }).join("");

        return `<div style="font-weight:800;margin-bottom:6px">${name}</div>
                <div style="color:#334155;margin-bottom:8px">${(v || regionData.total).toLocaleString()} total points</div>
                ${rows}`;
      }

      c.addEventListener("mouseenter", () => {
        c.classList.add("active");
        tip.innerHTML = buildTipHTML();
        tip.style.display = "block";
      });

      c.addEventListener("mousemove", (e) => {
        positionTooltip(tip, e.clientX, e.clientY);
      });

      c.addEventListener("mouseleave", () => {
        c.classList.remove("active");
        tip.style.display = "none";
      });
    });
  }

  // Update the display based on the tab
  function updateDisplay(tabName) {
    if (currentTab === tabName) return; // Prevent redundant updates
    currentTab = tabName;

    switch (tabName) {
      case "dashboard":
        display.innerHTML = `
          <div class="flex justify-center w-full h-[20vh] md:h-[25vh]">
            <img class="bg-base-100 object-none card shadow" src="./images/Hero_Banner.png" alt="Young Invincibles college banner" />
          </div>

          <div class="section-header flex justify-between items-center mb-2 mt-4">
            <h2 class="text-lg font-bold" id="latest-title">THE LATEST</h2>
            <a class="text-primary font-bold clickevent hover:underline hover:cursor-pointer">SEE ALL</a>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <article class="article-card clickevent">
              <div class="tags">
                <span class="tag badge-primary">Press Releases</span>
                <span class="tag badge-secondary">Health Care</span>
                <span class="tag badge-secondary">National</span>
              </div>
              <h3 class="header">13th Open Enrollment Starts Amid Health Care Crisis</h3>
              <p class="text-muted">(Washington, DC) — This week, the thirteenth annual Open Enrollment period for people to enroll…</p>
            </article>

            <article class="article-card clickevent">
              <div class="tags">
                <span class="tag badge-primary">Press Releases</span>
                <span class="tag badge-secondary">Health Care</span>
                <span class="tag badge-secondary">Workforce & Finances</span>
                <span class="tag badge-secondary">National</span>
              </div>
              <h3 class="header">Millions at Risk as SNAP Benefits Halt</h3>
              <p class="text-muted">(Washington, DC) — As a result of the government shutdown, the Administration has proactively announced…</p>
            </article>

            <article class="article-card clickevent">
              <div class="tags">
                <span class="tag badge-primary">Press Releases</span>
                <span class="tag badge-secondary">Higher Education</span>
                <span class="tag badge-secondary">National</span>
              </div>
              <h3 class="header">Higher Education Compact Forces Campuses to Become…</h3>
              <p class="text-muted">(Washington, DC) — The Administration has extended the Compact for Academic Excellence in Higher Education to…</p>
            </article>
          </div>

          <div class="section-header flex justify-between items-center mb-2 mt-2">
            <h2 class="text-lg font-bold">NATIONAL LEADERBOARD</h2>
            <a class="text-primary font-bold clickevent hover:underline hover:cursor-pointer">VIEW STATS</a>
          </div>

          <!-- COMPACT 240px BAR CHART with Hover + Tooltip -->
          <section class="leaderboard" aria-labelledby="leaderboard-title">
            <h2 id="leaderboard-title" class="sr-only">National Leaderboard Chart</h2>
            <div class="vchart" role="img" aria-label="Column chart of total points by state">
              <div class="bars">
                <div class="col" data-val="25500" style="--color:#facc15">
                  <div class="bar"></div>
                  <div class="col-name">Illinois</div>
                  <div class="col-val">25,500</div>
                </div>

                <div class="col" data-val="21350" style="--color:#38bdf8">
                  <div class="bar"></div>
                  <div class="col-name">New York</div>
                  <div class="col-val">21,350</div>
                </div>

                <div class="col" data-val="20010" style="--color:#4ade80">
                  <div class="bar"></div>
                  <div class="col-name">Colorado</div>
                  <div class="col-val">20,010</div>
                </div>

                <div class="col" data-val="19470" style="--color:#f87171">
                  <div class="bar"></div>
                  <div class="col-name">California</div>
                  <div class="col-val">19,470</div>
                </div>

                <div class="col" data-val="18120" style="--color:#1e3a8a">
                  <div class="bar"></div>
                  <div class="col-name">Florida</div>
                  <div class="col-val">18,120</div>
                </div>

                <div class="col" data-val="16200" style="--color:#1e40af">
                  <div class="bar"></div>
                  <div class="col-name">Texas</div>
                  <div class="col-val">16,200</div>
                </div>

                <div class="col" data-val="13200" style="--color:#0f2742">
                  <div class="bar"></div>
                  <div class="col-name">Virginia</div>
                  <div class="col-val">13,200</div>
                </div>

                <div class="col" data-val="11000" style="--color:#0b1a33">
                  <div class="bar"></div>
                  <div class="col-name">Other States</div>
                  <div class="col-val">11,000</div>
                </div>
              </div>
            </div>
          </section>

          <style>
            .leaderboard{padding:20px;background:#f9fafb;border-radius:10px;margin-top:8px;box-shadow:0 4px 10px rgba(0,0,0,.05);color:#0f2742}
            .vchart{border:1px solid rgba(0,0,0,.06);border-radius:12px;padding:16px;background:
              repeating-linear-gradient(to top, rgba(0,0,0,.06) 0 1px, transparent 1px 36px), #fff}
            .bars{display:grid;grid-template-columns:repeat(8,1fr);gap:14px;align-items:end;height:240px} /* 240px desktop */
            .col{display:grid;grid-template-rows:1fr auto auto;align-items:end;text-align:center}
            .bar{
              height:0;
              background:var(--color);
              border-radius:8px 8px 0 0;
              box-shadow:0 8px 16px rgba(0,0,0,.12);
              transition:height .6s ease, transform .15s ease, box-shadow .15s ease;
              will-change: transform, box-shadow;
            }
            .col.active .bar{
              transform: translateY(-6px) scaleX(1.03);
              box-shadow:0 14px 28px rgba(0,0,0,.18);
            }
            .col-name{margin-top:8px;font-weight:700}
            .col-val{font-size:12px;color:#334155}
            @media (max-width: 760px){
              .bars{grid-template-columns:repeat(4,1fr);gap:12px;height:180px} /* 180px mobile */
            }
            /* Visually-hidden class for the chart label */
            .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}
          </style>
        `;

        clickEvents();
        hydrateLeaderboardChart();  // build heights + hover + tooltip
        break;

      case "profile":
        display.innerHTML = `<h1 class="text-xl font-bold my-4">User Profile</h1>`;
        break;

      case "activity":
        display.innerHTML = `
          <h1 class="text-xl font-bold my-4">Activity</h1>
          <!-- (unchanged content) -->
        `;
        break;

      case "events":
        display.innerHTML = `
          <iframe
            src="events.html"
            title="Events & Calendars"
            class="w-full h-full"
          ></iframe>
        `;
        break;

      case "community":
        display.innerHTML = `<h1 class="text-xl font-bold my-4">Community</h1>`;
        clickEvents();
        break;

      case "leaderboards":
        display.innerHTML = `<h1 class="text-xl font-bold my-4">Leaderboards</h1>`;
        clickEvents();
        break;

      case "rewards":
        display.innerHTML = `<h1 class="text-xl font-bold my-4">Rewards</h1>`;
        clickEvents();
        break;

      default:
        showToast("Sorry! Content is not currently included in this Demo.", "bg-error");
    }
  }
});
