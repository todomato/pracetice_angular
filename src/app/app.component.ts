import { Component } from '@angular/core';

// constant
import { stationList} from './station-list.const';

// decorator
@Component({
  // �κ�metadata ���~���
  // CSS ��ܾ�
  selector: 'app-root',
  // Template �ɮצ�m
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  list = stationList;

  /**
   * �j�w�e�������u�W�١v���
   *
   * memberof AppComponent
   */
  name = '';

  /**
   * �j�w�e�������u���e�v���
   *
   * memberof AppComponent
   */
  content = '';
}
