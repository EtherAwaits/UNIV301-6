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

  // Build the tall bar chart after it's injected
  function hydrateLeaderboardChart() {
    const cols = Array.from(document.querySelectorAll(".leaderboard .col"));
    if (!cols.length) return;

    const H = 520; // must match .bars height in CSS
    const max = Math.max(...cols.map(c => +c.dataset.val || 0));

    cols.forEach(c => {
      const v = +c.dataset.val || 0;
      const bar = c.querySelector(".bar");
      const norm = max ? (v / max) : 0;        // 0..1
      const curved = Math.pow(norm, 1.45);     // emphasize differences
      const pct = 5 + 95 * curved;             // keep a small baseline
      bar.style.height = (H * pct / 100) + "px";
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

          <!-- TALL BAR CHART -->
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
            .bars{display:grid;grid-template-columns:repeat(8,1fr);gap:14px;align-items:end;height:520px}
            .col{display:grid;grid-template-rows:1fr auto auto;align-items:end;text-align:center}
            .bar{height:0;background:var(--color);border-radius:8px 8px 0 0;box-shadow:0 8px 16px rgba(0,0,0,.12);transition:height .6s ease}
            .col-name{margin-top:8px;font-weight:700}
            .col-val{font-size:12px;color:#334155}
            @media (max-width: 760px){
              .bars{grid-template-columns:repeat(4,1fr);gap:12px;height:360px}
            }
          </style>
        `;

        clickEvents();
        hydrateLeaderboardChart(); // make bars tall & scaled
        break;

      case "profile":
        display.innerHTML = `
          <h1 class="text-xl font-bold my-4">User Profile</h1>
        `;
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
