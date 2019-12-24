import { Component } from '@angular/core';



// constant
import { stationList} from './station-list.const';
import { Message } from './message';

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

  messages: Message[] = [];

  // �s�W�d��
  addMessage(): void {
 // ���b�A�קK�W�٩Τ��e�O�ŭȮɤ]�i�H�d��
    if (
      !this.name.trim() ||
      !this.content.trim()
    ) {
      return;
    }

    // �ΦW�ٸ򤺮e���ͤ@�ӯd������ƪ���
    const message = new Message(this.name, this.content);

    // �N�d������ƪ����i�e����
    this.messages.push(message);

    // �M�Ť��e
    this.content = '';
  }
}
