document.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll(".tab-button");
    const display = document.getElementById("display");

    updateDisplay("home"); //Begin at home tab

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

    // Update the display based on the tab
    function updateDisplay(tabName) {
        switch (tabName) {
            case "home":
                display.innerHTML = `
                <h1 class="text-xl font-bold my-4">Home</h1>

                    <div class="hero">
                    <div class="hero-content flex-col lg:flex-row">
                        <img
                        src="images/YI_Logo.jpeg"
                        class="max-w-sm card shadow-2xl" />
                        <div>
                        <h1 class="text-5xl font-bold">Welcome to Visible Invincibles!</h1>
                        <p class="py-6">
                            Amplifying the voices of young adults in the political process and expanding economic opportunity for our generation.
                        </p>
                        <button id="go-button" class="btn-form">Explore Here</button>
                        </div>
                    </div>
                    </div>
                `;

                // Button to Dashboard page.
                const goButton = document.getElementById("go-button");
                goButton.addEventListener("click", () => {
                    updateDisplay("dashboard");
                });

            break;
            case "dashboard":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Dashboard</h1>
                    
                `;

            break;
            case "profile":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">User Profile</h1>
                    
                `;
            break;

            case "alerts":
                display.innerHTML = `
                    <h1 class="text-xl font-bold my-4">Alerts</h1>
                    <p class="py-6">You have no new alerts.</p>
                `;
            break;
            default:
                showToast("Content is not currently included in this Demo.", "bg-error");
        }
    }
});