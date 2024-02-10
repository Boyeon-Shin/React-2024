import "./Header.css";
const Header = () => {
    return (
        <div className="Header">
            <h2> Todo List </h2>
            <h4> 오늘의 날짜 📅</h4>
            <h1>{new Date().toDateString()} </h1>
        </div>
    )
};
export default Header;
