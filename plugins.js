var mkPlugins = {
  modelPlugins: function (obj) {
    this.width = obj.width || 300;
    this.height = obj.height || 150;
    this.setModel = function () {
      // 创建大框
      this.bigDom = this.createDom('div');
      this.bigDom.classList.add('bigDom');
      if (!isNaN(Number(this.width)) && !isNaN(Number(this.height))) {
        this.bigDom.style.cssText = 'min-width:' + this.width + 'px;min-height:' + this.height + 'px';
      } else if (this.width.toString().indexOf('%') != -1 && this.height.toString().indexOf('%') != -1) {
        this.bigDom.style.cssText = 'min-width:' + this.width.slice(0, 2) / 100 * window.innerWidth + 'px;min-height:' + this.height.slice(0, 2) / 100 * window.innerHeight + 'px';
      } else {
        this.bigDom.style.cssText = 'min-width:300px;min-height:150px';
      }

      // 创建title
      this.title = this.createDom('h3');
      this.title.classList.add('model-title')
      this.title.innerHTML = obj.title;
      this.bigDom.appendChild(this.title);

      // 创建内容
      this.content = this.createDom('div');
      this.content.classList.add('model-content');
      this.content.innerHTML = obj.content;
      this.bigDom.appendChild(this.content);

      // 创建底部
      this.modelBot = this.createDom('div');
      this.modelBot.classList.add('model-bottom')

      // 创建确定和取消按钮
      this.successBtn = this.createDom('input');
      this.cancelBtn = this.createDom('input');
      this.successBtn.type = this.cancelBtn.type = 'button';
      this.successBtn.value = obj.sure || '确定';
      this.cancelBtn.value = obj.cancel || '取消';

      this.successBtn.onclick = function () {
        document.body.removeChild(this.parentNode.parentNode.parentNode);
        (obj.successHandle.bind(this))();
      }
      this.cancelBtn.onclick = function () {
        document.body.removeChild(this.parentNode.parentNode.parentNode);
        (obj.cancelHandle.bind(this))();
      }

      this.modelBot.appendChild(this.successBtn);
      this.modelBot.appendChild(this.cancelBtn);
      this.bigDom.appendChild(this.modelBot);
      this.superDom = this.createDom('div');
      this.superDom.style.cssText = 'width:' + window.innerWidth + 'px;height:' + window.innerHeight + 'px';
      this.superDom.classList.add('superDom');
      this.superDom.appendChild(this.bigDom);
      document.body.appendChild(this.superDom);
    },
      this.createDom = function (dom) {
        return document.createElement(dom);
      }
  }
}




