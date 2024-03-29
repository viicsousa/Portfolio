import { useState, useEffect } from "react";
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Loading from "@/components/Loading";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Portfolio () {
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const fetchData = async () => {
      await new Promise (resolve => setTimeout(resolve, 2000));
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
  <>
    {loading ? <Loading/> : (
      <>
    <NavBar/>
    <About/>
    <Resume/>
    <Projects/>
    <Contact/>
      </>
    )}
    
  </>
  )
}