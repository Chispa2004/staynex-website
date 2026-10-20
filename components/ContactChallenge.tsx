"use client";
import Script from "next/script";
import {useEffect,useRef,useState} from "react";
type Widget={render:(node:HTMLElement,options:Record<string,unknown>)=>string;remove:(id:string)=>void};
declare global {interface Window {turnstile?:Widget}}
export function ContactChallenge({siteKey,language,attempt,onToken,onError}:{siteKey:string;language:string;attempt:number;onToken:(token:string)=>void;onError:()=>void}) {
  const node=useRef<HTMLDivElement>(null);const [loaded,setLoaded]=useState(false);
  useEffect(()=>{
    if(!loaded||!node.current||!window.turnstile)return;
    const widget=window.turnstile;
    const id=widget.render(node.current,{sitekey:siteKey,action:"presentation",language,size:"flexible",callback:onToken,
      "expired-callback":()=>onToken(""),"error-callback":()=>{onToken("");onError();}});
    return ()=>{widget.remove(id);onToken("");};
  },[loaded,siteKey,language,attempt,onToken,onError]);
  return <><Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={()=>setLoaded(true)} onError={onError}/><div ref={node}/></>;
}
