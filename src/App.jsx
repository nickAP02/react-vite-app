import VoiceRecord from "./components/template/VoiceRecord";
const data ={
    'audio':'./assets/speech-test.mp3',
    'attr':'blue'
}
export default function App(){
    return (
    <>
    <div className="mr-10 ml-10 mt-10">

    {/* <Dashboard /> */}
    {/* <Form /> */}
    {/* <Login /> */}
        {/* <ListView /> */}
        <VoiceRecord />
    </div>
    </>);
}