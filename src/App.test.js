
import { fireEvent } from "@testing-library/dom";
import {render, unmountComponentAtNode} from "react-dom";
import {act} from "react-dom/test-utils"
import Radio from './radio'

let container = null;

beforeEach(()=>{
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(()=>{
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("changes color when clicked", ()=>{
    act(()=>{
      render(<Radio />, container)
    });
    expect(container.textContent).toBe("text");
    const radio1 = document.querySelector("#rad1");
    const radio2 = document.querySelector("#rad2");
    
    act(()=>{
      fireEvent.click(radio1)
    });
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();

    act(()=>{ 
      fireEvent.click(radio2)
    });
    expect(radio1).not.toBeChecked();
    expect(radio2).toBeChecked();  
})
