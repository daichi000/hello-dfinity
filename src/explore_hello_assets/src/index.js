import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as explore_hello_idl, canisterId as explore_hello_id } from 'dfx-generated/explore_hello';

const agent = new HttpAgent();
const explore_hello = Actor.createActor(explore_hello_idl, { agent, canisterId: explore_hello_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  const greeting = await explore_hello.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
