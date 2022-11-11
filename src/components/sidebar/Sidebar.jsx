import "./Sidebar.css"

export const Sidebar = () => {
    return (
<>
<div className="sidebar_component">
    <div className="top">
        <span className="logo">prabhatadmin</span>
    </div>
    <hr/>
    <div className="center">
        <ul>
            <p className="title">Main</p>
            <li>
                <span>Dasboard</span>
            </li>
            <li>
                <span>Dasboard</span>
            </li>
            <p className="title">User</p>
            <li>
                <span>Logout</span>
            </li>
        </ul>
    </div>
    <div className="bottom">
        <div className="colorchanger"></div>
        <div className="colorchanger"></div>
    </div>
</div>
</>
    )
}