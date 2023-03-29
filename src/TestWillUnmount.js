import { useEffect, useState } from "react";
import { First } from "react-bootstrap/esm/PageItem";

export default function TestWillUnMount() {
  const [isLogin, setIsLogin] = useState(false);

  return <>{isLogin ? <NewPage /> : <FirstPage setIsLogin={setIsLogin} />}</>;
}

function FirstPage({ setIsLogin }) {
  useEffect(() => {
    const timeoutId = setInterval(() => {
      console.log("Timeout berhasil tampil");
    }, 3000);

    return () => clearInterval(timeoutId);
  }, []);

  return <button onClick={() => setIsLogin(true)}>Login</button>;
}

function NewPage() {
  return <h1>This is new pages!</h1>;
}
