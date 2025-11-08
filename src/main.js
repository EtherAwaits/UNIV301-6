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
                    <h2 class="header">THE LATEST</h2>
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
                    <h2 class="header">NATIONAL LEADERBOARD</h2>
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
                    <div class="card bg-base-100 shadow my-4 w-full md:w-3/4 mx-auto flex flex-col">
                        
                        <div class="flex justify-center w-full h-[20vh] md:h-[25vh]">
                            <img class="bg-base-100 object-none card shadow" src="./images/Hero_Banner.png" alt="Young Invincibles college banner" />
                        </div>
                    
                        <div class="avatar p-4 -my-24">
                            <div class="ring-yellow-500 w-36 rounded-full ring-4 ring-offset-4 y-12">
                                <img src="https://cdn.britannica.com/89/164789-050-D6B5E2C7/Barack-Obama-2012.jpg?w=400&h=300&c=crop" />
                            </div>
                        </div>

                        <div class="h-20"></div>
                        
                        <div class="grid grid-cols-2 gap-4 px-4">

                            <div class="flex flex-col p-4">
                                <h3 class="header">Johnathan Doe</h3>
                                <p class="text-sm">Young Invincibles helped me find my voice in public policy. Now, I’m passionate about mentoring new leaders who want to make systems more equitable.</p>
                                <a class="text-primary font-bold clickevent hover:underline hover:cursor-pointer mt-2">EDIT</a>
                                <div class="flex gap-6 mt-2">
                                    <a class="hover:cursor-pointer  clickevent">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        class="fill-primary hover:fill-accent">
                                        <path
                                            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                                        </svg>
                                    </a>
                                    <a class="hover:cursor-pointer  clickevent">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        class="fill-primary hover:fill-accent">
                                        <path
                                            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="flex flex-col p-4 text-sm">
                                <h3 class="header text-yellow-500">Golden Leader</h3>
                                <p class="opacity-60 flex gap-1"><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M15 21H9V12.6C9 12.2686 9.26863 12 9.6 12H14.4C14.7314 12 15 12.2686 15 12.6V21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.4 21H15V18.1C15 17.7686 15.2686 17.5 15.6 17.5H20.4C20.7314 17.5 21 17.7686 21 18.1V20.4C21 20.7314 20.7314 21 20.4 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 21V16.1C9 15.7686 8.73137 15.5 8.4 15.5H3.6C3.26863 15.5 3 15.7686 3 16.1V20.4C3 20.7314 3.26863 21 3.6 21H9Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.8056 5.11325L11.7147 3.1856C11.8314 2.93813 12.1686 2.93813 12.2853 3.1856L13.1944 5.11325L15.2275 5.42427C15.4884 5.46418 15.5923 5.79977 15.4035 5.99229L13.9326 7.4917L14.2797 9.60999C14.3243 9.88202 14.0515 10.0895 13.8181 9.96099L12 8.96031L10.1819 9.96099C9.94851 10.0895 9.67568 9.88202 9.72026 9.60999L10.0674 7.4917L8.59651 5.99229C8.40766 5.79977 8.51163 5.46418 8.77248 5.42427L10.8056 5.11325Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>9,634 Points (#5 Nationwide)</p>
                                <p class="opacity-60 flex gap-1"><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.62964 15.5H12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.62964 8.5H21.3704" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M21.8789 17.9174C22.3727 18.2211 22.3423 18.9604 21.8337 19.0181L19.2671 19.309L18.1159 21.6213C17.8878 22.0795 17.1827 21.8552 17.0661 21.2873L15.8108 15.1713C15.7123 14.6913 16.1437 14.3892 16.561 14.646L21.8789 17.9174Z" stroke="#000000" stroke-width="1.5"></path></svg>Location: Chicago, IL</p>
                                <p class="opacity-60 flex gap-1"><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7H16M8 7V3.6C8 3.26863 8.26863 3 8.6 3H15.4C15.7314 3 16 3.26863 16 3.6V7M8 7H16" stroke="#000000" stroke-width="1.5"></path></svg>Occupation: Policy Analyst</p>
                                <p class="opacity-60 flex gap-1"><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M7 12L17 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7 8L13 8" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 20.2895V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15C21 16.1046 20.1046 17 19 17H7.96125C7.35368 17 6.77906 17.2762 6.39951 17.7506L4.06852 20.6643C3.71421 21.1072 3 20.8567 3 20.2895Z" stroke="#000000" stroke-width="1.5"></path></svg>94 Posts & Discussions</p>
                                <p class="opacity-60 flex gap-1"><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22 12L23 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 2V1" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12 23V22" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 20L19 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 4L19 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 20L5 19" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4 4L5 5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 12L2 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Activity Streak: 32 Days</p>
                                <p class="opacity-60 flex gap-1"><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#000000" stroke-width="1.5" stroke-linejoin="round"></path></svg>Joined on January 1, 2023</p>
                            </div>
                        
                        </div>

                        <ul class="list bg-base-100 rounded-box shadow-md">

                        <li class="p-4 text-xs opacity-60 tracking-wide flex"><svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M14.2718 10.445L18 2M9.31612 10.6323L5 2M12.7615 10.0479L8.835 2M14.36 2L13.32 4.5M6 16C6 19.3137 8.68629 22 12 22C15.3137 22 18 19.3137 18 16C18 12.6863 15.3137 10 12 10C8.68629 10 6 12.6863 6 16Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Badges & Certificates</li>

                            <li class="list-row">
                                <div class="list-item flex justify-between items-center">
                                <div><b>Trailblazer</b> Attend your first YI alumni event.</div>
                                <div class="opacity-60">earned 2/4/2023</div>
                                </div>
                            </li>

                            <li class="list-row">
                                <div class="list-item flex justify-between items-center">
                                <div><b>Changemaker</b> Make 100 posts in your community.</div>
                                <div class="opacity-60">earned 5/12/2023</div>
                                </div>
                            </li>

                            <li class="list-row">
                                <div class="list-item flex justify-between items-center">
                                <div><b>Health Champion</b> Complete 5 health-related activities.</div>
                                <div class="opacity-60">earned 6/20/2023</div>
                                </div>
                            </li>

                            <li class="list-row">
                                <div class="list-item flex justify-between items-center">
                                <div><b>Golden Leader</b> Earn a total of 8,000 points over lifetime.</div>
                                <div class="opacity-60">earned 8/15/2023</div>
                                </div>
                            </li>

                        </ul>

                    </div>
                `;

                clickEvents();
            break;
            case "activity":
                display.innerHTML = `
                    <h1 class="header">Activity</h1>

                    <div class="stats stats-vertical md:stats-horizontal w-full">
                        <div class="stat place-items-center">
                            <div class="stat-title">Lifetime Points</div>
                            <div class="stat-value">9,634</div>
                            <div class="stat-desc">From 2023-Present</div>
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

                    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide flex gap-1"><svg width="20px" stroke-width="1.5" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M9 6L20 6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 5.79999L4.60002 6.59998L6.60001 4.59999" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 11.8L4.60002 12.6L6.60001 10.6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.80002 17.8L4.60002 18.6L6.60001 16.6" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 12L20 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 18L20 18" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Recent Activities</li>

                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                            <div><b>Completed</b> "Attend Health Workshop"</div>
                            <div class="text-success font-bold">+100 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                                <div><b>Joined</b> "Community Health Forum"</div>
                                <div class="text-success font-bold">+50 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                                <div><b>Redeemed</b> "$10 Chipotle Gift Card"</div>
                                <div class="text-error font-bold">-1000 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                                <div><b>Registered for</b> "Nutrition Webinar"</div>
                                <div class="text-success font-bold">+75 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                                <div><b>Completed</b> "Financial Literacy Course"</div>
                                <div class="text-success font-bold">+150 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                                <div><b>Participated in</b> "Mental Health Awareness Campaign"</div>
                                <div class="text-success font-bold">+200 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                                <div><b>Registered for</b> "Nutrition Webinar"</div>
                                <div class="text-success font-bold">+75 Points</div>
                            </div>
                        </li>
                        <li class="list-row">
                            <div class="list-item flex justify-between items-center">
                                <div><b>Completed</b> "Financial Literacy Course"</div>
                                <div class="text-success font-bold">+150 Points</div>
                            </div>
                        </li>

                    </ul>

                    <a class="btn btn-primary text-white font-bold my-4 w-full clickevent">Load More</a>
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
                    <h1 class="header">My Communities</h1>
                    
                        <div class="grid xl:grid-cols-2 gap-6 w-full p-4">
                        
                        <div class="indicator w-full">
                            <span class="indicator-item badge badge-secondary mx-10 hover:cursor-pointer clickevent">5 New Posts</span>
                            <article class="article-card clickevent w-full">
                                <div class="tags">
                                    <span class="tag badge-primary">Policy</span>
                                </div>

                                <h3 class="header">Healthcare Advocate Community</h3>
                                <i class="text-muted text-sm">Members: 82</i>
                                <p class="y-2">A space to discuss healthcare initiatives and resources.</p>
                                
                                <div class="flex items-center mt-2 gap-2">
                                    <button class="btn btn-sm btn-primary clickevent w-30">View Community</button>
                                    <div class="avatar-group -space-x-4">
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/04/KMG-23-300x300.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/04/Untitled-design-12-300x300.png" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/06/Heidi-Gider-300x300.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar avatar-placeholder">
                                            <div class="bg-neutral text-neutral-content w-8">
                                            <span class="font-bold">+79</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="ml-2 opacity-60">Joined on March 15, 2023</span>
                                </div>
                            </article>
                        </div>

                        <div class="indicator w-full">
                            <span class="indicator-item badge badge-secondary mx-10 hover:cursor-pointer clickevent">3 New Posts</span>
                            <article class="article-card clickevent w-full">
                                <div class="tags">
                                    <span class="tag badge-error">Career</span>
                                </div>

                                <h3 class="header">Government & Social Services Community</h3>
                                <i class="text-muted text-sm">Members: 50</i>
                                <p class="y-2"> A space to discuss government and social services resources.</p>

                                <div class="flex items-center mt-2 gap-2">
                                    <button class="btn btn-sm btn-primary clickevent w-30">View Community</button>
                                    <div class="avatar-group -space-x-4">
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/04/KMG-23-300x300.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/04/Untitled-design-12-300x300.png" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/06/Heidi-Gider-300x300.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar avatar-placeholder">
                                            <div class="bg-neutral text-neutral-content w-8">
                                            <span class="font-bold">+47</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class=" opacity-60">Joined on March 15, 2023</span>
                                </div>
                            </article>
                        </div>

                        <div class="indicator w-full">
                            <span class="indicator-item badge badge-secondary mx-10 hover:cursor-pointer clickevent">1 New Posts</span>
                            <article class="article-card clickevent w-full">
                                <div class="tags">
                                    <span class="tag badge-accent">Local</span>
                                </div>

                                <h3 class="header">Illinois Community</h3>
                                <i class="text-muted text-sm">Members: 21</i>
                                <p class="y-2">A space to discuss local Illinois issues and resources.</p>

                                <div class="flex items-center mt-2 gap-2">
                                    <button class="btn btn-sm btn-primary clickevent w-30">View Community</button>
                                    <div class="avatar-group -space-x-4">
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/04/KMG-23-300x300.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/04/Untitled-design-12-300x300.png" />
                                            </div>
                                        </div>
                                        <div class="avatar">
                                            <div class="w-8">
                                            <img src="https://younginvincibles.org/wp-content/uploads/2025/06/Heidi-Gider-300x300.jpg" />
                                            </div>
                                        </div>
                                        <div class="avatar avatar-placeholder">
                                            <div class="bg-neutral text-neutral-content w-8">
                                            <span class="font-bold">+19</span>
                                            </div>
                                        </div>
                                    </div>
                                    <span class=" opacity-60">Joined on March 15, 2023</span>
                                </div>
                            </article>
                        </div>
                        
                    </div>
                `;
                clickEvents();
            break;
            case "leaderboards":
                display.innerHTML = `
                    <div class="flex items-center gap-4 mb-4">
                    <ul class="menu menu-horizontal clickevent bg-primary card font-bold text-white rounded-box shadow-md">
                    <li><a class="bg-accent/60">Season</a></li>
                    <li><a>Yearly</a></li>
                    <li><a>All Time</a></li>
                    </ul>

                    <label class="input input-lg">
                    <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="2.5"
                        fill="none"
                        stroke="currentColor"
                        >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input type="search" required placeholder="Search Name" />
                    </label>
                    </div>

                    <h1 class="header flex gap-1"><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.74534 4H17.3132C17.3132 4 16.4326 17.2571 12.0293 17.2571C9.87826 17.2571 8.56786 14.0935 7.79011 10.8571C6.97574 7.46844 6.74534 4 6.74534 4Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.3132 4C17.3132 4 18.2344 3.01733 19 2.99999C20.5 2.96603 20.7773 4 20.7773 4C21.0709 4.60953 21.3057 6.19429 19.8967 7.65715C18.4876 9.12 16.9103 10.4 16.2684 10.8571" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.74527 4.00001C6.74527 4.00001 5.78547 3.00614 4.99995 3.00001C3.49995 2.9883 3.22264 4.00001 3.22264 4.00001C2.92908 4.60953 2.69424 6.19429 4.1033 7.65715C5.51235 9.12001 7.14823 10.4 7.79004 10.8572" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.50662 20C8.50662 18.1714 12.0292 17.2571 12.0292 17.2571C12.0292 17.2571 15.5519 18.1714 15.5519 20H8.50662Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>Fall Seasonal Leaderboard</h1>

                    <div class="overflow-x-auto">
                        <table class="table table-zebra">
                            <thead>
                            <tr class="table-header">
                                <th>Rank #</th>
                                <th>Name</th>
                                <th>Points</th>
                                <th>Title</th>
                                <th>Location</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="table-row clickevent">
                                <th>1</th>
                                <td class="font-bold text-violet-500">George D.</td>
                                <td>6,983</td>
                                <td class="font-bold text-violet-500">Platinum Invincible</td>
                                <td>New Jersey</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>2</th>
                                <td class="font-bold text-yellow-500">Drew U.</td>
                                <td>6,539</td>
                                <td class="font-bold text-yellow-500">Golden Invincible</td>
                                <td>Illinois</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>3</th>
                                <td class="font-bold text-yellow-500">Dave J.</td>
                                <td>6,014</td>
                                <td class="font-bold text-yellow-500">Golden Invincible</td>
                                <td>Illinois</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>4</th>
                                <td class="font-bold text-yellow-500">Brett W.</td>
                                <td>5,550</td>
                                <td class="font-bold text-yellow-500">Golden Invincible</td>
                                <td>Illinois</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>5</th>
                                <td class="font-bold text-yellow-500">Johnathan D.</td>
                                <td>4,633</td>
                                <td class="font-bold text-yellow-500">Golden Invincible</td>
                                <td>Illinois</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>6</th>
                                <td class="font-bold text-sky-400">Collen L.</td>
                                <td>4,424</td>
                                <td class="font-bold text-sky-400">Silver Advocate</td>
                                <td>Illinois</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>7</th>
                                <td class="font-bold text-sky-400">Hakan D.</td>
                                <td>4,245</td>
                                <td class="font-bold text-sky-400">Silver Advocate</td>
                                <td>Illinois</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>8</th>
                                <td class="font-bold text-sky-400">Dylan D.</td>
                                <td>4,128</td>
                                <td class="font-bold text-sky-400">Silver Advocate</td>
                                <td>Illinois</td>
                            </tr>
                            <tr class="table-row clickevent">
                                <th>9</th>
                                <td class="font-bold text-sky-400">Malique M.</td>
                                <td>4,092</td>
                                <td class="font-bold text-sky-400">Silver Advocate</td>
                                <td>Illinois</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <a class="btn btn-primary text-white font-bold my-4 w-full clickevent">Load More</a>
                `;
                clickEvents();
            break;
            case "rewards":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Rewards</h1>

                    <div class="grid md:grid-cols-3 gap-6 w-full p-2">
                        
                        <div class="article-card bg-base-100 shadow p-4 w-full h-full clickevent">
                            <h3 class="header pb-2">$10 Chipotle Gift Card - 1,000 Points</h3>
                            <div class="flex items-center gap-4">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/chipotle-mexican-grill-logo-png-transparent.png" alt="Chipotle Logo" class="size-24 rounded-full" />
                            <p class="pt-0 text-sm opacity-60">Redeem your points for a $10 Chipotle gift card!</p>
                            </div>
                            <div class="flex justify-center mt-4 w-full">
                                <button class="btn btn-primary w-30 font-bold clickevent">Redeem</button>
                            </div>
                        </div>

                        <div class="article-card bg-base-100 shadow p-4 w-full h-full clickevent">
                            <h3 class="header pb-2">$15 Amazon Gift Card - 1,500 Points</h3>
                            <div class="flex items-center gap-4">
                            <img src="https://icon2.cleanpng.com/20180803/ubx/5ba055fe0b3b79a8f55892cc8186c6b6.webp" class="size-24 rounded-full" />
                            <p class="pt-0 text-sm opacity-60">Redeem your points for a $15 Amazon gift card!</p>
                            </div>
                            <div class="flex justify-center mt-4 w-full">
                                <button class="btn btn-primary w-30 font-bold clickevent">Redeem</button>
                            </div>
                        </div>

                        <div class="article-card bg-base-100 shadow p-4 w-full h-full clickevent">
                            <h3 class="header pb-2">$20 Starbucks Gift Card - 2,000 Points</h3>
                            <div class="flex items-center gap-4">
                            <img src="https://www.citypng.com/public/uploads/preview/hd-starbucks-circle-woman-logo-png-701751694778942nj9szlwtvw.png?v=2025081705" class="size-24 rounded-full" />
                            <p class="pt-0 text-sm opacity-60">Redeem your points for a $20 Starbucks gift card!</p>
                            </div>
                            <div class="flex justify-center mt-4 w-full">
                                <button class="btn btn-primary w-30 font-bold clickevent">Redeem</button>
                            </div>
                        </div>
                    </div>

                    <a class="btn btn-primary text-white font-bold my-4 w-full clickevent">Load More</a>
                `;

                clickEvents();
            break;
            default:
                showToast("Sorry! Content is not currently included in this Demo.", "bg-error");
        }
    }
});