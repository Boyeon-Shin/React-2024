// import Button from "../components/Button";
// import Header from "../components/Header"
import Editor from "../components/Editor";

const Home = () => {
    return (
        <div>
            <Editor
            initData={{
                date: new Date().getTime(),
                emotionId: 1,
                content:"이전에 작성했던 일기",
            }}
            onSubmit={() => alert("작성 완료")}/>
        </div>
    );
};
export default Home;