import { Component } from '@angular/core';

// constant
import { stationList} from './station-list.const';

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
}
