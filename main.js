const userManager = {
  data: ["Beavis", "Butthead", "Cartman", "Mark", "Bob"],

  btnFind: document.createElement("button"),
  btnList: document.createElement("button"),
  btnClear: document.createElement("button"),

  findUser: function(names, string) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    if (names.indexOf(string.value) !== -1) {
      setTimeout(() => {
        span.innerHTML += "Имя есть в списке";
        blockAlert.append(span);
        string.value = "";
      }, 0);
      return;
    } else {
      setTimeout(() => {
        span.innerHTML += "Имя добавлено";
        blockAlert.append(span);
        names.push(string.value);
        li.innerHTML += string.value;
        ul.appendChild(li);
        string.value = "";
        return;
      }, 0);
    }
  },
  listUser: function(names, string) {
    ul.style.listStyle = "none";
    for (let i of names) {
      const li = document.createElement("li");
      li.innerHTML = i;
      ul.append(li);
    }
    block.append(ul);
  },
  clearBlock: function(string) {
    ul.innerHTML = "";
    string.value = "";
  },
  init: function(data, inputName) {
    body = document.querySelector("body");
    block = document.createElement("div");
    blockInput = document.createElement("div");
    blockButtons = document.createElement("div");
    blockAlert = document.createElement("div");
    inputName = document.createElement("input");
    ul = document.createElement("ul");

    blockButtons.append(this.btnFind);
    blockButtons.append(this.btnList);
    blockButtons.append(this.btnClear);

    this.btnFind.textContent = "Find";
    this.btnList.textContent = "Show List";
    this.btnClear.textContent = "Clear";

    blockInput.append(inputName);
    blockInput.append(block);

    block.appendChild(blockAlert);
    body.append(blockButtons);
    body.append(blockInput);

    this.btnFind.onclick = () => {
      blockAlert.innerHTML = "";
      this.findUser(data, inputName);
    };

    this.btnList.onclick = () => {
      this.clearBlock(inputName);

      setTimeout(() => {
        this.listUser(data, inputName);
      }, 100);
    };

    this.btnClear.onclick = () => {
      this.clearBlock(inputName);
    };
  }
};
userManager.init(userManager.data, userManager.inputName);
