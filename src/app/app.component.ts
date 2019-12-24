import { Component } from '@angular/core';



// constant
import { stationList} from './station-list.const';
import { Message } from './message';

// decorator
@Component({
  // 統稱metadata 中繼資料
  // CSS 選擇器
  selector: 'app-root',

  // Template 檔案位置
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  list = stationList;

  /**
   * 綁定畫面中的「名稱」欄位
   *
   * memberof AppComponent
   */
  name = '';

  /**
   * 綁定畫面中的「內容」欄位
   *
   * memberof AppComponent
   */
  content = '';

  messages: Message[] = [];

  // 新增留言
  addMessage(): void {
 // 防呆，避免名稱或內容是空值時也可以留言
    if (
      !this.name.trim() ||
      !this.content.trim()
    ) {
      return;
    }

    // 用名稱跟內容產生一個留言的資料物件
    const message = new Message(this.name, this.content);

    // 將留言的資料物件放進容器裡
    this.messages.push(message);

    // 清空內容
    this.content = '';
  }
}
