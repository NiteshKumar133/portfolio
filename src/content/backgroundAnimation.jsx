import React,{useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import options_for_particles from "./options";
export default function Stars() {
  const particlesInit = useCallback(async (engine)=>{
    await loadFull(engine);
  },[])
  const particlesLoaded = useCallback(async (container)=>{
    await container
  },[])
  const particleStyles = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1, 
  };

  return (
    <div style={particleStyles}>
            <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options_for_particles}
    />
    </div>
  );
}         
