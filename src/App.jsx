import Student from "./Student.jsx";

function App() {
  return(
    <>
      <Student name="Archie Bandini" age={28} isStudent={true}/>
      <Student name="Cantika Debby" age={27} isStudent={false}/>
      <Student name="Lazuardi Edo" age={24} isStudent={true}/>
      <Student name="Acarya Mordekhai" age={29} isStudent={false}/>
      <Student name="Ekhi"/>
    </>
  );
}

export default App
