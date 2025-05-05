export function displaySidebar() {
    const sidebar = document.querySelector("#sidebar")
    
    sidebar.innerHTML = `            
    <div class="sidebar__controls">
        <button class="sidebar__control sidebar__control--add-task">Add Task</button>
        <div class="sidebar__control">
            <a class="sidebar__control sidebar__control--inbox-page" href="/inbox.html">Inbox</a>
        </div>        
        <div class="sidebar__projects">
            <div class="sidebar__projects">
                <a href="/projects.html">My Projects</a>
                <button class="sidebar__projects sidebar__projects--add-project">+</button>
            </div>
        </div>
    </div>`
}