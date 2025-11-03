document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab-button");
    const display = document.getElementById("display");

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
        switch (tabName) {
            case "dashboard":
                display.innerHTML = `
            
                <img class="bg-base-100 object-none min-w-5/6 h-1/4 card shadow" src="./images/Hero_Banner.png" alt="Young Invincibles college banner" />

                <div class="section-header flex justify-between items-center mb-4 mt-6">
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
                `;

                clickEvents();
            break;
            case "profile":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">User Profile</h1>
                    
                `;
                clickEvents();
            break;
            case "activity":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Activity</h1>
                `;
                clickEvents();
            break;
            case "events": 
                display.innerHTML = `
                    <iframe
                    src="events.html"
                    style="width:100%; height:80vh; border:0; border-radius:12px; background:transparent"
                    title="Events & Calendars"
                    ></iframe>
                `;
                break;
            case "tasks":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Tasks</h1>
                `;
                clickEvents();
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