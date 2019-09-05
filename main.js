var userManager = {

    data: ['Beavis', 'Butthead', 'Cartman', 'Mark', 'Bob',],

    btnFind: document.createElement('button'),
    btnList: document.createElement('button'),
    btnClear: document.createElement('button'),

    findUser: function (names, string) {
        var li = document.createElement('li');
        var span = document.createElement('span');

        if (names.indexOf(string.value) !== -1) {
            setTimeout(() => {
                span.innerHTML += 'Имя есть в списке';
                blockAlert.append(span);
            }, 0);
            return;
        } else {
            setTimeout(() => {
                span.innerHTML += 'Имя добавлено';
                blockAlert.append(span);
                li.innerHTML += string.value;
                ul.appendChild(li);
                names.push(string.value);
                return;
            }, 0)
        };
    },
    listUser: function (names) {
        ul.style.listStyle = 'none';
        for (var i of names) {
            var li = document.createElement('li');
            li.innerHTML = i;
            ul.appendChild(li);
        }
        block.append(ul);
    },
    clearBlock: function (string) {
        ul.remove();
        string.value = '';
    },
    init: function (data, inputName) {

        body = document.querySelector('body');
        block = document.createElement('div');
        blockInput = document.createElement('div');
        blockButtons = document.createElement('div');
        blockAlert = document.createElement('div');
        inputName = document.createElement('input');
        ul = document.createElement('ul');

        blockButtons.append(this.btnFind);
        blockButtons.append(this.btnList);
        blockButtons.append(this.btnClear);

        this.btnFind.textContent = 'Find';
        this.btnList.textContent = 'Show List';
        this.btnClear.textContent = 'Clear';

        blockInput.append(inputName);
        blockInput.append(block);

        block.appendChild(blockAlert);
        body.append(blockButtons);
        body.append(blockInput);

        this.btnFind.onclick = () => {
            blockAlert.innerHTML = '';
            this.findUser(data, inputName);
        };

        this.btnList.onclick = () => {
            this.listUser(data);
        };

        this.btnClear.onclick = () => {
            this.clearBlock(inputName);
        };
    },
};
userManager.init(userManager.data, userManager.inputName);
