
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
      radio1.dispatchEvent(new MouseEvent("click", { bubbles: true}));
    });
    expect(container).toMatchSnapshot();
    act(()=>{
      radio2.dispatchEvent(new MouseEvent("Click", {bubbles: true}));
    })
    expect(container).toMatchSnapshot();


    
})
