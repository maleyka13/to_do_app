const mess = document.querySelector(".message");
const btn = document.querySelector("button");
const content = document.querySelector(".content");

btn.onclick = () => {
  let msg = mess.value;
  const newMsg = document.createElement("div");
  const btns = document.createElement("div");
  const edit = document.createElement("button");
  const dlt = document.createElement("button");
  const date = document.createElement("span");
  const m = document.createElement("p");
  newMsg.classList.add("newMessage");
  m.innerText = msg;
  m.classList.add("text");
  btns.classList.add("buttons");
  edit.innerText = "Edit";
  dlt.innerText = "Delete";
  edit.classList.add("btn");
  dlt.classList.add("btn");
  date.style.cssText = `
  font-size:12px
  `;
  d = Date.now();
  d = new Date(d);
  d =
    (d.getHours() > 12 ? d.getHours() - 12 : d.getHours()) +
    ":" +
    d.getMinutes() +
    " " +
    (d.getHours() >= 12 ? "PM" : "AM");

  date.innerText = d;
  btns.append(date, edit, dlt);
  newMsg.append(m, btns);
  content.append(newMsg);
  mess.value = "";
  dlt.onclick = () => {
    dlt.parentElement.parentElement.remove();
  };

  edit.addEventListener("click", () => {
    let edit_text =
      edit.parentElement.parentElement.getElementsByTagName("p")[0].innerText;
    mess.value = edit_text;
    btn.onclick = () => {
      edit.parentElement.parentElement.getElementsByTagName("p")[0].innerText =
        mess.value;
    };
  });
};
