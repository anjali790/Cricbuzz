import "./Navbar.css"
export const Navbar = () => {
    return (
        <>
        <div className="navbar">
             <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search.."/>
                </div>
                <div className="items">
                    <div className="item">
                        English
                    </div>
                    <div className="item">
                        Theme
                    </div>
                    <div className="item">
                        Notification
                    </div>
                    <div className="item">
                        Menu
                    </div>
                  <div className="item">
                        <img src="data:image/jpeg;base64,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" 
                        alt="img"
                        className="profile_image" />
                    </div>
                </div>
             </div>
        </div>
        </>
    )
}