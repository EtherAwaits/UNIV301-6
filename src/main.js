document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab-button");
    const display = document.getElementById("display");
    let currentTab = "";

    updateDisplay("dashboard"); //Begin at home tab

    // Handle tab switching.
    tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
            const tabName = tab.getAttribute("tab-data");
            updateDisplay(tabName);
            // Close drawer on mobile after selection
            document.getElementById("my-drawer-2").checked = false;
        });
    });

    // Toast Alerts, accepts background colors.
    function showToast(message, color = "bg-info") {
        const toast = document.createElement("div");
        toast.className = `toast toasty fixed bottom-1 right-1 p-3 text-white rounded-lg shadow-lg ${color}`;
        toast.style.transition = "opacity 0.5s ease";
        toast.textContent = message;

        // Remove previous toast if needed.
        if (document.querySelector(".toasty")) {
            document.querySelector(".toasty").remove();
        }
        document.body.appendChild(toast);

        // Fade out
        setTimeout(() => {
            toast.style.opacity = "0";
            setTimeout(() => {
                toast.remove();
            }, 500);
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
                    <h2 class="text-lg font-bold" id="latest-title">NATIONAL LEADERBOARD</h2>
                    <a class="text-primary font-bold clickevent hover:underline hover:cursor-pointer">VIEW STATS</a>
                </div>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-warning">1st Place</span>
                    </div>
                    <h3 class="header">Illinois</h3>
                    <p class="font-bold ">25500 Total Points</p>
                    </article>
                    
                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-info">2nd Place</span>
                    </div>
                    <h3 class="header">New York</h3>
                    <p class="font-bold">21350 Total Points</p>
                    </article>

                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-success">3rd Place</span>
                    </div>
                    <h3 class="header">Colorado</h3>
                    <p class="font-bold">20010 Total Points</p>
                    </article>

                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-error">4th Place</span>
                    </div>
                    <h3 class="header">California</h3>
                    <p class="font-bold">19470 Total Points</p>
                    </article>

                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-neutral">5th Place</span>
                    </div>
                    <h3 class="header">Florida</h3>
                    <p class="font-bold">18120 Total Points</p>
                    </article>

                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-neutral">6th Place</span>
                    </div>
                    <h3 class="header">Texas</h3>
                    <p class="font-bold">16200 Total Points</p>
                    </article>

                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-neutral">7th Place</span>
                    </div>
                    <h3 class="header">Virginia</h3>
                    <p class="font-bold">13200 Total Points</p>
                    </article>

                    <article class="article-card clickevent">
                    <div class="tags">
                        <span class="tag badge-neutral">8th Place</span>
                    </div>
                    <h3 class="header">Other States</h3>
                    <p class="font-bold">11000 Total Points</p>
                    </article>
                </div>
                `;

                clickEvents();
            break;
            case "profile":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">User Profile</h1>
                    
                `;
            break;
            case "activity":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Activity</h1>

                    <div class="stats stats-vertical md:stats-horizontal w-full">

                        <div class="stat place-items-center">
                            <div class="stat-title">Life-Time Points</div>
                            <div class="stat-value">9,634</div>
                            <div class="stat-desc">From 2023-2025</div>
                        </div>
                        
                        <div class="stat place-items-center">
                            <div class="stat-title">Current Points</div>
                            <div class="stat-value text-primary">4,633</div>
                            <div class="stat-desc text-primary">#5 in State</div>
                        </div>

                        <div class="stat place-items-center">
                            <div class="stat-title">Days Active Streak</div>
                            <div class="stat-value text-secondary">32 Days</div>
                            <div class="stat-desc text-secondary">42 All-time Streak</div>
                        </div>
                    </div>

                    <div class="flex flex-col md:flex-row justify-around items-center w-full h-auto my-4 gap-4">
                        <div class="card bg-base-100 shadow my-4 p-4 w-full md:w-1/2 h-full">
                            <h3 class="header pb-2">Almost there!</h3>
                            <p class="pt-0 text-sm opacity-60">Keep posting to earn the Community Advocate badge!<b class="mx-1">94/100 Posts</b></p>
                            <div class="flex items-end h-full gap-2 my-2">
                                <button class="btn btn-sm btn-primary clickevent w-30">View Posts</button>
                                <div class="bar-bg relative w-3/4 mx-auto">
                                    <div class="bar-fill bg-gradient-to-r from-red-600 to-orange-400" style="width: 94%;"></div>
                                </div>
                            </div>
                        </div>

                        <div class="card bg-base-100 shadow my-4 p-4 w-full md:w-1/2 h-full">
                            <h3 class="header pb-2">Keep it up!</h3>
                            <p class="pt-0 text-sm opacity-60">You're on a 32-day activity streak!<b class="mx-1">Next Milestone: 50 Days</b></p>
                            <div class="flex items-end h-full gap-2 my-2">
                                <button class="btn btn-sm btn-primary w-30 clickevent">View Activity</button>
                                <div class="bar-bg relative w-3/4 mx-auto">
                                    <div class="bar-fill bg-gradient-to-r from-red-600 to-orange-400" style="width: 64%;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="list bg-base-100 rounded-box shadow-md">

                    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Recent Activities</li>

                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                            <div><b>Completed</b> "Attend Health Workshop"</div>
                            <div class="text-success font-bold">+100 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                                <div><b>Joined</b> "Community Health Forum"</div>
                                <div class="text-success font-bold">+50 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                                <div><b>Redeemed</b> "$10 Chipotle Gift Card"</div>
                                <div class="text-error font-bold">-1000 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                                <div><b>Registered for</b> "Nutrition Webinar"</div>
                                <div class="text-success font-bold">+75 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                                <div><b>Completed</b> "Financial Literacy Course"</div>
                                <div class="text-success font-bold">+150 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                                <div><b>Participated in</b> "Mental Health Awareness Campaign"</div>
                                <div class="text-success font-bold">+200 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                                <div><b>Registered for</b> "Nutrition Webinar"</div>
                                <div class="text-success font-bold">+75 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center mb-2">
                                <div><b>Completed</b> "Financial Literacy Course"</div>
                                <div class="text-success font-bold">+150 Points</div>
                            </div>
                        </li>

                    </ul>

                    <a class="btn btn-primary text-white my-2 w-full clickevent">Load More</a>
                `;

                clickEvents();
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
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Community</h1>
                `;
                clickEvents();
            break;
            case "leaderboards":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Leaderboards</h1>
                `;
                clickEvents();
            break;
            case "rewards":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Rewards</h1>
                `;
                clickEvents();
            break;
            default:
                showToast("Sorry! Content is not currently included in this Demo.", "bg-error");
        }
    }
});