import Login from './Login.jsx';
import Profile from './profile.jsx';
function Navbar() {
    return (
        <>
        <h1>Navbar</h1>
        <Profile name ={"krishna"} age={20} />
        <Login name ={"krishna"} age={20} />
        </>
    );
}
export default Navbar;